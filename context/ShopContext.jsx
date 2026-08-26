import { createContext, useEffect, useState } from "react";
import products from "../data/products";
import categoryProducts from "../components/ProductGrid/productData";

export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [productData] = useState(products);
  const [categoryProductData] = useState(categoryProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortOption, setSortOption] = useState("Featured");

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [quickView, setQuickView] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const updateSort = (value) => {
    setSort(value);
    setSortOption(value);
  };

  const clearFilters = () => {
    setSelectedAvailability([]);
    setSelectedPrice("");
    setSelectedColors([]);
    setSelectedSizes([]);
    setSortOption("Featured");
    setSort("Featured");
  };

  const applyFilters = (items) => {
    let filteredProducts = [...items];

    if (search) {
      filteredProducts = filteredProducts.filter((item) => {
        const name = item.name || item.title || "";
        return name.toLowerCase().includes(search.toLowerCase());
      });
    }

    if (activeCategory && activeCategory !== "All") {
      filteredProducts = filteredProducts.filter(
        (item) => item.category === activeCategory
      );
    }

    if (category !== "All") {
      filteredProducts = filteredProducts.filter(
        (item) => item.category === category
      );
    }

    if (selectedAvailability.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        selectedAvailability.includes(item.availability)
      );
    }

    if (selectedPrice) {
      filteredProducts = filteredProducts.filter((item) => {
        if (selectedPrice === "under-2000") return item.price < 2000;
        if (selectedPrice === "2000-5000") return item.price >= 2000 && item.price <= 5000;
        if (selectedPrice === "above-5000") return item.price > 5000;
        return true;
      });
    }

    if (selectedColors.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        selectedColors.includes(item.color)
      );
    }

    if (selectedSizes.length > 0) {
      const selectedSize = Number(selectedSizes[0]);
      filteredProducts = filteredProducts.filter((item) =>
        Array.isArray(item.size) && item.size.includes(selectedSize)
      );
    }

    switch (sortOption) {
      case "Newest":
        filteredProducts.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        break;
      case "Price Low to High":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "Price High to Low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "Highest Rated":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "Name A-Z":
        filteredProducts.sort((a, b) => (a.name || a.title).localeCompare(b.name || b.title));
        break;
      case "Name Z-A":
        filteredProducts.sort((a, b) => (b.name || b.title).localeCompare(a.name || a.title));
        break;
      case "Featured":
      default:
        filteredProducts.sort((a, b) => Number(b.featured) - Number(a.featured));
        break;
    }

    return filteredProducts;
  };

  const filteredProducts = applyFilters(categoryProductData);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <ShopContext.Provider
      value={{
        productData,
        categoryProductData,
        filteredProducts,

        search,
        setSearch,

        category,
        setCategory,

        sort,
        setSort: updateSort,

        activeCategory,
        setActiveCategory,

        selectedAvailability,
        setSelectedAvailability,
        selectedPrice,
        setSelectedPrice,
        selectedColors,
        setSelectedColors,
        selectedSizes,
        setSelectedSizes,
        sortOption,
        setSortOption: updateSort,

        clearFilters,

        cart,
        wishlist,

        addToCart: (product) => {
          const exist = cart.find((item) => item.id === product.id);

          if (exist) {
            setCart(
              cart.map((item) =>
                item.id === product.id ? { ...item, qty: item.qty + 1 } : item
              )
            );
          } else {
            setCart([...cart, { ...product, qty: 1 }]);
          }

          setCartOpen(true);
        },
        removeCart: (id) => setCart(cart.filter((item) => item.id !== id)),
        addWishlist: (product) => {
          const exist = wishlist.find((item) => item.id === product.id);

          if (!exist) {
            setWishlist([...wishlist, product]);
          }

          setWishlistOpen(true);
        },
        removeWishlist: (id) => setWishlist(wishlist.filter((item) => item.id !== id)),
        increaseQty: (id) => {
          setCart(
            cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
          );
        },
        decreaseQty: (id) => {
          setCart(
            cart.map((item) =>
              item.id === id ? (item.qty === 1 ? item : { ...item, qty: item.qty - 1 }) : item
            )
          );
        },

        cartOpen,
        setCartOpen,

        wishlistOpen,
        setWishlistOpen,

        quickView,
        setQuickView,

        totalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;