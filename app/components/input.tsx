"use client";

import React, { useRef } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { json } from "stream/consumers";
import { routes } from "../api/routes";
import { motion } from "framer-motion";

export default function Input() {
  const [inputKata, setInputKata] = useState({
    indonesia: "",
    sunda: "",
  });

  const handleInput = (e: any) => {
    e.preventDefault();
    const kapital =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setInputKata((data) => ({
      ...data,
      [e.target.id]: kapital,
    }));
  };

  const handleSimpan = async (e: any) => {
    e.preventDefault();

    if (inputKata.indonesia === "") {
      alert("Kata tidak boleh kosong");
    } else if (inputKata.sunda === "") {
      alert("Kata tidak boleh kosong");
    } else {
      await axios.post(`${routes}/kata`, inputKata);
    }
    setInputKata((data) => ({ ...data, indonesia: "", sunda: "" }));
    console.log(inputKata);
  };

  const handleHapusCariKata = (e: any) => {
    e.preventDefault();
    setInputKata((data) => ({ ...data, indonesia: "", sunda: "" }));
  };

  return (
    <div className="w-full h-[600px] py-12 lg:container">
      <div className="flex justify-center items-center">
        <p className="font-alata font-semibold text-5xl text-coklat">
          Masukan Kata
        </p>
      </div>

      <div className="grid grid-cols-2 w-full h-[300px] justify-center items-center">
        <div className="col-span-1 lg:px-0 px-4">
          <p className="font-alata font-medium text-coklat text-3xl text-center mb-6">
            Bahasa Indonesia
          </p>
          <div className="flex justify-center items-center">
            <input
              type="text"
              id="indonesia"
              className="lg:w-2/3 w-full lg:h-24 h-12 rounded-xl text-black text-2xl font-alata font-medium px-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              value={inputKata.indonesia}
              onChange={handleInput}
              autoComplete="off"
            />
          </div>
        </div>

        <div className="col-span-1  lg:px-0 px-4">
          <p className="font-alata font-medium text-coklat text-3xl text-center mb-6">
            Bahasa Sunda
          </p>
          <div className="flex justify-center items-center">
            <input
              type="text"
              id="sunda"
              className="lg:w-2/3 w-full lg:h-24 h-12 rounded-xl text-black text-2xl font-alata font-medium px-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              value={inputKata.sunda}
              onChange={handleInput}
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:flex justify-center hidden">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <div className="absolute -mt-1 -ml-1 active:mt-0 active:ml-0">
              <div
                className="w-[200px] h-[50px] bg-[#DF6A6A] rounded-full flex justify-center items-center cursor-pointer "
                onClick={handleHapusCariKata}
              >
                <p className="text-krem1 font-alata font-medium text-2xl">
                  Batal
                </p>
              </div>
            </div>
            <div className="w-[200px] h-[50px] rounded-full bg-coklat"></div>
          </div>

          <div className="col-span-1">
            <div className="col-span-1">
              <div className="absolute -mt-1 -ml-1 active:mt-0 active:ml-0">
                <div
                  className="w-[200px] h-[50px] bg-[#99BC85] rounded-full flex justify-center items-center cursor-pointer "
                  onClick={handleSimpan}
                >
                  <p className="text-krem1 font-alata font-medium text-2xl">
                    Simpan
                  </p>
                </div>
              </div>
              <div className="w-[200px] h-[50px] rounded-full bg-coklat"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center lg:hidden gap-6">
        <div className="col-span-1">
          <div className="absolute -mt-1 -ml-1 active:mt-0 active:ml-0">
            <div
              className="w-[200px] h-[50px] bg-[#99BC85] rounded-full flex justify-center items-center cursor-pointer "
              onClick={handleSimpan}
            >
              <p className="text-krem1 font-alata font-medium text-2xl">
                Simpan
              </p>
            </div>
          </div>
          <div className="w-[200px] h-[50px] rounded-full bg-coklat"></div>
        </div>

        <div className="col-span-1">
          <div className="absolute -mt-1 -ml-1 active:mt-0 active:ml-0">
            <div className="w-[200px] h-[50px] bg-[#DF6A6A] rounded-full flex justify-center items-center cursor-pointer ">
              <p className="text-krem1 font-alata font-medium text-2xl">
                Batal
              </p>
            </div>
          </div>
          <div className="w-[200px] h-[50px] rounded-full bg-coklat"></div>
        </div>
      </div>
    </div>
  );
}
