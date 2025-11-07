import Image from "next/image";
import Intro from "@/components/Intro";
import RadialProgress from "@/components/RadialProgress";
import Slides from "@/components/Slides";

export default function Home() {
  return (
    <main className="grid h-full w-full items-center">
      <Slides components={[Intro, RadialProgress]} />;
    </main>
  );
}
