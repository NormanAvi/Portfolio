import { Link } from "react-router-dom";

import base from "../Others/cartoon-ilustrations/base.png";
import base1 from "../Others/cartoon-ilustrations/base1.png";
import base2 from "../Others/cartoon-ilustrations/base2.png";
import base3 from "../Others/cartoon-ilustrations/base3.png";
import base4 from "../Others/cartoon-ilustrations/base4.png";
import base5 from "../Others/cartoon-ilustrations/base5.png";
import base6 from "../Others/cartoon-ilustrations/base6.png";
import base7 from "../Others/cartoon-ilustrations/base7.png";

import Sbase from "../Others/semi-realism/Sbase.png";
import Sbase1 from "../Others/semi-realism/Sbase1.png";
import Sbase2 from "../Others/semi-realism/Sbase2.png";
import Sbase3 from "../Others/semi-realism/Sbase3.png";

import Vbase from "../Others/videogame-art/Vbase.png";
import Vbase1 from "../Others/videogame-art/Vbase1.png";
import Vbase2 from "../Others/videogame-art/Vbase2.png";
import Vbase3 from "../Others/videogame-art/Vbase3.png";

import "./Work.css";

const Work = () => (
  <div>
    <section className="imageCategory">
      <h2>Cartoon Illustrations</h2>
      <div className="images">
        <div
          className="image"
          style={{
            backgroundImage: `url(${base7})`,
          }}
        >
          <div className="overlay">
            <span>TOK Cosplay</span>
          </div>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${base1})`,
          }}
        >
          <div className="overlay">
            <span>Character Study I</span>
          </div>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${base4})`,
          }}
        >
          <div className="overlay">
            <span>Kallopzi Cover</span>
          </div>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${base3})`,
          }}
        >
          <div className="overlay">
            <span>Exploring</span>
          </div>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${base6})`,
          }}
        >
          <div className="overlay">
            <span>Pochita!</span>
          </div>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${base})`,
          }}
        >
          <div className="overlay">
            <span>Legends Arceus Team</span>
          </div>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${base5})`,
          }}
        >
          <div className="overlay">
            <span>Kallopzi Characters</span>
          </div>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${base2})`,
          }}
        >
          <div className="overlay">
            <span>CharacterStudy II</span>
          </div>
        </div>
      </div>
    </section>
    <section className="imageCategory">
      <h2>Semi Realism</h2>
      <div className="images">
        <div
          className="image"
          style={{
            backgroundImage: `url(${Sbase2})`,
          }}
        >
          <div className="overlay">
            <span>Matraka</span>
          </div>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${Sbase})`,
          }}
        >
          <div className="overlay">
            <span>As It Was</span>
          </div>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${Sbase1})`,
          }}
        >
          <div className="overlay">
            <span>Queen of Queens</span>
          </div>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${Sbase3})`,
          }}
        >
          <div className="overlay">
            <span>Flowers</span>
          </div>
        </div>
      </div>
    </section>
    <section className="imageCategory">
      <h2>Videogame Art</h2>
      <div className="images">
        <div
          className="image"
          style={{
            backgroundImage: `url(${Vbase2})`,
          }}
        >
          <div className="overlay">
            <span>K.A Logo</span>
          </div>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${Vbase})`,
          }}
        >
          <div className="overlay">
            <span>K.A Cover</span>
          </div>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${Vbase1})`,
          }}
        >
          <div className="overlay">
            <span>K.A Icons</span>
          </div>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${Vbase3})`,
          }}
        >
          <div className="overlay">
            <span>Portfolio Banner</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Work;
