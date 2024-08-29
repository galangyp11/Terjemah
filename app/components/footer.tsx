import Link from "next/link";
import React from "react";

export default function footer() {
  return (
    <div className="w-full h-20 bg-biru grid grid-cols-2">
      <div className="col-span-1 p-6">
        <Link href="/login">
          <div className="w-[80px] h-[35px] flex justify-center items-center bg-biru border-2 border-biru2 rounded-full">
            <p className="text-biru2 font-medium font-inter">Admin</p>
          </div>
        </Link>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
}
