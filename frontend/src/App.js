import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaShoppingCart, FaServicestack, FaBlog, FaPhone, FaInfoCircle } from 'react-icons/fa'; // Importing icons

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Cart from './pages/Cart';

// The main App component that includes the layout (Navbar, etc.)
const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">Home Design</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/" className="d-flex align-items-center">
                <FaHome className="me-2" style={{ fontSize: '1.25rem' }} />
                Home
              </Nav.Link>
              <Nav.Link href="/shop" className="d-flex align-items-center">
                <FaShoppingCart className="me-2" style={{ fontSize: '1.25rem' }} />
                Shop
              </Nav.Link>
              <Nav.Link href="/services" className="d-flex align-items-center">
                <FaServicestack className="me-2" style={{ fontSize: '1.25rem' }} />
                Services
              </Nav.Link>
              <Nav.Link href="/blog" className="d-flex align-items-center">
                <FaBlog className="me-2" style={{ fontSize: '1.25rem' }} />
                Blog
              </Nav.Link>
              <Nav.Link href="/contact" className="d-flex align-items-center">
                <FaPhone className="me-2" style={{ fontSize: '1.25rem' }} />
                Contact
              </Nav.Link>
              <Nav.Link href="/about" className="d-flex align-items-center">
                <FaInfoCircle className="me-2" style={{ fontSize: '1.25rem' }} />
                About
              </Nav.Link>
              <Nav.Link href="/cart" className="d-flex align-items-center">
                <FaShoppingCart className="me-2" style={{ fontSize: '1.25rem' }} />
                Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main content */}
      <Container className="container mt-4">
        {/* Routes setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </div>
  );
};

// Define the routes using createBrowserRouter
const router = createBrowserRouter([{
  path: "*", // This will catch all unmatched paths
  element: <App />, // Render the App component here
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
}]);

// Wrap your app with RouterProvider to use the custom router
const Root = () => {
  return <RouterProvider router={router} />; // Use RouterProvider here, not in App
};

// Render the app to the root element, rendering Root component (which includes RouterProvider)
ReactDOM.render(<Root />, document.getElementById('root'));

export default Root;
