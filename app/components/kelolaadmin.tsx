"use client";

import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { IoCaretBack } from "react-icons/io5";
import axios from "axios";
import { routes } from "../api/routes";

interface Props {
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}

export default function Kelolaadmin({ setIsMenu }: Props) {
  const [isUbah, setIsUbah] = useState(false);
  const [inputAdmin, setInputAdmin] = useState({
    username: "",
    password: "",
  });
  const [dataAdmin, setDataAdmin] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${routes}/admin`);
      setDataAdmin(response?.data);
      console.log("wedwdwd", response.data);
    };
    getData();
  }, [isUbah, inputAdmin]);

  const handleInputAdmin = (e: any) => {
    e.preventDefault();
    setInputAdmin((data) => ({ ...data, [e.target.id]: e.target.value }));
  };

  const handleUbah = (e: any) => {
    setIsUbah(!isUbah);
  };

  const handleSimpan = async (e: any) => {
    e.preventDefault();

    if (inputAdmin.username === "") {
      alert("Username baru tidak boleh kosong");
    } else if (inputAdmin.password === "") {
      alert("Password baru tidak boleh kosong");
    } else {
      await axios.put(`${routes}/admin/66d583446827d0ae2c03f5df`, inputAdmin);
      setIsUbah(false);
    }
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
          <p className="text-black text-2xl font-semibold">Kelola Admin</p>
        </div>
        <div className="col-span-1"></div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-96 h-auto mt-12 p-6 text-black bg-white rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="grid grid-cols-4 w-full gap-2 my-2">
            <div className="col-span-2">
              <p className="text-lg font-semibold">Username</p>
            </div>

            <div className="col-span-2 flex gap-2">
              <p>:</p>
              {isUbah ? (
                <input
                  id="username"
                  type="text"
                  className="h-8 w-full px-2 border-b-2 border-gray-200 focus:outline-none focus:border-black"
                  onChange={handleInputAdmin}
                />
              ) : (
                <div className="bg-gray-200 rounded-lg px-4 w-auto h-8 flex items-center justify-center">
                  <p>{dataAdmin[0]?.username}</p>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-4 w-full gap-2 my-2">
            <div className="col-span-2">
              <p className="text-lg font-semibold">Password</p>
            </div>

            <div className="col-span-2 items-center gap-2 flex">
              <p>:</p>
              {isUbah ? (
                <input
                  type="text"
                  id="password"
                  className="h-8 w-full px-2 border-b-2 border-gray-200 focus:outline-none focus:border-black"
                  onChange={handleInputAdmin}
                />
              ) : (
                <div className="bg-gray-200 rounded-lg px-4 w-auto h-8 flex items-center justify-center">
                  <p>{dataAdmin[0]?.password}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center mt-6">
            {isUbah ? (
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="cols-span-1 h-10 w-20 bg-sky-600 cursor-pointer hover:brightness-95 flex justify-center items-center rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                  onClick={handleSimpan}
                >
                  <p className="text-white font-semibold text-lg">Simpan</p>
                </div>
                <div
                  className="cols-span-1 h-10 w-20 bg-red-600 cursor-pointer hover:brightness-95 flex justify-center items-center rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                  onClick={handleUbah}
                >
                  <p className="text-white font-semibold text-lg">Batal</p>
                </div>
              </div>
            ) : (
              <div
                className="h-10 w-20 bg-yellow-400 cursor-pointer hover:brightness-95 flex justify-center items-center rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                onClick={handleUbah}
              >
                <p className="text-black font-semibold text-lg">Ubah</p>
              </div>
            )}
          </div>

          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}
