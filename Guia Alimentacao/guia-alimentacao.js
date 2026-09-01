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


    document.getElementById(categoria).textContent =
        dicas[categoria];

}
