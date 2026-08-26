import "./Navbar.css";

function TopBar() {
  return (
    <>
      {/* Scrolling Offer Bar */}
      <section className="promoOfferBar">
        <div className="promoOfferTrack">

          {/* First Set */}
          <span>Get 15% off your first purchase. Use code <strong>NEWSHOES15</strong></span>
          <span className="promoDot">•</span>

          <span>Buy one pair, get the second pair 50% off. Use code <strong>BOGO50</strong></span>
          <span className="promoDot">•</span>

          <span>Enjoy 20% off your order. Use code <strong>SHOEFRESH20</strong></span>
          <span className="promoDot">•</span>

          {/* Duplicate Set */}
          <span>Get 15% off your first purchase. Use code <strong>NEWSHOES15</strong></span>
          <span className="promoDot">•</span>

          <span>Buy one pair, get the second pair 50% off. Use code <strong>BOGO50</strong></span>
          <span className="promoDot">•</span>

          <span>Enjoy 20% off your order. Use code <strong>SHOEFRESH20</strong></span>
          <span className="promoDot">•</span>

        </div>
      </section>

      {/* Top Bar */}
      <div className="topbar">
        <div>
          One Day Delivery Available
        </div>

        <div className="top-right">

          <a href="/">Login</a>

          <span>/</span>

          <a href="/">Register</a>

        </div>

      </div>
    </>
  );
}

export default TopBar;