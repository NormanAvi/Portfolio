import banner from "../../assets/2026/phone/MobileBanner.png";

import "./MobileBanner.css";

const MobileBanner = () => (
  <div className="mobile-banner">
    <img src={banner} alt="" className="mobile-banner__img" />
    <div className="mobile-banner__name">NORMAN ÁVILA</div>
    <p className="mobile-banner__tagline">
      GENERAL ARTIST FOCUSED ON VIDEOGAME DEVELOPMENT.
    </p>
  </div>
);

export default MobileBanner;
