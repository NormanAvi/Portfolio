import { NavLink } from "react-router-dom";

import "./TopNav.css";

const TopNav = () => (
  <nav className="top-nav">
    <NavLink to="/" end className="top-nav__link">
      PORTFOLIO
    </NavLink>
    <NavLink to="/resume" className="top-nav__link">
      RESUME
    </NavLink>
  </nav>
);

export default TopNav;
