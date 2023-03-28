import CardDestails from "@components/CardDestails";
import api from "../../api";
import style from '@styles/details.module.css';
import { GetServerSideProps } from "next";

interface Props {
  data: TProduct
}

export default function productID({data}:Props) {

  return (
    <div className={style.container}>
      {<CardDestails product={data}/>}
    </div>
  );
}

export const getServerSideProps:GetServerSideProps = async ({query: {id}}) => {

  const res = await fetch(`${api}api/speaker/${id}`)
  const data = await res.json()

  return {
    props:{
      data: data
    }
  }
}