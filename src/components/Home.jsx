import { Link } from "react-router-dom";
import Button from "./Button";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Home() {
  const products = [
    { name: "Nike shoes", title: "Mens Engineered Short-Sleeve Fitness Top" },
    { name: "Nike shoes", title: "Mens Engineered Short-Sleeve Fitness Top" },
    { name: "Nike shoes", title: "Mens Engineered Short-Sleeve Fitness Top" },
  ];

  const categories = [
    {
      name: "Men's",
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_570,c_limit/69ded6b2-4b32-4f76-9dd0-2d5235a04953/nike-just-do-it.png",
    },
    {
      name: "Women's",
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_570,c_limit/1c8b3b45-5c46-418e-8c62-37fc65eca37c/nike-just-do-it.png",
    },
    {
      name: "Kid's",
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_570,c_limit/70a7b831-bc34-4273-9790-6775c56667c0/nike-just-do-it.png",
    },
  ];

  return (
    <>
      <MaxWidthWrapper>
        <header className="header"></header>

        <div className="featured-products">
          <h2 className="heading-2 section-title">Our Products</h2>
          <div className="products">
            {products.map((product) => {
              return (
                <div className="product">
                  <img
                    src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_579,c_limit/d8df9df7-c4e4-4eb3-bfd2-4754cb82070f/dri-fit-adv-aps-engineered-short-sleeve-fitness-top-DDWCtD.png"
                    alt="shirt"
                    className="product-img"
                  />
                  <div className="product-details">
                    <div className="product-title">
                      <span>{product.name}</span>
                      <span>{product.title}</span>
                    </div>
                    <div className="product-price">2000</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="featured-categories">
          <h2 className="heading-2 section-title">The Essentials</h2>
          <div className="categories">
            {categories.map((category) => {
              return (
                <div className="category">
                  <img
                    src={category.img}
                    alt="shirt"
                    className="category-img"
                  />
                  <Button className="category-btn">{category.name}</Button>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
