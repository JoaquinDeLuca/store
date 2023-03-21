import CardDestails from "@components/CardDestails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../api";
import style from '@styles/details.module.css';

export default function productID() {
  const [product, setProduct] = useState<TProduct[]>([]);
  const [loadding, setLoadding] = useState(true)

  const {
    query: { id },
  } = useRouter();

  useEffect (() => {
    setLoadding(true)
    if(id){
      fetch(`${api}api/watch/${id}`)
        .then((response) => response.json())
        .then(( data : TAPISpeakerDetailResponse)  => setProduct([data]))
        .finally(() => setLoadding(false));
    }
  }, [id]);
  

  return (
    <div className={style.container}>
      {loadding ? <div className={style.loading}><p>Loading...</p> </div>: <CardDestails product={product}/>}
    </div>
  );
}
