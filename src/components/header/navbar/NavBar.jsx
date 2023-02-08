import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../MenuItems";
import CartWidget from "../cartwidget/CartWidget";
import FavWidget from "../favwidget/FavWidget";
import FavoriteList from "../favoriteList/FavoriteList";

import "./NavBar.css";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState(false);

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
							to={`/PreEntrega2Banchio/category/${item.url}`}>
							{item.title}
						</Link>
					);
				})}
			</div>

			<div className='nav-icons'>
				<span
					className=''
					onClick={() => setActive(!active)}>
					<FavWidget />
					<div
						className={`container-cart-products ${
							active ? "" : "hidden-cart"
						}`}>
						<FavoriteList />
					</div>
				</span>

				<Link to='/PreEntrega2Banchio/cart'>
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
