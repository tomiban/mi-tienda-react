/*#####################################################
|||||||| Importacionews 
 ######################################################*/

//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Estilos
import './index.css';

//Componentes
import Header from './components/header/Header.jsx';

import Home from './components/views/home/Home';
import ItemListContainer from './components/views/cardProducts/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/views/itemDetailContainer/ItemDetailContainer';
import AboutUs from './components/views/aboutus/AboutUs';

import Footer from './components/footer/Footer.jsx';

//Core
import reportWebVitals from './reportWebVitals';

/*#####################################################
|||||||| Lógica
 ######################################################*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
			<Route
					exact
					path="/"
					element={<ItemListContainer />}
				/>
				<Route
					exact
					path="/category/:categoryId"
					element={<ItemListContainer />}
				/>
				<Route exact path="/item/:id" element={<ItemDetailContainer />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
