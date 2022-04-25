const seccionCanalesP2 = document.getElementById("channel-list-P2");
      const btnsP2 = seccionCanalesP2.getElementsByClassName("channel");
    
      const nombreBarraP2 = document.createElement('div');
    
    
      const anclaP2 = document.createElement('A');
      anclaP2.id = 'links';
      anclaP2.title = 'TITULO DE SEÑAL';
    
    
      for (const canal of LosCanales) {
          const BtnCanalP2 = document.createElement('BUTTON');
      
          BtnCanalP2.classList.add('channel');
          BtnCanalP2.innerHTML = canal.nombre;
      
          BtnCanalP2.onclick = () => { // https://stackoverflow.com/questions/3316207/add-onclick-event-to-newly-added-element-in-javascript
              playerP2.setAttribute(
                  'src',
                  canal.url
              );
          
              document.getElementById('video-container-P2').appendChild(nombreBarraP2);
              anclaP2.innerText = canal.nombre;
          };
          seccionCanalesP2.appendChild(BtnCanalP2)
      }
    
      // https://www.w3schools.com/howto/howto_js_active_element.asp
      for (let i = 0; i < btnsP2.length; i++) {
          btnsP2[i].addEventListener("click", function () {
              let current = document.getElementsByClassName("SeñalSeleccionada");
              if (current.length > 0) {
                  current[0].className = current[0].className.replace(" SeñalSeleccionada", "");
              }
              this.className += " SeñalSeleccionada";
          });
      }