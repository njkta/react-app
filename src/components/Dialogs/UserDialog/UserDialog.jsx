import React from "react";
import style from './../Dialogs.module.css'
import '../../../App.css'
import {NavLink} from "react-router-dom";

const UserDialog = (props) => {
    let path = `/dialogs/${props.id}/`;
    console.log(props.id)
    return (
        <div className={`${style.userDialog} ${style.active}`}>
            <img className='img avatar' src={props.avatar}/>
            <NavLink to={path} className={style.name}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default UserDialog;