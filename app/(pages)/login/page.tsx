"use client";

useState;
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { useState } from "react";

export default function Home() {
  return (
    <main className="h-auto bg-gray-100 w-full">
      <div className="w-full">
        <Navbar />
      </div>

      <div className="w-full h-[600px] flex justify-center items-center">
        <div className="w-[400px] h-[500px] bg-white p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="flex justify-center">
            <p className="text-2xl text-black font-inter font-semibold">
              Login Admin
            </p>
          </div>

          <div className="w-full my-16">
            <div className="flex justify-center my-4">
              <input
                type="text"
                placeholder="Username"
                autoComplete="off"
                className="w-[250px] h-[40px] px-2 text-black focus:outline-none focus:border-black border-b-2 border-gray-300"
              />
            </div>

            <div className="flex justify-center my-4">
              <input
                type="text"
                placeholder="password"
                autoComplete="off"
                className="w-[250px] h-[40px] px-2 text-black focus:outline-none focus:border-black border-b-2 border-gray-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
