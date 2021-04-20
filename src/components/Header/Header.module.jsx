import React from 'react'
import style from "./Header.module.css";

const Header = () => {
    return (
        <div className={style.appHeader}>
            <i className='fas fa-bars'></i>
            <h3>SCOREBOARD</h3>
            <i className='fas fa-search'></i>
        </div>
    )
}

export default Header
