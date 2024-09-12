"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Karakter from "@/app/image/karakter-home.png";
import Shadow from "@/app/image/shadow-karakter.png";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Shape1 from "@/app/image/shape-1.svg";
import Shape2 from "@/app/image/shape-2.svg";
import { IoChatboxSharp } from "react-icons/io5";

export default function Homepage() {
  const [isDialog, setDialog] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDialog(false);
  //   }, 3000);
  // }, []);
  return (
    <div className="w-full h-[600px]">
      <div className="w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className=" z-20"
        >
          <p className="font-mont font-bold text-coklat lg:text-8xl text-6xl z-20">
            KABBAR
          </p>
        </motion.div>
      </div>

      <div className="w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className=" z-20"
        >
          <p className="font-mont font-semibold text-[#674636] lg:text-2xl text-lg z-20">
            Kamus Bahasa Bekasi Anak Al Biruni
          </p>
        </motion.div>
      </div>

      <div className="lg:grid lg:grid-cols-2">
        <div className="col-span-1 flex flex-col justify-center items-center z-20">
          <div className="grid grid-cols-5">
            <div className="col-span-1">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.3 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 2.5,
                    type: "spring",
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex justify-center items-center"
                >
                  <IoChatboxSharp
                    className="lg:w-[120px] w-[90px] md:w-[50px] h-auto z-30 mt-24 lg:ml-1 ml-[24px] scale-x-[-1] absolute"
                    color="#F7EED3"
                  />

                  <IoChatboxSharp
                    className="lg:w-[134px] w-[104px] md:w-[64px] h-auto absolute z-20 mt-[100px] lg:ml-2 ml-[28px] scale-x-[-1]"
                    color="#674636"
                  />

                  <p className="absolute z-40 text-coklat md:text-lg text-base font-semibold font-alata mt-[78px] lg:ml-0 ml-8 lg:w-[80px] w-[80px] md:w-[40px]">
                    Halo,
                    <br />
                    aku Albi!
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="col-span-3 ">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Image
                  src={Karakter}
                  alt=""
                  className="lg:h-[450px] h-[300px] w-auto z-10 relative"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Image
                  src={Shadow}
                  alt=""
                  className="lg:h-[40px] h-[30px] lg:-mt-16 -mt-11 w-auto relative"
                />
              </motion.div>
            </div>

            <div className="col-span-1">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.3 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 3.5,
                    type: "spring",
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex justify-center items-center"
                >
                  <IoChatboxSharp
                    className="lg:w-[120px] w-[90px] md:w-[50px] h-auto mt-1 lg:-ml-[80px] -ml-[50px] z-20"
                    color="#F7EED3"
                  />
                  <IoChatboxSharp
                    className="lg:w-[134px] w-[104px] md:w-[64px] h-auto lg:-ml-[76px] -ml-[46px] absolute mt-2 z-10"
                    color="#674636"
                  />
                  <p className="absolute z-40 text-coklat md:text-lg text-base font-semibold font-alata -mt-5 lg:-ml-[80px] -ml-[50px] lg:w-[80px] md:w-[40px]">
                    Halo, <br />
                    aku Runi!
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center lg:my-0 my-6 z-20">
          <div className="flex flex-col gap-6">
            <Link href="/masuk">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className="absolute -mt-2 -ml-2 active:mt-0 active:ml-0">
                  <div className="w-[300px] lg:h-[90px] h-[70px] bg-[#F6995C] rounded-full flex justify-center items-center cursor-pointer hover:contrast-125">
                    <p className="text-krem1 font-alata font-medium text-2xl">
                      Masukkan Kata
                    </p>
                  </div>
                </div>
                <div className="w-[300px] lg:h-[90px] h-[70px] rounded-full bg-coklat"></div>
              </motion.div>
            </Link>

            <Link href="/koleksi">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className="absolute -mt-2 -ml-2 active:mt-0 active:ml-0">
                  <div className="w-[300px] lg:h-[90px] h-[70px] bg-[#F6995C] rounded-full flex justify-center items-center cursor-pointer hover:contrast-125">
                    <p className="text-krem1 font-alata font-medium text-2xl">
                      Koleksi Kata
                    </p>
                  </div>
                </div>
                <div className="w-[300px] lg:h-[90px] h-[70px] rounded-full bg-coklat"></div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-0">
        <div className="lg:absolute hidden lg:top-24 lg:left-1/2 top-64 h-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360], y: [null, 40, 0] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              <Image
                src={Shape1}
                alt=""
                className="h-[600px] w-[600px]"
              ></Image>
            </motion.div>
          </motion.div>
        </div>

        <div className="lg:absolute top-56 left-24 hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Image
                src={Shape2}
                alt=""
                className="h-[300px] w-[300px]"
              ></Image>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
