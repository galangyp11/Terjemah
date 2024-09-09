"use client";

import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { IoCaretBack } from "react-icons/io5";
import axios from "axios";
import { routes } from "../api/routes";
import { LuSearch } from "react-icons/lu";
import Fieldkata from "./fieldkata";
import { MoonLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}

export default function Kelolakata({ setIsMenu }: Props) {
  const [dataKata, setDataKata] = useState<any[]>([]);
  const [dataUbah, setDataUbah] = useState({
    indonesia: "",
    sunda: "",
  });
  const [cariKata, setCariKata] = useState("");
  const [dataCariKata, setDataCariKata] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const notifySukses = (pesan: any) => toast.success(pesan);
  const notifyGagal = (pesan: any) => toast.error(pesan);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${routes}/kata`);
      if (response?.data?.length === 0) {
        setIsLoading(true);
      }
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
      console.log("wedwdwd", response.data);
    };
    getData();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

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
      console.log("dataCari", response.data);
    };
    onSearchItem();

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [cariKata]);

  const handleDeleteAll = async (e: any) => {
    e.preventDefault();

    await axios.delete(`${routes}/kata`);
    // const dataFillter = dataKata.filter((data: any) => data._id !== id);
    setDataKata([]);
  };

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-5 lg:gap-0 gap-6">
        <div className="lg:col-span-1 col-span-5 flex items-center">
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

        <div className="lg:col-span-3 col-span-5 flex justify-center items-center">
          <p className="text-black text-2xl font-semibold">Kelola Kata</p>
        </div>
        <div className="col-span-1"></div>
      </div>

      <div className="w-full max-h-[600px] lg:mt-12 mt-6 p-6 text-black bg-white rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="w-full">
          <div className="w-64 flex p-2 text-md gap-1 items-center rounded-lg shadow-[0px_0px_1px_1px_#00000024]">
            <LuSearch size={22} />
            <input
              type="text"
              placeholder="Cari kata...."
              className="focus:outline-none"
              value={cariKata}
              onChange={handleCariKata}
            />
          </div>
        </div>

        <div className="my-2 h-[420px] overflow-clip flex flex-col">
          {isLoading ? (
            <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
              <p className="text-lg font-semibold">Memuat kata</p>
              <MoonLoader />
            </div>
          ) : (
            <div className="my-2 h-[420px] overflow-clip flex flex-col">
              <table className="w-full lg:table-fixed ">
                <thead className="sticky top-0 ">
                  <tr>
                    <th className="border border-gray-200 bg-gray-200 w-12">
                      No
                    </th>
                    <th className="border border-gray-200 bg-gray-200 lg:w-auto w-[100px]">
                      Indonesia
                    </th>
                    <th className="border border-gray-200 bg-gray-200 lg:w-auto w-[100px]">
                      Bekasi
                    </th>
                    <th className="border border-gray-200 bg-gray-200 lg:w-auto w-[100px]">
                      Aksi
                    </th>
                  </tr>
                </thead>
              </table>
              <div className="flex-1 overflow-y-auto">
                <table className="w-full table-fixed">
                  <tbody>
                    {dataKata?.map((data, index) => {
                      const no = index + 1;

                      return (
                        <Fieldkata
                          key={data.index}
                          no={no}
                          index={index}
                          data={data}
                          dataUbah={dataUbah}
                          setDataUbah={setDataUbah}
                          dataKata={dataKata}
                          setIsLoading={setIsLoading}
                          setDataKata={setDataKata}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {cariKata === "" ? (
                <div>
                  <table className="w-full table-fixed">
                    <tfoot>
                      <tr>
                        <th className="bg-gray-200">Total Kata</th>
                        <td className="bg-gray-200 px-4 w-[50px]">
                          {dataKata.length}
                        </td>
                        <td className="bg-gray-200 flex justify-center items-center py-1">
                          <div className="w-full h-12 px-4 py-1 flex justify-center items-center">
                            {dataKata.length === 0 ? null : (
                              <div
                                className="rounded-lg flex justify-center items-center bg-red-600 text-white text-xs cursor-pointer hover:brightness-95 h-8 w-[200px]"
                                onClick={handleDeleteAll}
                              >
                                Hapus semua
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              ) : (
                <div className="my-2 h-[420px]">
                  {dataCariKata.length === 0 || dataKata.length === 0 ? (
                    <table className="w-full table-fixed">
                      <tbody>
                        <tr className="bg-gray-50 h-8">
                          <td className="text-center w-12 border border-gray-200 h-8 col-span-5">
                            Data Kata tidak ada
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : (
                    <table className="w-full table-fixed">
                      <tbody>
                        <tr
                          key={dataCariKata[0]?.index}
                          className="bg-gray-50 h-8"
                        >
                          <td className="text-center w-12 border border-gray-200 h-8">
                            1
                          </td>
                          <td className="px-4 border border-gray-200">
                            {dataCariKata[0]?.indonesia}
                          </td>
                          <td className="px-4 border border-gray-200">
                            {dataCariKata[0]?.sunda}
                          </td>
                          <td className="h-8 flex items-center justify-center gap-4 border border-gray-200">
                            <div className=" bg-yellow-400 cursor-pointer hover:brightness-95 px-2 rounded-lg text-black">
                              Ubah
                            </div>
                            <div className="rounded-lg bg-red-600 px-2 text-white cursor-pointer hover:brightness-95">
                              Hapus
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
