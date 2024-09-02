"use client";

import React, { useState, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

type Props = {
  data?: any;
  isSortIndonesia?: boolean;
};

export default function Groupkata({ data, isSortIndonesia }: Props) {
  const [isOpenGroup, setIsOpenGroup] = useState(false);

  return (
    <div
      key={data?.index}
      className="w-full h-auto cursor-pointer "
      onClick={() => setIsOpenGroup(!isOpenGroup)}
    >
      <div className="w-full grid grid-cols-2 h-12 border-b-4 border-krem2 bg-krem1 px-6 hover:brightness-95">
        <div className="col-span-1 h-full w-full flex items-center">
          <p className="text-2xl text-coklat font-alata font-semibold">
            {data?.group}
          </p>
        </div>
        <div className="col-span-1 flex items-center justify-end gap-6">
          <p className="text-coklat text-lg font-alata font-normal">
            {data?.kataGroup?.length} Kata
          </p>
          <MdOutlineArrowDropDown color="#674636" size={35} />
        </div>
      </div>
      {isOpenGroup ? (
        <div className="w-full max-h-full">
          {data?.kataGroup?.map((item: any) => {
            return isSortIndonesia ? (
              <div
                key={item.index}
                className="h-10 w-full bg-krem1 grid grid-cols-2 font-alata text-coklat font-medium text-base"
              >
                <div className="col-span-1 w-full h-full flex items-center border border-krem2 px-28 gap-10">
                  <p className="font-semibold">{item?.indonesia}</p>
                  <p className="">/bu·at·su·ku·ka·ta/</p>
                </div>
                <div className="col-span-1 w-full h-full flex items-center border border-krem2 px-28 gap-10">
                  <p className="font-semibold">{item?.sunda}</p>
                  <p className="">/bu·at·su·ku·ka·ta/</p>
                </div>
              </div>
            ) : (
              <div
                key={item.index}
                className="h-10 w-full bg-krem1 grid grid-cols-2 font-alata text-coklat font-medium text-base"
              >
                <div className="col-span-1 w-full h-full flex items-center border border-krem2 px-28 gap-10">
                  <p className="font-semibold">{item?.sunda}</p>
                  <p className="">/bu·at·su·ku·ka·ta/</p>
                </div>
                <div className="col-span-1 w-full h-full flex items-center border border-krem2 px-28 gap-10">
                  <p className="font-semibold">{item?.indonesia}</p>
                  <p className="">/bu·at·su·ku·ka·ta/</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}