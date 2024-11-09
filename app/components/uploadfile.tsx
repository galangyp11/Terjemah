"use client";

import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { IoCaretBack } from "react-icons/io5";
import { BsFileEarmarkExcel } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";
import { routes } from "../api/routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}

export default function Uploadfile({ setIsMenu }: Props) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: any) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleDelete = () => {
    setFile(null);
  };

  const handleSubmit = async () => {
    let formData = new FormData();

    if (file != null) {
      formData.append("file", file);
      const postData = async () => {
        // await axios.post(`http://localhost:3011/upload`, formData);
        await axios.post(`${routes}/upload`, formData);
      };
      postData();
    }
  };

  console.log("xwx", file);
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
          <p className="text-black text-2xl font-semibold">Upload Kata</p>
        </div>
        <div className="lg:col-span-1 hidden"></div>
      </div>

      <div className="w-full h-auto mt-12 px-6 py-6 lg:gap-0 gap-10 bg-white grid grid-cols-10 justify-center items-center rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="col-span-2">
          <p className="text-black">Masukan File (xlsx, xls) : </p>
        </div>

        <div className="col-span-6 flex items-center ">
          {file === null ? (
            <input
              type="file"
              accept=".xlsx, .xls"
              required
              onChange={handleFileChange}
            />
          ) : (
            <div className="flex justify-start items-center gap-4 w-full">
              <BsFileEarmarkExcel color="black" size={30} />

              <p className="text-black truncate">{file?.name}</p>

              <TiDeleteOutline
                onClick={handleDelete}
                className="text-gray-500 hover:text-red-500 lg:cursor-pointer ml-auto"
                size={30}
              />
            </div>
          )}
        </div>

        <div className="col-span-2 flex justify-center  ">
          {file === null ? null : (
            <button
              className="rounded-lg bg-black text-white px-7 py-2 w-fit h-fit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
