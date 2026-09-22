import HomeProjectSection from "../../components/HomeProjectSection/HomeProjectSection";
import homeProjects from "../../data/homeProjects";

import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <p className="main-page__intro">
        Hi there! My name is Norman Ávila, I’m an art generalist from México
        working in the videogame industry. I have professional experience
        designing UI/UX systems, working on visual development and creating
        2D assets.
        <br />
        <br />
        I work well in small teams where a broad skill set is required to
        cover various areas. However, I am also a detail-oriented person, and
        I appreciate the opportunity to work on a specific task, paying
        attention to every detail.
      </p>

      {homeProjects.map((project) => (
        <HomeProjectSection key={project.id} project={project} />
      ))}
    </div>
  );
};

export default MainPage;
