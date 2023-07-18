import Button from "./Button";

export default function ProductDetails(props) {
  return (
    <div className="product-details-container">
      <div className="product-details-layout">
        <div>
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png"
            className="product-details-image"
            alt="Nike Motiva"
          />
        </div>
        <div>
          <div>
            <p className="product-details-title">Nike Motiva</p>
            <p className="product-details-subtitle">Men's Walking Shoes</p>
            <span className="product-details-price">MRP:₹ 9 695</span>
            <p className="text-light-gray">incl. of taxed</p>
            <p className="text-light-gray">
              (Also includes all applicable dues)
            </p>

            <div className="product-details--select-size">
              <p className="text-semi-bold">Select Size</p>
              <div className="product-details--sizes">
                <Button className="btn--select-size">UK 5.5</Button>
                <Button className="btn--select-size">UK 6</Button>
                <Button className="btn--select-size">UK 7</Button>
                <Button className="btn--select-size">UK 8</Button>
                <Button className="btn--select-size">UK 9</Button>
                <Button className="btn--select-size">UK 10</Button>
                <Button className="btn--select-size">UK 10.5</Button>
              </div>
            </div>

            <Button className="btn--add-to-bag">Add to Bag</Button>

            <p className="product-details-description">
              The radiance lives on in the Nike Air Force 1 '07, the basketball
              original that puts a fresh spin on what you know best: durably
              stitched overlays, clean finishes and the perfect amount of flash
              to make you shine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
