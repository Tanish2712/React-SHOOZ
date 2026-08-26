import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import QuickView from "./components/QuickView/QuickView";

import CartDrawer from "./components/CartDrawer/CartDrawer";

import WishlistDrawer from "./components/WishlistDrawer/WishlistDrawer";


import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import OrderSuccess from "./pages/OrderSuccess";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <>
      <Navbar />
      <QuickView />
      <CartDrawer />
      <WishlistDrawer />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/category/:slug" element={<CategoryPage />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </>
  );
}

export default App;