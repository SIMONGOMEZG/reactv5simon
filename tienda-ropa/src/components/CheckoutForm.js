import React, { useState } from "react";

const CheckoutForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
  });

  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "confirmEmail" || name === "email") {
      setEmailError(
        form.email && form.confirmEmail && form.email !== form.confirmEmail
          ? "Los correos no coinciden."
          : ""
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError || form.email !== form.confirmEmail) {
      alert("Por favor revisa los correos electrónicos.");
      return;
    }
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        name="name"
        placeholder="Nombre completo"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <input
        type="email"
        name="confirmEmail"
        placeholder="Confirmar correo electrónico"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      {emailError && <p className="text-danger">{emailError}</p>}
      <input
        type="text"
        name="phone"
        placeholder="Teléfono"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <button type="submit" className="btn btn-primary">
        Confirmar Compra
      </button>
    </form>
  );
};

export default CheckoutForm;
