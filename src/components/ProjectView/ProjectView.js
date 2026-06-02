import { useState } from "react";

import Lightbox from "../Lightbox/Lightbox";

import arrow from "../../assets/2026/ui/Arrow.png";

import "./ProjectView.css";

const ProjectView = ({ project }) => {
  const gallery = project.gallery || [];
  const [openIndex, setOpenIndex] = useState(null);

  const prev = () =>
    setOpenIndex((i) => (i - 1 + gallery.length) % gallery.length);
  const next = () => setOpenIndex((i) => (i + 1) % gallery.length);

  return (
    <article className="project">
      <header className="project__head">
        <h1 className="project__title">{project.title}</h1>
        {project.link && (
          <a
            className="game-link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            CHECK THIS GAME!
            <img src={arrow} alt="" className="game-link__arrow" />
          </a>
        )}
      </header>

      {project.studio && <p className="project__studio">{project.studio}</p>}
      {project.disciplines && (
        <p className="project__disciplines">{project.disciplines}</p>
      )}

      <div className="project__gallery">
        {gallery.map((img, i) => (
          <button
            key={i}
            type="button"
            className="project__thumb"
            style={{ animationDelay: `${i * 0.06}s` }}
            onClick={() => setOpenIndex(i)}
          >
            <img src={img} alt="" />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={gallery}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </article>
  );
};

export default ProjectView;
