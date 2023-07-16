import FilterSection from "./FilterSection";
import ProductList from "./ProductList";

export default function Products(props) {
  return (
    <>
      <div className="grid grid-filter-column pt-20">
        <div>
          <FilterSection />
        </div>
        <div className="products-view">
          <ProductList />
        </div>
      </div>
    </>
  );
}
