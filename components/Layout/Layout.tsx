import Navbar from '../Navbar'
import Footer from '../Footer'
import React,{ReactNode} from 'react'

type Props = {children?: ReactNode}

function Layout ({children}:Props) {
  return (
    <>
    <Navbar/>
        <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout
