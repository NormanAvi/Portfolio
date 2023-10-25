import { Link } from "react-router-dom";
import categories from "../images";

import "./Work.css";

const Work = () => (
  <>
    {categories.map((category) => (
      <section className="imageCategory" key={category.folder}>
        <h2>{category.name}</h2>
        <div className="images">
          {category.images.map((image) => (
            <div
              className="image"
              style={{
                backgroundImage: `url(./images/${category.folder}/${image.id}/${image.thumbnail})`,

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
