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
}*/

/*
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
}*/

/*
function swapWithMain(targetDivId) {
    // Obtiene el contenido HTML del div principal
    var mainDivContent = document.getElementById("video-container-P1").innerHTML;
  
    // Obtiene el contenido HTML del div objetivo
    var targetDivContent = document.getElementById("video-container-" + targetDivId).innerHTML;
  
    // Intercambia los contenidos
    document.getElementById("video-container-P1").innerHTML = targetDivContent;
    document.getElementById("video-container-" + targetDivId).innerHTML = mainDivContent;
}
*/

function swapIframeAndTitle(targetDivId) {
    var mainIframe = document.getElementById("playerP1");
    var targetIframe = document.getElementById("player" + targetDivId);
    
    if (targetIframe.src !== "about:blank") {
      var mainTitle = document.getElementById("nombre-barra-P1");
      var targetTitle = document.getElementById("nombre-barra-" + targetDivId);
  
      // Intercambia el contenido del iframe
      var tempIframeContent = mainIframe.src;
      mainIframe.src = targetIframe.src;
      targetIframe.src = tempIframeContent;
  
      // Intercambia el contenido del título
      var tempTitleContent = mainTitle.innerHTML;
      mainTitle.innerHTML = targetTitle.innerHTML;
      targetTitle.innerHTML = tempTitleContent;
    }
}