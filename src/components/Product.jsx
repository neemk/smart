import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <div className="product">
      <Link to="/products/1">
        <img
          src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ea08d51f-4841-403c-bbc3-fc256164d05b/motiva-walking-shoes-Fjzkq7.png"
          alt="shoe"
          className="product-img"
        />
      </Link>
      <div className="product-details">
        <p className="product-title">Nike Motiva</p>
        <p className="product-category">Men's Walking shoes</p>
        <p className="product-variants">2 Colors</p>
        <p className="product-price">MRP: 8000</p>
      </div>
    </div>
  );
}
