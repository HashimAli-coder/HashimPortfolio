import { useEffect, useRef } from "react";

const CursorCircle = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const { clientX: x, clientY: y } = e;
      const cursor = cursorRef.current;

      if (cursor) {
        cursor.style.transform = `translate3d(${x + 10}px, ${y + 10}px, 0)`; // add offset
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[30px] h-[30px] rounded-full border border-primary shadow-highlight z-[9999] pointer-events-none mix-blend-difference transition-transform duration-150 ease-out"
    />
  );
};

export default CursorCircle;
