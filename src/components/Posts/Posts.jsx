import React from "react";
import style from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {

    let postElement = props.postsData.map((el) =>
        <Post message={el.message} likeCount={el.likeCount} key={el.id} />
    )

    let newPostElement = React.createRef()

    let addPosts = () => {
        props.addPost()
    }
    let onPostsChange = () => {
        let textPost = newPostElement.current.value;
        props.updatePostText(textPost)
    }

  return (
      <div className={`${style.postsBlock} ${style.container}`}>
          <h3 className={style.title}>My posts!</h3>
          <form className='writeForm'>
              <div>
                  <textarea className='textarea' ref={newPostElement} onChange={ onPostsChange } value={props.newPostText} />
              </div>
              <div>
                  <button className='btn' type='button' onClick={ addPosts }>add post</button>
              </div>
          </form>
          <div className={style.posts}>
              {postElement}
          </div>
      </div>
  )
}

export default Posts;