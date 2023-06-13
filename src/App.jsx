import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Meu Blog</h1>
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
        <article>
          <h2>Título do Post</h2>
          <p>Data de Publicação: 13 de junho de 2023</p>
          <p>Autor: Nome do Autor</p>

          <p>Conteúdo do post...</p>
        </article>

        <article>
          <h2>Título do Post</h2>
          <p>Data de Publicação: 12 de junho de 2023</p>
          <p>Autor: Nome do Autor</p>

          <p>Conteúdo do post...</p>
        </article>
      </main>

      <footer>
        <p>&copy; 2023 Meu Blog. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;
