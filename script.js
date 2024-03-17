function criarNota() {
    let nota = document.createElement("p");
    let botaoExcluir = document.createElement("button");
    botaoExcluir.innerHTML = "Excluir";

    var contenteditable = document.querySelector('[contenteditable]');
    var text = contenteditable.innerHTML;
    
    if (text!="") {
        nota.innerHTML = text + "<br>";
        nota.appendChild(botaoExcluir);
        document.body.appendChild(nota);
        contenteditable.textContent = "";
    }
    else {
        alert("Nota vazia");
    }

    botaoExcluir.addEventListener("click", function() {
        nota.remove();
    });
}
