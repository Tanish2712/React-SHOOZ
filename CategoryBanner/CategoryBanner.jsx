import "./CategoryBanner.css";
import { useParams } from "react-router-dom";
import shopCategoriesData from "..//ShopCategories/ShopCategories.js";

function CategoryBanner() {
  const { slug } = useParams();

  const category = shopCategoriesData.find(
    (item) => item.slug === slug
  );

  return (
    <section className="categoryBanner">
      <img
        src={category?.image}
        alt={category?.buttonText.title}
        className="categoryBanner__image"
      />

      <div className="categoryBanner__overlay">
        <span>HOME / SHOP</span>

        <h1>{category?.buttonText.title}</h1>
      </div>
    </section>
  );
}

export default CategoryBanner;