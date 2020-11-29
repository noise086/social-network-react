import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navBar.module.css';

const Nav = () => {
    return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
			</div>
			<div className={s.item}>
				<a href="#">News</a>
			</div>
			<div className={s.item}>
				<NavLink to="/dialog" activeClassName={s.active}>Messages</NavLink>
			</div>
			<div className={s.item}>
				<a href="#">Music</a>
			</div>
			<div className={s.item}>
				<a href="#">Settings</a>
			</div>
		</nav>
    )
}

export default Nav;