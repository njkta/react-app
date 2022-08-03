import React from "react";
import style from './Post.module.css'

const Post = (props) => {
  return (
      <div className={style.post}>
          <img className={style.img} src="https://i.pinimg.com/originals/b4/34/49/b4344968641f25d28e966b70e8460a75.jpg" alt=""/>
          <div className={style.text}>{props.message}</div>
          <div className={style.like}>like: {props.likeCount}</div>
      </div>
  )
}

export default Post;