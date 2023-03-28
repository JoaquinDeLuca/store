import React from "react";
import style from "@styles/home.module.css";
import api from "../api";
import Link from "next/link";
import { motion } from "framer-motion"

interface Props {
  products: TProduct[];
}

export default function card({ products }: Props) {
  const printWatch = (speaker: TProduct) => {
    return (
      <motion.div key={speaker._id} className={style.card}>
        <Link href={`${api}product/${speaker._id}`} className={style.link}>
          <motion.img
            src={speaker.image}
            width={300}
            height={320}
            className={style.img}
            alt={speaker.name}
            layoutId={speaker.name}
          />
          <div className={style.cardDetails}>
            <p className={style.p}>{speaker.name}</p>
            <p>Price: ${speaker.price}</p>
          </div>
        </Link>
      </motion.div>
    );
  };

  return <>{products.map(printWatch)}</>;
}
