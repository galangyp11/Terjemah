import React from "react";

export default function koleksi() {
  return (
    <div className="w-full h-[700px] lg:container">
      <div className="flex justify-center items-center gap-4 mb-6">
        <p className="font-alata font-semibold text-5xl text-coklat">Koleksi</p>
        <div className="w-[60px] h-[60px] rounded-lg flex justify-center items-center bg-[#F6995C]">
          <p className="text-krem1 font-alata font-semibold text-4xl">75</p>
        </div>
        <p className="font-alata font-semibold text-5xl text-coklat">Kata</p>
      </div>

      <div className="w-full flex justify-center mb-8">
        <input
          type="text"
          placeholder="Cari Kata...."
          className="w-1/4 h-10 px-4 rounded-lg text-black text-lg font-alata font-medium shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        />
      </div>

      <div className="w-full flex justify-center">
        <div className="lg:w-[1000px] w-full lg:px-0 px-6 h-[500px] bg-white rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"></div>
      </div>
    </div>
  );
}
