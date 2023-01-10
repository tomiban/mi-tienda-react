/*#####################################################
|||||||| Importacionews 
 ######################################################*/

//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';

//Estilos
import './index.css';

//Componentes
import Header from './components/header/Header.jsx';
import Body from './components/body/Body.jsx'
import Footer from "./components/footer/Footer.jsx";

//Core
import reportWebVitals from './reportWebVitals';

/*#####################################################
|||||||| Lógica
 ######################################################*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		
    <Header />
    <Body />
	<Footer />
		
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
