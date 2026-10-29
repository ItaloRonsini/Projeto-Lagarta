"use client";

import { useState } from "react";
import Link from "next/link";
import "./guia-alimentacao.css";

const TOTAL_DIAS = 7;

// TROQUE os textos das dicas pelos que estão no seu guia-alimentacao.js
const GRUPOS = [
  {
    id: "frutas",
    titulo: "FRUTAS",
    itens: ["Maçã", "Banana", "Laranja", "Morango", "Mamão"],
    dica: "Coma frutas variadas e coloridas todos os dias!",
  },
  {
    id: "vegetais",
    titulo: "VEGETAIS",
    itens: ["Brócolis", "Cenoura", "Tomate", "Alface", "Abóbora"],
    dica: "Quanto mais colorido o prato, melhor!",
  },
  {
    id: "proteinas",
    titulo: "PROTEÍNAS",
    itens: ["Frango", "Peixe", "Ovos", "Feijão", "Carnes magras"],
    dica: "Proteínas ajudam seus músculos a crescerem fortes.",
  },
  {
    id: "graos",
    titulo: "GRÃOS",
    itens: ["Arroz", "Aveia", "Pão integral", "Milho", "Quinoa"],
    dica: "Prefira grãos integrais: dão energia por mais tempo.",
  },
  {
    id: "laticinios",
    titulo: "LATICÍNIOS",
    itens: ["Leite", "Iogurte", "Queijo", "Coalhada"],
    dica: "O cálcio dos laticínios fortalece ossos e dentes.",
  },
  {
    id: "agua",
    titulo: "HIDRATAÇÃO",
    itens: [
      "Beba água durante o dia",
      "Evite refrigerantes em excesso",
      "Prefira bebidas sem muito açúcar",
    ],
    dica: "Leve sempre uma garrafinha de água com você!",
  },
];

function mensagemIncentivo(dias) {
  if (dias === 0) return "Vamos começar!";
  if (dias < TOTAL_DIAS) return "Muito bem! Continue assim!";
  return "Parabéns! Você completou o desafio! 🎉";
}

export default function GuiaAlimentacao() {
  const [dicaAberta, setDicaAberta] = useState({});
  const [diasFeitos, setDiasFeitos] = useState(0);

  function alternarDica(id) {
    setDicaAberta((atual) => ({ ...atual, [id]: !atual[id] }));
  }

  function marcarDia() {
    setDiasFeitos((atual) => Math.min(atual + 1, TOTAL_DIAS));
  }

  const quadradinhos = Array.from({ length: TOTAL_DIAS }, (_, i) =>
    i < diasFeitos ? "✅" : "⬜"
  ).join(" ");

  return (
    <>
      <header>
        <img src="/NutriKids.jpeg" alt="NutriKids" />

        <h1>GUIA DE ALIMENTOS SAUDÁVEIS</h1>

        <nav>
          <Link href="/">HOME</Link>
          <Link href="/artigos">Artigos</Link>
        </nav>
      </header>

      <main>
        {GRUPOS.map((grupo) => (
          <section key={grupo.id}>
            <h2>{grupo.titulo}</h2>

            <ul>
              {grupo.itens.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <button onClick={() => alternarDica(grupo.id)}>Ver dica</button>

            <p id={grupo.id} className="dica">
              {dicaAberta[grupo.id] ? grupo.dica : ""}
            </p>
          </section>
        ))}

        <section>
          <h2>OBJETIVOS</h2>

          <h3>Desafio da Semana</h3>

          <p>
            Coma pelo menos um item de cada grupo alimentar por 7 dias seguidos
            e marque os dias que você conseguiu cumprir o desafio.
          </p>

          <progress id="progresso" value={diasFeitos} max={TOTAL_DIAS}></progress>

          <p id="contador">
            {diasFeitos}/{TOTAL_DIAS} dias
          </p>

          <p id="dias">{quadradinhos}</p>

          <button onClick={marcarDia} disabled={diasFeitos >= TOTAL_DIAS}>
            Marcar como feito
          </button>

          <p id="incentivo">{mensagemIncentivo(diasFeitos)}</p>
        </section>
      </main>

      <footer>
        <p>Projeto Lagarta - Alimentação saudável para crianças</p>
      </footer>
    </>
  );
}