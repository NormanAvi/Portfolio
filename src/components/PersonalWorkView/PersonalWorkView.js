import HomeProjectSection from "../HomeProjectSection/HomeProjectSection";

import "./PersonalWorkView.css";

const PersonalWorkView = ({ project }) => (
  <article className="personal-work">
    <h1 className="personal-work__title">{project.title}</h1>

    {project.sections.map((section, i) => (
      <HomeProjectSection key={i} project={section} align="left" size="lg" />
    ))}
  </article>
);

export default PersonalWorkView;
