import React, { ChangeEvent, FormEvent, useState } from "react";
import api from "api";
import Link from "next/link";
import style from "@styles/login.module.css";
import { useLoginUserMutation } from 'features/actions/authApi'
import { useRouter } from "next/router";
import { setCredentials } from 'features/slice/authSlice'
import { useDispatch } from "react-redux";
import Loading from 'components/LoaderBtn'

interface dataUser {
  mail: string
  password: string
}

export default function FormSignUp() {

  const [loginUser, {isLoading, isError, isSuccess}] = useLoginUserMutation();

  const router = useRouter();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState<ErrorRes>()

  const [data, setData] = useState<dataUser>({
    mail: "",
    password: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;
    setData({...data, [name]:value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send Data user redux and getUSerInfo
    await loginUser(data).unwrap()
      .then( res => {
        const resetForm = e.target as HTMLFormElement;
        resetForm.reset();
      
        getUserInfo();
      
        router.push("/")
      })
      .catch( error => setErrorMessage(error));
  };

  const getUserInfo = async () => {
    const response = await fetch(`${api}/api/getUserInfo`);
    const data = await response.json()

    dispatch(setCredentials(data));
  }

  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h2 className={style.h2}>Login</h2>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.label}>Email</label>
        <input className={style.input} name="mail" type="email" onChange={handleChange} required/>
        <label className={style.label}>Password</label>
        <input className={style.input} name="password" type="password" onChange={handleChange} required/>
        {isError && <p className={style.errorMessage}> {errorMessage?.data} </p>}
        <button className={style.btn} disabled={isLoading} >{isLoading ? <Loading /> : "Sign in"}</button>
      </form>
      <p>
        Don't have an account? <Link href={"/signup"} className={style.link}>Sign up</Link>
      </p>
    </div>
  );
}
