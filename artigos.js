import Link from "next/link";
import "./styles.css";

export default function Artigos() {
  return (
    <div className="pagina-artigos">
      <header className="cabecalho-artigos">
        <img className="img" src="/NutriKids.jpeg" alt="Logo NutriKids" />

        <h1>Artigos Científicos</h1>

        <nav>
          <Link href="/">HOME</Link>
          <Link href="/guia-alimentacao">Guia de Alimentos</Link>
        </nav>
      </header>

      <main>
        <div className="lista-artigo" id="lista-artigos">
          {/* Os artigos serão renderizados aqui */}
        </div>
      </main>

      <footer className="rodape-artigos">
        <p>NutriKids</p>
      </footer>
    </div>
  );
}