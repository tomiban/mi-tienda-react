import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../MenuItems";
import CartWidget from "../cartwidget/CartWidget";
import {BsSuitHeart} from "react-icons/bs";
import FavoriteList from "../favoriteList/FavoriteList";

import "./NavBar.css";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState(false);

	return (
		<nav className='NavbarItems'>
			<Link
				className='nav-links'
				to='/mi-tienda-react'>
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
							to={`/mi-tienda-react/category/${item.url}`}>
							{item.title}
						</Link>
					);
				})}
			</div>

			<div className='nav-icons d-flex'>
				<div
					className='fav-icon'
					onClick={() => setActive(!active)}>
					<BsSuitHeart />
					<div
						className={`container-cart-products ${
							active ? "" : "hidden-cart"
						}`}>
						<FavoriteList />
					</div>
				</div>

				<Link to='/mi-tienda-react/cart'>
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
