import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaTree, FaCouch, FaStar, FaArrowUp } from "react-icons/fa";
import "./HomePage.css"; // Custom CSS for styling

const Home = () => {
  const [randomQuote, setRandomQuote] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Move quotes inside useEffect to avoid dependency issue
  useEffect(() => {
    const quotes = [
      "Amazing quality!",
      "Beautiful designs!",
      "Great service!",
      "Sustainable and stylish!",
      "Timeless pieces!"
    ];

    // Generate a random quote on component mount
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // No need to include 'quotes' in dependency array

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="hero-content">
                <h1 className="hero-title">
                  The Beauty of <span>Natural</span>
                </h1>
                <p className="hero-text">
                  Explore premium furniture designed to enhance your living space with sustainable and stylish designs.
                </p>
                <div className="hero-buttons">
                  <Button href="/shop" className="btn-primary">
                    Shop Now
                  </Button>
                  <Button href="/about" className="btn-outline">
                    Learn more
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <img
                src="images/hero-furniture.png"
                className="hero-image img-fluid"
                alt="Natural Wood Furniture"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <section className="features py-5">
        <Container>
          <Row>
            <Col md={3} sm={6} className="text-center mb-4">
              <FaTree className="icon" />
              <h5>Sustainable Materials</h5>
              <p>Eco-friendly wood sourced responsibly.</p>
            </Col>
            <Col md={3} sm={6} className="text-center mb-4">
              <FaCouch className="icon" />
              <h5>Comfort & Style</h5>
              <p>Furniture designed for everyday luxury.</p>
            </Col>
            <Col md={3} sm={6} className="text-center mb-4">
              <FaStar className="icon" />
              <h5>Quality Guaranteed</h5>
              <p>Built to last with premium craftsmanship.</p>
            </Col>
            <Col md={3} sm={6} className="text-center mb-4">
              <FaArrowUp className="icon" />
              <h5>Modern Designs</h5>
              <p>Stay ahead with contemporary styles.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-5">
        <Container>
          <h2 className="section-title">Featured Products</h2>
          <Row>
            {[...Array(6)].map((_, index) => (
              <Col md={4} sm={6} key={index} className="mb-4">
                <Card className="product-card">
                  <Card.Img
                    variant="top"
                    src={`images/product-${index + 1}.png`}
                    alt={`Product ${index + 1}`}
                  />
                  <Card.Body>
                    <Card.Title className="product-title">Product Name {index + 1}</Card.Title>
                    <Card.Text className="product-price">$99.99</Card.Text>
                    <Button href="/product-details" className="btn-primary">
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Random Testimonial */}
      <section className="testimonials py-5">
        <Container>
          <h2 className="section-title">What Our Customers Say</h2>
          <Row>
            <Col md={12} className="text-center">
              <Card className="testimonial-card">
                <Card.Body>
                  <blockquote className="testimonial-quote">{randomQuote}</blockquote>
                  <h5 className="testimonial-author">- Valued Customer</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Subscription */}
      <section className="newsletter py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h2 className="newsletter-title">Stay Updated!</h2>
              <p>Subscribe to our newsletter for the latest designs and offers.</p>
            </Col>
            <Col md={4}>
              <Form>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="mb-2"
                />
                <Button className="btn-primary" type="submit">
                  Subscribe
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Scroll to Top */}
      {showScrollButton && (
        <Button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </Button>
      )}

      {/* Footer */}
      <footer className="footer py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>About Us</h5>
              <p>
                Bringing you premium and sustainable furniture to create beautiful spaces that last a lifetime.
              </p>
            </Col>
            <Col md={6} className="text-end">
              <Button href="/contact" className="btn-outline">
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
