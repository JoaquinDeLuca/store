import React from "react";
import FormSignUp from "@components/FormSignUp";
import style from '@styles/signUp.module.css'

export default function Signup() {
  return (
    <div className={style.signUpPage}>
      <FormSignUp />
    </div>
  );
}
