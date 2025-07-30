import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

export default function Logo() {
  return (
    <Link
      className="navbar-brand d-flex align-items-center fw-bold fs-4 text-info"
      to="/"
    >
      <span>MO</span>
      <FaShoppingBag />
    </Link>
  );
}
