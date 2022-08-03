import React from "react";
import style from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={style.messageBox}>
            <img className='img avatar' src='https://i.pinimg.com/originals/b4/34/49/b4344968641f25d28e966b70e8460a75.jpg'/>
            <div className={`${style.message}`}>
                {props.message}
            </div>
        </div>
    )
}

export default Message;