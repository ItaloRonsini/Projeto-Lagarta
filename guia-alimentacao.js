function mostrarDica(categoria) {
    let mensagem = "";

    if (categoria === "frutas") {
        mensagem = "As frutas possuem vitaminas, fibras e minerais importantes para o crescimento.";
    }

    else if (categoria === "vegetais") {
        mensagem = "Os vegetais ajudam na imunidade e no funcionamento do organismo.";
    }

    else if (categoria === "proteinas") {
        mensagem = "As proteínas ajudam no crescimento e na formação dos músculos.";
    }

    else if (categoria === "graos") {
        mensagem = "Os grãos fornecem energia para estudar, brincar e praticar atividades.";
    }

    else if (categoria === "laticinios") {
        mensagem = "Leite e derivados são importantes fontes de cálcio.";
    }

    else if (categoria === "agua") {
        mensagem = "Beber água durante o dia ajuda a manter o corpo hidratado.";
    }

    document.getElementById(categoria).innerHTML = mensagem;

