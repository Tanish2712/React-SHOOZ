import "./MegaMenu.css";

function ProductMega() {
  return (
    <div className="product-mega">

      <div className="mega-column">
        <h3>Product Layouts</h3>

        <a href="/">1. Thumbnails - bottom</a>
        <a href="/">2. Thumbnails - left</a>
        <a href="/">3. Thumbnails - right</a>
        <a href="/">4. Without Thumbnails</a>
        <a href="/">5. List - stacked</a>
        <a href="/">6. List - grid</a>
        <a href="/">7. Collage - style 1</a>
        <a href="/">8. Collage - style 2</a>
      </div>

      <div className="mega-column">
        <h3>Product Type</h3>

        <a href="/">Simple Product</a>
        <a href="/">Variable Product</a>
        <a href="/">With Video</a>
        <a href="/">Sold Out - Coming</a>
      </div>

      <div className="mega-column">
        <h3>List Featured 1</h3>

        <a href="/">Sticky ATC</a>
        <a href="/">Frequently Bought Together</a>
        <a href="/">Count Down</a>
        <a href="/">Cross Selling</a>
        <a href="/">Upsell Popup</a>
        <a href="/">Low Stock Alert</a>
        <a href="/">Pickup Store</a>
      </div>

      <div className="mega-column">
        <h3>List Featured 2</h3>

        <a href="/">Dropdown Variant</a>
        <a href="/">Swatch Variant Color</a>
        <a href="/">Swatch Variant Image</a>
        <a href="/">Variant Image Square</a>
        <a href="/">Size Guide</a>
        <a href="/">Description Accordion</a>
        <a href="/">Description Tab Center</a>
      </div>

      <div className="featured-product">

        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
          alt=""
        />

        <h5>$25.00</h5>

        <h2>Waterproof Hiking Boots</h2>

        <span>TrailGear</span>

      </div>

    </div>
  );
}

export default ProductMega;