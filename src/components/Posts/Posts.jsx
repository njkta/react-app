import React from "react";
import style from './Posts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateTextPostActionCreator} from "../../redux/profile-reducer";


const Posts = (props) => {

    let postElement = props.postsData.map((el) =>
        <Post message={el.message} likeCount={el.likeCount} key={el.id} />
    )

    let newPostElement = React.createRef()

    let onAddPosts = () => {
        props.addPost()
    }
    let onPostsChange = () => {
        let textPost = newPostElement.current.value;
        props.updateTextPost(textPost)

    }

  return (
      <div className={`${style.postsBlock} ${style.container}`}>
          <h3 className={style.title}>My posts!</h3>
          <form className='writeForm'>
              <div>
                  <textarea className='textarea' ref={newPostElement} onChange={ onPostsChange } value={props.newPostText} />
              </div>
              <div>
                  <button className='btn' type='button' onClick={ onAddPosts }>add post</button>
              </div>
          </form>
          <div className={style.posts}>
              {postElement}
          </div>
      </div>
  )
}

export default Posts;