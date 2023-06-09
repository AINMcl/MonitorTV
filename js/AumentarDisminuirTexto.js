function aumentarTexto() {
  var elementosTexto = document.querySelectorAll("body *");
  for (var i = 0; i < elementosTexto.length; i++) {
    var fontSize = window.getComputedStyle(elementosTexto[i], null).getPropertyValue('font-size');
    var fontSizeNum = parseFloat(fontSize);
    elementosTexto[i].style.fontSize = (fontSizeNum + 2) + 'px';
  }
}
function disminuirTexto() {
  var elementosTexto = document.querySelectorAll("body *");
  for (var i = 0; i < elementosTexto.length; i++) {
    var fontSize = window.getComputedStyle(elementosTexto[i], null).getPropertyValue('font-size');
    var fontSizeNum = parseFloat(fontSize);
    elementosTexto[i].style.fontSize = (fontSizeNum - 2) + 'px';
  }
}
function restablecerTexto() {
  var elementosTexto = document.querySelectorAll("body *");
  for (var i = 0; i < elementosTexto.length; i++) {
    elementosTexto[i].style.fontSize = "initial";
  }
}