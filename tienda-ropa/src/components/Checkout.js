import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart, updateQuantity, removeFromCart } =
    useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer: formData,
      items: cartItems,
      total: getTotalPrice(),
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al guardar la orden:", error);
    }
  };

  if (orderId) {
    return (
      <div className="container mt-5">
        <h2>¡Gracias por tu compra!</h2>
        <p>
          Tu número de orden es: <strong>{orderId}</strong>
        </p>
      </div>
    );
  }

  if (!cartItems.length) {
    return <h2 className="text-center mt-4">Tu carrito está vacío.</h2>;
  }

  return (
    <div className="container mt-4">
      <h2>Resumen del Carrito</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="d-flex justify-content-between mb-3">
          <div>
            <h5>{item.name}</h5>
            <p>Precio: ${item.price}</p>
            <p>
              Subtotal: ${item.quantity * item.price}
            </p>
          </div>
          <div>
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button
              className="btn btn-sm btn-outline-danger ms-3"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <h4 className="mt-4">Total a Pagar: ${getTotalPrice()}</h4>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Finalizar Compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;
