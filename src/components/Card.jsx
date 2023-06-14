import React from "react";

const cardStyles = {
  width: "300px",
  height: "400px",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

function Card({ title, description, image }) {
  return (
    <div style={cardStyles}>
      <img src={image} alt="Imagem do Card" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a>Saiba Mais</a>
      </div>
    </div>
  );
}

export default Card;
