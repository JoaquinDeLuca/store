import FormLogIn from '@components/FormLogIn';
import style from '@styles/login.module.css';

export default function login() {

  return (
    <div className={style.loginPage}>
      <FormLogIn/>
    </div>
  )
}
