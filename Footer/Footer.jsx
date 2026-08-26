import { useEffect, useState } from "react";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>INFOMATION</h3>

          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Returns Policy</li>
            <li>Shipping Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>QUICK LINKS</h3>

          <ul>
            <li>My Account</li>
            <li>My Cart</li>
            <li>Size Chart</li>
            <li>Wishlist</li>
            <li>Gift Card</li>
          </ul>
        </div>

        <div className="footer-column footer-logo">
          <img src={logo} alt="logo" />

          <p>T: + (08) 9055 0269</p>

          <p>E: example@example.com</p>

          <p>
            50 Porana Place, West Casuarinas,
            <br />
            Western Australia, Australia.
          </p>
        </div>

        <div className="footer-column">
          <h3>CATEGORIES</h3>

          <ul>
            <li>Athletic Footwear</li>
            <li>Boots for Every Occasion</li>
            <li>Luxury Leather Shoes</li>
            <li>Sandals & Slides</li>
            <li>Sneakerhead's Haven</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>SUPPORT</h3>

          <ul>
            <li>Contact Us</li>
            <li>Newsletter</li>
            <li>Gift Cards</li>
            <li>Sign In</li>
            <li>My Account</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2024 <span>Shooz.</span> All rights reserved
        </p>

        <div className="payment-section">
          <img
            src="https://www.svgrepo.com/show/145878/amex-logo.svg"
            alt="Amex"
          />

          <img
            src="https://www.svgrepo.com/show/303275/apple-pay-payment-mark-logo.svg"
            alt="Apple Pay"
          />

          <img
            src="https://www.svgrepo.com/show/328150/diners.svg"
            alt="Diners"
          />

          <img
            src="https://www.svgrepo.com/show/328132/discover.svg"
            alt="Discover"
          />

          <img
            src="https://www.svgrepo.com/show/508695/jcb.svg"
            alt="JCB"
          />

          <img
            src="https://www.svgrepo.com/show/362015/mastercard-3.svg"
            alt="Mastercard"
          />

          <img
            src="https://www.svgrepo.com/show/328144/visa.svg"
            alt="Visa"
          />

          {showButton && (
            <button className="scroll-top-btn" onClick={scrollTop}>
              <FaArrowUp />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;