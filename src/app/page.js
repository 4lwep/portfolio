import Image from "next/image";

export default function Home() {
  return (
    <main className="grid h-full items-center justify-center">
      <div className="flex w-100 flex-col items-center py-16 px-10 bg-white dark:bg-black/70 backdrop-blur-xl sm:items-center rounded-[20] text-center">
        <Image
          className="rounded-[9999]"
          src="/profile1.jpg"
          alt="Profile picture"
          width={250}
          height={250}
          priority
        />
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 pt-10">
          Alfredo Vergillos Ruiz
        </h1>
      </div>
    </main>
  );
}
