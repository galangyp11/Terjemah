"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { SyncLoader } from "react-spinners";

export default function Koleksi() {
  const [dataKata, setDataKata] = useState<any[]>([]);
  const [cariKata, setCariKata] = useState("");
  const [dataCariKata, setDataCariKata] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getKata = async () => {
      const response = await axios.get(`http://localhost:3011/kata`);
      // console.log(response);
      setDataKata(response.data);
    };
    getKata();
  }, []);

  const handleCariKata = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const kapital =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setCariKata(kapital);
  };

  useEffect(() => {
    const onSearchItem = async () => {
      const response = await axios.get(
        `http://localhost:3011/kata/${cariKata}`
      );
      setDataCariKata(response.data);
    };
    onSearchItem();

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [cariKata]);

  const handleHapusCariKata = (e: any) => {
    e.preventDefault();
    setCariKata("");
  };

  console.log("cari", cariKata);
  console.log("data cari", dataCariKata);
  console.log(dataKata);

  return (
    <div className="w-full h-[700px] lg:container">
      <div className="flex justify-center items-center gap-4 mb-6">
        <p className="font-alata font-semibold text-5xl text-coklat">Koleksi</p>
        <div className="w-[60px] h-[60px] rounded-lg flex justify-center items-center bg-[#F6995C]">
          <p className="text-krem1 font-alata font-semibold text-4xl">
            {dataKata?.length}
          </p>
        </div>
        <p className="font-alata font-semibold text-5xl text-coklat">Kata</p>
      </div>

      <div className="w-full flex justify-center mb-8">
        <div className="lg:w-[400px] w-[300px] h-10 px-2 rounded-lg flex bg-white text-black text-lg font-alata font-medium shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <input
            type="text"
            placeholder="Cari Kata...."
            className="w-full h-full focus:outline-none ml-2"
            value={cariKata}
            onChange={handleCariKata}
          />
          {cariKata === "" ? (
            <div></div>
          ) : (
            <button
              className="flex items-center bg-[#DF6A6A] my-[4px] px-2 rounded-lg "
              onClick={handleHapusCariKata}
            >
              <p className="text-white">Hapus</p>
            </button>
          )}
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="lg:w-[1000px] w-[400px] lg:px-0 px-6 h-[500px] bg-white rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          {cariKata === "" && isLoading === false ? (
            <div>
              {dataKata?.map((data) => {
                return (
                  <div
                    key={data._id}
                    className="grid grid-cols-2 text-coklat text-lg"
                  >
                    <div>
                      <p>{data.indonesia}</p>
                    </div>
                    <div>
                      <p>{data.sunda}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full h-full">
              {dataCariKata?.length !== 1 ? (
                <div className="w-full h-full flex justify-center items-center gap-4">
                  <p className="text-coklat text-xl font-alata font-medium">
                    Mencari kata
                  </p>
                  <SyncLoader size={10} color="#674636" />
                </div>
              ) : (
                <div className="w-full h-full flex justify-center items-center">
                  <div className="grid grid-cols-2 text-coklat text-lg">
                    <div>
                      <p>{dataCariKata[0]?.indonesia}</p>
                    </div>
                    <div>
                      <p>{dataCariKata[0]?.sunda}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
