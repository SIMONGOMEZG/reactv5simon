import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="card m-2" style={{ width: '18rem' }}>
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Precio: ${item.price}</p>
                <p className="card-text">Cantidad: {item.quantity}</p>
              </div>
            </div>
          ))}
          <p><strong>Total de Productos:</strong> {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
