import React from 'react'
import style from "./Box.module.css";


const Box = ({ children }) => {
    return (
        <div className={style.box}>
            {children}
        </div>
    )
}

export default Box
