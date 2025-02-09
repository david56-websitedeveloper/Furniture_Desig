import React from 'react';

const About = () => (
  <div>
    {/* Hero Section */}
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>About Us</h1>
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
              <img src="images/couch.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Why Choose Us Section */}
    <div className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose Us</h2>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>

            <div className="row my-5">
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src="images/truck.svg" alt="" className="img-fluid" />
                  </div>
                  <h3>Fast & Free Shipping</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                    velit. Aliquam vulputate.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src="images/bag.svg" alt="" className="img-fluid" />
                  </div>
                  <h3>Easy to Shop</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                    velit. Aliquam vulputate.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src="images/support.svg" alt="" className="img-fluid" />
                  </div>
                  <h3>24/7 Support</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                    velit. Aliquam vulputate.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src="images/return.svg" alt="" className="img-fluid" />
                  </div>
                  <h3>Hassle Free Returns</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                    velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="img-wrap">
              <img src="images/why-choose-us-img.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Our Team Section */}
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title">Our Team</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src="images/person_1.jpg" className="img-fluid mb-5" alt="" />
            <h3>Lawson Arnold</h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src="images/person_2.jpg" className="img-fluid mb-5" alt="" />
            <h3>Jeremy Walker</h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src="images/person_3.jpg" className="img-fluid mb-5" alt="" />
            <h3>Patrik White</h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src="images/person_4.jpg" className="img-fluid mb-5" alt="" />
            <h3>Kathryn Ryan</h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Testimonial Section */}
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
              <div id="testimonial-nav">
                <span className="prev" data-controls="prev">
                  <span className="fa fa-chevron-left"></span>
                </span>
                <span className="next" data-controls="next">
                  <span className="fa fa-chevron-right"></span>
                </span>
              </div>

              <div className="testimonial-slider">
                <div className="item">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 mx-auto">
                      <div className="testimonial-block text-center">
                        <blockquote className="mb-5">
                          <p>
                            &ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;
                          </p>
                        </blockquote>

                        <div className="author-info">
                          <div className="author-pic">
                            <img
                              src="images/person-1.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <h3 className="font-weight-bold">Maria Jones</h3>
                          <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* More testimonial items can be added similarly */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Section */}
    <footer className="footer-section">
      <div className="container relative">
        <div className="sofa-img">
          <img src="images/sofa.png" alt="" className="img-fluid" />
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center">
                <span className="me-1">
                  <img src="images/envelope-outline.svg" alt="" className="img-fluid" />
                </span>
                <span>Subscribe to Newsletter</span>
              </h3>

              <form action="#" className="row g-3">
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
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
      </div>
    </footer>
  </div>
);

export default About;
