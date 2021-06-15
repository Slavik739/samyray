import React from 'react'
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
      <nav className={s.nav}>
        <ul>
          <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
          <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
          <div className={s.item}>
            <NavLink to="#/">News</NavLink></div>
          <div className={s.item}>
            <NavLink to="#/">Music</NavLink></div>
          <div className={s.item}>
            <NavLink to="#/">Settings</NavLink></div>
        </ul>
      </nav>
  );
}
export default NavBar;