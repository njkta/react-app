import React from "react";
import style from './Friends.module.css'
import Friend from "./Friend/Friend";


const Friends = (props) => {
    let users = props.friends.userData

    let friends = users.map((el) =>
        el.friend ? <Friend name={el.name} avatar={el.avatar} key={el.id} /> : ''
    )
    return (
        <div className={style.friendsBlock}>
            <div className={style.title}>Friends</div>
            <div className={style.friends}>
                {friends}
            </div>
        </div>
    )
}

export default Friends;