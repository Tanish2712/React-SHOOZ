import { useContext } from "react";
import { FiX, FiHeart, FiShoppingBag } from "react-icons/fi";
import { ShopContext } from "../../context/ShopContext";
import "./QuickView.css";

function QuickView() {
  const {
    quickView,
    setQuickView,
    addToCart,
    addWishlist,
  } = useContext(ShopContext);

  if (!quickView) return null;

  return (
    <div
      className="quickview-overlay"
      onClick={() => setQuickView(null)}
    >
      <div
        className="quickview"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={() => setQuickView(null)}
        >
          <FiX />
        </button>

        <div className="quickview-left">
          <img src={quickView.image} alt={quickView.title} />
        </div>

        <div className="quickview-right">

          <p className="brand">{quickView.brand}</p>

          <h2>{quickView.title}</h2>

          <h3>${quickView.price}</h3>

          <p className="description">
            {quickView.description}
          </p>

          <div className="quick-buttons">

            <button
              className="add-cart"
              onClick={() => addToCart(quickView)}
            >
              <FiShoppingBag />
              Add To Cart
            </button>

            <button
              className="wish-btn"
              onClick={() => addWishlist(quickView)}
            >
              <FiHeart />
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default QuickView;