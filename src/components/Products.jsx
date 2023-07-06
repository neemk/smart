import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import Loader from "./Loader";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    "https://react-tutorial-demo.firebaseio.com/"
  );

  useEffect(() => {
    get("supermarket.json")
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="products-layout">
        <h1>Products</h1>
        <p>Take a look at our products</p>
        <div className="products-grid">
          {loading && <Loader />}
          {products.map((product) => {
            return <Product key={product.id} details={product} />;
          })}
        </div>
      </div>
    </>
  );
}
