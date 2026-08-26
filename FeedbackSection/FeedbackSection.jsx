import "./FeedbackSection.css";

import brand1 from "../../assets/brands/brand1.jpg";
import brand2 from "../../assets/brands/brand2.jpg";
import brand3 from "../../assets/brands/brand3.jpg";
import brand4 from "../../assets/brands/brand4.jpg";
import brand5 from "../../assets/brands/brand5.jpg";
import brand6 from "../../assets/brands/brand6.jpg";
import brand7 from "../../assets/brands/brand7.jpg";
import brand8 from "../../assets/brands/brand8.jpg";
import brand9 from "../../assets/brands/brand9.jpg";
import brand10 from "../../assets/brands/brand10.jpg";

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
];

function FeedbackSection() {
  return (
    <>
      <section className="store-banner">
        <h2>Discover Our Stores: Your Local Shoe Haven</h2>

        <button>FIND STORE</button>
      </section>

      <section className="feedback">

        <h1>Customer Feedback Highlights</h1>

        <p>
          Laoreet ridiculus congue magna malesuada
          <br />
          phasellus condimentum taciti mus primis.
        </p>

        <div className="brand-grid">
          {brands.map((item, index) => (
            <div className="brand-card" key={index}>
              <img src={item} alt="brand" />
            </div>
          ))}
        </div>

      </section>
    </>
  );
}

export default FeedbackSection;