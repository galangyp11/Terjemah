"use client";

import { useEffect, useState } from "react";
import { routes } from "@/app/api/routes";
import axios from "axios";
import { LuEyeOff, LuEye } from "react-icons/lu";
import Image from "next/image";
import Logo from "@/app/image/logo-sd-berkarakter-al-biruni.png";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

export default function Home() {
  const [isShow, setIsShow] = useState(false);
  const [inputAdmin, setInputAdmin] = useState({
    username: "",
    password: "",
  });
  const [dataAdmin, setDataAdmin] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  useEffect(() => {
    const getDataAdmin = async () => {
      try {
        const response = await axios.get(
          `${routes}/admin/66d583446827d0ae2c03f5df`
        );
        setDataAdmin((data) => ({
          ...data,
          username: response.data.username,
          password: response.data.password,
        }));
      } catch (error) {
        // console.log("data cek kosong");
      }
    };
    getDataAdmin();
  }, []);

  const handleInput = (e: any) => {
    e.preventDefault();

    setInputAdmin((data) => ({
      ...data,
      [e.target.id]: e.target.value,
    }));
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (dataAdmin?.username !== inputAdmin.username) {
      alert("Username salah");
    } else if (dataAdmin?.password !== inputAdmin.password) {
      alert("Password salah");
    } else {
      setCookie("login", "true");
      router.push("/admin");
    }
  };

  const handleBeranda = () => {
    router.push("/");
  };

  return (
    <main className="h-screen bg-gray-100 w-full">
      <div className="w-full h-[600px] flex justify-center items-center">
        <div className="w-[400px] h-[450px] bg-white p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="flex justify-center">
            <p className="text-2xl text-black font-inter font-semibold">
              Login Admin
            </p>
          </div>

          <div className="flex justify-center w-full my-6">
            <Image src={Logo} alt="" className="h-20 w-auto" />
          </div>

          <div className="w-full my-12">
            <div className="flex justify-center my-4">
              <input
                type="text"
                id="username"
                placeholder="Username"
                autoComplete="off"
                className="w-[250px] h-[40px] px-2 text-black focus:outline-none focus:border-black border-b-2 border-gray-300"
                value={inputAdmin.username}
                onChange={handleInput}
              />
            </div>

            <div className="flex justify-center my-4">
              <div className="flex bg-white items-center ml-6">
                <input
                  type={isShow ? "text" : "password"}
                  id="password"
                  placeholder="password"
                  autoComplete="off"
                  className="w-[250px] h-[40px] px-2 text-black focus:outline-none focus:border-black border-b-2 border-gray-300"
                  value={inputAdmin.password}
                  onChange={handleInput}
                />
                {isShow ? (
                  <LuEyeOff
                    color="black"
                    size={25}
                    className="cursor-pointer"
                    onClick={() => {
                      setIsShow(!isShow);
                    }}
                  />
                ) : (
                  <LuEye
                    color="black"
                    size={25}
                    className="cursor-pointer"
                    onClick={() => {
                      setIsShow(!isShow);
                    }}
                  />
                )}
              </div>
            </div>

            <div className="flex justify-center my-4">
              <button
                className="bg-biru3 rounded-full w-[250px] h-8 font-semibold text-white"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>

            <div className="flex justify-center my-4">
              <button
                className="bg-white text-black border-2 border-black rounded-full w-[250px] h-8 font-semibold"
                onClick={handleBeranda}
              >
                Beranda
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-12 absolute bottom-0 bg-biru3">
        <div className="w-full h-full flex justify-center items-center gap-6">
          <p className="text-white font-inter font-normal lg:text-lg text-md">
            Terjemah
          </p>
          <p className="text-white font-inter font-normal lg:text-lg text-md">
            |
          </p>
          <p className="text-white font-inter font-normal lg:text-lg text-md">
            SD Berkarakter Al-Biruni
          </p>
        </div>
      </div>
    </main>
  );
}
