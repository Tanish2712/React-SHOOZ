import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiHeart,
  FiMinus,
  FiPlus,
  FiChevronDown,
  FiTruck,
  FiShield,
} from "react-icons/fi";
import { ShopContext } from "../context/ShopContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { productData, addToCart, addWishlist } =
    useContext(ShopContext);

  const product = productData.find(
    (item) => item.id === Number(id)
  );

  if (!product) return <h2>Product Not Found</h2>;

  const [qty, setQty] = useState(1);
  const [mainImage, setMainImage] = useState(product.image);
  const [size, setSize] = useState("S");
  const [color, setColor] = useState("black");

  const handleAddCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
  };

  return (
    <>
      <section className="details">

        {/* LEFT */}

        <div className="details-left">

          {/* Main Image */}
          <div className="main-image">
            <img src={mainImage} alt={product.title} />
          </div>

          {/* 5 Images Below */}
          <div className="thumbnail-images">

            {[1, 2, 3, 4, 5].map((item) => (
              <img
                key={item}
                src={product.image}
                alt={`thumb-${item}`}
                onClick={() => setMainImage(product.image)}
              />
            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div className="details-right">

          <h1>{product.title}</h1>

          <h2>${product.price}.00</h2>

          {/* SIZE */}

          <div className="size-box">

            <h4>Size</h4>

            <div className="sizes">

              {["S", "M", "L"].map((item) => (
                <button
                  key={item}
                  className={size === item ? "active-size" : ""}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* COLORS */}

          <div className="color-box">

            <h4>Color</h4>

            <div className="colors">

              {[
                "black",
                "navy",
                "brown",
                "red",
                "green",
                "orange",
                "gray",
                "pink"
              ].map((item) => (
                <span
                  key={item}
                  className={`color ${item} ${color === item ? "active-color" : ""
                    }`}
                  onClick={() => setColor(item)}
                ></span>
              ))}

            </div>

          </div>

          {/* QUANTITY */}

          <div className="quantity">

            <button
              onClick={() =>
                qty > 1 && setQty(qty - 1)
              }
            >
              <FiMinus />
            </button>

            <span>{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
            >
              <FiPlus />
            </button>

          </div>

          {/* BUTTONS */}

          <div className="detail-buttons">

            <button
              className="detail-cart-btn"
              onClick={handleAddCart}
            >
              ADD TO CART
            </button>

            <button
              className="detail-buy-btn"
              onClick={() => {
                handleAddCart();
                navigate("/checkout");
              }}
            >
              BUY IT NOW
            </button>

          </div>

          {/* WISHLIST */}

          <div className="wish-row">

            <span onClick={() => addWishlist(product)}>
              <FiHeart /> Add To Wishlist
            </span>

            <span>
              Compare
            </span>

          </div>

          <hr />

          {/* PRODUCT INFO */}

          <div className="product-info">

            <p>
              <strong>Vendor :</strong>
              TrailGear
            </p>

            <p>
              <strong>Type :</strong>
              Hiking Boots
            </p>

            <p>
              <strong>SKU :</strong>
              PRD-{product.id}
            </p>

            <p>
              <strong>Availability :</strong>
              In Stock
            </p>

          </div>

          {/* SALE */}

          <div className="sale-box">

            🔥 Sale Ends In !

            <span>
              15D : 20H : 45M : 09S
            </span>

          </div>

          {/* ACCORDION */}

          <div className="accordion-item">

            <div className="accordion-title">
              <FiTruck />
              Shipping Information
              <FiChevronDown />
            </div>

          </div>

          <div className="accordion-item">

            <div className="accordion-title">
              <FiShield />
              Care Guide
              <FiChevronDown />
            </div>

          </div>

          {/* FEATURES */}

          <div className="features">

            <p>✔ 55% Linen, 45% Rayon</p>

            <p>✔ Secure Payment</p>

            <p>✔ 2 Year Warranty</p>

            <p>👀 19 customers are viewing this product</p>

            <p>🔥 30 SOLD IN LAST 18 HOURS</p>

            <p>🚚 Spend $1000 for Free Shipping</p>

          </div>

        </div>

      </section>
    </>
  );
}

export default ProductDetails;