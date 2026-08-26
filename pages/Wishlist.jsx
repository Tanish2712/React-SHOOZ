import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "./Wishlist.css";

function Wishlist() {

  const {
    wishlist,
    removeWishlist,
    addToCart
  } = useContext(ShopContext);

  return (
    <section className="wishlist-page">

      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (

        <div className="empty-wishlist">
          Your wishlist is empty.
        </div>

      ) : (

        <div className="wishlist-container">

          {wishlist.map((item) => (

            <div className="wishlist-card" key={item.id}>

              <img
                src={item.image}
                alt={item.title}
              />

              <h3>{item.title}</h3>

              <p>${item.price}</p>

              <div className="wishlist-buttons">

                <button
                  className="wishlist-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  Add To Cart
                </button>

                <button
                  className="remove-btn"
                  onClick={() => removeWishlist(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}

export default Wishlist;