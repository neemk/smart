import { Link } from "react-router-dom";

export default function Product(props) {
  const { details } = props;

  return (
    <div className="product">
      <Link to={`/products/${details.id}`}>
        <img src={details.image} alt="shoe" className="product-img" />
      </Link>
      <div className="product-details">
        <p className="product-title">{details.name}</p>
        <p className="product-category">Men's Walking shoes</p>
        <p className="product-variants">2 Colors</p>
        <p className="product-price">MRP : ₹ 8 000</p>
      </div>
    </div>
  );
}
