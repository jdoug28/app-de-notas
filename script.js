window.onload = function() {
    var savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    savedNotes.forEach(function(noteText) {
        criarNota(noteText);
    });
};

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

function criarNota(texto) {
    let notaContainer = document.createElement("div");
    notaContainer.className = "divNotaCriada";
    let nota = document.createElement("p");
    nota.className = "notaCriada";
    let botaoExcluir = document.createElement("button");
    botaoExcluir.innerHTML = "Excluir";
    botaoExcluir.className = "btnExcluir";

    if (texto) {
        nota.innerHTML = texto;
        notaContainer.appendChild(nota);
        notaContainer.appendChild(botaoExcluir);
        document.body.appendChild(notaContainer);
    } else {
        var contenteditable = document.querySelector('[contenteditable]');
        var text = contenteditable.innerHTML;
        
        if (text != "") {
            nota.innerHTML = text;
            notaContainer.appendChild(nota);
            notaContainer.appendChild(botaoExcluir);
            document.body.appendChild(notaContainer);
            contenteditable.textContent = "";
        } else {
            alert("Nota vazia");
        }
    }


    botaoExcluir.addEventListener("click", function() {
        notaContainer.remove();
        salvarNotas();
    });

    salvarNotas();
}

function salvarNotas() {
    var notas = [];
    var notasElementos = document.querySelectorAll('.notaCriada');
    notasElementos.forEach(function(notaElemento) {
        notas.push(notaElemento.innerHTML);
    });
    localStorage.setItem('notes', JSON.stringify(notas));
}