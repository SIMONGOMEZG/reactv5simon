import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, price, image }) => {
  return (
    <div className="card shadow-sm">
      <img
        src={image}
        className="card-img-top"
        alt={name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Precio: ${price}</p>
        <Link to={`/item/${id}`} className="btn btn-primary">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
