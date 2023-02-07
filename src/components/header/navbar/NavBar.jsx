import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../MenuItems";
import CartWidget from "../cartwidget/CartWidget";
import ProfileWidget from "../profilewidget/ProfileWidget";
import FavWidget from "../favwidget/FavWidget";

import "./NavBar.css";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='NavbarItems'>
			<Link
				className='nav-links'
				to='/'>
				<div className='navbar-logo'>
					<h1 className='navbar-title'>Tienda </h1>
					<img
						src={require("../logo.png")}
						alt='logo'
					/>
				</div>
			</Link>

			<div className={`nav_items ${isOpen && "open"}`}>
				{MenuItems.map((item, index) => {
					return (
						<Link
							key={index}
							className={item.cName}
							to={`/category/${item.url}`}>
							{item.title}
						</Link>
					);
				})}
			</div>

			<div className='nav-icons'>
				<a href=''>
					<ProfileWidget />
				</a>
				<a href=''>
					<FavWidget />
				</a>
				<Link to='/cart'>
					<CartWidget />
				</Link>
			</div>

			<div
				className={`nav_toggle ${isOpen && "open"}`}
				onClick={() => setIsOpen(!isOpen)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
};
export default NavBar;
