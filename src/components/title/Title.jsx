import React from "react";


export const Title = (props) => {
    return (
        <h1 className="text-primary m-5">Bienvenidos a { props.nombre }</h1>
    )
};

export default Title;