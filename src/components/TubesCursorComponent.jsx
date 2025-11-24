import React, { useEffect, useRef } from "react";

const loadTubesCursor = () =>
  import(
    "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
  ).then((m) => m.default || m);

const randomColors = (count) =>
  [...Array(count)].map(
    () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
  );

const TubesCursorComponent = () => {
  const canvasRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    let clean = false;

    loadTubesCursor().then((TubesCursor) => {
      if (clean) return;

      appRef.current = TubesCursor(canvasRef.current, {
        tubes: {
          colors: ["#f967fb", "#53bc28", "#6958d5"],
          lights: {
            intensity: 200,
            colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
          },
        },
      });
    });

    return () => (clean = true);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* 🔥 ALWAYS VISIBLE RED BACKGROUND */}
      <div
        style={{
          background: "red",
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      />

      {/* 🔥 Tubes cursor on top but BLACK TRANSPARENT using blend mode */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          mixBlendMode: "lighten", // remove black background
        }}
      />
    </div>
  );
};

export default TubesCursorComponent;
