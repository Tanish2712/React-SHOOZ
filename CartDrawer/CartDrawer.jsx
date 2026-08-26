import { useContext } from "react";
import { FiX, FiMinus, FiPlus } from "react-icons/fi";
import { ShopContext } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";
import "./CartDrawer.css";

function CartDrawer() {

  const navigate = useNavigate();

  const {
    cart,
    cartOpen,
    setCartOpen,
    removeCart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useContext(ShopContext);

  return (
    <div
      className={cartOpen ? "cart-overlay active" : "cart-overlay"}
      onClick={() => setCartOpen(false)}
    >

      <div
        className={cartOpen ? "cart-drawer active" : "cart-drawer"}
        onClick={(e) => e.stopPropagation()}
      >

        <div className="cart-header">

          <h2>Shopping Cart</h2>

          <FiX
            className="close"
            onClick={() => setCartOpen(false)}
          />

        </div>

        {cart.length === 0 ? (

          <div className="empty-cart">

            Your cart is empty.

          </div>

        ) : (

          <>
            <div className="cart-items">

              {cart.map((item) => (

                <div className="cart-item" key={item.id}>

                  <img src={item.image} alt="" />

                  <div className="cart-info">

                    <h4>{item.title}</h4>

                    <p>${item.price}</p>

                    <div className="qty">

                      <button onClick={() => decreaseQty(item.id)}>
                        <FiMinus />
                      </button>

                      <span>{item.qty}</span>

                      <button onClick={() => increaseQty(item.id)}>
                        <FiPlus />
                      </button>

                    </div>

                  </div>

                  <button
                    className="remove"
                    onClick={() => removeCart(item.id)}
                  >
                    ×
                  </button>

                </div>

              ))}

            </div>

            <div className="cart-footer">

              <h3>Total : ${totalPrice}</h3>

              <button
                className="checkout-btn"
                onClick={() => {
                  setCartOpen(false);
                  navigate("/checkout");
                }}
              >
                Checkout
              </button>

            </div>

          </>
        )}

      </div>

    </div>
  );
}

export default CartDrawer;