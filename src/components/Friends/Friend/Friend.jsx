import React from "react";
import style from './Friend.module.css'
import "../../../App.css";

const Friend = (props) => {
    return (
        <div className={style.friend}>
            <img className='img avatar' src={props.avatar} alt=""/>
            <div className={style.name}>{props.name}</div>
        </div>
    )
}

export default Friend;