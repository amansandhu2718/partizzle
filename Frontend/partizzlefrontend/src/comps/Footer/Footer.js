import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <>
        <br />
        <footer className="text-center text-lg-start bgfooter cuswhite">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="/google.com" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/google.com" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/google.com" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="/google.com" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/google.com" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/google.com" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>PARTIZZLE
                  </h6>
                  <p>
                    you can contact us to organize a amazing bombshell event
                    anywhere at any space with us.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                  <p>
                   
                    <Link
                  to="/decors"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Contact Us"
                >DECORATION              
                  </Link>
                  </p>
                  <p>
                        
                  <Link
                  to="/beverages"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Contact Us">
                    Beverages              
                  </Link>
                  </p>
                  <p>
                       
                  <Link
                  to="/food"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Contact Us"
                >Food              
                  </Link>
                  </p>
                  <p>
                      
                  <Link
                  to="/theme"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Contact Us"
                >Theme              
                  </Link>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                        
                  <Link
                  to="/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Contact Us"
                >HOME              
                  </Link>
                  </p>
                  <p>
                         
                  <Link
                  to="/contact"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Contact Us"
                >Contact              
                  </Link>
                  </p>
                  <p>
                        
                  <Link
                  to="/cart"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Contact Us"
                >Cart              
                  </Link>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              <span style={{ marginLeft: "6px" }}>PARTIZZLE</span>
            </a>
          </div>
        </footer>
      </>
    );
  }
}
