import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

import "./Navbar.css";
import TopBar from "./TopBar";

import logo from "../../assets/logo.png";

import ShopMega from "./megamenu/ShopMega";
import ProductMega from "./megamenu/ProductMega";
import BlogMega from "./megamenu/BlogMega";
import PagesMega from "./megamenu/PagesMega";

import { ShopContext } from "../../context/ShopContext";

import SearchPopup from "../SearchPopup/SearchPopup";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [showShop, setShowShop] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showPages, setShowPages] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);

  const {
    wishlist,
    cart,
    setCartOpen,
    setWishlistOpen,
  } = useContext(ShopContext);

  return (
    <>
      <TopBar />

      <header className="navbar">

        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

        {/* Navigation */}
        <nav className={mobileMenu ? "nav active" : "nav"}>

          <NavLink to="/" onClick={() => setMobileMenu(false)}>
            Home
          </NavLink>

          <div
            className="nav-item"
            onMouseEnter={() => setShowShop(true)}
            onMouseLeave={() => setShowShop(false)}
          >
            <span>
              Shop <FiChevronDown />
            </span>
            {showShop && <ShopMega />}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setShowProduct(true)}
            onMouseLeave={() => setShowProduct(false)}
          >
            <span>
              Product <FiChevronDown />
            </span>
            {showProduct && <ProductMega />}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setShowBlog(true)}
            onMouseLeave={() => setShowBlog(false)}
          >
            <span>
              Blog <FiChevronDown />
            </span>
            {showBlog && <BlogMega />}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setShowPages(true)}
            onMouseLeave={() => setShowPages(false)}
          >
            <span>
              Pages <FiChevronDown />
            </span>
            {showPages && <PagesMega />}
          </div>

          <NavLink to="/" onClick={() => setMobileMenu(false)}>
            Buy Now
          </NavLink>

        </nav>

        {/* Right Side */}
        <div className="navbar-right">

          {/* Search */}
          <button
            className="icon-btn"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <FiSearch />
          </button>

          {/* User */}
          <button className="icon-btn" aria-label="User">
            <FiUser />
          </button>

          {/* Wishlist */}
          <button
            className="icon-btn icon"
            onClick={() => setWishlistOpen(true)}
            aria-label="Wishlist"
          >
            <FiHeart />
            <span>{wishlist.length}</span>
          </button>

          {/* Cart */}
          <button
            className="icon-btn icon"
            onClick={() => setCartOpen(true)}
            aria-label="Cart"
          >
            <FiShoppingBag />
            <span>{cart.length}</span>
          </button>

          {/* Mobile Menu */}
          <button
            className="menu-btn"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Menu"
          >
            {mobileMenu ? <FiX /> : <FiMenu />}
          </button>

        </div>

      </header>

      <SearchPopup
        open={searchOpen}
        setOpen={setSearchOpen}
      />
    </>
  );
}

export default Navbar;