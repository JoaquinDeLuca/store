import style from '@styles/navbar.module.css'
import Link from 'next/link'
import { TotalQuantity } from 'features/slice/speakerSlice'
import { userInfo } from 'features/slice/authSlice'
import { useSelector } from 'react-redux'
import Logo from '/public/images/logo.svg'
import Cart from '/public/images/cart.svg'
import UserIcon from 'public/images/User.svg'
import Image from 'next/image'

export default function Navbar() {

  const quantity = useSelector(TotalQuantity)
  const user: userCredentials = useSelector(userInfo)

  return (
    <div className={style.container}>
      <div className={style.maxwidth}>
        <Link className={style.link} href={'/'}>
          <div className={style.logoAndName}>
            <Logo className={style.logo}/>
          </div>
        </Link>
        <div className={style.containerIcons}>
          <Link href={"/logIn"} className={style.link}>
            { user.photo ? 
                <Image src={user.photo} width={39} height={39} alt="User Photo" className={style.imgUser}/>
              : 
              <UserIcon />
            }
          </Link>
          <Link href={"/shoppingCart"} className={style.link}>
            <Cart />
            {quantity === 0 ? null : <p className={style.totalUnits}>{quantity}</p>}
          </Link>
        </div>
      </div>
    </div>
  )
}
