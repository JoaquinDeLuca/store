import style from '@styles/navbar.module.css'
import Link from 'next/link'
import { userInfo } from 'features/slice/authSlice'
import { deleteCredentials } from 'features/slice/authSlice'
import { TotalQuantity } from 'features/slice/speakerSlice'
import { useDispatch, useSelector } from 'react-redux'
import Logo from 'public/images/logo.svg'
import Cart from 'public/images/cart.svg'
import UserIcon from 'public/images/user.svg'
import { useState } from 'react'
import api from 'api'
import { useRouter } from 'next/router'

export default function Navbar() {

  // states
  const quantity = useSelector(TotalQuantity)
  const user: userCredentials = useSelector(userInfo)

  const dispatch = useDispatch();
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal)
  }

  const logOut = async () => {

    const Options = { method: "POST", body: user._id }

    await fetch(`${api}/api/auth/logout`, Options)
    .then(res => {
      if (res.status === 200){
        dispatch(deleteCredentials())
        router.push("/logIn")
      }
    })
 }
 

  return (
    <div className={style.container}>
      <div className={style.maxwidth}>
        <Link className={style.link} href={'/'}>
          <div className={style.logoAndName}>
            <Logo className={style.logo}/>
          </div>
        </Link>
        <div className={style.containerIcons}>
            { user.photo ? 
              <img src={user.photo} width={39} height={39} alt="User Photo" className={style.imgUser} onClick={handleModal}/>
              : 
              <Link href={"/logIn"} className={style.link}><UserIcon /></Link>
            }
            {modal && 
              <div className={style.modal}>
                <div className={style.modalInfo} onClick={handleModal}>
                  <p>My Profile</p>
                  <p onClick={logOut}>Log Out</p>
                </div>
              </div>
            }
          
          <Link href={"/shoppingCart"} className={style.link}>
            <Cart />
            {quantity === 0 ? null : <p className={style.totalUnits}>{quantity}</p>}
          </Link>
        </div>
      </div>
    </div>
  )
}
