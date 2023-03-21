import React from "react";
import Image from "next/image";
import style from "@styles/home.module.css";
import api from "../api";
import Link from "next/link";

interface Props {
  products: TProduct[];
}

export default function card({ products }: Props) {
  const printWatch = (watch: TProduct) => {
    return (
      <div key={watch.id} className={style.card}>
        <Link href={`${api}product/${watch.id}`} className={style.link}>
          <Image
            src={watch.image}
            width={300}
            height={320}
            priority={true}
            className={style.img}
            alt={watch.name}
          />
          <div className={style.cardDetails}>
            <p className={style.p}>{watch.name}</p>
            <p>Price: ${watch.price}</p>
          </div>
        </Link>
      </div>
    );
  };

  return <>{products.map(printWatch)}</>;
}
