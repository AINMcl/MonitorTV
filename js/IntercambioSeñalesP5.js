function swapIframeAndTitle(targetDivId) {
    var mainIframe = document.getElementById("playerP5");
    var targetIframe = document.getElementById("player" + targetDivId);
    
    if (targetIframe.src !== "about:blank") {
      var mainTitle = document.getElementById("nombre-barra-P5");
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