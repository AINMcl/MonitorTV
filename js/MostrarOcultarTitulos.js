var elementosVisibles = true;

function alternarElementos() {
    var elementos = document.getElementsByClassName("FondoTitulosMonitor1");

    for (var i = 0; i < elementos.length; i++) {
        if (elementosVisibles) {
            elementos[i].style.display = "none";
        } else {
            elementos[i].style.display = "block";
        }
    }

    elementosVisibles = !elementosVisibles;

    var textoBoton = document.getElementById("TextoBotonMostrarOcultar");
    if (elementosVisibles) {
        textoBoton.textContent = "OCULTAR TITULOS";
    } else {
        textoBoton.textContent = "MOSTRAR TITULOS";
    }
}