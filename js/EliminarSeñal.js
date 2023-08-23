// Función para manejar el evento click en el botón
function handleEliminarClick(element) {
    const pantalla = element.dataset.target;
    const player = document.getElementById("player" + pantalla);
    const nombreBarra = document.getElementById("nombre-barra-" + pantalla);

    player.setAttribute("src", ""); // Deja en blanco la señal del reproductor
    nombreBarra.innerText = ""; // Elimina el nombre del canal de la barra
}
