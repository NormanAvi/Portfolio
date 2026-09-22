import { useSearchParams } from "react-router-dom";

import ProjectView from "../../components/ProjectView/ProjectView";
import PersonalWorkView from "../../components/PersonalWorkView/PersonalWorkView";
import projects from "../../data/projects";

import "./Portfolio.css";

const Portfolio = () => {
  const [params, setParams] = useSearchParams();
  const selected = projects.find((p) => p.id === params.get("p"));

  const openProject = (id) => {
    setParams({ p: id });
    window.scrollTo(0, 0);
  };

  if (selected) {
    if (selected.sections) {
      return <PersonalWorkView project={selected} />;
    }
    return <ProjectView project={selected} />;
  }

  return (
    <>
      <p className="works-intro">Check out the projects I’ve worked on!</p>
      <div className="grid">
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            className="card"
            style={{ animationDelay: `${index * 0.07}s` }}
            onClick={() => openProject(project.id)}
          >
            <img src={project.cover} alt={project.title} className="card__img" />
            <span className="card__title">{project.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
