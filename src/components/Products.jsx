import { useState, useEffect, forwardRef } from "react";

import LinkFilters from "./LinkFilters";
import FilterSection from "./FilterSection";
import Product from "./Product";
import FilterDialog from "./FilterDialog";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Products(props) {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <MaxWidthWrapper>
        {/* <div className="my-5 flex h-10 w-full justify-center lg:justify-end">
          <LinkFiltersButton />
          <LinkSort />
        </div> */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-7">
          <div className="sticky top-16 col-span-1 hidden max-h-[calc(100vh-150px)] self-start overflow-auto rounded-lg bg-white lg:block">
            <LinkFilters />
          </div>
          <div className="col-span-1 auto-rows-min grid-cols-1 lg:col-span-6 lg:pt-10">
            <ul className="grid min-h-[66.5vh] grid-cols-3 gap-4">
              {products.map((product) => {
                return <Product key={product.id} details={product} />;
              })}
            </ul>
            {/* {links && links.length > 0 && <LinkPagination />} */}
          </div>
        </div>

        {/* <div>
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
        </div> */}
      </MaxWidthWrapper>
    </>
  );
}
