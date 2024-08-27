import React from "react";

export default function input() {
  return (
    <div className="w-full h-[600px] py-12 lg:container">
      <div className="flex justify-center items-center">
        <p className="font-alata font-semibold text-5xl text-coklat">
          Masukan Kata
        </p>
      </div>

      <div className="grid grid-cols-2 w-full h-[300px] justify-center items-center">
        <div className="col-span-1">
          <p className="font-alata font-medium text-coklat text-3xl text-center mb-6">
            Bahasa Indonesia
          </p>
          <div className="flex justify-center items-center">
            <input
              type="text"
              className="w-2/3 h-24 rounded-xl focus:text-black focus:font-alata focus:font-medium px-6"
            />
          </div>
        </div>

        <div className="col-span-1">
          <p className="font-alata font-medium text-coklat text-3xl text-center mb-6">
            Bahasa Sunda
          </p>
          <div className="flex justify-center items-center">
            <input
              type="text"
              className="w-2/3 h-24 rounded-xl focus:text-black focus:font-alata focus:font-medium px-6"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <div className="w-[200px] h-[50px] bg-[#DF6A6A] rounded-full flex justify-center items-center cursor-pointer hover:outline hover:outline-4 hover:outline-offset-2 hover:outline-coklat">
              <p className="text-krem1 font-alata font-medium text-2xl">
                Batal
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <div className="w-[200px] h-[50px] bg-[#99BC85] rounded-full flex justify-center items-center cursor-pointer hover:outline hover:outline-4 hover:outline-offset-2 hover:outline-coklat">
              <p className="text-krem1 font-alata font-medium text-2xl">
                Simpan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
