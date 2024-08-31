"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { SyncLoader } from "react-spinners";
import { FaRegSadCry } from "react-icons/fa";
import { routes } from "../api/routes";
import { TbArrowsExchange } from "react-icons/tb";
import Groupkata from "./groupkata";

export default function Koleksi() {
  const [dataKata, setDataKata] = useState<any[]>([]);
  const [dataKataGroup, setDataKataGroup] = useState<any[]>([]);
  const [cariKata, setCariKata] = useState("");
  const [dataCariKata, setDataCariKata] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSortIndonesia, setIsSortIndonesia] = useState(true);

  useEffect(() => {
    const getKata = async () => {
      const response = await axios.get(`${routes}/kata`);

      if (isSortIndonesia === false) {
        const sortIndo = response.data.sort((a: any, b: any) => {
          if (a.indonesia > b.indonesia) {
            return 1;
          }
          if (a.indonesia < b.indonesia) {
            return -1;
          }
          return 0;
        });
        setDataKata(sortIndo);

        const groupAbjad = sortIndo.reduce((i: any, e: any) => {
          let group = e.indonesia[0];
          if (!i[group]) i[group] = { group, kataGroup: [e] };
          else i[group].kataGroup.push(e);
          return i;
        }, {});

        let sortGroup = Object.values(groupAbjad);

        setDataKataGroup(sortGroup);
      } else {
        const sortSunda = response.data.sort((a: any, b: any) => {
          if (a.sunda > b.sunda) {
            return 1;
          }
          if (a.sunda < b.sunda) {
            return -1;
          }
          return 0;
        });
        setDataKata(sortSunda);

        const groupAbjad = sortSunda.reduce((i: any, e: any) => {
          let group = e.sunda[0];
          if (!i[group]) i[group] = { group, kataGroup: [e] };
          else i[group].kataGroup.push(e);
          return i;
        }, {});

        let sortGroup = Object.values(groupAbjad);

        setDataKataGroup(sortGroup);
      }
    };
    getKata();
  }, [isSortIndonesia]);

  // useEffect(() => {
  //   console.log("result", result);
  // }, [dataKata, isSortIndonesia]);

  const handleSort = (e: any) => {
    e.preventDefault();
    setIsSortIndonesia(!isSortIndonesia);
  };

  const handleCariKata = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const kapital =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setCariKata(kapital);
  };

  useEffect(() => {
    const onSearchItem = async () => {
      const response = await axios.get(`${routes}/kata/${cariKata}`);
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

  // console.log("cari", cariKata);
  // console.log("data cari", dataCariKata);
  console.log("dataKata", dataKata);
  console.log("dataKataGroup", dataKataGroup);

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

      <div className="w-full flex justify-center ">
        <div className="lg:w-[1000px] w-[400px] h-[480px] bg-white rounded-lg shadow-[0px_4px_0px_5px_#674636]">
          <div className="w-full h-12 grid grid-cols-7 rounded-lg bg-krem2">
            <div className="col-span-3 flex justify-center items-center rounded-lg">
              {isSortIndonesia ? (
                <p className="text-coklat font-alata text-2xl font-medium">
                  SUNDA
                </p>
              ) : (
                <p className="text-coklat font-alata text-2xl font-medium">
                  INDONESIA
                </p>
              )}
            </div>

            <div className="col-span-1 justify-center flex items-center">
              <div className="absolute -mt-1 -ml-1 active:mt-0 active:ml-0 bg-krem1 text-coklat rounded-lg">
                <div
                  className="w-[35px] h-[35px] flex justify-center items-center cursor-pointer bg-[#F6995C] text-krem1 rounded-lg"
                  onClick={handleSort}
                >
                  <TbArrowsExchange size={30} />
                </div>
              </div>
              <div className="w-[35px] h-[35px] rounded-lg bg-coklat"></div>
            </div>

            <div className="col-span-3 flex justify-center items-center rounded-lg">
              {isSortIndonesia ? (
                <p className="text-coklat font-alata text-2xl font-medium">
                  INDONESIA
                </p>
              ) : (
                <p className="text-coklat font-alata text-2xl font-medium">
                  SUNDA
                </p>
              )}
            </div>
          </div>

          <div className="w-full h-[432px] lg:px-0 px-6 ">
            {dataKataGroup.length === 0 ? (
              <div className="w-full h-full flex justify-center items-center gap-4 -mt-12">
                <p className="text-coklat text-xl font-alata font-medium">
                  Memuat kata
                </p>
                <SyncLoader size={10} color="#674636" />
              </div>
            ) : (
              <div className="w-full h-[432px]">
                {cariKata === "" && isLoading === false ? (
                  <div className=" bg-krem1 max-h-full overflow-y-auto rounded-lg">
                    {!isSortIndonesia
                      ? dataKataGroup?.map((data) => {
                          return <Groupkata data={data} key={data?.index} />;
                        })
                      : dataKataGroup?.map((data) => {
                          return (
                            <div
                              key={data?._id}
                              className="grid grid-cols-2 text-coklat text-lg"
                            >
                              <div>
                                <p>{data?.sunda}</p>
                              </div>
                              <div>
                                <p>{data?.indonesia}</p>
                              </div>
                            </div>
                          );
                        })}
                  </div>
                ) : (
                  <div className="w-full h-full">
                    {dataCariKata?.length !== 1 ? (
                      isLoading ? (
                        <div className="w-full h-full flex justify-center items-center gap-4">
                          <p className="text-coklat text-xl font-alata font-medium">
                            Mencari kata
                          </p>
                          <SyncLoader size={10} color="#674636" />
                        </div>
                      ) : (
                        <div className="w-full h-full flex justify-center items-center gap-4">
                          <p className="text-coklat text-xl font-alata font-medium">
                            Kata yang kamu cari tidak ada
                          </p>
                          <FaRegSadCry size={30} color="#674636" />
                        </div>
                      )
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
