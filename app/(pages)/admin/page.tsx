"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/app/image/logo-sd-berkarakter-al-biruni.png";
import { PiKey } from "react-icons/pi";
import { TiSortAlphabetically } from "react-icons/ti";
import { IoMdPerson } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import Kodeakses from "@/app/components/kodeakses";
import Kelolaadmin from "@/app/components/kelolaadmin";
import Kelolakata from "@/app/components/kelolakata";
import Uploadfile from "@/app/components/uploadfile";
import axios from "axios";
import { routes } from "@/app/api/routes";
import { redirect, useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import { IoIosLogOut } from "react-icons/io";

export default function Page() {
  const cookie = getCookie("login");
  const router = useRouter();
  const [menu, setMenu] = useState<any>();
  const [dataKode, setDataKode] = useState<any[]>([]);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [dataAdmin, setDataAdmin] = useState<any[]>([]);

  useEffect(() => {
    if (!cookie) {
      redirect("/");
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${routes}/admin`);
      setDataAdmin(response?.data);
      // console.log("wedwdwd", response.data);
    };
    getData();
  }, [isMenu]);

  const handlePilihMenuKode = (e: any) => {
    e.preventDefault();

    setIsMenu(true);
    setMenu(<Kodeakses setIsMenu={setIsMenu} />);
  };

  const handlePilihMenuAdmin = (e: any) => {
    e.preventDefault();

    setIsMenu(true);
    setMenu(<Kelolaadmin setIsMenu={setIsMenu} />);
  };

  const handlePilihMenuKata = (e: any) => {
    e.preventDefault();

    setIsMenu(true);
    setMenu(<Kelolakata setIsMenu={setIsMenu} />);
  };

  const handlePilihMenuUpload = (e: any) => {
    e.preventDefault();

    setIsMenu(true);
    setMenu(<Uploadfile setIsMenu={setIsMenu} />);
  };

  const handleLogout = (e: any) => {
    e.preventDefault();

    deleteCookie("login");
    router.push("/");
  };

  useEffect(() => {
    const getKode = async () => {
      const response = await axios.get(`${routes}/kode`);
      setDataKode(response?.data);
    };
    getKode();
  }, [isMenu, menu]);

  if (!cookie) {
    return null;
  }

  // console.log("dataadmin", dataAdmin);

  return (
    <div className="h-screen w-full grid grid-cols-5">
      <div className="col-span-1 bg-white h-full p-6 lg:flex hidden flex-col">
        <div className="w-full flex justify-center">
          <IoPersonCircleSharp className="text-[#e5e7eb]" size={150} />
        </div>
        <div className="w-full flex justify-center">
          <p className="text-black text-3xl font-inter font-semibold">
            Halo, {dataAdmin[0]?.username}
          </p>
        </div>
        <div
          className="w-full cursor-pointer border-b-2 hover:border-black border-gray-200 mt-6 flex items-center gap-4"
          onClick={handlePilihMenuAdmin}
        >
          <IoMdPerson color="black" size={30} />
          <p className="text-black text-xl font-inter font-medium">
            Kelola Admin
          </p>
        </div>
        <div
          className="w-full cursor-pointer border-b-2 hover:border-black border-gray-200 mt-6 flex items-center gap-4"
          onClick={handlePilihMenuKata}
        >
          <TiSortAlphabetically color="black" size={30} />
          <p className="text-black text-xl font-inter font-medium ">
            Kelola Kata
          </p>
        </div>
        <div
          className="w-full cursor-pointer border-b-2 hover:border-black border-gray-200 mt-6 flex items-center gap-4"
          onClick={handlePilihMenuKode}
        >
          <PiKey color="black" size={30} />
          <p className="text-black text-xl font-inter font-medium ">
            Kode Aksess
          </p>
        </div>

        <div
          className="w-full cursor-pointer border-b-2 hover:border-black border-gray-200 mt-6 flex items-center gap-4"
          onClick={handlePilihMenuUpload}
        >
          <FiUpload color="black" size={30} />
          <p className="text-black text-xl font-inter font-medium ">
            Upload Kata
          </p>
        </div>

        <div className="w-full h-auto flex-1 flex justify-center items-end  ">
          <p className="text-sm text-black">
            Copyright &copy; SD Berkarakter Al Biruni
          </p>
        </div>
      </div>

      <div className="lg:col-span-4 col-span-5 h-full bg-gray-200 ">
        <div className="w-full h-16 px-6 grid lg:grid-cols-3 grid-cols-4 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="lg:col-span-2 col-span-3 h-full w-full flex justify-start items-center gap-4">
            <Image src={Logo} alt="" className="h-12 w-auto" />
            <p className="text-coklat font-inter font-semibold lg:text-xl text-sm">
              SD Berkarakter Al-Biruni
            </p>
          </div>

          <div className="col-span-1 flex justify-end items-center">
            <button
              className="w-[150px] h-[30px] bg-red-500 rounded-lg lg:inline hidden"
              onClick={handleLogout}
            >
              Logout
            </button>
            <div
              className="lg:hidden bg-red-500 rounded-lg h-[40px] w-[40px] flex justify-center items-center"
              onClick={handleLogout}
            >
              <IoIosLogOut size={30} color="white" />
            </div>
          </div>
        </div>

        <div className="w-full p-6 ">
          {isMenu ? (
            menu
          ) : (
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
              <div
                className="w-full h-[200px] px-12 cursor-pointer hover:brightness-95 grid grid-cols-3 rounded-lg bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                onClick={handlePilihMenuKode}
              >
                <div className="col-span-2">
                  <div className=" w-full h-1/2 flex items-end">
                    <p className="font-inter font-semibold text-2xl text-black">
                      Kode Akses
                    </p>
                  </div>
                  <div className="w-full h-1/2 flex items-start">
                    <p className="font-inter text-xl text-black">
                      {dataKode[0]?.kode}
                    </p>
                  </div>
                </div>
                <div className="col-span-1 flex items-center">
                  <PiKey className="text-[#e5e7eb]" size={100} />
                </div>
              </div>

              <div
                className="w-full h-[200px] px-12 cursor-pointer hover:brightness-95 grid grid-cols-3 rounded-lg bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                onClick={handlePilihMenuKata}
              >
                <div className="col-span-2">
                  <div className="w-full lg:h-1/2 h-full flex lg:items-end items-center">
                    <p className="font-inter font-semibold text-2xl text-black">
                      Kelola Kata
                    </p>
                  </div>
                </div>
                <div className="col-span-1 flex items-center">
                  <TiSortAlphabetically className="text-[#e5e7eb]" size={100} />
                </div>
              </div>

              <div
                className="w-full h-[200px] px-12 cursor-pointer hover:brightness-95 grid grid-cols-3 rounded-lg bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                onClick={handlePilihMenuAdmin}
              >
                <div className="col-span-2">
                  <div className="w-full lg:h-1/2 h-full flex lg:items-end items-center">
                    <p className="font-inter font-semibold text-2xl text-black">
                      Kelola Admin
                    </p>
                  </div>
                </div>
                <div className="col-span-1 flex items-center">
                  <IoMdPerson className="text-[#e5e7eb]" size={100} />
                </div>
              </div>

              <div
                className="w-full h-[200px] px-12 cursor-pointer hover:brightness-95 grid grid-cols-3 rounded-lg bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                onClick={handlePilihMenuUpload}
              >
                <div className="col-span-2">
                  <div className="w-full lg:h-1/2 h-full flex lg:items-end items-center">
                    <p className="font-inter font-semibold text-2xl text-black">
                      Upload Kata
                    </p>
                  </div>
                </div>
                <div className="col-span-1 flex items-center">
                  <FiUpload className="text-[#e5e7eb]" size={100} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
