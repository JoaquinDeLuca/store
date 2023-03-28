import React from "react";
import api from "../api";
import Card from "@components/Card";
import style from "@styles/home.module.css";
import { GetServerSideProps } from 'next'

interface Props {
  data: TProduct[]
}

export default function index({data}: Props) {
  return (
    <div className={style.container}>
      { <Card products={data} />}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${api}api/speaker`)
  const data = await res.json()

  return {
    props: {
      data: data
    },
  }
}