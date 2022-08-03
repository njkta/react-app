import React from "react";
import style from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {

    let postElement = props.postsData.map((el) =>
        <Post message={el.message} likeCount={el.likeCount} key={el.id} />
    )

  return (
      <div className={`${style.postsBlock} ${style.container}`}>
          <h3 className={style.title}>My posts!</h3>
          <form className={style.writePost}>
              <div>
                  <textarea className={style.textarea}></textarea>
              </div>
              <div>
                  <button className={style.btn} type='submit'>add post</button>
              </div>
          </form>
          <div className={style.posts}>
              {postElement}
          </div>
      </div>
  )
}

export default Posts;