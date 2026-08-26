import { useContext } from "react";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import "./WishlistDrawer.css";

function WishlistDrawer() {
  const navigate = useNavigate();

  const {
    wishlist,
    wishlistOpen,
    setWishlistOpen,
    removeWishlist,
    addToCart,
  } = useContext(ShopContext);

  return (
    <div
      className={wishlistOpen ? "wish-overlay active" : "wish-overlay"}
      onClick={() => setWishlistOpen(false)}
    >
      <div
        className={wishlistOpen ? "wish-drawer active" : "wish-drawer"}
        onClick={(e) => e.stopPropagation()}
      >

        <div className="wish-header">

          <h2>Wishlist</h2>

          <FiX
            className="close"
            onClick={() => setWishlistOpen(false)}
          />

        </div>

        {wishlist.length === 0 ? (

          <div className="wish-empty">
            Wishlist is empty.
          </div>

        ) : (

          <div className="wish-items">

            {wishlist.map((item) => (

              <div className="wish-item" key={item.id}>

                <img src={item.image} alt={item.title} />

                <div className="wish-info">

                  <h4>{item.title}</h4>

                  <p>${item.price}</p>

                  <button
                    className="move-btn"
                    onClick={() => addToCart(item)}
                  >
                    Move To Cart
                  </button>

                </div>

                <button
                  className="remove"
                  onClick={() => removeWishlist(item.id)}
                >
                  ×
                </button>

              </div>

            ))}

          </div>

        )}

        <div className="wishlist-footer">

          <button
            className="view-wishlist-btn"
            onClick={() => {
              setWishlistOpen(false);
              navigate("/wishlist");
            }}
          >
            View Wishlist
          </button>

        </div>

      </div>
    </div>
  );
}

export default WishlistDrawer;