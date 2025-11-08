"use client";

import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <div className="navbar bg-[#0D1117] shadow-sm fixed z-2">
      <div className="ml-5">
        <Link href="/" className="w-[50] text-xl">
          <Image
            className="rounded-[9999]"
            src="/cactus-logo.jpg"
            alt="Cactus logo"
            width={50}
            height={50}
            priority
          />
        </Link>
      </div>
      <Link href="#projects" className="ml-auto mr-10">
        Proyectos
      </Link>

      <Link href="" className="mr-10">
        Sobre mi
      </Link>
    </div>
  );
}

export default Header;
