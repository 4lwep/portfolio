"use client";

import Image from "next/image";
import Intro from "@/components/Intro";
import Slides from "@/components/Slides";
import AutoCarousel from "@/components/AutoCarrousel";
import Project from "@/components/Project";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="grid h-full w-full items-center">
      <Slides components={[<Intro />, <Projects />]} />
    </main>
  );
}
