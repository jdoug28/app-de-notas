document.getElementById("input-box").addEventListener("focus", function() {
    var placeholderText = "Digite sua nota aqui...";
    if (this.innerHTML.trim() === placeholderText) {
        this.innerHTML = "";
    }
});

document.getElementById("input-box").addEventListener("blur", function() {
    var placeholderText = "Digite sua nota aqui...";
    if (this.innerHTML.trim() === "") {
        this.innerHTML = placeholderText;
    }
});

// Definindo o texto de espaço reservado inicial
var placeholderText = "Digite sua nota aqui...";
document.getElementById("input-box").innerHTML = placeholderText;

function criarNota() {
    let notaContainer = document.createElement("div");
    notaContainer.className = "divNotaCriada"
    let nota = document.createElement("p");
    nota.className = "notaCriada";
    let botaoExcluir = document.createElement("button");
    botaoExcluir.innerHTML = "Excluir";
    botaoExcluir.id = "btnExcluir";

    var contenteditable = document.querySelector('[contenteditable]');
    var text = contenteditable.innerHTML;
    
    if (text!="") {
        nota.innerHTML = text;
        notaContainer.appendChild(nota);
        notaContainer.appendChild(botaoExcluir);
        document.body.appendChild(notaContainer);
        contenteditable.textContent = "";
    }
    else {
        alert("Nota vazia");
    }

    botaoExcluir.addEventListener("click", function() {
        notaContainer.remove();
    });
}
