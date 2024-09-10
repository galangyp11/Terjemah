"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/app/image/logo-sd-berkarakter-al-biruni.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
        <p className="text-coklat font-inter font-semibold lg:text-xl text-md">
          SD Berkarakter Al Biruni
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4 hidden">
        <div
          className={
            currentPath !== "/"
              ? "w-full h-full flex justify-center items-center col-span-1"
              : "hidden"
          }
        >
          <Link
            href="/"
            className="h-[40px] w-[100px] px-2 py-[4px] bg-orange rounded-lg hover:outline hover:outline-4 hover:outline-offset-1 hover:outline-coklat"
          >
            <div className="h-full w-full flex justify-center items-center">
              <p className="text-krem1 font-inter font-medium text-lg">
                Beranda
              </p>
            </div>
          </Link>
        </div>

        <div
          className={
            currentPath === "/masuk"
              ? "w-full h-full flex justify-center items-center col-span-1"
              : "hidden"
          }
        >
          <Link
            href="/koleksi"
            className="h-[40px] w-[100px] px-2 py-[4px] bg-orange rounded-lg hover:outline hover:outline-4 hover:outline-offset-1 hover:outline-coklat"
          >
            <div className="h-full w-full flex justify-center items-center">
              <p className="text-krem1 font-inter font-medium text-lg">
                Koleksi
              </p>
            </div>
          </Link>
        </div>

        <div
          className={
            currentPath === "/koleksi"
              ? "w-full h-full flex justify-center items-center col-span-1"
              : "hidden"
          }
        >
          <Link
            href="/masuk"
            className="h-[40px] w-[100px] px-2 py-[4px] bg-orange rounded-lg hover:outline hover:outline-4 hover:outline-offset-1 hover:outline-coklat"
          >
            <div className="h-full w-full flex justify-center items-center">
              <p className="text-krem1 font-inter font-medium text-lg">
                Masukan
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="lg:hidden flex flex-row justify-center items-center">
        <div
          className={
            currentPath === "/"
              ? "hidden"
              : "bg-[#F6995C] rounded-lg p-1 lg:hidden"
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMenu color="#FFF8E8" size={30} />
        </div>
        {isOpen ? (
          <div>
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.5,
                transition: { duration: 0.2 },
              }}
              className="bg-krem1 w-1/2 h-28 rounded-lg px-4 absolute top-14 right-6 shadow-[-2px_2px_0px_4px_#674636]"
            >
              <div className="border-b border-coklat h-1/2 flex justify-center items-center">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <p className="text-2xl text-coklat font-alata font-semibold">
                    Beranda
                  </p>
                </Link>
              </div>
              {currentPath === "/koleksi" ? (
                <div className="h-1/2 flex justify-center items-center">
                  <Link href="/masuk">
                    <p className="text-2xl text-coklat font-alata font-semibold">
                      Masukan
                    </p>
                  </Link>
                </div>
              ) : (
                <div className="h-1/2 flex justify-center items-center">
                  <Link href="/koleksi" onClick={() => setIsOpen(false)}>
                    <p className="text-2xl text-coklat font-alata font-semibold">
                      Koleksi
                    </p>
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
