import { useEffect, useRef, useState } from "react";

import "./CustomScrollbar.css";

const CustomScrollbar = () => {
  const trackRef = useRef(null);
  const dragRef = useRef(null);
  const [thumb, setThumb] = useState({ height: 0, top: 0, visible: false });

  useEffect(() => {
    const update = () => {
      const track = trackRef.current;
      if (!track) return;
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const trackH = track.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll <= 1) {
        setThumb({ height: 0, top: 0, visible: false });
        return;
      }
      const height = Math.max((clientHeight / scrollHeight) * trackH, 40);
      const top = (scrollTop / maxScroll) * (trackH - height);
      setThumb({ height, top, visible: true });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const onPointerMove = (e) => {
    const d = dragRef.current;
    if (!d) return;
    const delta = e.clientY - d.startY;
    const ratio = d.maxScroll / (d.trackH - d.thumbH);
    window.scrollTo(0, d.startScroll + delta * ratio);
  };

  const onPointerUp = () => {
    dragRef.current = null;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  };

  const onPointerDown = (e) => {
    e.preventDefault();
    dragRef.current = {
      startY: e.clientY,
      startScroll: window.scrollY,
      trackH: trackRef.current.clientHeight,
      thumbH: thumb.height,
      maxScroll: document.documentElement.scrollHeight - window.innerHeight,
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  return (
    <div className="scrollbar" style={{ opacity: thumb.visible ? 1 : 0 }}>
      <div className="scrollbar__track" ref={trackRef} />
      <div
        className="scrollbar__thumb"
        style={{ height: thumb.height, transform: `translateY(${thumb.top}px)` }}
        onPointerDown={onPointerDown}
      />
    </div>
  );
};

export default CustomScrollbar;
