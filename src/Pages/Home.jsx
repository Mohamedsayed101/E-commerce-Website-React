import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container py-5 vh-100 d-flex align-items-center justify-content-center ">
      <div className="text-center">
        <h2 className="display-4 fw-bold">
          Welcome to <span className="text-primary">MO Shop</span>
        </h2>
        <p className="lead text-muted">
          Discover our latest products and exclusive offers just for you!
        </p>
        <Link to="/products" className="btn btn-primary btn-lg mt-3">
          Shop Now <i className="fas fa-shopping-cart me-2"></i>
        </Link>
      </div>
    </div>
  );
}
