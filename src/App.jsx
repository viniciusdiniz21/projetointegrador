import "./App.css";
import logo from "./assets/logo.jpg";
import Card from "./components/Card";
import Integrantes from "./components/Integrantes";
import guilherme from "../src/assets/guilherme.jpg";
import savio1 from "../src/assets/savio1.jpg";
import paulo from "../src/assets/paulo.jpg";
import savio2 from "../src/assets/savio2.jpg";
import matues from "../src/assets/matues.jpg";
import vinicius from "../src/assets/vinicius.jpg";
import estevao from "../src/assets/estevao.jpg";
import prototipo from "../src/assets/prototipo.png";
import prototipo2 from "../src/assets/prototipo2.png";
import prototipo3 from "../src/assets/prototipo3.png";
import canva from "../src/assets/canva.png";

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
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#integrantes">Integrantes</a>
            </li>
            <li>
              <a href="#sprints">Sprints</a>
            </li>
            <li>
              <a href="#prototipo">Prototipo</a>
            </li>
            <li>
              <a href="#canva">Canva</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="container">
          <h1 id="sobre" className="title">
            SOBRE
          </h1>
          <h2>QEAN</h2>
          <h3>Quiz de Educação e Alimentação Nutricional</h3>
          <article>
            <p>
              Visto que nos últimos anos a obesidade e a má nutrição infantil,
              tem se tornado cada vez mais um problema social, decidimos fazer
              um projeto que irá ajudar na conscientização desse problema de uma
              forma simples e agradável para as crianças que estão estudando no
              ensino fundamental.
            </p>
            <p>
              Portanto, o objetivo do projeto é promover uma educação alimentar
              para crianças por meio da gameficação.
            </p>
          </article>
        </div>
        <h1 id="integrantes" className="title">
          Integrantes
        </h1>
        <div className="container">
          <div className="integrantes">
            <Integrantes nome="Paulo Souza" foto={paulo} />
            <Integrantes nome="Guilherme Henrique" foto={guilherme} />
            <Integrantes nome="Sávio Alessandro" foto={savio1} />
            <Integrantes nome="Sávio Cardoso" foto={savio2} />
            <Integrantes nome="Mateus Alves" foto={matues} />
            <Integrantes nome="Estevão Augusto" foto={estevao} />
            <Integrantes nome="Vinícius Diniz" foto={vinicius} />
          </div>
        </div>
        <h1 id="sprints" className="title">
          SPRINTS
        </h1>
        <div className="sprints">
          <Card
            titulo="SPRINT 1"
            scrummaster="Mateus Alves"
            descricao="Iniciamos a primeira sprint logo com alguns dilemas:  ‘’Qual seria nosso projeto?’’ ‘’Qual seria a importância do nosso projeto
             para que ele funcionasse como algo que poderia vir a ser usado na sociedade, uma vez que decidimos trabalhar com crianças e formas de alimentação delas.’’
              Portanto, criamos o QEAN, que tem o principal objetivo de educar a alimentação das crianças por meio da ‘’gameficação’’. 
            "
          />
          <Card
            titulo="SPRINT 2"
            scrummaster="Paulo Souza"
            descricao="Na sergunda sprint aprofundamos mais ainda no projeto e partimos para definições como: Objetivo da gameficação, comportamentos do trabalho,
             estética e componentes do projeto. A criança basicamente seria exposta a uma pagina no aplicativo onde a mesma teria que escolher a forma de alimentação 
             mais saudável para ela em certo momento do dia, assim ganhando pontos para resgatar futuras recompensas dentro do aplicativo.
            "
          />
          <Card
            titulo="SPRINT 3"
            scrummaster="Sávio Cardoso"
            descricao="Na terceira sprint, começamos a por ‘’as mãos na massa’’ e fizemos o projeto na Figma que é um editor gráfico de vetor e prototipagem de 
            projetos de design baseado principalmente no navegador web e aplicativos mobile. Criamos a tela inicial do aplicativo e logo em seguida a tela principal
             do jogo, que aparece após o cadastro e login necessários. Para essa sprint atual fizemos uma área que mostra o protótipo, 
             adicionamos ao projeto textos e imagens e fizemos ajustes básicos no projeto. "
          />
        </div>
        <h1 id="canva" className="title">
          CANVA
        </h1>
        <div className="cointainer">
          <h3>
            Criamos um canva para idealizar o projeto, e definir nossos
            objetivos, recursos necessários, mecânicas e demais informações
            necessárias quanto ao escopo do projeto.
          </h3>
          <div className="canva">
            <img src={canva} />
          </div>
        </div>
        <h1 id="prototipo" className="title">
          PROTOTIPO
        </h1>
        <div className="cointainer">
          <h3>
            Criamos um protótipo do projeto utilizando FIGMA, para assim ter uma
            visão mais concreta de como seria a aplicação final.
          </h3>
          <div className="prototipo">
            <img src={prototipo2} />
            <img src={prototipo} />
            <img src={prototipo3} />
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; 2023 QEAN. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;
