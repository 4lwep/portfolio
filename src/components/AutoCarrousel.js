"use client";

import { useEffect, useState } from "react";

export default function AutoCarousel({ projects = [] }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  if (!projects.length) {
    return (
      <p className="text-center text-gray-500">No hay proyectos disponibles.</p>
    );
  }

  return (
    <div className="relative w-full h-64 md:h-96 rounded-xl">
      {projects.map((ProjectComponent, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out flex items-center justify-center ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Render del componente */}
          <ProjectComponent />
        </div>
      ))}

      {/* Botones de navegación */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-50"
      >
        ❮
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-50"
      >
        ❯
      </button>
    </div>
  );
}
