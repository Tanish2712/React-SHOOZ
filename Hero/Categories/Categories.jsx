import "./Categories.css";

import men from "../../../assets/men.jpg";
import women from "../../../assets/women.jpg";
import kid from "../../../assets/kid.jpg";

const categories = [
  {
    id: 1,
    tag: "TRENDING",
    title: "Men",
    image: men,
    bg: "#d5f4f6",
  },
  {
    id: 2,
    tag: "LATEST",
    title: "Women",
    image: women,
    bg: "#ffd6df",
  },
  {
    id: 3,
    tag: "COMFORT",
    title: "Kid",
    image: kid,
    bg: "#e9c88d",
  },
];

export default function Categories() {
  return (
    <section className="category-section">
      <div className="category-wrapper">
        {categories.map((item) => (
          <div
            className="category-card"
            key={item.id}
            style={{ background: item.bg }}
          >
            <div className="category-text">
              <span>{item.tag}</span>

              <h2>
                {item.title}
                <br />
                Collections
              </h2>

              <a href="/">SHOP NOW</a>
            </div>

            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}