import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home-layout">
        <div>
          <h1>Online shopping simplified</h1>
          <p>
            Order your groceries from <em>SuperM</em> with our easy to use app,
            and get your products delivered straight to your doorstep.
          </p>
          <Link to="/products" className="btn btn-default">
            Start shopping
          </Link>
        </div>
        <img
          src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/home.jpg"
          width="350"
          height="240"
          className="rounded home-image"
          alt=""
        />
      </div>
      <div className="section">
        <h2 className="section-title">Groceries Delivered on Your Schedule</h2>
        <div className="features">
          <div className="feature">
            <span className="feature-id">1</span>
            <span className="feature-title">Build Your Order</span>
            <p className="feature-content">
              Customize your box & set a schedule of recurring deliveries
            </p>
          </div>
          <div className="feature">
            <span className="feature-id">2</span>
            <span className="feature-title">Save Even More</span>
            <p className="feature-content">
              Get an extra 5-10% off thousands of products on Autoship
            </p>
          </div>
          <div className="feature">
            <span className="feature-id">3</span>
            <span className="feature-title">You’re In Control</span>
            <p className="feature-content">
              Edit items, skip or pause Autoship, or place one-time orders
              anytime
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
