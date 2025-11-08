import Social from "./Social";

function Aboutme() {
  return (
    <div
      id="social"
      className="flex gap-20 h-full items-center justify-between p-50 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100"
    >
      <Social
        platform="github"
        username="4lwep"
        url="https://github.com/4lwep"
        description="Mis proyectos y código abierto."
      />
      <Social
        platform="youtube"
        username="PiWter"
        url="https://www.youtube.com/"
        description="Videos sobre programación."
      />
      <Social
        platform="instagram"
        username="PiWter"
        url="https://instagram.com/"
        description="Creatividad y estilo de vida."
      />
    </div>
  );
}

export default Aboutme;
