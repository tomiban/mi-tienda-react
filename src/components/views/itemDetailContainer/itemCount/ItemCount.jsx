import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { Button, Container } from "react-bootstrap";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(stock === 0 ? stock : initial);

  const decrementar = () => {
    setCount(count - 1);
  };

  const aumentar = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  return (

    <div className="d-flex">
      <div className="counter p-2 text-center">
            <button
              className="px-1"
              onClick={aumentar}
              disabled={count >= stock}
            >
              <GrFormAdd className="icono" />
            </button>
            <span className="px-1">{count}</span>
            <button
              onClick={decrementar}
              disabled={count <= 1}
              className="px-1"
            >
              <GrFormSubtract className="icono"></GrFormSubtract>
            </button>
          </div>

          <Button
            variant="primary"
            size="sm"
            className="p-2 btn-detail mx-3"
            disabled={stock <= 0}
            onClick={() => onAdd(count)}
          >
            Agregar al carrito
          </Button>
    </div >



  );
};
export default ItemCount;
