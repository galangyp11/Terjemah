"use client";

import Navbar from "@/app/components/navbar";
import Input from "@/app/components/input";
import Footer from "@/app/components/footer";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useEffect } from "react";

export default function Home() {
  const cookie = getCookie("akses");

  useEffect(() => {
    const navigationType = (
      window.performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming
    ).type;
    console.log("SDWAD", navigationType);
  }, []);

  const handleMasukKode = () => {
    setCookie("login", "true");
  };
  // const isPageReload = navigationType === "reload";
  // const isNavigation = navigationType === "navigate";
  // const isBackForward = navigationType === "back_forward";
  // const isPrerender = navigationType === "prerender";

  return (
    <main className="h-auto bg-krem1 w-full">
      <div className="w-full">
        <Navbar />
      </div>

      <div className="mt-10 w-full flex justify-center">
        {!cookie ? (
          <div className="absolute w-full h-[600px] mt-20 top-0 left-0 z-20 ">
            <div className="w-full h-full flex justify-center items-center bg-black brightness-90 opacity-75"></div>
            <div className="absolute p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-krem1 w-[450px] h-[250px] rounded-lg">
              <div className="flex flex-col w-full h-full items-center justify-center gap-6">
                <p className="text-4xl text-coklat font-alata font-semibold">
                  Kode
                </p>
                <input
                  type="tel"
                  placeholder="****"
                  maxLength={4}
                  className="rounded-xl tracking-widest h-12 w-40 text-center text-black text-2xl font-alata font-semibold px-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                />
                <div className="col-span-1">
                  <div className="absolute -mt-1 -ml-1 active:mt-0 active:ml-0">
                    <div
                      className="w-[200px] h-[50px] bg-[#99BC85] rounded-full flex justify-center items-center cursor-pointer "
                      //onClick={handleSimpan}
                    >
                      <p className="text-krem1 font-alata font-medium text-2xl">
                        Masukan
                      </p>
                    </div>
                  </div>
                  <div className="w-[200px] h-[50px] rounded-full bg-coklat"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <Input />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
