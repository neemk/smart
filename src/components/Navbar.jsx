import { NavLink } from "react-router-dom";
import NikeLogo from "../assets/nike.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        <img src={NikeLogo} />
      </NavLink>
      <div className="nav-items-wrapper">
        <ul>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/about"
            >
              About us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </div>
      <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
        Cart (0)
      </NavLink>
    </nav>
  );
}
