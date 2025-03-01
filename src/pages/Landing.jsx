import main from "../assets/images/main.svg";
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from "react-router-dom";
import { Logo } from '../components';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo/>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Travel <span>Tracker</span> app
          </h1>
          <p>
            Welcome to Travel Tracker, where unforgettable adventures
            begin. Whether you're dreaming of sun-kissed beaches, vibrant
            cityscapes, or breathtaking mountain retreats, we make travel
            effortless and extraordinary. Discover handpicked destinations,
            expert tips, and seamless planning—all tailored to your wanderlust.
            Start your journey today!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
      </Wrapper>
  );
};

export default Landing;