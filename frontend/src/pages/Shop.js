import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import for routing
import './shopPage2.css';

// Helper function to generate random products
const generateProducts = (num) => {
  const products = [];
  for (let i = 1; i <= num; i++) {
    products.push({
      id: i,
      name: `Product ${i}`,
      price: `$${(Math.random() * 100 + 10).toFixed(2)}`, // Random price between 10 and 110
      image: `product-${i}.png`, // Ensure unique product images (e.g., product-1.png, product-1001.png)
      rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
      isNew: Math.random() < 0.2, // 20% chance it's a new product
      isOnSale: Math.random() < 0.3, // 30% chance it's on sale
      salePrice: Math.random() < 0.3 ? `$${(Math.random() * 100 + 10).toFixed(2)}` : undefined,
    });
  }
  return products;
};

const Shop = () => {
  const products = [...generateProducts(1000), ...generateProducts(1000)];  // Generate 2000 products dynamically (1000 + 1000)

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [showPopup, setShowPopup] = useState(false);
  const [addedItem, setAddedItem] = useState(null);
  const [priceLimit, setPriceLimit] = useState(100);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  // State for handling the uploaded image
  const [droppedImage, setDroppedImage] = useState(null);

  // Handle the image drop
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDroppedImage(reader.result); // Set the dropped image to state
      };
      reader.readAsDataURL(file);
    }
  };

  // Prevent default behavior for dragover event
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const productIndex = updatedCart.findIndex(item => item.id === product.id);

      if (productIndex > -1) {
        updatedCart[productIndex].quantity += 1;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });

    setAddedItem(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  // Filter products by price and search query
  const filterProducts = () => {
    return products.filter(
      (product) =>
        parseFloat(product.price.slice(1)) <= priceLimit &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Search function
  const searchProducts = () => {
    setCurrentPage(1); // Reset to first page when search is done
  };

  const sortProducts = (products) => {
    return products.sort((a, b) => {
      const priceA = parseFloat(a.price.slice(1));
      const priceB = parseFloat(b.price.slice(1));

      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });
  };

  // Paginate products
  const paginateProducts = (products) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
  };

  // Calculate total quantity and price of products in cart
  const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, product) => acc + parseFloat(product.price.slice(1)) * product.quantity, 
    0
  ).toFixed(2);

  return (
    <div>
      <div className="hero bg-primary text-white py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1 className='shop'>Shop</h1>
              <p>Total Products: {totalQuantity} - Total Price: ${totalPrice}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="filter-section py-5">
        <div className="container">
          <h3>Filter Products</h3>
          <div className="row">
            <div className="col-md-4 mb-3">
              <input
                type="number"
                value={priceLimit}
                onChange={(e) => setPriceLimit(Number(e.target.value))}
                className="form-control"
                placeholder="Enter price limit"
              />
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control"
                placeholder="Search by name"
              />
            </div>
            <div className="col-md-4 mb-3">
              <button
                className="btn btn-primary w-100"
                onClick={searchProducts} // Trigger search when button is clicked
              >
                Search
              </button>
            </div>
            <div className="col-md-4 mb-3">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="form-control"
              >
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Drag and Drop Image Section */}
      <div
        className="image-drop-area"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{ border: '2px dashed #ddd', padding: '20px', textAlign: 'center' }}
      >
        <p>Drop an image here to upload</p>
        {droppedImage && (
          <div>
            <h4>Uploaded Image</h4>
            <img src={droppedImage} alt="Dropped" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
        )}
      </div>

      <div className="product-section">
        <div className="container">
          <div className="row">
            {filterProducts().length === 0 ? (
              <p>No products match your filter criteria.</p>
            ) : (
              paginateProducts(sortProducts(filterProducts())).map((product) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
                  <div className="product-item">
                    {product.isNew && <span className="badge badge-new">New</span>}
                    {product.isOnSale && <span className="badge badge-sale">Sale</span>}
                    <img src={`images/${product.image}`} className="img-fluid product-thumbnail" alt={product.name} />
                    <h3 className="product-title">{product.name}</h3>
                    <strong className="product-price">
                      {product.isOnSale ? <del>{product.price}</del> : product.price}
                      {product.isOnSale && <span className="text-danger">{product.salePrice}</span>}
                    </strong>
                    <button className="btn btn-primary mt-2 w-100" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {showPopup && addedItem && (
        <div className="popup-notification">
          <p>{addedItem.name} has been added to your cart!</p>
        </div>
      )}

      <div className="text-center mt-5">
        <Link to="/cart" className="btn btn-success">Go to Cart</Link>
      </div>

      <div className="pagination">
        <button 
          className="btn btn-outline-primary" 
          disabled={currentPage === 1} 
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button 
          className="btn btn-outline-primary" 
          disabled={currentPage * itemsPerPage >= filterProducts().length} 
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <h5>About Us</h5>
              <p>We provide the best online shopping experience.</p>
            </div>
            <div className="col-md-4 text-center">
              <h5>Contact</h5>
              <p>Email: support@shop.com</p>
            </div>
            <div className="col-md-4 text-center">
              <h5>Follow Us</h5>
              <p>Facebook | Twitter | Instagram</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <form>
                <input type="email" className="form-control" placeholder="Subscribe to our newsletter" />
                <button type="submit" className="btn btn-primary mt-2">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
