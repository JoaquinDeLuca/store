import React,{ChangeEvent, FormEvent, useState} from 'react'
import style from '@styles/signUp.module.css'
import Link from 'next/link'


interface userSignUp {
    Name: string
    LastName:string
    Photo: string
    Mail: string
    Password: string
}

export default function FormSignUp() {

    const [data, setData] = useState<userSignUp>({
        Name: "",
        LastName: "",
        Photo: "",
        Mail: "",
        Password: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.target;
        setData({...data, [name]:value})
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);
        console.log(data);
    }

  return (
    <div className={style.container}>
        <div className={style.titleContainer}>
            <h2 className={style.h2}>Sign Up </h2>
        </div>
        <form className={style.form} onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", padding: "50px"}}>
            <label className={style.label}>Name</label>
            <input className={style.input} type='text' name='Name'  onChange={handleChange} required/>
            <label className={style.label}>LastName</label>
            <input className={style.input} type='text' name='LastName' onChange={handleChange} required/>
            <label className={style.label}>Photo Url</label>
            <input className={style.input} type='text' name='Photo' onChange={handleChange} required/>
            <label className={style.label}>Email</label>
            <input className={style.input} type='email'  name='Mail' onChange={handleChange} required/>
            <label className={style.label}>Password</label>
            <input className={style.input} type='password' name='Password' onChange={handleChange} required/>
            <button className={style.btn}>Register</button>
        </form>
        <p>You already have an account <Link href={"/logIn"} className={style.link}>LogIn</Link></p>
    </div>
  )
}
