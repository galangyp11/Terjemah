import { motion } from "framer-motion";
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";

interface Props {
  textAlert: string;
  setIsAlertBerhasil: Dispatch<SetStateAction<boolean>>;
}

export default function Alert({ setIsAlertBerhasil, textAlert }: Props) {
  useEffect(() => {
    setTimeout(() => {
      setIsAlertBerhasil(false);
    }, 2000);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="absolute mx-auto top-24 left-0 right-0 w-[300px] h-[70px] bg-[#99BC85] rounded-lg shadow-[0px_-2px_0px_4px_#674636] z-50"
    >
      <div className="w-full h-full flex justify-center items-center">
        <p className="text-krem1 text-xl font-alata font-base">{textAlert}</p>
      </div>
    </motion.div>
  );
}
