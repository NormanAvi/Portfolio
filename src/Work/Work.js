import { Link } from "react-router-dom";

import test from "../Others/base.png";
import "./Work.css";
const categories = [
  {
    name: "Cartoon Illustrations",
    folder: "cartoon-ilustrations",
    images: [
      {
        id: "TOKCosplay",
        name: "Tears of kingdom cosplay",
        thumbnail: "base.png",
      },
      {
        id: "CharacterStudy1",
        name: "Character Study 1",
        thumbnail: "base.png",
      },
      {
        id: "Kallopzi",
        name: "Kallopzi Cover",
        thumbnail: "base.png",
      },
      {
        id: "Exploring",
        name: "Exploring",
        thumbnail: "base.png",
      },
      {
        id: "Pochita",
        name: "Pochita!",
        thumbnail: "base.png",
      },
      {
        id: "Arceus",
        name: "Legends Arceus Team",
        thumbnail: "base.png",
      },
      {
        id: "KallopziChar",
        name: "Kallopzi Characters",
        thumbnail: "base.png",
      },
      {
        id: "CharacterStudy2",
        name: "Character Study 2",
        thumbnail: "base.png",
      },
    ],
  },
  {
    name: "Semi-realism",
    folder: "semi-realism",
    images: [
      {
        id: "Matraka",
        name: "Matraka",
        thumbnail: "base.png",
      },
      {
        id: "AsItWas",
        name: "As It Was",
        thumbnail: "base.png",
      },
      {
        id: "Queen",
        name: "Flowers",
        thumbnail: "base.png",
      },
      {
        id: "Flowers",
        name: "Queen of Queens",
        thumbnail: "base.png",
      },
    ],
  },
  {
    name: "Videogame Art",
    folder: "videogame-art",
    images: [
      {
        id: "KALogo",
        name: "K.A Logo",
        thumbnail: "base.png",
      },
      {
        id: "KACover",
        name: "K.A Cover",
        thumbnail: "base.png",
      },
      {
        id: "KAIcons",
        name: "K.A Icons",
        thumbnail: "base.png",
      },
      {
        id: "Portfolio",
        name: "Portfolio Banner",
        thumbnail: "base.png",
      },
    ],
  },
];

const Work = () => (
  <>
    {categories.map((category) => (
      <section className="imageCategory" key={category.folder}>
        <h2>{category.name}</h2>
        <div className="images">
          {category.images.map((image) => (
            <div
              key={image.id}
              className="image"
              to={`/works/${category.folder}/${image.id}/`}
              style={{
                backgroundImage: `url(${test})`,
                ...(image.backgroundPosition && {
                  backgroundPosition: image.backgroundPosition,
                }),
              }}
            >
              <div className="overlay">
                <span>{image.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    ))}
  </>
);

export default Work;
