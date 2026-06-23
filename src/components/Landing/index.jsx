import { Link } from "react-router";
import kitchenHero from "../../assets/kitchen-hero.jpg";
import "./index.css";

function Landing() {
  return (
    <section className="landing-hero mb-2">
      <div className="hero-text">
        <h1>Upgrade Your Kitchen Setup</h1>
        <p>
          Beautiful, practical kitchen essentials designed for everyday cooking.
        </p>

        <Link to="/products" className="btn hero-btn">
          Shop Collection
        </Link>
      </div>

      <div className="hero-image">
        <img src={kitchenHero} alt="Kitchen products" />
      </div>
    </section>
  );
}

export default Landing;
