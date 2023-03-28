import React, { useState } from "react";
import { selectState } from "../features/speakerSlice";
import { useSelector } from "react-redux";
import Image from "next/image";
import {
  increase,
  decrease,
  remove,
  removeAll,
} from "../features/speakerSlice";
import { useDispatch } from "react-redux";
import style from '@styles/shoppingCart.module.css';
import Plus from '/public/images/plus-circle.svg';
import Minus from '/public/images/minus-circle.svg';
import Clear from '/public/images/clear.svg';
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Cart() {
  const dispatch = useDispatch();
  const router = useRouter();

  const state = useSelector(selectState);
  let { products, totalprice } = state;

  const handleMore = (id: TProductId) => dispatch(increase(id));

  const handleLess = (id: TProductId) => dispatch(decrease(id));

  const handleRemove = (speaker: TProduct) => dispatch(remove(speaker));

  const handleClearAll = () => dispatch(removeAll());

  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(!modal)
  }

  const handleOk = () => {
    router.push("/")
    dispatch(removeAll())
    setModal(!modal)
  }

  return (
    <>
      {state.totalprice ? (
        <>
          <div>
            <p className={style.totalPrice}>Total ${totalprice}</p>
            <button className={style.btn} onClick={handleModal} >Pay</button>
            {modal &&
              <>
                <motion.div className={style.containerModal}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                  style={{
                    translateX: -50,
                    translateY: -50,
                    top: 50,
                    left: 50,
                  }}
                >
                  <div className={style.modal}>
                    <p className={style.text}>Thank you very much for your purchase, we will send the receipt to your email</p>
                    <button className={style.btn} onClick={handleOk}>Ok!</button>
                  </div>
                </motion.div>
              </>
            }
          </div>
          <button onClick={handleClearAll} className={style.btn} >Clear All</button>
        </>
      ) : (
        <p>You do not have any products in the cart</p>
      )}
      {products.map((item) => (
        <div key={item._id} className={style.containerCart}>
          <div className={style.nameAndImageC}>
            <Image src={item.image} width={100} height={100} alt={item.name} className={style.img} priority={true} />
            <p>{item.name}</p>
            <p className={style.price}>${item.price}</p>
          </div>
          <div className={style.containerBtn}>
            <Plus
              onClick={() => handleMore(item._id)}
              className={style.btnSvg}
            />
            <p className={style.amount}>{item.amount}</p>
            <Minus
              onClick={() => handleLess(item._id)}
              className={style.btnSvg}
            />
            <Clear
              onClick={() => handleRemove(item)}
              className={style.btnSvg}
            />
          </div>
        </div>
      ))}
    </>
  );
}
