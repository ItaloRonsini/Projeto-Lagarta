
import React from "react";
import "./artigos.css";
import "../styles.css";

function Artigos() {
  return (
    <div className="pagina-artigos">
      <header className="cabecalho-artigos">
        <img
          className="img"
          src="/NutriKids.jpeg"
          alt="Logo NutriKids"
        />

        <h1>Artigos Científicos</h1>

        <nav>
          <a href="/">HOME</a>
          <a href="/guia-alimentacao">
            Guia de Alimentos
          </a>
        </nav>
      </header>

      <main>
        <div
          className="lista-artigo"
          id="lista-artigos"
        >
          {/* Os artigos serão renderizados aqui */}
        </div>
      </main>

      <footer className="rodape-artigos">
        <p>NutriKids</p>
      </footer>
    </div>
  );
}

export default Artigos;
