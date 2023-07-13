import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import ProductDetailInfo from "./components/ProductDetailInfo";
import ProductDetailNutrition from "./components/ProductDetailNutrition";
import ProductDetailStorage from "./components/ProductDetailStorage";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  function handleProductAdd(newProduct) {
    console.log("Adding product " + newProduct.id);
  }

  function handleProductDelete(id) {
    console.log("Deleting product " + id);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/products"
              element={
                <Products
                  cart={cart}
                  onProductAdd={handleProductAdd}
                  onProductDelete={handleProductDelete}
                />
              }
            />
            <Route path="/products/:id" element={<ProductDetails />}>
              <Route
                path=""
                element={<ProductDetailInfo onProductAdd={handleProductAdd} />}
              ></Route>
              <Route
                path="nutrition"
                element={<ProductDetailNutrition />}
              ></Route>
              <Route path="storage" element={<ProductDetailStorage />}></Route>
            </Route>
            <Route path="/cart" element={<Cart cart={cart} />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
