import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import SortBar from "../components/SortBar/SortBar";
import { ShopContext } from "../context/ShopContext";
import "./CategoryPage.css";

function CategoryPage() {
  const { slug } = useParams();
  const { setActiveCategory } = useContext(ShopContext);

  useEffect(() => {
    setActiveCategory(slug || "All");
  }, [slug, setActiveCategory]);

  return (
    <section className="categoryPage">
      <CategoryBanner />
      <SortBar />

      <div className="categoryPage__container">
        <FilterSidebar />
        <ProductGrid />
      </div>
    </section>
  );
}

export default CategoryPage;