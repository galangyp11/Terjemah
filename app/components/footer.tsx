import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/app/image/logo-sd-berkarakter-al-biruni.png";

export default function footer() {
  return (
    <div className="w-full h-64 bg-biru1">
      <div className="w-full h-3/4 grid grid-cols-4 px-6 pt-6">
        <div className="col-span-3">
          <div>
            <Image src={Logo} alt="" className="h-[40px] w-[40px]" />
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-end">
          <div className="w-full">
            <Link href="/login">
              <div className="w-full h-[40px] flex justify-center items-center hover:brightness-90 bg-biru2">
                <p className="text-white font-semibold font-inter">Admin</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full px-6 pt-6">
        <div className="border-t border-biru2 w-full flex items-center justify-center">
          <p className="pt-2 text-base font-medium">
            &copy; SD Berkarakter Al-Biruni
          </p>
        </div>
      </div>
    </div>
  );
}
