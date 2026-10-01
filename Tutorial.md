Projeto Lagarta — Tutorial e Documentação

Autores: Gustavo Cardoso Geres (RA: 10771408) | Ítalo Ronsini (RA: 10771384) | Gabriel Alonso (RA: 10771405)

Repositório do Projeto (GitHub): https://github.com/ItaloRonsini/Projeto-Lagarta

1. Estrutura e Tutorial de Páginas

Página 1: Introdução

A primeira página apresenta o site com o nome do projeto em destaque e uma descrição com o resumo do mesmo. Abaixo do título, há três seções principais: uma detalhando o objetivo do projeto, outra abordando a metodologia adotada e a última apresentando o impacto esperado.

Página 2: Guia de Alimentos

Apresenta diversas caixas (cards) contendo a foto de cada alimento, acompanhada pelo seu nome e por uma descrição detalhada sobre seus benefícios nutricionais.

Página 3: Artigos Científicos

Reúne resumos de artigos científicos sobre alimentação saudável, acompanhados de botões com links diretos para direcionar o usuário à página do artigo completo.

Página 4: Fale Conosco

Contém um formulário de contato onde o usuário pode inserir seus dados para entrar em contato diretamente com a equipe do projeto.

2. Desenvolvimento HTML e CSS

Index (Página Principal)

A escolha das cores no CSS foi baseada nas tonalidades mais comuns associadas à nutrição e à saúde. A estrutura HTML foi pensada de forma lógica e segmentada em diferentes tópicos, utilizando botões estratégicos para facilitar a navegação do usuário para as demais páginas.

Página de Artigos

No HTML, a estrutura conta com cabeçalho contendo título, logo e uma barra de navegação (<nav>). O corpo da página utiliza elementos <div> organizados em cards padronizados e arredondados via CSS. Cada card possui as informações resumidas do artigo e um botão (<button>) interativo que redireciona ao site externo do artigo. O rodapé (footer) foi estilizado com a cor temática e texto alinhado.

Guia de Alimentos

O conteúdo foi estruturado por categorias em seções (<section>), utilizando <h1> e <h2> para hierarquia de títulos, além de <ul> e <li> para agrupamento dos alimentos:

Frutas

Vegetais

Proteínas

Grãos

Laticínios

Hidratação

Dentro de cada grupo alimentar, há um botão e uma área reservada para exibição dinâmica de dicas nutricionais ao clicar, cujas mensagens são armazenadas na constante JavaScript dicas.

Além disso, a página conta com o card "Desafio da Semana" (Objetivos), projetado para incentivar hábitos saudáveis através dos seguintes recursos:

Planejamento de 7 dias;

Barra de progresso visual;

Contador de conquistas;

Caixas de verificação (quadradinhos) para cada dia;

Botão "Marcar como feito";

Mensagens motivacionais de incentivo.

O CSS da página foi customizado para definir paletas agradáveis, organizar o posicionamento dos componentes (<nav>, imagem e cards) e garantir um visual moderno e fluido.

3. Funcionalidades em JavaScript (JS)

Na página do Guia de Alimentos, o JavaScript foi implementado para adicionar interatividade e dinamismo:

Lógica de exibição/ocultação de dicas ao clicar nas categorias, melhorando a limpeza e organização visual da interface.

Gerenciamento interativo do card "Objetivos da Semana", incentivando crianças e usuários a adotarem uma rotina alimentar saudável de forma lúdica.

Na página de artigos, o JavaScript foi utilizado para otimizar a inserção de cards sobre artigos científicos.

As informações apresentadas nos artigos são inseridas numa const, otimizando a inserção deles.

As informações como conteúdo, título, descrição, DOI e link viram uma variável que funciona dentro da primeira const.