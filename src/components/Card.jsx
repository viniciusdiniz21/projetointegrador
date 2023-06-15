import React from "react";

const cardStyles = {
  width: "300px",
  height: "400px",
  borderRadius: "8px",
  backgroundColor: "#fff",
  overflow: "hidden",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

function Card({ titulo, descricao, data, imagem }) {
  return (
    <article style={cardStyles}>
      {/* <img src={imagem} alt="Imagem do Card" /> */}
      <div>
        <h3>{titulo}</h3>
        <p>{data}</p>
        <p>{descricao}</p>
        <a>Saiba Mais</a>
      </div>
    </article>
  );
}

export default Card;
