import React from "react";
import Image from "next/image";
import Karakter from "@/app/image/karakter-home.png";
import Link from "next/link";

export default function homepage() {
  return (
    <div className="w-full h-screen ">
      <div className="w-full flex justify-center">
        <p className="font-mont font-bold text-[#674636] lg:text-8xl text-6xl">
          Terjemah
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-2">
        <div className="col-span-1 flex flex-col justify-center items-center gap-10">
          <Image src={Karakter} alt="" className="h-[300px] w-auto" />
          <div className="w-[350px] lg:-my-6">
            <p className="text-hijau text-lg font-medium font-alata">
              /ter·je·mah/ v, menerjemahkan/me·ner·je·mah·kan/ v menyalin
              (memindahkan) suatu bahasa ke bahasa lain;
            </p>
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center lg:my-0 my-6">
          <div className="flex flex-col gap-6">
            <Link href="#masuk">
              <div className="w-[300px] h-[90px] bg-[#F6995C] rounded-full flex justify-center items-center cursor-pointer hover:outline hover:outline-4 hover:outline-offset-2 hover:outline-coklat">
                <p className="text-krem1 font-alata font-medium text-2xl">
                  Masukkan Kata
                </p>
              </div>
            </Link>

            <Link href="#koleksi">
              <div className="w-[300px] h-[90px] bg-[#F6995C] rounded-full flex justify-center items-center cursor-pointer hover:outline hover:outline-4 hover:outline-offset-2 hover:outline-coklat">
                <p className="text-krem1 font-alata font-medium text-2xl">
                  Koleksi Kata
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
