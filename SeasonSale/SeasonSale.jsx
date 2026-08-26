import { useEffect, useRef } from "react";
import "./SeasonSale.css";
import seasonSaleData from "./productData";

/**
 * Single product row: image on the left, name + price on the right.
 * Rendered via map() below so the grid stays fully data-driven.
 */
function ProductRow({ product, index, rowRef }) {
  return (
    <div
      className="ss-product-row"
      ref={rowRef}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="ss-product-image-wrap">
        <img
          className="ss-product-image"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>

      <div className="ss-product-info">
        <h3 className="ss-product-name">{product.name}</h3>
        <span className="ss-product-price">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}

function SeasonSale() {
  const headingRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ss-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    rowRefs.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="season-sale" aria-labelledby="ss-heading">
      <div className="ss-container">
        <div className="ss-heading" ref={headingRef}>
          <span className="ss-subtitle">Season&rsquo;s End Sale</span>

          <h2 id="ss-heading" className="ss-title">
            Huge discounts on last season&rsquo;s styles
          </h2>

          <p className="ss-description">
            Himenaeos nascetur tristique consequat mus ad.
            <br />
            Accumsan fringilla in laoreet id bibendum et.
          </p>
        </div>

        <div className="ss-grid">
          {seasonSaleData.map((product, index) => (
            <ProductRow
              key={product.id}
              product={product}
              index={index}
              rowRef={(el) => (rowRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeasonSale;
