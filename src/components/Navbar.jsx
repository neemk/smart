import { Link, NavLink } from "react-router-dom";
import NikeLogo from "../assets/nike.svg";
import JordanLogo from "../assets/jordan.svg";

export default function Navbar() {
  return (
    <>
      <div>
        <div className="relative bg-[#f5f5f5] h-9 hidden lg:block">
          <div className="max-w-[1920px] mx-auto h-full max-h-[60px] pr-9 pl-[38px] flex justify-between">
            <div className="h-full flex items-center">
              <Link to="/">
                <img src={JordanLogo} />
              </Link>
            </div>
            <div className="flex">
              <div className="flex items-center">
                <div className="flex items-center text-xs">
                  <Link to="/" className="flex items-center mx-2 h-[34px]">
                    <span className="px-1">Find a Store</span>
                  </Link>
                  <span className="font-hnt mr-0.5">|</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center text-xs">
                  <Link to="/" className="flex items-center mx-2 h-[34px]">
                    <span className="px-1">Help</span>
                  </Link>
                  <span className="font-hnt">|</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center text-xs">
                  <Link to="/" className="flex items-center mx-2 h-[34px]">
                    <span className="px-1">Join Us</span>
                  </Link>
                  <span className="font-hnt">|</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center text-xs">
                  <Link to="/" className="flex items-center mx-2 h-[34px]">
                    <span className="px-1">Sign In</span>
                  </Link>
                  {/* <span className="font-hnt">|</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
}
