import "./ShopCategories.css";
import { Link } from "react-router-dom";
import shopCategoriesData from "./ShopCategories.js";

function ShopCategories() {
  return (
    <section className="shopCategories">

      <div className="shopCategories__container">

        <div className="shopCategories__heading">

          <span>SHOP BY CATEGORY</span>

          <h2>Boots & Booties</h2>

          <p>
            Explore our premium footwear collections for every lifestyle.
          </p>

        </div>

        <div className="shopCategories__grid">

          {shopCategoriesData.map((item) => (

            <div className="shopCategoryCard" key={item.id}>

              <div className="shopCategoryCard__image">

                <img
                  src={item.image}
                  alt={item.buttonText.title}
                />

                <Link
                  to={`/category/${item.slug}`}
                  className="shopCategoryBtn"
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "maroon";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "black";
                  }}
                >

                  <h3>{item.buttonText.title}</h3>

                  <span>{item.buttonText.products}</span>

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ShopCategories;