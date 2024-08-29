import React from "react";
import Image from "next/image";
import Logo from "@/app/image/logo-sd-berkarakter-al-biruni.png";
import { PiKey } from "react-icons/pi";
import { TiSortAlphabetically } from "react-icons/ti";
import { IoMdPerson } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import Link from "next/link";

export default function page() {
  return (
    <div className="h-screen w-full grid grid-cols-5">
      <div className="col-span-1 bg-white h-full p-6">
        <div className="w-full flex justify-center">
          <IoPersonCircleSharp className="text-[#e5e7eb]" size={150} />
        </div>
        <div className="w-full flex justify-center">
          <p className="text-black text-3xl font-inter font-semibold">Admin</p>
        </div>
        <div className="w-full cursor-pointer border-b-2 hover:border-black border-gray-200 mt-6 flex items-center gap-4">
          <IoMdPerson color="black" size={30} />
          <p className="text-black text-xl font-inter font-medium">
            Kelola Admin
          </p>
        </div>
        <div className="w-full cursor-pointer border-b-2 hover:border-black border-gray-200 mt-6 flex items-center gap-4">
          <TiSortAlphabetically color="black" size={30} />
          <p className="text-black text-xl font-inter font-medium ">
            Kelola Kata
          </p>
        </div>
        <div className="w-full cursor-pointer border-b-2 hover:border-black border-gray-200 mt-6 flex items-center gap-4">
          <PiKey color="black" size={30} />
          <p className="text-black text-xl font-inter font-medium ">
            Kelola Admin
          </p>
        </div>
      </div>

      <div className="col-span-4 h-full  bg-gray-200 ">
        <div className="w-full h-16 px-6 grid grid-cols-2 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="h-full w-full flex justify-start items-center gap-4">
            <Image src={Logo} alt="" className="h-12 w-auto" />
            <p className="text-biru font-inter font-semibold lg:text-xl text-md">
              SD Berkarakter Al-Biruni
            </p>
          </div>
          <div className=" flex justify-end items-center">
            <Link href="/">
              <button className="w-[150px] h-[30px] bg-red-500 rounded-lg">
                Logout
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full h-[200px] px-12 cursor-pointer hover:brightness-95 grid grid-cols-3 rounded-lg bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <div className="col-span-2">
                <div className="w-full h-1/2 flex items-end">
                  <p className="font-inter font-semibold text-2xl text-black">
                    Kode Akses
                  </p>
                </div>
                <div className="w-full h-1/2 flex items-start">
                  <p className="font-inter text-xl text-black">4992</p>
                </div>
              </div>
              <div className="col-span-1 flex items-center">
                <PiKey className="text-[#e5e7eb]" size={100} />
              </div>
            </div>

            <div className="w-full h-[200px] px-12 cursor-pointer hover:brightness-95 grid grid-cols-3 rounded-lg bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <div className="col-span-2">
                <div className="w-full h-1/2 flex items-end">
                  <p className="font-inter font-semibold text-2xl text-black">
                    Kelola Kata
                  </p>
                </div>
              </div>
              <div className="col-span-1 flex items-center">
                <TiSortAlphabetically className="text-[#e5e7eb]" size={100} />
              </div>
            </div>

            <div className="w-full h-[200px] px-12 cursor-pointer hover:brightness-95 grid grid-cols-3 rounded-lg bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <div className="col-span-2">
                <div className="w-full h-1/2 flex items-end">
                  <p className="font-inter font-semibold text-2xl text-black">
                    Kelola Admin
                  </p>
                </div>
              </div>
              <div className="col-span-1 flex items-center">
                <IoMdPerson className="text-[#e5e7eb]" size={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
