import React from "react";
import Cart from "@components/Cart";
import style from '@styles/shoppingCart.module.css'

export default function shoppingCart() {
  return (
    <div className={style.containerPage}>
      <h3>Products in the cart</h3>
      <Cart />
    </div>
  );
}
