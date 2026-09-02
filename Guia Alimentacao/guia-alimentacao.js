function mostrarDica(categoria) {

    const dicas = {

        frutas:
            "As frutas possuem vitaminas, fibras e minerais importantes para o crescimento.",

        vegetais:
            "Os vegetais ajudam no funcionamento do organismo e na imunidade.",

        proteinas:
            "As proteínas ajudam no crescimento e na formação dos músculos.",

        graos:
            "Os grãos fornecem energia para estudar, brincar e praticar atividades.",

        laticinios:
            "Leite e derivados são importantes fontes de cálcio.",

        agua:
            "Beber água durante o dia ajuda a manter o corpo hidratado."

    };

    document.getElementById(categoria).textContent = dicas[categoria];
}


let diasFeitos = 0;


function marcarDia() {

    if (diasFeitos < 7) {
        diasFeitos++;
    }

    document.getElementById("progresso").value = diasFeitos;

    document.getElementById("contador").textContent =
        diasFeitos + "/7 dias";

    let marcacoes = "";

    for (let i = 1; i <= 7; i++) {

        if (i <= diasFeitos) {
            marcacoes += "✅ ";
        } else {
            marcacoes += "⬜ ";
        }
    }

    document.getElementById("dias").textContent = marcacoes;

    let faltam = 7 - diasFeitos;

    if (faltam > 0) {

        document.getElementById("incentivo").textContent =
            "Faltam só " + faltam + " dias!";

    } else {

        document.getElementById("incentivo").textContent =
            "Parabéns! Você completou o desafio!";
    }
}
