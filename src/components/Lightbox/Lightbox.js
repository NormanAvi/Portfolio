import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

import "./Lightbox.css";

const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return createPortal(
    <div className="lightbox">
      <div className="lightbox__backdrop" onClick={onClose} />

      <div className="lightbox__stage">
        <img src={images[index]} alt="" className="lightbox__img" />

        <button
          className="lightbox__arrow lightbox__arrow--prev"
          onClick={onPrev}
          aria-label="Previous"
        />
        <button
          className="lightbox__arrow lightbox__arrow--next"
          onClick={onNext}
          aria-label="Next"
        />

        <button
          className="lightbox__close"
          onClick={onClose}
          aria-label="Close"
        />
      </div>
    </div>,
    document.body
  );
};

export default Lightbox;
