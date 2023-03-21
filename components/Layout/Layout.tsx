import Navbar from "../Navbar";
import Footer from "../Footer";
import React, { ReactNode } from "react";
import style from "@styles/layout.module.css";

type Props = { children?: ReactNode };

function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className={style.container}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
