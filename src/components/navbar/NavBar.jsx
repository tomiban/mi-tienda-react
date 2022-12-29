//Todos los componentes tienen 3 secciones

/* 
1) IMPORTACIONES
*/
import './NavBar.css'


/* 
2) LOGICA
*/

function NavBar(props) { //Funcion constructora

    const fecha = new Date()

    return (
        //El retorno a renderizar
        <header>
            <a href="#">Mi primer enlace y te saludo { props.saludos }</a>
            <p>La fecha de hoy es { fecha.getDate() }</p>
        </header>
    );
}


/* 
3) EXPORTACION
*/

export default NavBar;