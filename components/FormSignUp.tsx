import React,{ChangeEvent, FormEvent, useState} from 'react'
import style from '@styles/signUp.module.css'
import Link from 'next/link'
import { useSignUpUserMutation } from 'features/actions/authApi'
import Loading from 'components/LoaderBtn'
import WindowModal from 'components/WindowModal'


interface userSignUp {
    name: string,
    lastName:string,
    photo: string,
    mail: string,
    password: string,
    logged: boolean
}

export default function FormSignUp() {

    const [erroMsg, setErrorMsg] = useState<ErrorRes>()
    const [data, setData] = useState<userSignUp>({
        name: "",
        lastName: "",
        photo: "",
        mail: "",
        password: "",
        logged: false
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.target;
        setData({...data, [name]:value})
    }

    const [signUpUser,{isSuccess, isError, isLoading }] = useSignUpUserMutation()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await signUpUser(data).unwrap()
        .then( res => {
            const resetForm = e.target as HTMLFormElement;
            resetForm.reset();
        })
        .catch( error => setErrorMsg(error))
    }

  return (
    <div className={style.container}>
        <div className={style.titleContainer}>
            <h2 className={style.h2}>Sign Up </h2>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
            <label className={style.label}>Name</label>
            <input className={style.input} type='text' name='name'  onChange={handleChange} required/>
            <label className={style.label}>LastName</label>
            <input className={style.input} type='text' name='lastName' onChange={handleChange} required/>
            <label className={style.label}>Photo Url</label>
            <input className={style.input} type='text' name='photo' onChange={handleChange} required/>
            <label className={style.label}>Email</label>
            <input className={style.input} type='email'  name='mail' onChange={handleChange} required/>
            <label className={style.label}>Password</label>
            <input className={style.input} type='password' name='password' onChange={handleChange} required/>
            {isError && <p className={style.errorMsg}>{erroMsg?.data}</p>}
            <button className={style.btn} disabled={isLoading} >{isLoading ? <Loading/> : "Register"}</button>
        </form>
        <p>You already have an account <Link href={"logIn"} className={style.link}>LogIn</Link></p>
        {isSuccess && <WindowModal route='logIn' text='you have successfully registered'/>}
    </div>
  )
}
