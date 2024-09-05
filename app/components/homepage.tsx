"use client";

import React from "react";
import Image from "next/image";
import Karakter from "@/app/image/karakter-home.png";
import Link from "next/link";
import { motion } from "framer-motion";
import Shape1 from "@/app/image/shape-1.svg";
import Shape2 from "@/app/image/shape-2.svg";

export default function homepage() {
  return (
    <div className="w-full h-screen ">
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
          <p className="font-mont font-bold text-[#674636] lg:text-8xl text-6xl z-20">
            Terjemah
          </p>
        </motion.div>
      </div>

      <div className="lg:grid lg:grid-cols-2">
        <div className="col-span-1 flex flex-col justify-center items-center gap-10 z-20">
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
              className="h-[300px] w-auto z-30 relative"
            />
            <div className="w-[350px]">
              <p className="text-hijau text-lg font-medium font-alata">
                /ter·je·mah/ v, menerjemahkan/me·ner·je·mah·kan/ v menyalin
                (memindahkan) suatu bahasa ke bahasa lain;
              </p>
            </div>
          </motion.div>
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
                  <div className="w-[300px] h-[90px] bg-[#F6995C] rounded-full flex justify-center items-center cursor-pointer hover:contrast-125">
                    <p className="text-krem1 font-alata font-medium text-2xl">
                      Masukkan Kata
                    </p>
                  </div>
                </div>
                <div className="w-[300px] h-[90px] rounded-full bg-coklat"></div>
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
                  <div className="w-[300px] h-[90px] bg-[#F6995C] rounded-full flex justify-center items-center cursor-pointer hover:contrast-125">
                    <p className="text-krem1 font-alata font-medium text-2xl">
                      Koleksi Kata
                    </p>
                  </div>
                </div>
                <div className="w-[300px] h-[90px] rounded-full bg-coklat"></div>
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
              animate={{ rotate: [0, 360], y: [null, 70, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
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
