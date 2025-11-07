"use client";

import Intro from "./Intro";
import RadialProgress from "./RadialProgress";

function Slides({ components }) {
  return (
    <div className="relative">
      {components.map((component, index) => (
        <div
          key={index}
          className="sticky top-0 h-screen flex flex-col justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white"
        >
          {component}
        </div>
      ))}
    </div>
  );
}

export default Slides;
