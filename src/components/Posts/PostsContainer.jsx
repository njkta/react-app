import React from "react";
import {addPostActionCreator, updateTextPostActionCreator} from "../../redux/profile-reducer";
import Posts from "./Posts";


const PostsContainer = (props) => {

    let state = props.store.getState()

    let addPosts = () => {
        props.store.dispatch( addPostActionCreator() )
    }
    let onPostsChange = (textPost) => {
        let action = updateTextPostActionCreator(textPost);
        props.store.dispatch(action)

    }

  return (
      <Posts
          updateTextPost={onPostsChange}
          addPost={addPosts}
          postsData={state.profile.postsData}
          newPostText={state.profile.newPostText}
      />
  )
}

export default PostsContainer;