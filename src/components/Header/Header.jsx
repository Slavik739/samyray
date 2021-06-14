import React from 'react'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="https://www.crazyhippos.in/wp-content/uploads/2018/02/logo-23.jpg" alt="logo"/>
        </header >
    );
}
export default Header;