import React, { useEffect, useState } from "react";
import api from "../api";
import Card from "@components/Card";
import style from "@styles/home.module.css";

export default function index() {
  const [productsList, setProductslist] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${api}/api/watch/`)
      .then((responde) => responde.json())
      .then(({ data }: TAPISpeakerResponse) => setProductslist(data))
      .finally(() => setLoading(false))
  }, []);

  return (
    <div className={style.container}>
      <Card products={productsList} />
    </div>
  );
}
