import React from "react";
import Image from "next/image";
import Logo from "@/app/image/logo-sd-berkarakter-al-biruni.png";

export default function navbar() {
  return (
    <div className="w-full h-16 p-2 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="h-full w-full flex justify-center items-center text-biru font-inter font-semibold text-xl gap-4">
        <Image src={Logo} alt="" className="h-12 w-auto" />
        SD Berkarakter Al Biruni
      </div>
    </div>
  );
}
