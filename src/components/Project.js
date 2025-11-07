// components/Project.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  image,
  github,
  details,
}) {
  return (
    <div className="max-w-md w-full bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200 text-sm mb-4">{description}</p>

      <div className="flex gap-4">
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg hover:bg-black/60 transition-colors"
        >
          GitHub
        </Link>
        <Link
          href={details}
          className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}
