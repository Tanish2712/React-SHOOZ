import { useState } from "react";
import "./Newsletter.css";
import newsletterImg from "../../assets/newsletter.jpeg";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setMessage("Please enter your email.");
      return;
    }

    setMessage("🎉 Thank you for subscribing!");
    setEmail("");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <section className="newsletter">
      <div className="newsletter-left">
        <span>Subscribe to our news</span>

        <h2>ARTICLES</h2>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">SUBSCRIBE</button>
        </form>

        {message && <p className="success-message">{message}</p>}
      </div>

      <div className="newsletter-right">
        <img src={newsletterImg} alt="Shoe" />
      </div>
    </section>
  );
}

export default Newsletter;