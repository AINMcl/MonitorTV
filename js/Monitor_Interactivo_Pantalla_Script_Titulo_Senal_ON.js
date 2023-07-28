const seccionCanales = document.getElementById("channel-list");
const btns = seccionCanales.getElementsByClassName("channel");

const nombreBarra = document.createElement('div');


const ancla = document.createElement('A');
ancla.id = 'links';
ancla.title = 'TITULO DE SEÑAL';


for (const canal of LosCanales) {
    const BtnCanal = document.createElement('div');

    BtnCanal.classList.add('channel');
    BtnCanal.classList.add('waves-effect');
    BtnCanal.classList.add('waves-grisclaro');
    BtnCanal.innerHTML = canal.nombre;

    BtnCanal.onclick = () => { // https://stackoverflow.com/questions/3316207/add-onclick-event-to-newly-added-element-in-javascript
        player.setAttribute(
            'src',
            canal.url
        );

        document.getElementById('video-container').appendChild(nombreBarra);
        ancla.innerText = canal.nombre;
        document.getElementById('nombre-barra').appendChild(ancla);
        ancla.innerText = canal.titulo;
    };
    seccionCanales.appendChild(BtnCanal)
}

// https://www.w3schools.com/howto/howto_js_active_element.asp
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("SeñalSeleccionada");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" SeñalSeleccionada", "");
        }
        this.className += " SeñalSeleccionada";
    });
}

// Buscar
const buscador = document.getElementById("buscador");
buscador.addEventListener("input", filtrarSeñales);

function filtrarSeñales() {
  // Obtenemos el texto ingresado en el buscador y lo convertimos a minúsculas
  // Además, eliminamos cualquier espacio en blanco al principio y al final del texto
  const textoBuscado = buscador.value.toLowerCase().trim();
  
  // Obtenemos la sección que contiene la lista de canales
  const seccionCanales = document.getElementById("channel-list");
  
  // Limpiamos la lista de canales para empezar de nuevo con el filtrado
  seccionCanales.innerHTML = '';

  // Recorremos cada canal en la lista "LosCanales"
  for (const canal of LosCanales) {
    // Obtenemos el título del canal y lo convertimos a minúsculas
    const tituloCanal = canal.titulo.toLowerCase();
    
    // Comparamos si el título del canal contiene el texto buscado
    if (tituloCanal.includes(textoBuscado)) {
      // Si es así, creamos un nuevo elemento HTML para el canal y lo agregamos a la lista
      const BtnCanal = document.createElement('div');
      BtnCanal.classList.add('channel');
      BtnCanal.classList.add('waves-effect');
      BtnCanal.classList.add('waves-grisclaro');
      BtnCanal.innerHTML = canal.nombre;

      BtnCanal.onclick = () => {
        // Aquí se realiza alguna acción cuando el usuario hace clic en el canal (puedes personalizar esto)
        // En este caso, se cambia el atributo "src" de un reproductor de video con la URL del canal
        player.setAttribute('src', canal.url);
        // Además, se agrega un elemento de barra de nombre debajo del reproductor
        document.getElementById('video-container').appendChild(nombreBarra);
        // También se actualiza el contenido del elemento "ancla" con el nombre del canal
        ancla.innerText = canal.nombre;
      };

      // Agregamos el canal a la lista de canales visible
      seccionCanales.appendChild(BtnCanal);
    }
  }
}