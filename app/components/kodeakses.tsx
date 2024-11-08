"use client";

import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { IoCaretBack } from "react-icons/io5";
import axios from "axios";
import { routes } from "../api/routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}

export default function Kodeakses({ setIsMenu }: Props) {
  const [kodeAkses, setKodeAkses] = useState({
    kode: "",
  });

  const [dataKode, setDataKode] = useState<any[]>([]);
  const [isUbah, setIsUbah] = useState(false);

  const notifySukses = (pesan: any) => toast.success(pesan);
  const notifyGagal = (pesan: any) => toast.error(pesan);

  useEffect(() => {
    const getKode = async () => {
      const response = await axios.get(`${routes}/kode`);
      setDataKode(response?.data);
    };
    getKode();
  }, [isUbah, kodeAkses]);

  const handleInputKode = (e: any) => {
    e.preventDefault();
    setKodeAkses((data) => ({ ...data, kode: e.target.value }));
  };

  const handleSimpan = async (e: any) => {
    e.preventDefault();

    if (kodeAkses.kode === "") {
      notifyGagal("Masukan minimal 1 angka");
    } else {
      notifySukses("Data berhasil diubah!");
      await axios.put(`${routes}/kode/66d5de52b804b267b226c202`, kodeAkses);

      setIsUbah(false);
    }
  };
  return (
    <div className="w-full">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
      <div className="w-full grid grid-cols-5 lg:gap-0 gap-6">
        <div className="lg:col-span-1 col-span-5 flex items-center">
          <div
            className="bg-white w-[150px] h-[45px] rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:brightness-95 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            onClick={() => {
              setIsMenu(false);
            }}
          >
            <IoCaretBack color="black" />
            <p className="text-black">Kembali</p>
          </div>
        </div>

        <div className="lg:col-span-3 col-span-5 flex justify-center items-center">
          <p className="text-black text-2xl font-semibold">Kode Akses</p>
        </div>
        <div className="lg:col-span-1 hidden"></div>
      </div>

      <div className="w-full lg:h-16 h-auto mt-12 px-6 lg:py-0 py-6 lg:gap-0 gap-10 bg-white grid grid-cols-6 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="lg:col-span-3 col-span-6 flex items-center">
          <p className="text-black lg:text-xl font-medium">Kode Akses :</p>
        </div>

        <div className="lg:col-span-2 col-span-6 flex items-center justify-center">
          {!isUbah ? (
            <p className="text-black text-xl font-bold">{dataKode[0]?.kode}</p>
          ) : (
            <input
              type="tel"
              placeholder="****"
              className="bg-gray-200 text-center rounded-lg px-2 h-12 w-24 text-black text-xl font-bold"
              maxLength={4}
              value={kodeAkses.kode}
              onChange={handleInputKode}
            />
          )}
        </div>

        <div className="lg:col-span-1 col-span-6 flex lg:justify-end justify-center items-center">
          {!isUbah ? (
            <div
              className="h-10 w-20 bg-yellow-400 cursor-pointer hover:brightness-95 flex justify-center items-center rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              onClick={() => setIsUbah(true)}
            >
              <p className="text-black font-semibold text-lg">Ubah</p>
            </div>
          ) : (
            <div
              className="h-10 w-20 bg-sky-600 cursor-pointer hover:brightness-95 flex justify-center items-center rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              onClick={handleSimpan}
            >
              <p className="text-white font-semibold text-lg">Simpan</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
