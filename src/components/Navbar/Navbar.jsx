import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul>
        <li><NavLink to='/home' activeClassName={style.activeLink}>My page</NavLink></li>
        <li><NavLink to='/friends' activeClassName={style.activeLink}>Friends</NavLink></li>
        <li><NavLink to='/music' activeClassName={style.activeLink}>Music</NavLink></li>
        <li><NavLink to='/dialogs' activeClassName={style.activeLink}>Message</NavLink></li>
        <li><NavLink to='/videos' activeClassName={style.activeLink}>Videos</NavLink></li>
        <li><NavLink to='/some' activeClassName={style.activeLink}>Some</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;
