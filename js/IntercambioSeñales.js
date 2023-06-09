/*
function convertirDiv(divClicado) {
var divGrande = document.getElementById('divGrande');
var divPequeno = divClicado;
  
// Clonar el contenido y los estilos del div grande
var contenidoDivGrande = divGrande.innerHTML;
var estilosDivGrande = window.getComputedStyle(divGrande);
  
// Reemplazar el contenido y los estilos del div grande por los del div pequeño
divGrande.innerHTML = divPequeno.innerHTML;
divGrande.style.backgroundColor = estilosDivGrande.backgroundColor;
  
// Reemplazar el contenido y los estilos del div pequeño por los del div grande
divPequeno.innerHTML = contenidoDivGrande;
divPequeno.style.backgroundColor = estilosDivGrande.backgroundColor;
}
*/

function convertirDiv(divClicado) {
    var DivPantallaSeñalGrande = document.getElementById('DivPantallaSeñalGrande');
    var DivPantallaSeñalPequeno = divClicado;
      
    // Clonar el contenido y los estilos del div grande
    var contenidoDivPantallaSeñalGrande = DivPantallaSeñalGrande.innerHTML;
    var estilosDivPantallaSeñalGrande = window.getComputedStyle(DivPantallaSeñalGrande);
      
    // Reemplazar el contenido y los estilos del div grande por los del div pequeño
    DivPantallaSeñalGrande.innerHTML = DivPantallaSeñalPequeno.innerHTML;
    DivPantallaSeñalGrande.style.backgroundColor = estilosDivPantallaSeñalGrande.backgroundColor;
      
    // Reemplazar el contenido y los estilos del div pequeño por los del div grande
    DivPantallaSeñalPequeno.innerHTML = contenidoDivPantallaSeñalGrande;
    DivPantallaSeñalPequeno.style.backgroundColor = estilosDivPantallaSeñalGrande.backgroundColor;
}