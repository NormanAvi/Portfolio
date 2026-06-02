import banner from "../../assets/2026/ui/SideBanner.png";
import iconMail from "../../assets/2026/ui/Icon_Mail.png";
import iconIg from "../../assets/2026/ui/Icon_IG.png";
import iconBs from "../../assets/2026/ui/Icon_BS.png";

import "./SideBanner.css";

const SideBanner = () => (
  <aside className="side-banner">
    <img src={banner} alt="" className="side-banner__img" />
    <div className="side-banner__name">NORMAN ÁVILA</div>
    <p className="side-banner__tagline">
      GENERAL ARTIST FOCUSED ON VIDEOGAME DEVELOPMENT.
    </p>
    <div className="side-banner__contact">
      <span className="side-banner__contact-label">CONTACT ME!</span>
      <div className="side-banner__icons">
        <a href="mailto:" aria-label="Mail">
          <img src={iconMail} alt="Mail" />
        </a>
        <a
          href="https://www.instagram.com/normanavi_art"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <img src={iconIg} alt="Instagram" />
        </a>
        <a
          href="https://bsky.app/profile/normanavi-art.bsky.social"
          target="_blank"
          rel="noreferrer"
          aria-label="Bluesky"
        >
          <img src={iconBs} alt="Bluesky" />
        </a>
      </div>
    </div>
  </aside>
);

export default SideBanner;
