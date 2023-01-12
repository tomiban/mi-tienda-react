import React, { useState } from 'react';
import { MenuItems } from '../MenuItems';
import CartWidget from '../cartwidget/CartWidget';
import ProfileWidget from '../profilewidget/ProfileWidget';
import FavWidget from '../favwidget/FavWidget';

import './NavBar.css';


const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="NavbarItems">
			<div className="navbar-logo">
				<h1 className="navbar-title">Tienda </h1>
				<img src={require('../logo.png')}  alt="logo" />
			</div>

			<div className={`nav_items ${isOpen && 'open'}`}>
				{MenuItems.map((item, index) => {
					return (
						<a key={index} className={item.cName} href={item.url}>
							{' '}
							{item.title}
						</a>
					);
				})}
			</div>

			<div className="nav-icons">
				<a href="">
					<ProfileWidget />
				</a>
				<a href="">
					<FavWidget />
				</a>
				<a href="">
					<CartWidget />
				</a>
			</div>

			<div
				className={`nav_toggle ${isOpen && 'open'}`}
				onClick={() => setIsOpen(!isOpen)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
};
export default NavBar;
