import "./MegaMenu.css";

function BlogMega() {
  return (
    <div className="blog-mega">

      <div className="mega-column">
        <h3>List Layout</h3>

        <a href="/">List Left Sidebar</a>
        <a href="/">List Right Sidebar</a>
        <a href="/">List Item Basic</a>
        <a href="/">List Item Overlay</a>
        <a href="/">List Item Box</a>
        <a href="/">List Item Classic</a>
        <a href="/">List Item Classic Box</a>
      </div>

      <div className="mega-column">
        <h3>Grid Layout</h3>

        <a href="/">Grid Left Sidebar</a>
        <a href="/">Grid Right Sidebar</a>
        <a href="/">Grid Item Basic</a>
        <a href="/">Grid Item Overlay</a>
        <a href="/">Grid Item Box</a>
        <a href="/">Grid Item Classic</a>
      </div>

      <div className="mega-column">
        <h3>Article</h3>

        <a href="/">Title in Image</a>
        <a href="/">Title after Image</a>
        <a href="/">Title before Image</a>
        <a href="/">Left Sidebar</a>
        <a href="/">Right Sidebar</a>
        <a href="/">Title Center</a>
        <a href="/">Article Video</a>
      </div>

      <div className="featured-blog">

        <img
          src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600"
          alt=""
        />

        <h2>Enjoy a 50% Price Slash</h2>

        <p>Revamp your wardrobe at jaw-dropping prices.</p>

        <button>SHOP NOW</button>

      </div>

    </div>
  );
}

export default BlogMega;