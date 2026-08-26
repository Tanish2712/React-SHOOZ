import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaEye, FaBalanceScale, FaStar } from "react-icons/fa";
import { ShopContext } from "../../context/ShopContext";
import "./ProductGrid.css";

function ProductGrid() {
  const { slug } = useParams();
  const { filteredProducts, addToCart, addWishlist, setQuickView } = useContext(ShopContext);

  const categoryLabel = slug ? slug.replace(/-/g, " ") : "this category";

  if (filteredProducts.length === 0) {
    return (
      <section className="productGrid emptyGrid">
        <div className="emptyState">
          <h3>No Products Found</h3>
          <p>Try changing your filters.</p>
          <span>Showing results for {categoryLabel}.</span>
        </div>
      </section>
    );
  }

  return (
    <section className="productGrid">
      {filteredProducts.map((item) => (
        <div className="productCard" key={item.id}>
          <div className="productImage">
            <span className="badge">{item.badge}</span>

            <img src={item.image} alt={item.name} className="mainImage" />

            <img src={item.hoverImage} alt={item.name} className="hoverImage" />

            <div className="productIcons">
              <button type="button" onClick={() => addWishlist(item)}>
                <FaHeart />
              </button>

              <button type="button" onClick={() => setQuickView(item)}>
                <FaEye />
              </button>

              <button type="button">
                <FaBalanceScale />
              </button>
            </div>

            <button type="button" className="cartBtn" onClick={() => addToCart(item)}>
              Add To Cart
            </button>
          </div>

          <div className="productInfo">
            <div className="rating">
              {[...Array(item.rating)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            <h3>{item.name}</h3>

            <div className="price">
              <span className="newPrice">₹{item.price}</span>
              <span className="oldPrice">₹{item.oldPrice}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductGrid;