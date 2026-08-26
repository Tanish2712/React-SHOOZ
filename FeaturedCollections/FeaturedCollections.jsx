import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./FeaturedCollections.css";
import featuredCollectionsData from "./featuredCollectionsData";

/**
 * Single collection card. Kept internal to this file since it isn't
 * reused outside FeaturedCollections, but split out as its own function
 * so the render loop below stays clean.
 */
function CollectionCard({ item, index, cardRef }) {
  return (
    <article
      className={`fc-card fc-card-${index + 1}`}
      ref={cardRef}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <Link to={item.link} className="fc-card-link" aria-label={item.title}>
        <img
          className="fc-card-image"
          src={item.image}
          alt={item.title}
          loading="lazy"
        />

        <div className="fc-card-overlay" />

        <div className="fc-card-content">
          <span className="fc-card-subtitle">{item.subtitle}</span>
          <h3 className="fc-card-title">{item.title}</h3>
          <span className="fc-card-cta">{item.buttonText}</span>
        </div>
      </Link>
    </article>
  );
}

function FeaturedCollections() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fc-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="featured-collections" aria-labelledby="fc-heading">
      <div className="fc-heading">
        <span className="fc-eyebrow">Fashion Sneakers</span>
        <h2 id="fc-heading" className="fc-title">
          Timeless styles for everyday wear
        </h2>
        <p className="fc-description">
          High-performance footwear for sports and workouts
        </p>
      </div>

      <div className="fc-grid">
        {featuredCollectionsData.map((item, index) => (
          <CollectionCard
            key={item.id}
            item={item}
            index={index}
            cardRef={(el) => (cardRefs.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedCollections;
