"use client";

import Image from "next/image";
import Intro from "@/components/Intro";
import RadialProgress from "@/components/RadialProgress";
import Slides from "@/components/Slides";
import AutoCarousel from "@/components/AutoCarrousel";
import Project from "@/components/Project";

export default function Home() {
  const projects = [
    () => (
      <Project
        title="PSVita JVM"
        description="Una máquina virtual de Java destinada a hacer funcionar versiones antiguas de Minecraft en la PSVita"
        image="/fondo.jpg"
        github="https://github.com/4lwep/mb173vitaJVM"
        details="/projects/cactus"
      />
    ),
    () => (
      <Project
        title="Portfolio"
        description="Esta misma página de portfolio creada usando Next.js y Tailwind"
        image="/fondo.jpg"
        github="https://github.com/tuusuario/portfolio-3d"
        details="/projects/portfolio-3d"
      />
    ),
  ];

  return (
    <main className="grid h-full w-full items-center">
      <Slides components={[<Intro />, <AutoCarousel projects={projects} />]} />
    </main>
  );
}
