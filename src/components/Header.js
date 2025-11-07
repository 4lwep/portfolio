"use client";

import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <div className="navbar bg-[#082567] shadow-sm fixed z-2">
      <div className="flex-1">
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
    </div>
  );
}

export default Header;
