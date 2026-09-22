import { useState } from "react";

import Lightbox from "../Lightbox/Lightbox";

import "./HomeProjectSection.css";

const HomeProjectSection = ({ project }) => {
  const gallery = project.gallery || [];
  const [openIndex, setOpenIndex] = useState(null);

  const prev = () =>
    setOpenIndex((i) => (i - 1 + gallery.length) % gallery.length);
  const next = () => setOpenIndex((i) => (i + 1) % gallery.length);

  return (
    <section className="home-project">
      <h2 className="home-project__title">{project.title}</h2>
      {project.disciplines && (
        <p className="home-project__disciplines">{project.disciplines}</p>
      )}
      {project.description && (
        <p className="home-project__description">{project.description}</p>
      )}

      <div className="home-project__gallery">
        {gallery.map((img, i) => (
          <button
            key={i}
            type="button"
            className="home-project__thumb"
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
    </section>
  );
};

export default HomeProjectSection;
