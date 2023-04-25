import style from '@styles/navbar.module.css'
import Link from 'next/link'
import { userInfo } from 'features/slice/authSlice'
import { deleteCredentials } from 'features/slice/authSlice'
import {removeAll} from 'features/slice/speakerSlice'
import { TotalQuantity } from 'features/slice/speakerSlice'
import { useDispatch, useSelector } from 'react-redux'
import Logo from 'public/images/logo.svg'
import Cart from 'public/images/cart.svg'
import UserIcon from 'public/images/user.svg'
import { useState } from 'react'
import api from 'api'
import { useRouter } from 'next/router'
import {motion} from 'framer-motion'

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
        dispatch(removeAll())
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
              <motion.div 
                className={style.modal}
                initial={{ scale: 0}}
                animate={{ scale: 1, top: 58, right: 17 }}
                transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className={style.modalInfo} onClick={handleModal}>
                  {/* <p>My Profile</p> */}
                  <p onClick={logOut}>Log Out</p>
                </div>
              </motion.div>
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
