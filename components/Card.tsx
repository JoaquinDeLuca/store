import React from "react";
import Image from "next/image";
import style from "@styles/home.module.css";
import api from "../api";
import Link from "next/link";

interface Props {
  products: TProduct[];
}

export default function card({ products }: Props) {
  const printWatch = (speaker: TProduct) => {
    return (
      <div key={speaker._id} className={style.card}>
        <Link href={`${api}product/${speaker._id}`} className={style.link}>
          <Image
            src={speaker.image}
            width={300}
            height={320}
            priority={true}
            className={style.img}
            alt={speaker.name}
          />
          <div className={style.cardDetails}>
            <p className={style.p}>{speaker.name}</p>
            <p>Price: ${speaker.price}</p>
          </div>
        </Link>
      </div>
    );
  };

  return <>{products.map(printWatch)}</>;
}
