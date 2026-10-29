import Link from "next/link";

const artigos = [
  {
    titulo: "Atuação de nutricionistas no PNAE e seus efeitos sobre o desempenho escolar",
    descricao: "Estuda a relação entre a atuação de nutricionistas no Programa Nacional de Alimentação Escolar (PNAE) e o desempenho dos estudantes. O estudo encontrou efeitos positivos nas notas de português e matemática.",
    doi: "10.1590/1980-53575326cdmm",
    link: "https://www.scielo.br/j/ee/a/qy8ybJJYcsy8LFGMq7HpW9t/?format=html&lang=pt&ilang=pt_BR"
  },
  {
    titulo: "Relação entre consumo alimentar, estado nutricional e rendimento escolar",
    descricao: "Analisa a relação entre consumo alimentar, estado nutricional e rendimento escolar em 134 estudantes de 9 a 11 anos.",
    doi: "10.7322/jhgd.152159",
    link: "https://revistas.usp.br/jhgd/pt_BR/article/view/152159"
  },
  {
    titulo: "A influência do desjejum e do exercício físico na cognição de escolares: uma revisão",
    descricao: "Revisão sobre como o café da manhã e a prática de exercícios podem estar relacionados ao funcionamento cognitivo e à aprendizagem de crianças em idade escolar.",
    doi: "10.34024/rnc.2021.v29.11682",
    link: "https://periodicos.unifesp.br/index.php/neurociencias/article/view/11682"
  },
  {
    titulo: "Alimentação escolar: benefícios e carências nutricionais relacionados com o aprendizado de crianças em fase pré-escolar",
    descricao: "Revisão sobre alimentação escolar, PNAE, carências nutricionais e possíveis impactos no aprendizado infantil.",
    doi: "10.59237/conexsaudefib.v6i.705",
    link: "https://revistas.fibbauru.br/conexaosaude/article/view/705"
  }
];

export default function Artigos() {
  return (
    <>
      <header>
        <img className="img" src="/NutriKids.jpeg" alt="Logo NutriKids" />

        <h1>Artigos Científicos</h1>

        <nav>
          <Link href="/">HOME</Link>
          <Link href="/guia-alimentacao">Guia de Alimentos</Link>
        </nav>
      </header>

      
      <div className="lista-artigo" id="lista-artigos">
        {artigos.map((artigo, index) => (
          <div key={index} className="box-artigo">
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
