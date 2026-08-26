import athletic from "../../assets/athletic.jpeg";
import luxury from "../../assets/luxury.jpeg";
import sustainable from "../../assets/sustainable.jpeg";
import sandals from "../../assets/sandals.jpeg";

const shopCategoriesData = [
  {
    id: 1,
    slug: "athletic",
    image: athletic,
    buttonText: {
      title: "Athletic Footwear",
      products: "8 Products",
    },
  },
  {
    id: 2,
    slug: "luxury",
    image: luxury,
    buttonText: {
      title: "Luxury Leather Shoes",
      products: "8 Products",
    },
  },
  {
    id: 3,
    slug: "sustainable",
    image: sustainable,
    buttonText: {
      title: "Sustainable Footwear",
      products: "8 Products",
    },
  },
  {
    id: 4,
    slug: "sandals",
    image: sandals,
    buttonText: {
      title: "Sandals & Slides",
      products: "8 Products",
    },
  },
];

export default shopCategoriesData;