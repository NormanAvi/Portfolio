import { useState, useEffect } from "react";
import classNames from "classnames";

import "./SiteHeader.css";

import Header from "./PortfolioBanner.png";
import Signature from "./Norman Avila.png";
import Frame from "./PortfolioGraphics.png";

const SiteHeader = () => {
  const [isScrollPositionOnTop, setIsScrollPositionOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrollPositionOnTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames("siteHeader", {
        small: !isScrollPositionOnTop,
      })}
      style={{
        backgroundImage: `url(${Header})`,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <img className="frame" src={Frame} alt="Norman Avila" />
      <img src={Signature} alt="Norman Avila" />
    </header>
  );
};

export default SiteHeader;
