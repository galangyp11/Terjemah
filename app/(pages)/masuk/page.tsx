"use client";

import Navbar from "@/app/components/navbar";
import Input from "@/app/components/input";
import Footer from "@/app/components/footer";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import axios from "axios";
import { routes } from "@/app/api/routes";
import { motion, AnimatePresence } from "framer-motion";
import AlertBerhasil from "@/app/components/alert/alertBerhasil";
import AlertGagal from "@/app/components/alert/alertGagal";

export default function Home() {
  const cookie = getCookie("akses");
  const [isAkses, setIsAkses] = useState(false);
  const [inputKode, setInputKode] = useState({ kode: "" });
  const [dataKode, setDataKode] = useState<any[]>([]);

  const [isAlertBerhasil, setIsAlertBerhasil] = useState(false);
  const [isAlertGagal, setIsAlertGagal] = useState(false);
  const [textAlert, setTextAlert] = useState("");

  useEffect(() => {
    const navigationType = (
      window.performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming
    ).type;
    console.log("SDWAD", navigationType);

    if (
      navigationType === "reload" ||
      "back_forward" ||
      "prerender" ||
      "navigate"
    ) {
      deleteCookie("akses");
    }

    if (!cookie) {
      setIsAkses(false);
    }

    const getDataKode = async () => {
      const response = await axios.get(`${routes}/kode`);
      setDataKode(response?.data);
    };
    getDataKode();
  }, []);

  const handleInput = (e: any) => {
    e.preventDefault();
    setInputKode((data) => ({ ...data, kode: e.target.value }));
  };

  const handleMasukKode = () => {
    if (inputKode.kode === dataKode[0]?.kode) {
      setCookie("akses", "true");
      setIsAkses(true);
      setIsAlertBerhasil(true);
      setTextAlert("Berhasil Masuk!");
    } else {
      setIsAlertGagal(true);
      setTextAlert("Kode Salah!");
    }
  };

  // const isPageReload = navigationType === "reload";
  // const isNavigation = navigationType === "navigate";
  // const isBackForward = navigationType === "back_forward";
  // const isPrerender = navigationType === "prerender";
  // console.log("kode", dataKode);
  // console.log("input KOde", inputKode);
  return (
    <main className="h-auto bg-krem1 w-full">
      <div className="w-full sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="mt-10 w-full flex justify-center">
        {!isAkses ? (
          <div className="absolute w-full h-[600px] mt-20 top-0 left-0 z-20">
            <div className="w-full h-full flex justify-center items-center bg-black brightness-90 opacity-75"></div>
            <motion.div
              layout
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.5,
                transition: { duration: 0.2 },
              }}
              className="absolute p-6 top-1/4 left-0 right-0 mx-auto bg-krem1 lg:w-[450px] w-[300px] h-[250px] rounded-lg shadow-[0px_3px_0px_4px_#674636]"
            >
              <div className="flex flex-col w-full h-full items-center justify-center gap-6">
                <p className="text-4xl text-coklat font-alata font-semibold">
                  Kode
                </p>
                <input
                  type="tel"
                  placeholder="****"
                  maxLength={4}
                  className="rounded-xl tracking-widest focus:outline-none h-12 w-40 text-center text-black text-2xl font-alata font-semibold px-6 shadow-[0px_3px_0px_4px_#674636]"
                  onChange={handleInput}
                />
                <div className="col-span-1">
                  <div className="absolute -mt-1 -ml-1 active:mt-0 active:ml-0">
                    <div
                      className="w-[200px] h-[50px] bg-[#99BC85] rounded-full flex justify-center items-center cursor-pointer "
                      onClick={handleMasukKode}
                    >
                      <p className="text-krem1 font-alata font-medium text-2xl">
                        Masukan
                      </p>
                    </div>
                  </div>
                  <div className="w-[200px] h-[50px] rounded-full bg-coklat"></div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
        <Input />
      </div>

      <div>
        <Footer />
      </div>

      {isAlertBerhasil ? (
        <AlertBerhasil
          setIsAlertBerhasil={setIsAlertBerhasil}
          textAlert={textAlert}
        />
      ) : null}

      {isAlertGagal ? (
        <AlertGagal setIsAlertGagal={setIsAlertGagal} textAlert={textAlert} />
      ) : null}
    </main>
  );
}
