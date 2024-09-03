"use client";

import axios from "axios";
import React, { useState, Dispatch, SetStateAction } from "react";
import { routes } from "../api/routes";

interface Props {
  no: number;
  index: number;
  data: any;
  dataKata: any;
  setDataKata: Dispatch<SetStateAction<any>>;
}

export default function Fieldkata({
  data,
  no,
  index,
  dataKata,
  setDataKata,
}: Props) {
  const [isUbah, setIsUbah] = useState(false);

  const handleUbah = () => {
    setIsUbah(!isUbah);
  };

  const handleDelete = async (e: any, id: any) => {
    e.preventDefault();

    await axios.delete(`${routes}/kata/${id}`);
    const dataFillter = dataKata.filter((data: any) => data._id !== id);
    setDataKata(dataFillter);
  };
  return (
    <tr className={index % 2 === 0 ? "bg-gray-50 h-8" : "bg-gray-100 h-8"}>
      <td className="text-center w-12 border border-gray-200">{no}</td>
      <td className="px-4 border border-gray-200">
        {isUbah ? (
          <input
            placeholder={data.indonesia}
            className="border-b border-black px-2"
          />
        ) : (
          data.indonesia
        )}
      </td>
      <td className="px-4 border border-gray-200">
        {isUbah ? (
          <input
            placeholder={data.sunda}
            className="border-b border-black px-2"
          />
        ) : (
          data.sunda
        )}
      </td>
      <td className="h-8 flex items-center justify-center gap-4 border border-gray-200">
        <div
          className=" bg-yellow-400 cursor-pointer hover:brightness-95 px-2 rounded-lg text-black"
          onClick={handleUbah}
        >
          Ubah
        </div>
        <div
          className="rounded-lg bg-red-600 px-2 text-white cursor-pointer hover:brightness-95"
          onClick={(e: any) => handleDelete(e, data._id)}
          //onClick={handleDelete}
        >
          Hapus
        </div>
      </td>
    </tr>
  );
}
