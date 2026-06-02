import experience from "../../data/resume";

import bulletActive from "../../assets/2026/ResumePage/Bullet_Active.png";
import bulletInactive from "../../assets/2026/ResumePage/Bullet_Inactive.png";

import "./Resume.css";

const Resume = () => (
  <div className="resume">
    <h1 className="resume__title">MY WORK EXPERIENCE</h1>

    <div className="timeline">
      {experience.map((job, i) => {
        const active = job.period.includes("PRESENT");
        return (
          <div
            className="tl-item"
            key={i}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <img
              src={active ? bulletActive : bulletInactive}
              alt=""
              className="tl-bullet"
            />
            <div
              className={`tl-card ${
                job.logos ? "tl-card--large" : "tl-card--small"
              }`}
            >
              <span className="tl-date">{job.period}</span>
              <h2 className="tl-company">{job.company}</h2>
              <p className="tl-role">{job.role}</p>
              {job.logos && (
                <div className="tl-logos">
                  <span className="tl-logos__label">{job.logosLabel}</span>
                  <div className="tl-logos__list">
                    {job.logos.map((logo, j) =>
                      logo.img ? (
                        <img key={j} src={logo.img} alt={logo.alt} />
                      ) : (
                        <span key={j} className="tl-logos__text">
                          {logo.text}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Resume;
