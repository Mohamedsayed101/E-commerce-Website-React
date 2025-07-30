import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ id, title, price, image }) {
  return (
    <div className="card m-4 shadow-sm" style={{ width: "18rem" }}>
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "250px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h6 className="card-title">
          {title.length > 50 ? title.slice(0, 50) + "..." : title}
        </h6>
        <p className="card-text fw-bold">${price}</p>

        <Link to={`/products/${id}`} className="btn btn-primary mt-auto">
          View Details
        </Link>
      </div>
    </div>
  );
}
