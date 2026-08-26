import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import ProductCard from "./ProductCard";
import "./Products.css";

function Products() {
  const { productData } = useContext(ShopContext);

  const [activeTab, setActiveTab] = useState("Featured");

  const tabs = ["Featured", "New Arrivals", "Best Seller"];

  const filteredProducts = productData.filter(
    (item) => item.category === activeTab
  );
  return (
    <section className="products">

      <h2>Trending Products</h2>

      <div className="product-tabs">

        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}

      </div>

    <div className="product-grid" key={activeTab}>

        {productData.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}


      </div>

    </section>
  );
}

export default Products;