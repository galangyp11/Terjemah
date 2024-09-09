"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/app/image/logo-sd-berkarakter-al-biruni.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import Map from "./map";

export default function Footer() {
  return (
    <div className="w-full h-auto bg-biru1 font-inter">
      <div className="w-full h-[350px] lg:grid grid-cols-3 px-6 pt-6 hidden">
        <div className="col-span-1 flex flex-col gap-2">
          <div className="w-full flex justify-start items-center gap-2">
            <Image src={Logo} alt="" className="h-[40px] w-[40px]" />
            <p className="text-xl text-krem1 font-semibold font-inter">
              SD Berkarakter Al Biruni
            </p>
          </div>
          <div className="w-[400px] h-[160px] bg-krem2 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7930.859159586726!2d107.02025029847243!3d-6.338364826900181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1725795293560!5m2!1sid!2sid"
              width="400"
              height="200"
              loading="lazy"
              // allowfullscreen=""
              // draggable="true"
              // referrerpolicy="no-referrer-when-downgrade"
              className="border-0 rounded-lg"
            ></iframe>
          </div>

          <div className="w-full h-auto flex-1 mb-4 flex justify-start items-end">
            <Link href="/login" className="w-[300px]">
              <div className="w-[300px] h-[40px] flex justify-center items-center hover:brightness-90 bg-krem2 rounded-lg">
                <p className="text-coklat font-semibold">Admin</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-span-1 ">
          <div className="w-full flex justify-center items-center my-12">
            <p className="font-inter font-semibold text-4xl text-krem1">
              PRIDE OF EXCELLENT
            </p>
          </div>

          <div className="w-full flex justify-center items-center">
            <p className="font-alata font-medium text-xl italic text-krem1 text-center">
              Menebar Benih Kebaikan, Menuai Masa Depan Gemilang <br />
              (Sowing Seeds of Kindness, Reaping a Bright Future)
            </p>
          </div>
        </div>

        <div className="col-span-1 w-full h-full flex flex-col px-10 gap-4">
          <div className="w-full h-full">
            <p className="text-krem1 font-semibold text-lg font-inter">
              Kontak
            </p>
            <div className="py-2 flex flex-col gap-1">
              <div className="w-full flex items-center gap-2">
                <div className="bg-krem2 w-8 h-8 rounded-full flex justify-center items-center">
                  <FaLocationDot color="#674636" size={23} />
                </div>
                <p className="text-krem1 text-balance w-full">
                  Jl. H. Ma&apos;mun Kp. Cinyosog Desa Burangkeng Kec. Setu,
                  Kabupaten Bekasi Jawa Barat
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-krem2 w-8 h-8 rounded-full flex justify-center items-center">
                  <BsTelephoneFill color="#674636" size={18} />
                </div>
                <p className="text-krem1">Telp</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-krem2 w-8 h-8 rounded-full flex justify-center items-center">
                  <MdEmail color="#674636" size={23} />
                </div>
                <p className="text-krem1">Email</p>
              </div>
            </div>
          </div>

          <div className="w-full h-full">
            <p className="text-krem1 font-semibold text-lg font-inter">
              Sosial Media
            </p>
            <div className="py-2 flex flex-col gap-1">
              <Link
                target="_blank"
                href={"https://www.instagram.com/sdberkarakteralbiruni/"}
              >
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="bg-krem2 w-8 h-8 rounded-full flex justify-center items-center">
                    <AiFillInstagram color="#674636" size={25} />
                  </div>
                  <p className="text-krem1">SDBERKARAKTERALBIRUNI</p>
                </div>
              </Link>

              <Link
                target="_blank"
                href={"https://www.youtube.com/@sdberkarakteralbiruni1135"}
              >
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="bg-krem2 w-8 h-8 rounded-full flex justify-center items-center">
                    <FaYoutube color="#674636" size={23} />
                  </div>
                  <p className="text-krem1">SDBERKARAKTERALBIRUNI</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex flex-col w-full gap-2 p-6">
        <div className="w-full flex justify-center items-center gap-2">
          <Image src={Logo} alt="" className="h-[40px] w-[40px]" />
          <p className="text-xl text-krem1 font-semibold font-inter">
            SD Berkarakter Al Biruni
          </p>
        </div>

        <div className="w-full flex justify-center items-center my-6">
          <p className="font-inter font-semibold text-3xl text-krem1">
            PRIDE OF EXCELLENT
          </p>
        </div>

        <div className="w-full flex justify-center items-center">
          <p className="font-alata font-medium text-lg italic text-krem1 text-center">
            Menebar Benih Kebaikan, Menuai Masa Depan Gemilang <br />
            (Sowing Seeds of Kindness, Reaping a Bright Future)
          </p>
        </div>

        <div className="w-full h-full">
          <p className="text-krem1 font-semibold text-lg font-inter">Kontak</p>
          <div className="py-2 flex flex-col gap-1">
            <div className="w-full flex items-center gap-2">
              <div className="bg-krem2 w-8 h-8 rounded-full flex justify-center items-center">
                <FaLocationDot color="#674636" size={23} />
              </div>
              <p className="text-krem1 w-full">
                Jl. H. Ma&apos;mun Kp. Cinyosog Desa Burangkeng Kec. Setu,
                Kabupaten Bekasi Jawa Barat
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-krem2 w-8 h-8 rounded-full flex justify-center items-center">
                <BsTelephoneFill color="#674636" size={18} />
              </div>
              <p className="text-krem1">Telp</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-krem2 w-8 h-8 rounded-full flex justify-center items-center">
                <MdEmail color="#674636" size={23} />
              </div>
              <p className="text-krem1">Email</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full">
          <p className="text-krem1 font-semibold text-lg font-inter">
            Sosial Media
          </p>
          <div className="py-2 flex flex-col gap-1">
            <Link
              target="_blank"
              href={"https://www.instagram.com/sdberkarakteralbiruni/"}
            >
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="bg-krem2 w-8 h-8 rounded-full flex justify-center items-center">
                  <AiFillInstagram color="#674636" size={25} />
                </div>
                <p className="text-krem1">SDBERKARAKTERALBIRUNI</p>
              </div>
            </Link>

            <Link
              target="_blank"
              href={"https://www.youtube.com/@sdberkarakteralbiruni1135"}
            >
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="bg-krem2 w-8 h-8 rounded-full flex justify-center items-center">
                  <FaYoutube color="#674636" size={23} />
                </div>
                <p className="text-krem1">SDBERKARAKTERALBIRUNI</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full h-auto bg-krem2 rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7930.859159586726!2d107.02025029847243!3d-6.338364826900181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1725795293560!5m2!1sid!2sid"
            loading="lazy"
            // allowfullscreen=""
            // draggable="true"
            // referrerpolicy="no-referrer-when-downgrade"
            className="border-0 rounded-lg w-full h-[200px]"
          ></iframe>
        </div>

        <div className="w-full h-auto flex-1 flex justify-end items-end">
          <Link href="/login" className="w-full">
            <div className="w-full h-[40px] flex justify-center items-center hover:brightness-90 bg-krem2 rounded-lg">
              <p className="text-coklat font-semibold">Admin</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full h-[40px] flex justify-center items-center px-6">
        <div className="border-t border-coklat flex justify-center items-center w-full h-full">
          <p className="text-base text-krem1">
            Copyright &copy; SD Berkarakter Al Biruni
          </p>
        </div>
      </div>
    </div>
  );
}
