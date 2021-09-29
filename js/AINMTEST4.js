/**
 * Ejemplo 3 de html2canvas para convertir el HTML de una web
 * a un elemento canvas - Capturar todo el cuerpo del HTML, no solo un div
 * 
 * @author parzibyte
 */
//Definimos el botón para escuchar su click, y también el contenedor del canvas
const $boton = document.querySelector("#btnCapturar"), // El botón que desencadena
  $objetivo = document.body, // A qué le tomamos la foto
  $contenedorCanvas = document.querySelector("#contenedorCanvas"); // En dónde ponemos el elemento canvas

// Agregar el listener al botón
$boton.addEventListener("click", () => {
  html2canvas($objetivo) // Llamar a html2canvas y pasarle el elemento
    .then(canvas => {
      // Cuando se resuelva la promesa traerá el canvas
      $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
    });
});