import "./Hero.scss";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image"></div>
      <div className="hero__content">
        <div className="hero__title">
          <h1>Modern clothes that talk on behalf of you</h1>
        </div>
        <Link to="/pages/shop">
          <Button className="btn-dark">shop now</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
