"use client";

useState;
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import Image from "next/image";
import Logo from "@/app/image/logo-sd-berkarakter-al-biruni.png";
import Link from "next/link";

export default function Home() {
  const [isShow, setIsShow] = useState(false);
  return (
    <main className="h-screen bg-gray-100 w-full">
      <div className="w-full h-[600px] flex justify-center items-center">
        <div className="w-[400px] h-[450px] bg-white p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="flex justify-center">
            <p className="text-2xl text-black font-inter font-semibold">
              Login Admin
            </p>
          </div>

          <div className="flex justify-center w-full my-6">
            <Image src={Logo} alt="" className="h-20 w-auto" />
          </div>

          <div className="w-full my-12">
            <div className="flex justify-center my-4">
              <input
                type="text"
                placeholder="Username"
                autoComplete="off"
                className="w-[250px] h-[40px] px-2 text-black focus:outline-none focus:border-black border-b-2 border-gray-300"
              />
            </div>

            <div className="flex justify-center my-4">
              <div className="flex bg-white items-center ml-6">
                <input
                  type={isShow ? "text" : "password"}
                  placeholder="password"
                  autoComplete="off"
                  className="w-[250px] h-[40px] px-2 text-black focus:outline-none focus:border-black border-b-2 border-gray-300"
                />
                {isShow ? (
                  <LuEyeOff
                    color="black"
                    size={25}
                    className="cursor-pointer"
                    onClick={() => {
                      setIsShow(!isShow);
                    }}
                  />
                ) : (
                  <LuEye
                    color="black"
                    size={25}
                    className="cursor-pointer"
                    onClick={() => {
                      setIsShow(!isShow);
                    }}
                  />
                )}
              </div>
            </div>

            <div className="flex justify-center my-4">
              <Link href="/admin">
                <button className="bg-black rounded-full w-[250px] h-8">
                  Login
                </button>
              </Link>
            </div>

            <div className="flex justify-center my-4">
              <button className="bg-white text-black border-2 border-black rounded-full w-[250px] h-8">
                Beranda
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-12 absolute bottom-0 bg-biru">
        <div className="w-full h-full flex justify-center items-center gap-6">
          <p className="text-white font-inter font-normal lg:text-lg text-md">
            Terjemah
          </p>
          <p className="text-white font-inter font-normal lg:text-lg text-md">
            |
          </p>
          <p className="text-white font-inter font-normal lg:text-lg text-md">
            SD Berkarakter Al-Biruni
          </p>
        </div>
      </div>
    </main>
  );
}
