"use client";

import axios from "axios";
import React, { useState, Dispatch, SetStateAction } from "react";
import { routes } from "../api/routes";

interface Props {
  no: number;
  index: number;
  data: any;
  dataKata: any;
  dataUbah: any;
  setIsLoading: Dispatch<SetStateAction<any>>;
  setDataUbah: Dispatch<SetStateAction<any>>;
  setDataKata: Dispatch<SetStateAction<any>>;
  notifySukses: any;
  notifyGagal: any;
}

export default function Fieldkata({
  data,
  no,
  index,
  dataKata,
  dataUbah,
  setIsLoading,
  setDataUbah,
  setDataKata,
  notifySukses,
  notifyGagal,
}: Props) {
  const [isUbah, setIsUbah] = useState(false);

  const handleUbah = () => {
    setIsUbah(!isUbah);
  };

  const handleInput = (e: any) => {
    e.preventDefault();

    setDataUbah((data: any) => ({
      ...data,
      [e.target.id]:
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
    }));
  };

  const handleSimpan = async (e: any, id: any) => {
    e.preventDefault();
    // console.log("daaubh", dataUbah);

    if (dataUbah.indonesia === "") {
      notifyGagal("Kata tidak boleh kosong");
    } else if (dataUbah.sunda === "") {
      notifyGagal("Kata tidak boleh kosong");
    } else {
      notifySukses("Data berhasil diubah!");
      await axios.put(`${routes}/kata/${id}`, dataUbah);
      setDataUbah((data: any) => ({ ...data, indonesia: "", sunda: "" }));
      setIsUbah(false);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  const handleDelete = async (e: any, id: any) => {
    e.preventDefault();

    await axios.delete(`${routes}/kata/${id}`);
    const dataFillter = dataKata.filter((data: any) => data._id !== id);
    setDataKata(dataFillter);
    notifySukses("Data berhasil dihapus!");
  };
  return (
    <tr className={index % 2 === 0 ? "bg-gray-50 h-8" : "bg-gray-100 h-8"}>
      <td className="text-center w-12 border border-gray-200">{no}</td>
      <td className="px-4 border border-gray-200 w-full">
        {isUbah ? (
          <input
            placeholder={data.indonesia}
            className="border-b border-black px-2 w-full"
            id="indonesia"
            value={dataUbah.indonesia}
            onChange={handleInput}
          />
        ) : (
          data.indonesia
        )}
      </td>
      <td className="px-4 border border-gray-200 w-full">
        {isUbah ? (
          <input
            placeholder={data.sunda}
            className="border-b border-black px-2 w-full"
            id="sunda"
            value={dataUbah.sunda}
            onChange={handleInput}
          />
        ) : (
          data.sunda
        )}
      </td>

      {isUbah ? (
        <td className="lg:h-8 flex lg:flex-row flex-col items-center justify-center lg:gap-4 gap-2 border border-gray-200 lg:w-auto h-[70px] w-[100px]">
          <div
            className="bg-sky-600 cursor-pointer hover:brightness-95 px-2 rounded-lg text-white font-semibold w-[70px] flex justify-center items-center"
            onClick={(e: any) => handleSimpan(e, data._id)}
          >
            Simpan
          </div>
          <div
            className="rounded-lg bg-red-600 px-2 text-white cursor-pointer hover:brightness-95 font-semibold w-[70px] flex justify-center items-center"
            onClick={handleUbah}
          >
            Batal
          </div>
        </td>
      ) : (
        <td className="lg:h-8 flex lg:flex-row flex-col items-center justify-center lg:gap-4 gap-2 border border-gray-200 lg:w-auto h-[70px] w-[100px]">
          <div
            className="flex justify-center items-center bg-yellow-400 cursor-pointer hover:brightness-95 px-2 rounded-lg text-white font-semibold w-[70px]"
            onClick={handleUbah}
          >
            Ubah
          </div>
          <div
            className="rounded-lg bg-red-600 px-2 text-white cursor-pointer hover:brightness-95 font-semibold w-[70px] flex justify-center items-center"
            onClick={(e: any) => handleDelete(e, data._id)}
          >
            Hapus
          </div>
        </td>
      )}
    </tr>
  );
}
