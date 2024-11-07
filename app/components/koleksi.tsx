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

      if (isSortIndonesia === true) {
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
      console.log("wdadaw", response.data);
      const groupAbjad = response.data.reduce((i: any, e: any) => {
        let group = e.indonesia[0];
        if (!i[group]) i[group] = { group, kataGroup: [e] };
        else i[group].kataGroup.push(e);
        return i;
      }, {});

      let sortGroup = Object.values(groupAbjad);

      setDataKataGroup(sortGroup);
    };
    onSearchItem();

    setIsLoading(true);

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
  // console.log("dataKata", dataKata);
  // console.log("dataKataGroup", dataKataGroup);

  return (
    <div className="w-full h-[700px] lg:container">
      <div className="flex justify-center items-center gap-4 mb-6">
        <p className="font-alata font-semibold text-5xl text-coklat">Koleksi</p>
        <div className="w-fit h-fit py-2 px-4 rounded-lg flex justify-center items-center bg-[#F6995C]">
          <p className="text-krem1 font-alata font-semibold text-4xl">
            {dataKata?.length}
          </p>
        </div>
        <p className="font-alata font-semibold text-5xl text-coklat">Kata</p>
      </div>

      <div className="w-full flex justify-center mb-8">
        <div className="lg:w-[400px] w-[300px] h-10 px-2 rounded-lg flex bg-white text-coklat text-lg font-alata font-medium shadow-[0px_2px_0px_3px_#674636]">
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
        <div className="lg:w-[1000px] w-[350px] h-[480px] bg-krem1 rounded-lg shadow-[0px_4px_0px_5px_#674636]">
          <div className="w-full h-12 grid grid-cols-7 rounded-lg bg-krem2">
            <div className="col-span-3 flex justify-center items-center rounded-lg">
              {isSortIndonesia ? (
                <p className="text-coklat font-alata text-2xl font-medium">
                  INDONESIA
                </p>
              ) : (
                <p className="text-coklat font-alata text-2xl font-medium">
                  BEKASI
                </p>
              )}
            </div>

            <div className="col-span-1 justify-center flex items-center">
              <div className="absolute -mt-1 -ml-1 active:mt-0 active:ml-0 bg-krem1 text-coklat rounded-lg">
                {cariKata === "" ? (
                  <div
                    className="w-[35px] h-[35px] flex justify-center items-center cursor-pointer bg-orange text-krem1 rounded-lg"
                    onClick={handleSort}
                  >
                    <TbArrowsExchange size={30} />
                  </div>
                ) : (
                  <div
                    className="pointer-events-none w-[35px] h-[35px] flex justify-center items-center cursor-pointer bg-[#F6995C] text-krem1 rounded-lg"
                    onClick={handleSort}
                  >
                    <TbArrowsExchange size={30} />
                  </div>
                )}
              </div>
              <div className="w-[35px] h-[35px] rounded-lg bg-coklat"></div>
            </div>

            <div className="col-span-3 flex justify-center items-center rounded-lg">
              {isSortIndonesia ? (
                <p className="text-coklat font-alata text-2xl font-medium">
                  BEKASI
                </p>
              ) : (
                <p className="text-coklat font-alata text-2xl font-medium">
                  INDONESIA
                </p>
              )}
            </div>
          </div>

          <div className="w-full h-[432px]">
            {dataKataGroup.length === 0 ? (
              <div className="w-full h-full flex justify-center items-center -mt-12">
                {cariKata === "" && dataKata.length === 0 ? (
                  <div className="w-full flex justify-center items-center gap-4">
                    <p className="text-coklat text-xl font-alata font-medium">
                      Data Kata Kosong
                    </p>
                  </div>
                ) : isLoading ? (
                  <div className="w-full flex justify-center items-center gap-4">
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
                )}
              </div>
            ) : (
              <div className="w-full h-[432px]">
                {cariKata === "" ? (
                  <div className=" bg-krem1 max-h-full overflow-y-auto rounded-lg scrollbar-thin scrollbar-thumb-coklat scrollbar-track-krem2">
                    {isSortIndonesia
                      ? dataKataGroup?.map((data, i) => {
                          return (
                            <Groupkata
                              data={data}
                              isSortIndonesia={isSortIndonesia}
                              key={data?.index}
                            />
                          );
                        })
                      : dataKataGroup?.map((data) => {
                          return (
                            <Groupkata
                              data={data}
                              isSortIndonesia={isSortIndonesia}
                              key={data?.index}
                            />
                          );
                        })}
                  </div>
                ) : (
                  <div className="w-full h-full">
                    {dataCariKata?.length !== 0 ? (
                      <div className="w-full h-full">
                        <div className="w-full grid grid-cols-2 h-12 border-b-4 border-krem2 bg-krem1 px-6 hover:brightness-95">
                          <div className="col-span-1 h-full w-full flex items-center">
                            <p className="text-2xl text-coklat font-alata font-semibold">
                              {dataKataGroup[0]?.group}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full">
                          {dataKataGroup[0]?.kataGroup?.map((item: any) => {
                            return (
                              <div
                                key={item.index}
                                className="min-h-10 h-auto max-h-16 lg:w-full w-[300px] bg-krem1 grid grid-cols-2 font-alata text-coklat font-medium text-base"
                              >
                                <div className="col-span-1 w-full h-full flex justify-center items-center border border-krem2 lg:px-28 px-4">
                                  <p className="font-semibold">
                                    {item?.indonesia}
                                  </p>
                                </div>
                                <div className="col-span-1 w-full h-full flex justify-center items-center border border-krem2 px-28">
                                  <p className="font-semibold">{item?.sunda}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      // isLoading ? (
                      //   <div className="w-full h-full flex justify-center items-center gap-4">
                      //     <p className="text-coklat text-xl font-alata font-medium">
                      //       Mencari kata
                      //     </p>
                      //     <SyncLoader size={10} color="#674636" />
                      //   </div>
                      // ) :
                      <div className="w-full h-full flex justify-center items-center gap-4">
                        <p className="text-coklat text-xl font-alata font-medium">
                          Kata yang kamu cari tidak ada
                        </p>
                        <FaRegSadCry size={30} color="#674636" />
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
