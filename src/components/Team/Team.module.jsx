import React from 'react'
import style from "./Team.module.css";

const Team = ({ team }) => {


    return (

        <div className={style.team}>
            <img
                src={team.logoUrl || team.logo}
                alt={team.name || team.name_en}
            />
            <p>{team.name || team.name_en}</p>
            <p className={style.status}>l | D | w | w</p>
        </div>
    )
}

export default Team
