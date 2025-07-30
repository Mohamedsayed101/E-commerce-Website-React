import React from "react";
import Logo from "../Logo/Logo";


export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5 ">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Column 1: Brand Logo */}
          <div className="col-md-4 mb-4">
            <Logo />
            <p>
              Your favorite online store. We offer top-quality products with
              fast delivery.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/products" className="text-white text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <a href="#" className="text-white me-3 fs-5">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white me-3 fs-5">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white me-3 fs-5">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/mohamed-sayed-439a54347/" className="text-white me-3 fs-5">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center border-top border-secondary pt-3 mt-3">
          <small>
            &copy; {new Date().getFullYear()} MO.Shop. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
