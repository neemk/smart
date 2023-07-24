import { useState } from "react";
import FilterSection from "./FilterSection";
import ProductList from "./ProductList";

export default function Products(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <span onClick={() => setIsOpen(!isOpen)}>Hide Filters</span>
      </div>
      <div className="grid grid-filter-column pt-20">
        {isOpen && (
          <div className="filter-section">
            <FilterSection />
          </div>
        )}
        <div className="products-view">
          <ProductList />
        </div>
      </div>
    </>
  );
}
