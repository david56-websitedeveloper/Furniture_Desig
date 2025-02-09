import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

const Cart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(5.0); // Default shipping fee

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);
  const subtotal = cart.reduce(
    (acc, product) => acc + parseFloat(product.price.slice(1)) * product.quantity,
    0
  ).toFixed(2);
  const finalPrice = (parseFloat(subtotal) + shipping - discount).toFixed(2);

  const handleIncreaseQuantity = (productId) => {
    const updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedCart = cart.map((product) =>
      product.id === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    if (coupon === 'DISCOUNT10') {
      setDiscount(0.1 * subtotal);
      setShipping(0);  // Free shipping when the coupon is applied
    }
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <div>
      <div className="cart-page">
        <div className="container">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty. <Link to="/">Go back to shop.</Link></p>
          ) : (
            <div className="cart-items">
              <div className="row">
                {cart.map((product) => (
                  <div key={product.id} className="col-md-4 col-lg-3 mb-4">
                    <div className="cart-item">
                      <img src={`images/${product.image}`} alt={product.name} className="img-fluid cart-item-image" />
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                      <div className="quantity-controls">
                        <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                        <span>{product.quantity}</span>
                        <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                      </div>
                      <button className="btn btn-danger mt-2" onClick={() => handleRemoveItem(product.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="cart-summary mt-4">
            <h3>Cart Summary</h3>
            <p>Total Products: {totalQuantity}</p>
            <p>Subtotal: ${subtotal}</p>
            <p>Shipping: ${shipping}</p>
            <p>Discount: ${discount.toFixed(2)}</p>
            <p>Total Price: ${finalPrice}</p>
            <form onSubmit={handleCouponSubmit}>
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
              />
              <button type="submit" className="btn btn-success">Apply Coupon</button>
            </form>
            <button onClick={handleClearCart} className="btn btn-danger mt-3">Clear Cart</button>
            <Link to="/" className="btn btn-secondary mt-2">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
