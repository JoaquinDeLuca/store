import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import style from '@styles/windowModal.module.css'


interface WindowModalProps {
    route?: string,
    text: string,
}

export default function WindowModal({route, text}: WindowModalProps) {

    const router = useRouter();
    const [modal, setModal] = useState(true);

    const openAndCloseModal = () => {
        setModal(!modal);
        route && router.push(`${route}`);
    };

    return (
        <motion.div
            className={modal ? style.containerModal : ""}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            style={{
                translateX: -50,
                translateY: -50,
                top: 50,
                left: 50,
            }}
        >
            {modal &&
                <div className={style.modal}>
                    <p className={style.text}>{modal && text}</p>
                    <button className={style.btn} onClick={() => openAndCloseModal()}>
                        {modal && "Ok!"}
                    </button>
                </div>
            }
        </motion.div>
    );
}
