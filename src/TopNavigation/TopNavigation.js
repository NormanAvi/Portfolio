import MailIcon from "./mail.svg";
import FacebookIcon from "./facebook.svg";
import InstagramIcon from "./instagram.svg";
import LinkedInIcon from "./linkedin.svg";

import "./TopNavigation.css";

const TopNavigation = ({ toggleDarkMode, isDarkMode }) => (
  <nav className="topNavigation">
    <button className="darkModeToggle" onClick={toggleDarkMode}>
      <div
        className={`darkModeToggleButton ${isDarkMode ? "on" : "off"}`}
      ></div>
      <span>{isDarkMode ? "Dark mode Off" : "Dark mode On"}</span>
    </button>
    <ul>
      <li>
        <a
          href="mailto:norman.avimar@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={MailIcon} alt="Send me an email" />
        </a>
      </li>
    </ul>
  </nav>
);

export default TopNavigation;
