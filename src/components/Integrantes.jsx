import React from "react";

const IntegrantesStyles = {
  width: "180px",
  borderRadius: "8px",
  backgroundColor: "#fff",
  overflow: "hidden",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItens: "center",
  justifyContent: "space-between",
  padding: "5px",
  gap: "5px",
};

const name = {
  textAlign: "right",
};

function Integrantes({ nome, foto }) {
  const styleImg = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "contain",
    margin: "auto 0",
    filter: nome == "Mateus Alves" ? "grayscale(1)" : "",
  };
  return (
    <div style={IntegrantesStyles}>
      <img style={styleImg} src={foto} />
      <h3 style={name}>{nome}</h3>
    </div>
  );
}

export default Integrantes;
