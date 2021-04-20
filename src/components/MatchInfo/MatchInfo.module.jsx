import React from 'react'
import style from "./MatchInfo.module.css";


const MatchInfo = ({ teamA, teamB }) => {
    return (
        <div className={style.info}>
            <p className={style.score}>
                {teamA.score} - {teamB.score}
            </p>
            <span></span>
            <p className={style.ellapsed}>45'</p>
            <p className={style.minutes}>45:22</p>
        </div>
    )
}

export default MatchInfo
