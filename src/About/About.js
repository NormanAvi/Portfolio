import "./About.css";

import ProfilePicture from "./PortfolioAbout.png";

const About = () => {
  return (
    <div className="about">
      <div className="columns">
        <div className="heading">
          <h1>Hi, I’m Norman!</h1>
        </div>
        <div className="info">
          <p style={{ textAlign: "justify" }}>
            I am a mexican digital artist who enjoys creating illustrations in
            which I can express my ideas and creativity. What I like to do the
            most is character design, either as fanart or my own.
          </p>
          <p style={{ textAlign: "justify" }}>
            I actually studied mechatronics, and I have developed my passion for
            art since I was very young as a hobby. In the future I would like to
            be able to create projects in which I can combine both areas, since
            I believe that there is great potential in being able to make
            artistic ideas come true through technology and engineering
            principles.
          </p>
        </div>
        <div className="profile">
          <img
            className="profilePicture"
            src={ProfilePicture}
            alt="Norman Avila"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
