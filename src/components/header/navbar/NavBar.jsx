import React, { Component } from 'react';
import {MenuItems} from "../MenuItems"
import CartWidget from '../cartwidget/CartWidget';
import MenuWidget from '../menuwidget/MenuWidget';
import ProfileWidget from "../profilewidget/ProfileWidget";



import "./NavBar.css"

const NavBar = () => {
	return (
		<nav className="NavbarItems">
			<div className="navbar-logo">
				<h1 className="navbar-title">Tienda  </h1>
				<img src={require("../logo.png")} class alt="logo" />
			</div>
			
			<div className="menu-icon" >	
				<MenuWidget />
			</div>
			<ul className='nav-menu'>
				{MenuItems.map((item, index) => {
					return (
						<li key={index}><a className={item.cName} href={item.url}>{ item.title }</a></li>
					)
				})}
			
			</ul>
			<div className="nav-icons">
			<a href="#"><ProfileWidget className="icon" /></a>
			<a href="#"><CartWidget className="icon" /></a>
			</div>
		</nav>
	);
};
export default NavBar;
