import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
    FiHeart,
    FiEye,
    FiRepeat,
    FiShoppingCart,
} from "react-icons/fi";

import { ShopContext } from "../../context/ShopContext";

function ProductCard({ product }) {

    const navigate = useNavigate();

    const {
        addToCart,
        addWishlist,
        setQuickView,
    } = useContext(ShopContext);


    return (

        <div className="product-card">

            <div className="product-image">

                <img
                    src={product.image}
                    alt={product.title}
                    className="img1"
                    onClick={() => navigate(`/product/${product.id}`)}
                    style={{ cursor: "pointer" }}
                />

                <img
                    src={product.image2}
                    alt={product.title}
                    className="img2"
                    onClick={() => navigate(`/product/${product.id}`)}
                />
                
                <span className="sale">SALE</span>

                <div className="hover-icons">

                    <button
                        onClick={() => setQuickView(product)}
                    >
                        <FiEye />
                    </button>

                    <button onClick={() => addWishlist(product)}>
                        <FiHeart />
                    </button>

                    <button>
                        <FiRepeat />
                    </button>

                </div>

                <button
                    className="cart-btn"
                    onClick={() => addToCart(product)}
                >
                    <FiShoppingCart />
                    Add To Cart
                </button>

            </div>

            <div className="product-info">

                <p className="brand">{product.brand}</p>

                <h3
                    onClick={() => navigate(`/product/${product.id}`)}
                    style={{ cursor: "pointer" }}
                >
                    {product.title}
                </h3>

                <div className="rating">
                    ★★★★★
                </div>

                <h4>${product.price}</h4>

            </div>

        </div>

    );
}

export default ProductCard;