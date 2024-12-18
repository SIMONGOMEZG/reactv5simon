import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        max={product.stock}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button className="btn btn-primary ms-2" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
      <Link to="/checkout" className="btn btn-secondary ms-3">
        Volver al carrito
      </Link>
    </div>
  );
};

export default ItemDetail;
