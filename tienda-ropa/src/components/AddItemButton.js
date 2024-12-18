import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const AddItemButton = ({ product, quantity }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
      Agregar al Carrito
    </button>
  );
};

export default AddItemButton;
