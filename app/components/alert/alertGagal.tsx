import { motion } from "framer-motion";
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";

interface Props {
  textAlert: string;
  setIsAlertGagal: Dispatch<SetStateAction<boolean>>;
}

export default function Alert({ setIsAlertGagal, textAlert }: Props) {
  useEffect(() => {
    setTimeout(() => {
      setIsAlertGagal(false);
    }, 2000);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="absolute mx-auto top-24 left-0 right-0 w-[250px] h-[70px] bg-[#DF6A6A] rounded-lg border-4 border-[#c44b4b] z-50"
    >
      <div className="w-full h-full flex justify-center items-center">
        <p className="text-krem1 text-xl font-alata font-base">{textAlert}</p>
      </div>
    </motion.div>
  );
}
