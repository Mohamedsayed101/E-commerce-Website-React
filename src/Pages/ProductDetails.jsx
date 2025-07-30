import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../Services/Api";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = (product) => {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...oldCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="row g-4 container mt-5 mb-5">
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <div className="text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <h2 className="mb-3">{product.title}</h2>
        <p className="fs-4 text-primary">${product.price}</p>
        <p className="badge bg-secondary mb-3">{product.category}</p>
        <p className="mb-4">{product.description}</p>
        <div className="d-grid gap-2">
          <button
            className="btn btn-success"
            type="button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <Link to="/products" className="btn btn-outline-secondary">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
