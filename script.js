function criarNota() {
    // Crie um novo parágrafo
    let nota = document.createElement("p");

    // Crie um botão de exclusão
    let botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "Excluir";

    // Selecione o elemento contenteditable
    var contenteditable = document.querySelector('[contenteditable]');

    // Obtenha o texto do elemento contenteditable
    var text = contenteditable.textContent;

    // Defina o texto do parágrafo
    nota.innerText = text;

    // Adicione o botão de exclusão ao parágrafo
    nota.appendChild(botaoExcluir);

    // Adicione o parágrafo ao body do documento
    document.body.appendChild(nota);

    // Adicione um evento de clique ao botão de exclusão
    botaoExcluir.addEventListener("click", function() {
        // Remova o parágrafo (nota) quando o botão de exclusão for clicado
        nota.remove();
    });
}
