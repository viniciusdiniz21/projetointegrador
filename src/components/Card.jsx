import React from "react";

const cardStyles = {
  width: "300px",
  height: "480px",
  borderRadius: "8px",
  backgroundColor: "#fff",
  overflow: "hidden",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const descPadding = {
  padding: "12px",
};

function Card({ titulo, descricao, scrummaster, imagem }) {
  return (
    <article style={cardStyles}>
      {/* <img src={imagem} alt="Imagem do Card" /> */}
      <div>
        <h3>{titulo}</h3>
        <p>{scrummaster}</p>
        <p style={descPadding}>{descricao}</p>
      </div>
    </article>
  );
}

export default Card;
