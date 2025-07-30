import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "../Services/Api";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mt-5 pro">
      <h2 className="mb-5 text-center text-primary">Products</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <div
                className="card-img-container"
                style={{
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{
                    maxHeight: "180px",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  {product.title.substring(0, 50)}...
                </h5>
                <p className="card-text mb-auto">${product.price}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-primary mt-2"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <button onClick={() => navigate("/cart")} className="btn btn-success">
          Go to Cart
        </button>
      </div>
    </div>
  );
}

export default Products;
