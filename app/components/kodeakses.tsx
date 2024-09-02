"use client";

import React, { useState, Dispatch, SetStateAction } from "react";
import { IoCaretBack } from "react-icons/io5";

interface Props {
  kodeAkses: string;
  setKodeAkses: Dispatch<SetStateAction<string>>;
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}
//gausah di passing langsung post aja ke db nanti tinggal dipanggil
export default function Kodeakses({
  kodeAkses,
  setKodeAkses,
  setIsMenu,
}: Props) {
  //   const [kodeAkses, setKodeAkses] = useState<string>("");
  const [isUbah, setIsUbah] = useState(false);

  const handleInputKode = (e: any) => {
    e.preventDefault();
    setKodeAkses(e.target.value);
  };
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-5">
        <div className="col-span-1 flex items-center">
          <div
            className="bg-white w-[150px] h-[35px] rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:brightness-95 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            onClick={() => {
              setIsMenu(false);
            }}
          >
            <IoCaretBack color="black" />
            <p className="text-black">Kembali</p>
          </div>
        </div>
        <div className="col-span-3 flex justify-center items-center">
          <p className="text-black text-2xl font-semibold">Kode Akses</p>
        </div>
        <div className="col-span-1"></div>
      </div>

      <div className="w-full h-16 mt-12 px-6 bg-white grid grid-cols-6 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="col-span-3 flex items-center">
          <p className="text-black text-xl font-semibold">Kode Akses</p>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          {!isUbah ? (
            <p className="text-black text-xl font-bold">{kodeAkses}</p>
          ) : (
            <input
              type="number"
              className="bg-gray-200 rounded-lg px-2 h-12 w-24 text-black text-xl font-bold"
              value={kodeAkses}
              onChange={handleInputKode}
            />
          )}
        </div>
        <div className="col-span-1 flex justify-end items-center">
          {!isUbah ? (
            <div
              className="h-10 w-20 bg-yellow-400 cursor-pointer hover:brightness-95 flex justify-center items-center rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              onClick={() => setIsUbah(true)}
            >
              <p className="text-black font-semibold text-lg">Ubah</p>
            </div>
          ) : (
            <div
              className="h-10 w-20 bg-blue-400 cursor-pointer hover:brightness-95 flex justify-center items-center rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              onClick={() => {
                if (kodeAkses.length === 0) {
                  alert("Masukan minimal 1 angka");
                } else if (kodeAkses.length > 4) {
                  alert("Maksimal 4 angka");
                } else {
                  setIsUbah(false);
                }
              }}
            >
              <p className="text-black font-semibold text-lg">Simpan</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
