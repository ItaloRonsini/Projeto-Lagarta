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


const lista = document.getElementById("lista-artigos");


artigos.forEach(function(artigo) {

    
    const box = document.createElement("div");
    box.className = "box-artigo";


    const conteudo = document.createElement("div");
    conteudo.className = "conteudo";


    const titulo = document.createElement("h2");
    titulo.textContent = artigo.titulo;


    const descricao = document.createElement("p");
    descricao.textContent = artigo.descricao;


    const doi = document.createElement("p");
    doi.className = "doi";
    doi.textContent = "DOI: " + artigo.doi;


    const botao = document.createElement("a");
    botao.className = "botao";
    botao.textContent = "LER ARTIGO COMPLETO";
    botao.href = artigo.link;
    botao.target = "_blank";


    conteudo.appendChild(titulo);
    conteudo.appendChild(descricao);
    conteudo.appendChild(doi);
    conteudo.appendChild(botao);

    box.appendChild(conteudo);

    lista.appendChild(box);
});