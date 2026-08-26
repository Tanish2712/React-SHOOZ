import "./MegaMenu.css";
import { shopMenu } from "../data";

function ShopMega() {
  return (
    <div className="shop-mega" >

      <div className="mega-column">
        <h3>Layout</h3>

        {shopMenu.layout.map((item, index) => (
          <a href="/" key={index}>{item}</a>
        ))}
      </div>

      <div className="mega-column">
        <h3>Features</h3>

        {shopMenu.features.map((item, index) => (
          <a href="/" key={index}>{item}</a>
        ))}
      </div>

      <div className="mega-column">
        <h3>Hover Style</h3>

        {shopMenu.hover.map((item, index) => (
          <a href="/" key={index}>{item}</a>
        ))}
      </div>

      <div className="mega-image">

        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"
          alt=""
        />

        <div className="mega-content">
          <h4>Athletic Footwear</h4>
          <span>8 Products</span>
        </div>

      </div>

      <div className="mega-image">

        <img
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=700"
          alt=""
        />

        <div className="mega-content">
          <h4>Boots For Every Occasion</h4>
          <span>8 Products</span>
        </div>

      </div>

    </div>
  );
}

export default ShopMega;