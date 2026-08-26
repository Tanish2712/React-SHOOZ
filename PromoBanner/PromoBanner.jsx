import "./PromoBanner.css";
import bannerImage from "../../assets/promo-banner.jpg.jpeg";

function PromoBanner() {
    return (
        <>
            <section className="promoBanner">
                <div className="promoBanner__container">

                    {/* Banner Image */}
                    <div className="promoBanner__image">
                        <img src={bannerImage} alt="Comfort Shoes" />
                    </div>

                    {/* Content */}
                    <div className="promoBanner__content">

                        <span className="promoBanner__subtitle">
                            COMFORT MEETS FASHION
                        </span>

                        <h2 className="promoBanner__title">
                            Discover shoes that look
                            <br />
                            great and feel even
                            <br />
                            better
                        </h2>

                        <p className="promoBanner__text">
                            Our collection features comfortable and stylish footwear
                            designed to keep your feet happy all day long.
                        </p>

                        <button className="promoBanner__btn">
                            SHOP NOW
                            <span className="promoBanner__arrow">→</span>
                        </button>

                    </div>

                </div>
            </section>

            {/* Scrolling Offer Bar */}
            <section className="promoOfferBar">
                <div className="promoOfferTrack">

                    {/* First Set */}
                    <span>Get 15% off your first purchase. Use code <strong>NEWSHOES15</strong></span>
                    <span className="promoDot">•</span>

                    <span>Buy one pair, get the second pair 50% off. Use code <strong>BOGO50</strong></span>
                    <span className="promoDot">•</span>

                    <span>Enjoy 20% off your order. Use code <strong>SHOEFRESH20</strong></span>
                    <span className="promoDot">•</span>

                    {/* Duplicate Set */}
                    <span>Get 15% off your first purchase. Use code <strong>NEWSHOES15</strong></span>
                    <span className="promoDot">•</span>

                    <span>Buy one pair, get the second pair 50% off. Use code <strong>BOGO50</strong></span>
                    <span className="promoDot">•</span>

                    <span>Enjoy 20% off your order. Use code <strong>SHOEFRESH20</strong></span>
                    <span className="promoDot">•</span>

                </div>
            </section>
        </>
    );
}

export default PromoBanner;