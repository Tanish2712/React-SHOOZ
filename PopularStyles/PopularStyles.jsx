import "./PopularStyles.css";
import popularShoes from "../../assets/popular-shoes.jpg";

function PopularStyles() {
  return (
    <section className="popularStyles">
      <div className="popularContainer">

        {/* LEFT SIDE */}

        <div className="popularLeft">

          <span className="sectionTag">
            OUR MOST POPULAR STYLES
          </span>

          <h2 className="popularTitle">
            Save big on shoes
            <br />
            from last season
          </h2>

          <p className="popularText">
            Morbi natoque id finibus natoque sapien turpis elementum
            maximus. Sociosqu auctor a urna consequat laoreet nisi
            accumsan magna. Adipiscing vulputate nec euismod, a aliquam
            enim. Mi facilisi ex est habitant lacus sagittis vitae.
          </p>

          <p className="popularText">
            Molestie dolor mus vitae penatibus sed lectus convallis ut
            neque. Leo elementum euismod penatibus cras sociosqu aliquet
            tellus.
          </p>

          <button className="shopBtn">
            SHOP NOW →
          </button>

        </div>

        {/* RIGHT SIDE */}

        <div className="popularRight">

          <img
            src={popularShoes}
            alt="Popular Shoes"
            className="popularImage"
          />

          {/* Rotating Text */}

          <div className="circleText">

            <svg viewBox="0 0 200 200">

              <defs>

                <path
                  id="circlePath"
                  d="M100,100
             m-70,0
             a70,70 0 1,1 140,0
             a70,70 0 1,1 -140,0"
                />

              </defs>

              <text>

                <textPath href="#circlePath">

                  FASHION STYLE STORE 

                </textPath>

              </text>

            </svg>

          </div>

          {/* Play Button */}

          <div className="playCircle">

            <div className="playBtn">
              ▶
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PopularStyles;