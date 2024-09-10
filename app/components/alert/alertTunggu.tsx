import { motion } from "framer-motion";
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";

interface Props {
  textAlert: string;
  setIsAlertTunggu: Dispatch<SetStateAction<boolean>>;
}

export default function Alert({ setIsAlertTunggu, textAlert }: Props) {
  useEffect(() => {
    setTimeout(() => {
      setIsAlertTunggu(false);
    }, 2000);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="absolute mx-auto top-24 left-0 right-0 w-[300px] h-[70px] bg-krem1 rounded-lg shadow-[0px_-2px_0px_4px_#674636] z-50"
    >
      <div className="w-full h-full flex justify-center items-center">
        <p className="text-coklat text-xl font-alata font-base">{textAlert}</p>
      </div>
    </motion.div>
  );
}
