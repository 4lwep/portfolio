import AutoCarousel from "./AutoCarrousel";
import Project from "@/components/Project";

export default function Projects() {
  const projects = [
    () => (
      <Project
        title="PSVita JVM"
        description="Una máquina virtual de Java destinada a hacer funcionar versiones antiguas de Minecraft en la PSVita"
        image="/vita.webp"
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
    <div
      id="projects"
      className="flex flex-col items-center h-full justify-center gap-20 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100"
    >
      <h1 className="text-3xl">Mis proyectos</h1>
      <AutoCarousel projects={projects} />
    </div>
  );
}
