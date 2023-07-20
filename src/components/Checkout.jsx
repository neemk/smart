import Button from "./Button";

export default function Checkout() {
  return (
    <>
      <div className="checkout-page-layout">
        <div className="checkout-forms">
          <h3 className="checkout-form--title">Enter your name and address:</h3>
          <form action="">
            <div className="input-single">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="input-single">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="input-single">
              <input type="text" placeholder="Address" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Postal Code" />
              <input type="text" placeholder="Locality" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="State/Territory" />
              <input type="text" placeholder="Country" />
            </div>
          </form>
          <h3 className="checkout-form--title">
            What's your contact information?
          </h3>
          <form action="">
            <div className="input-single">
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-single">
              <input type="text" placeholder="Phone Number" />
            </div>
          </form>
          <Button className="btn--add-to-bag">Pay</Button>
        </div>
        <div className="checkout-summary">
          <h3 className="checkout-form--title">Order Summary</h3>
          <div className="checkout-summary--inner">
            <div className="checkout-summary--subtotal">
              <p>Subtotal</p>
              <p>₹ 7 495.00</p>
            </div>
            <div className="checkout-summary--delivery">
              <p>Delivery/Shipping</p>
              <p>₹ 1 250.00</p>
            </div>

            <div className="checkout-summary--total">
              <p>Total</p>
              <p>₹ 8 745.00</p>
            </div>
          </div>
          <p className="checkout-summary--disclaimer">
            (The total reflects the price of your order, including all duties
            and taxes)
          </p>
        </div>
      </div>
    </>
  );
}
