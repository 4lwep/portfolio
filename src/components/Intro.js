"use client";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition duration-700"></div>
        <div className="relative overflow-hidden rounded-full ring-2 ring-zinc-800 group-hover:ring-emerald-500/40 transition-all duration-500">
          <Image
            className="rounded-full grayscale group-hover:grayscale-0 transition-all duration-700"
            src="/profile1.jpg"
            alt="Alfredo Vergillos Ruiz"
            width={300}
            height={300}
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] opacity-20 mix-blend-overlay animate-pulse"></div>
        </div>
      </div>

      <div className="flex flex-col gap-8 max-w-2xl text-center md:text-left">
        <div className="space-y-3">
          <p className="text-sm font-mono text-emerald-400 tracking-widest">
            &gt; init sequence loaded
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Alfredo Vergillos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mt-2">
              Developer // Systems Enthusiast
            </span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
          "Del frontend al metal. Construyo aplicaciones web con React y exploro
          sistemas de bajo nivel con C. Actualmente: una JVM para consolas de
          videojuegos. Programar es mi forma de entender cómo funciona todo."
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
          <Link href="#projects">
            <button className="px-8 py-3 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
              Ver Proyectos
            </button>
          </Link>
          <button className="px-8 py-3 bg-zinc-800/50 hover:bg-zinc-700/60 border border-zinc-600 text-zinc-200 font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]">
            Contactar
          </button>
        </div>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
          {[
            "React",
            "Next.js",
            "C",
            "Node.js",
            "Tailwind",
            "Low-level Systems",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-zinc-800/70 text-zinc-300 rounded-full text-sm font-mono tracking-tight border border-zinc-700 hover:border-emerald-400 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
