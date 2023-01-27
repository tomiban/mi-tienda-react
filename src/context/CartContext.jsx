import React, { useState, useContext } from "react";


const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {


  const [cart, setCart] = useState([]);


  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) { //pregunto si existe en el carrito
      setCart(cart.map(product => {
        return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product; // si existe suma la nueva cantidad a la anterior y al resto lo dejamos iguales
      }));
    } else { // si no existe creamos un array nuevo con los demas items propagados y agregamos un objeto con sus props y la cantidad
      setCart([...cart, { ...item, quantity }]);
    }

  };

  const clearCart = () => {
    setCart([]); // Limpia todos los productos del carrito
  };

  const isInCart = (id) => cart.find(product => product.id === id); //Devuelve el producto si existe en el array

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id)); // Crea un nuevo array con todos los productos sin ese id

  const totalPrice = () => { 
    return cart.reduce((prev, actual) => prev + actual.quantity * actual.price, 0)
  }

  const totalProducts = () => { // contador para el widget
    return cart.reduce((acumulador, prodActual) => acumulador + prodActual.quantity, 0)
  }

  return (
    <div>
      <CartContext.Provider value={{
        //funciones
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,

        // estado
        cart
      }}>
        {children}
      </CartContext.Provider>
    </div>);
};
export default CartProvider;
