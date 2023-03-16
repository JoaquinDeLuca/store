import Image from 'next/image'
import Logo from '../public/images/wristwatchNav.png'
import style from '@styles/navbar.module.css'
import Link from 'next/link'
import { TotalQuantity } from '../features/speakerSlice'
import { RootState } from 'store'
import { useSelector } from 'react-redux'
import Cart from './Cart'

export default function Navbar() {

  const quantity = useSelector(TotalQuantity)

  return (
    <div className={style.container}>
      <Link className={style.link} href={'/'}>
        <div className={style.logoAndName}>
          <Image 
            src={Logo}
            width={70}
            height={70}
            priority={true}
            alt="Logo Watch"
          />
          <p className={style.p}>Speaker shop</p>
        </div>
      </Link>
      <Link href={"/shoppingCart"} className={style.link}>
        <p className={style.p}>Cart 🛒{quantity} </p>
      </Link>
    </div>
  )
}
