import "./App.css";
import logo from "./assets/logo.jpg";
import Card from "./components/Card";

const logoContainerStyles = {
  width: "100%",
  maxHeight: "200px",
  backgroundColor: "#fff",
  margin: "0 auto",
};
const logoStyles = {
  width: "100px",
};

function App() {
  return (
    <>
      <header>
        <div style={logoContainerStyles}>
          <img src={logo} style={logoStyles} />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Card
          titulo="Título do Post"
          data="12 de junho de 2023"
          descricao="Conteúdo do post Conteúdo do postConteúdo do post Conteúdo do postConteúdo do post Conteúdo do postConteúdo do postConteúdo do postv..."
        />
        <Card
          titulo="Título do Post"
          data="12 de junho de 2023"
          descricao="Conteúdo do post Conteúdo do postConteúdo do post Conteúdo do postConteúdo do post Conteúdo do postConteúdo do postConteúdo do postv..."
        />
        <Card
          titulo="Título do Post"
          data="12 de junho de 2023"
          descricao="Conteúdo do post Conteúdo do postConteúdo do post Conteúdo do postConteúdo do post Conteúdo do postConteúdo do postConteúdo do postv..."
        />
        <Card
          titulo="Título do Post"
          data="12 de junho de 2023"
          descricao="Conteúdo do post Conteúdo do postConteúdo do post Conteúdo do postConteúdo do post Conteúdo do postConteúdo do postConteúdo do postv..."
        />
      </main>

      <footer>
        <p>&copy; 2023 Meu Blog. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;
