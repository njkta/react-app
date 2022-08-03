import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = (props) => {
  return (
      <nav className={style.nav}>
          <div>
              <NavLink
                  to='/profile'
                  className={({ isActive }) => isActive ? `${style.item} ${style.active}` : `${style.item}`}
              >
                  Profile
              </NavLink>
          </div>
          <div>
              <NavLink
                  to='/dialogs'
                  className={({ isActive }) => isActive ? `${style.item} ${style.active}` : `${style.item}`}
              >
                  Dialogs
              </NavLink>
          </div>
          <div>
              <NavLink
                  to='/news'
                  className={({ isActive }) => isActive ? `${style.item} ${style.active}` : `${style.item}`}
              >
                  News
              </NavLink>
          </div>
          <div>
              <NavLink
                  to='/music'
                  className={({ isActive }) => isActive ? `${style.item} ${style.active}` : `${style.item}`}
              >
                  Music
              </NavLink>
          </div>
          <div>
              <NavLink
                  to='/settings'
                  className={({ isActive }) => isActive ? `${style.item} ${style.active}` : `${style.item}`}
              >
                  Settings
              </NavLink>
          </div>
          <Friends friends={props.friends}/>
      </nav>
  )
}

export default Navbar;