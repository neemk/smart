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

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />}>
              <Route path="" element={<ProductDetailInfo />}></Route>
              <Route
                path="nutrition"
                element={<ProductDetailNutrition />}
              ></Route>
              <Route path="storage" element={<ProductDetailStorage />}></Route>
            </Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
