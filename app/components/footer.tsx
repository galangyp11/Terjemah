import Link from "next/link";
import React from "react";

export default function footer() {
  return (
    <div className="w-full h-44 bg-biru">
      <div className="w-full h-2/3 grid grid-cols-4 px-6 pt-6">
        <div className="col-span-3 "></div>
        <div className="col-span-1 ">
          <Link href="/login">
            <div className="w-[80px] h-[35px] flex justify-center items-center bg-biru border-2 border-biru2 rounded-full">
              <p className="text-biru2 font-medium font-inter">Admin</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="border-t border-krem1 mx-12"></div>
    </div>
  );
}
