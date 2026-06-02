import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import iconMail from "../../assets/2026/phone/Icon_Mail.png";
import iconIg from "../../assets/2026/phone/Icon_IG.png";
import iconBs from "../../assets/2026/phone/Icon_BS.png";
import iconBar from "../../assets/2026/phone/IconBar.png";

import "./MobileMenu.css";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="mobile-menu">
      <button
        className={`mobile-menu__btn ${open ? "is-open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
      />

      {open && (
        <div className="mobile-menu__overlay">
          <div className="mobile-menu__backdrop" onClick={close} />
          <nav className="mobile-menu__panel">
            <NavLink to="/" end onClick={close} className="mobile-menu__link">
              PORTFOLIO
            </NavLink>
            <NavLink to="/resume" onClick={close} className="mobile-menu__link">
              RESUME
            </NavLink>

            <img src={iconBar} alt="" className="mobile-menu__divider" />

            <span className="mobile-menu__contact">CONTACT ME!</span>
            <div className="mobile-menu__icons">
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
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
