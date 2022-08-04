import React from "react";
import style from './Profile.module.css'
import Posts from "../Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
      <div className={style.content}>
          <ProfileInfo />
          <Posts
              postsData={props.profile.postsData}
              newPostText={props.profile.newPostText}
              addPost={props.addPost}
              updatePostText={props.updatePostText}
          />
      </div>
  )
}

export default Profile;