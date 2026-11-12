import Link from "next/link";
import Image from "next/image";
import minhaLogo from "../../NutriKids.png";

async function getArtigos() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${base}/api/artigos`, { cache: "no-store" });

  if (!res.ok) throw new Error("Falha ao carregar artigos");
  return res.json();
}

export default async function Artigos() {
  const artigos = await getArtigos();

  return (
    <>
      <header>
        <span className="img-frame">
          <Image src={minhaLogo} alt="Logo do projeto" width={3000} />
        </span>
        <h1>Artigos Científicos</h1>
        <nav>
          <Link href="/">HOME</Link>
          <Link href="/guia-alimentacao">Guia de Alimentos</Link>
        </nav>
      </header>

      <div className="lista-artigo" id="lista-artigos">
        {artigos.map((artigo) => (
          <div key={artigo.id} className="box-artigo">
            <div className="conteudo">
              <h2>{artigo.titulo}</h2>
              <p>{artigo.descricao}</p>
              <p className="doi">DOI: {artigo.doi}</p>
              <a
                className="botao"
                href={artigo.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                LER ARTIGO COMPLETO
              </a>
            </div>
          </div>
        ))}
      </div>

      <footer>
        <p>NutriKids</p>
      </footer>
    </>
  );
}