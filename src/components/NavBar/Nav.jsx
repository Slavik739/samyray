import React from 'react'
import s from './Nav.module.css'

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <div className={s.item}><a href="#/">Profile</a></div>
                <div className={s.item}><a href="#/">Messages</a></div>
                <div className={s.item}><a href="#/">News</a></div>
                <div className={s.item}><a href="#/">Music</a></div>
                <div className={s.item+s.active}><a href="#/">Settings</a></div>
            </ul>
        </nav>
    );
}
export default NavBar;