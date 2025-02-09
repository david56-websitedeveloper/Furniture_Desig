import React from 'react';

const HeroSection = () => (
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>Blog</h1>
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
            <img src="images/couch.png" className="img-fluid" alt="Couch" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BlogSection = () => (
  <div className="blog-section">
    <div className="container">
      <div className="row">
        {[1, 2, 3, 4, 5, 6].map((post) => (
          <div className="col-12 col-sm-6 col-md-4 mb-5" key={post}>
            <div className="post-entry">
              <div className="post-thumbnail">
                <img
                  src={`images/post-${post % 3 + 1}.jpg`}
                  alt={`Post ${post}`}
                  className="img-fluid"
                />
              </div>
              <div className="post-content-entry">
                <h3>Post Title {post}</h3>
                <div className="meta">
                  <span>by Author Name</span>
                  <span>on Dec {10 + post}, 2021</span>
                </div>
              </div>
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
            <div id="testimonial-nav">
              <button className="prev">
                <span className="fa fa-chevron-left"></span>
              </button>
              <button className="next">
                <span className="fa fa-chevron-right"></span>
              </button>
            </div>
            <div className="testimonial-slider">
              {[1, 2, 3].map((item) => (
                <div className="item" key={item}>
                  <div className="row justify-content-center">
                    <div className="col-lg-8 mx-auto">
                      <div className="testimonial-block text-center">
                        <blockquote className="mb-5">
                          <p>
                            &ldquo;Donec facilisis quam ut purus rutrum
                            lobortis. Donec vitae odio quis nisl dapibus
                            malesuada.&rdquo;
                          </p>
                        </blockquote>
                        <div className="author-info">
                          <div className="author-pic">
                            <img
                              src="images/person-1.png"
                              alt="Author"
                              className="img-fluid"
                            />
                          </div>
                          <h3 className="font-weight-bold">Author {item}</h3>
                          <span className="position d-block mb-3">
                            CEO, Company {item}
                          </span>
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
              <img
                src="images/envelope-outline.svg"
                alt="Envelope"
                className="img-fluid me-1"
              />
              Subscribe to Newsletter
            </h3>
            <form className="row g-3">
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
      <div className="row g-5 mb-5">
        <div className="col-lg-4">
          <div className="mb-4 footer-logo-wrap">
            <h3 className="footer-logo">Furni</h3>
          </div>
          <p>
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            quis nisl dapibus malesuada.
          </p>
        </div>
        <div className="col-lg-8">
          <div className="row links-wrap">
            {["About us", "Services", "Blog", "Contact us"].map((link) => (
              <div className="col-6 col-md-3" key={link}>
                <ul className="list-unstyled">
                  <li>{link}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Blog = () => (
  <>
    <HeroSection />
    <BlogSection />
    <TestimonialSection />
    <FooterSection />
  </>
);

export default Blog;
