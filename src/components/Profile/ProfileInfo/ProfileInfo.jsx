import React from "react";
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
      <div>
          <div>
              <img className={style.background} src="https://s1.1zoom.me/big3/503/348281-admin.jpg" alt=""/>
          </div>
          <div className={style.content}>
              <div className={style.container}>
                  <img className={style.avatar} src="https://uprostim.com/wp-content/uploads/2021/05/image032-6.jpg" alt=""/>
                  <div></div>
              </div>
          </div>
    </div>
  )
}

export default ProfileInfo;