import React from "react";

const HeroSection = () => (
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>Services</h1>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <p>
              <button className="btn btn-secondary me-2">Shop Now</button>
              <button className="btn btn-white-outline">Explore</button>
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hero-img-wrap">
            <img src="images/couch.png" className="img-fluid" alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WhyChooseSection = () => (
  <div className="why-choose-section">
    <div className="container">
      <div className="row my-5">
        {["Fast & Free Shipping", "Easy to Shop", "24/7 Support", "Hassle Free Returns"].map((feature, index) => (
          <div key={index} className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="feature">
              <div className="icon">
                <img src={`images/${feature.toLowerCase().replace(" &", "").replace(" ", "-")}.svg`} alt="Feature" className="img-fluid" />
              </div>
              <h3>{feature}</h3>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProductSection = () => (
  <div className="product-section pt-0">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
          <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
          <p className="mb-4">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <p>
            <button className="btn">Explore</button>
          </p>
        </div>
        {["Nordic Chair", "Kruzo Aero Chair", "Ergonomic Chair"].map((title, index) => (
          <div key={index} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <div className="product-item">
              <img src={`images/product-${index + 1}.png`} className="img-fluid product-thumbnail" alt={title} />
              <h3 className="product-title">{title}</h3>
              <strong className="product-price">${(50 + index * 28).toFixed(2)}</strong>
              <span className="icon-cross">
                <img src="images/cross.svg" className="img-fluid" alt="Cross" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TestimonialSection = () => (
  <div className="testimonial-section before-footer-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 mx-auto text-center">
          <h2 className="section-title">Testimonials</h2>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="testimonial-slider-wrap text-center">
            <div className="testimonial-slider">
              {["Maria Jones", "John Doe", "Jane Smith"].map((author, index) => (
                <div key={index} className="item">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 mx-auto">
                      <div className="testimonial-block text-center">
                        <blockquote className="mb-5">
                          <p>
                            &ldquo;Donec facilisis quam ut purus rutrum
                            lobortis. Donec vitae odio quis nisl dapibus
                            malesuada. Nullam ac aliquet velit. Aliquam
                            vulputate velit imperdiet dolor tempor tristique.&rdquo;
                          </p>
                        </blockquote>

                        <div className="author-info">
                          <div className="author-pic">
                            <img src="images/person-1.png" alt={author} className="img-fluid" />
                          </div>
                          <h3 className="font-weight-bold">{author}</h3>
                          <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FooterSection = () => (
  <footer className="footer-section">
    <div className="container relative">
      <div className="sofa-img">
        <img src="images/sofa.png" alt="Sofa" className="img-fluid" />
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="subscription-form">
            <h3 className="d-flex align-items-center">
              <span className="me-1">
                <img src="images/envelope-outline.svg" alt="Email" className="img-fluid" />
              </span>
              <span>Subscribe to Newsletter</span>
            </h3>

            <form className="row g-3">
              <div className="col-auto">
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="col-auto">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="col-auto">
                <button className="btn btn-primary">
                  <span className="fa fa-paper-plane"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row g-5 mb-5">
        <div className="col-lg-4">
          <div className="mb-4 footer-logo-wrap">
            <span className="footer-logo">Furni<span>.</span></span>
          </div>
          <p className="mb-4">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
            vulputate velit imperdiet dolor tempor tristique. Pellentesque
            habitant
          </p>

          <ul className="list-unstyled custom-social">
            <li>
              <a href="./About.js">
                <span className="fa fa-brands fa-facebook-f"></span>
              </a>
            </li>
            <li>
              <a href="./Blog.js">
                <span className="fa fa-brands fa-twitter"></span>
              </a>
            </li>
            <li>
              <a href="./Cart.js">
                <span className="fa fa-brands fa-instagram"></span>
              </a>
            </li>
            <li>
              <a href="./Cart.js">
                <span className="fa fa-brands fa-linkedin"></span>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-8">
          <div className="row links-wrap">
            {["About us", "Services", "Blog", "Contact us"].map((link, index) => (
              <div key={index} className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>{link}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-top copyright">
        <div className="row pt-4">
          <div className="col-lg-6">
            <p className="mb-2 text-center text-lg-start">
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script>
              . All Rights Reserved. &mdash; Designed with love by{" "}
              <a href="https://untree.co">Untree.co</a> Distributed By{" "}
              <a href="https://themewagon.com">ThemeWagon</a>
            </p>
          </div>

          <div className="col-lg-6 text-center text-lg-end">
            <ul className="list-unstyled d-inline-flex ms-auto">
              <li className="me-4">
                <a href="./About.js">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="./Blog.js">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => (
  <div>
    <HeroSection />
    <WhyChooseSection />
    <ProductSection />
    <TestimonialSection />
    <FooterSection />
  </div>
);

export default App;
