import React from "react";

export default function koleksi() {
  return (
    <div className="w-full h-[700px] py-12 lg:container">
      <div className="flex justify-center items-center gap-4 mb-6">
        <p className="font-alata font-semibold text-5xl text-coklat">Koleksi</p>
        <div className="w-[60px] h-[60px] rounded-lg flex justify-center items-center bg-[#F6995C]">
          <p className="text-krem1 font-alata font-semibold text-4xl">75</p>
        </div>
        <p className="font-alata font-semibold text-5xl text-coklat">Kata</p>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[1000px] h-[500px] bg-white rounded-lg"></div>
      </div>
    </div>
  );
}
