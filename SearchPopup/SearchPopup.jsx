import { useContext, useState, useMemo, useRef, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import { FiSearch, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./SearchPopup.css";

function SearchPopup({ open, setOpen }) {
  const { productData } = useContext(ShopContext);

  const navigate = useNavigate();

  const inputRef = useRef(null);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setKeyword("");
    }
  }, [open]);

  const results = useMemo(() => {
    if (!keyword.trim()) return [];

    return productData.filter((item) => {
      const text = keyword.toLowerCase();

      return (
        item.name?.toLowerCase().includes(text) ||
        item.brand?.toLowerCase().includes(text) ||
        item.category?.toLowerCase().includes(text) ||
        item.color?.toLowerCase().includes(text)
      );
    });
  }, [keyword, productData]);

  const openProduct = (id) => {
    navigate(`/product/${id}`);
    setKeyword("");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="search-overlay"
      onClick={() => setOpen(false)}
    >
      <div
        className="search-box"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="search-header">

          <div className="search-input">

            <FiSearch className="search-input-icon" />

            <input
              ref={inputRef}
              type="text"
              placeholder="Search shoes, brands, category..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && results.length > 0) {
                  openProduct(results[0].id);
                }

                if (e.key === "Escape") {
                  setOpen(false);
                }
              }}
            />

          </div>

          <button
            className="close-search"
            onClick={() => setOpen(false)}
          >
            <FiX />
          </button>

        </div>

        <div className="search-result">

          {keyword === "" ? (

            <div className="empty-text">

              <h3>Search Products</h3>

              <p>
                Search by product name, brand,
                category or color.
              </p>

            </div>

          ) : results.length === 0 ? (

            <div className="empty-text">

              <h3>No Product Found</h3>

              <p>
                Try another keyword.
              </p>

            </div>

          ) : (

            results.map((item) => (

              <div
                className="search-item"
                key={item.id}
                onClick={() => openProduct(item.id)}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="search-info">

                  <h4>{item.name}</h4>

                  <span>{item.brand}</span>

                  <small>{item.category}</small>

                </div>

                <div className="search-price">

                  ₹{item.price}

                </div>

              </div>

            ))

          )}

        </div>
      </div>
    </div>
  );
}

export default SearchPopup;