import { useState, forwardRef } from "react";

import FilterSection from "./FilterSection";
import ProductList from "./ProductList";
import FilterDialog from "./FilterDialog";

export default function Products(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div>
        <span onClick={handleClick}>Hide Filters</span>
      </div>

      {open && (
        <div>
          <FilterDialog handleClick={handleClick}>
            <FilterSection />
          </FilterDialog>
        </div>
      )}

      <div className="grid grid-filter-column pt-20">
        {open && (
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
