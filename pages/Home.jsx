import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import ShopCategories from "../components/ShopCategories/ShopCategories.jsx";
import FeaturedCollections from "../components/FeaturedCollections/FeaturedCollections";
import SeasonSale from "../components/SeasonSale/SeasonSale";
import PopularStyles from "../components/PopularStyles/PopularStyles";
import FeedbackSection from "../components/FeedbackSection/FeedbackSection";
import BlogSection from "../components/BlogSection/BlogSection";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Products />
      <PromoBanner />
      <ShopCategories />
      <FeaturedCollections />
      <SeasonSale />
      <PopularStyles />
      <FeedbackSection />
      <BlogSection />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;