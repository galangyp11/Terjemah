"use client";

import React from "react";
import Image from "next/image";
import Logo from "@/app/image/logo-sd-berkarakter-al-biruni.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <div
      className={
        currentPath === "/"
          ? "w-full h-16 py-2 px-6 bg-krem2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          : "w-full h-16 py-2 px-6 bg-krem2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex"
      }
    >
      <div
        className={
          currentPath === "/"
            ? "h-full w-full flex justify-center items-center gap-4"
            : "h-full w-[90%] flex items-center gap-4"
        }
      >
        <Image src={Logo} alt="" className="h-12 w-auto" />
        <p className="text-biru font-inter font-semibold lg:text-xl text-md">
          SD Berkarakter Al-Biruni
        </p>
      </div>

      <Link
        href="/"
        className={
          currentPath !== "/" ? "h-full w-[10%] px-2 py-[4px]" : "hidden"
        }
      >
        <div className="h-full w-full flex justify-center items-center bg-coklat rounded-full hover:outline hover:outline-4 hover:outline-offset-2 hover:outline-coklat">
          <p className="text-krem1 font-inter font-semibold text-xl">Beranda</p>
        </div>
      </Link>

      <Link
        href="/koleksi"
        className={
          currentPath === "/masuk" ? "h-full w-[10%] px-2 py-[4px]" : "hidden"
        }
      >
        <div
          className={
            currentPath === "/masuk"
              ? "h-full w-full flex justify-center items-center bg-coklat rounded-full hover:outline hover:outline-4 hover:outline-offset-2 hover:outline-coklat"
              : "hidden"
          }
        >
          <p className="text-krem1 font-inter font-semibold text-xl">Koleksi</p>
        </div>
      </Link>

      <Link
        href="/masuk"
        className={
          currentPath === "/koleksi" ? "h-full w-[10%] px-2 py-[4px]" : "hidden"
        }
      >
        <div
          className={
            currentPath == "/koleksi"
              ? "h-full w-full flex justify-center items-center bg-coklat rounded-full hover:outline hover:outline-4 hover:outline-offset-2 hover:outline-coklat"
              : "hidden"
          }
        >
          <p className="text-krem1 font-inter font-semibold text-xl">Masukan</p>
        </div>
      </Link>
    </div>
  );
}
