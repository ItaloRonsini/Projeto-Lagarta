import "./artigos.css";
import "../styles.css";

export default function Artigos() {
  return (
    <>
      <header>
        <img className="img" src="/NutriKids.jpeg" alt="Logo NutriKids" />

        <h1>Artigos Científicos</h1>

        <nav>
          <a href="/">HOME</a>
          <a href="/guia-alimentacao">Guia de Alimentos</a>
        </nav>
      </header>

      <div className="lista-artigo" id="lista-artigos"></div>

      <footer>
        <p>NutriKids</p>
      </footer>
    </>
  );
}