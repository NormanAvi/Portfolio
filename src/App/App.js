import { useEffect } from "react";
import { Routes, Route, useLocation, useSearchParams } from "react-router-dom";

import TopNav from "../components/TopNav/TopNav";
import SideBanner from "../components/SideBanner/SideBanner";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import MobileBanner from "../components/MobileBanner/MobileBanner";
import CustomScrollbar from "../components/CustomScrollbar/CustomScrollbar";
import BackToTop from "../components/BackToTop/BackToTop";
import Portfolio from "../pages/Portfolio/Portfolio";
import Resume from "../pages/Resume/Resume";

import projects from "../data/projects";
import experience from "../data/resume";

import bgTexture from "../assets/2026/ui/BG_Texture.png";
import bulletActive from "../assets/2026/ResumePage/Bullet_Active.png";
import bulletInactive from "../assets/2026/ResumePage/Bullet_Inactive.png";

import "./App.css";

const warm = (src) => {
  const img = new Image();
  img.src = src;
};

const App = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const showMobileBanner =
    location.pathname === "/" && !searchParams.get("p");

  useEffect(() => {
    projects.forEach((p) => warm(p.cover));
    experience.forEach((job) =>
      (job.logos || []).forEach((logo) => logo.img && warm(logo.img))
    );
    warm(bulletActive);
    warm(bulletInactive);

    const timer = setTimeout(() => {
      projects.forEach((p) => (p.gallery || []).forEach(warm));
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <div
        className="bg-texture"
        style={{ backgroundImage: `url(${bgTexture})` }}
      />
      <TopNav />
      <SideBanner />
      <MobileMenu />
      <main className="page">
        {showMobileBanner && <MobileBanner />}
        <div className="content">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </main>
      <CustomScrollbar />
      <BackToTop />
    </div>
  );
};

export default App;
