import style from '@styles/navbar.module.css'
import Link from 'next/link'
import { TotalQuantity } from '../features/speakerSlice'
import { useSelector } from 'react-redux'
import Logo from '/public/images/logo.svg'
import Cart from '/public/images/cart.svg'

export default function Navbar() {

  const quantity = useSelector(TotalQuantity)

  return (
    <div className={style.container}>
      <div className={style.maxwidth}>
        <Link className={style.link} href={'/'}>
          <div className={style.logoAndName}>
            <Logo className={style.logo}/>
          </div>
        </Link>
        <Link href={"/shoppingCart"} className={style.link}>
          <Cart />
          <p className={style.totalUnits}>{quantity}</p>
        </Link>
      </div>
    </div>
  )
}
