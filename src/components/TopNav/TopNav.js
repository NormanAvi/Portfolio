import { NavLink } from "react-router-dom";

import "./TopNav.css";

const TopNav = () => (
  <nav className="top-nav">
    <NavLink to="/" end className="top-nav__link">
      MAIN PAGE
    </NavLink>
    <NavLink to="/works" className="top-nav__link">
      WORKS
    </NavLink>
    <NavLink to="/resume" className="top-nav__link">
      RESUME
    </NavLink>
  </nav>
);

export default TopNav;
