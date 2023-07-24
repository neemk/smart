import Button from "./Button";

export default function Cart() {
  return (
    <>
      <div className="cart-layout">
        <div>
          <p className="cart-title">Bag</p>
          <div className="cart-items">
            <div className="cart-item">
              <div>
                <img
                  src="https://secure-images.nike.com/is/image/DotCom/CW2288_111?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg"
                  alt="nike shoes"
                />
              </div>
              <div className="cart-item--details">
                <div className="cart-item--primary">
                  <p className="cart-item--name">Nike Air Force 1 '07</p>
                  <p className="cart-item--price">MRP: Rs 7 495.00</p>
                </div>
                <div className="cart-item--secondary">
                  <p className="cart-item--category">Men's Shoes</p>
                  <p className="cart-item--color">White/White</p>
                  <div className="cart-item--settings">
                    <div>
                      <span>Size</span>
                      <select id="sizes">
                        <option value="red">Red</option>
                        <option value="green">6 (EU 40000)</option>
                        <option value="blue">Blue</option>
                      </select>
                    </div>
                    <div>
                      <span>Quantity</span>
                      <select id="quantity">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="cart-title">Summary</p>
          <div className="cart-summary">
            <div className="cart-summary--subtotal">
              <p>Subtotal</p>
              <p>Rs 7 495</p>
            </div>
            <div className="cart-summary--handling">
              <p>Estimated Delivery & Handling</p>
              <p>Rs 1 250</p>
            </div>
            <div className="cart-summary--total">
              <p>Total</p>
              <p>Rs 8 745</p>
            </div>

            <Button className="btn--add-to-bag">Guest Checkout</Button>
          </div>
        </div>
      </div>
    </>
  );
}
