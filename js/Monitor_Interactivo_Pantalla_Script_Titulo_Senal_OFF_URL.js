// Función para obtener el valor de un parámetro de la URL
function getParameterValue(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}

// Obtén el valor del parámetro "senal" de la URL
const parametroCanal = getParameterValue('senal');

// Selección de elementos del DOM
const seccionCanales = document.getElementById("channel-list");
const btns = seccionCanales.getElementsByClassName("channel");
const nombreBarra = document.createElement('div');
const ancla = document.createElement('A');
ancla.id = 'links';
ancla.title = 'TITULO DE SEÑAL';



// Obtén el elemento select
const tagSelect = document.getElementById("tag-select");

// Agrega un oyente de eventos al elemento select
tagSelect.addEventListener("change", filtrarPorTag);

// Llama a la función para mostrar los canales iniciales al cargar la página
filtrarPorTag();


// Función para filtrar por etiqueta
function filtrarPorTag() {
  const selectedTag = tagSelect.value.toLowerCase().trim();

  seccionCanales.innerHTML = '';

  for (const canal of LosCanales) {
      const canalTags = canal.tags.map(tag => tag.toLowerCase());

      if (selectedTag === "" || canalTags.includes(selectedTag)) {
          const BtnCanal = document.createElement('div');
          BtnCanal.classList.add('channel');
          BtnCanal.classList.add('waves-effect');
          BtnCanal.classList.add('waves-grisclaro');
          BtnCanal.innerHTML = canal.nombre;

          BtnCanal.onclick = () => {
              player.setAttribute('src', canal.url);
              document.getElementById('video-container').appendChild(nombreBarra);
              ancla.innerText = canal.titulo;

              // Remover clase SeñalSeleccionada de otros botones de canal
              for (let i = 0; i < btns.length; i++) {
                  btns[i].classList.remove("SeñalSeleccionada");
              }
              BtnCanal.classList.add("SeñalSeleccionada");

              // Agregar el parámetro "senal" a la URL solo si no se selecciona el mismo canal
              if (parametroCanal !== canal.id) {
                  history.replaceState(null, '', `${window.location.pathname}?senal=${canal.id}`);
              }
          };

          if (parametroCanal && canal.id === parametroCanal) {
              BtnCanal.click();
          }

          seccionCanales.appendChild(BtnCanal);
      }
  }
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

// Ejecuta la función para mostrar los canales iniciales al cargar la página
filtrarPorTag();

// Buscar
const buscador = document.getElementById("buscador"); // Obtener el elemento del buscador
buscador.addEventListener("input", filtrarSeñales); // Agregar un oyente de eventos para detectar cambios en la entrada

// Función para borrar el texto del input y restaurar la lista original
function borrarTexto() {
  buscador.value = ''; // Borra el contenido del input
  filtrarSeñales(); // Restaurar la lista original
}

// Función para filtrar y mostrar canales
function filtrarSeñales() {
  const textoBuscado = buscador.value.toLowerCase().trim(); // Obtener el texto ingresado y convertirlo a minúsculas
  const seccionCanales = document.getElementById("channel-list"); // Obtener la sección de la lista de canales
  seccionCanales.innerHTML = ''; // Limpiar la lista de canales para mostrar nuevos resultados

  if (textoBuscado === '') {
    // Restaurar la lista original
    for (const canal of LosCanales) {
      const BtnCanal = crearBotonCanal(canal);
      seccionCanales.appendChild(BtnCanal);
    }
  } else {
    // Filtrar y mostrar canales que coincidan con el texto buscado de forma parcial
    for (const canal of LosCanales) {
      const tituloCanal = canal.titulo.toLowerCase();
      const tagsCanal = canal.tags.map(tag => tag.toLowerCase());

      // Comprobar si el texto buscado está presente en el título o en las etiquetas de forma parcial
      if (tituloCanal.includes(textoBuscado) || tagsCanal.some(tag => tag.includes(textoBuscado))) {
        const BtnCanal = crearBotonCanal(canal);
        seccionCanales.appendChild(BtnCanal);
      }
    }
  }
}

// Función para crear y configurar un botón de canal
function crearBotonCanal(canal) {
  const BtnCanal = document.createElement('div');
  BtnCanal.classList.add('channel');
  BtnCanal.classList.add('waves-effect');
  BtnCanal.classList.add('waves-grisclaro');
  BtnCanal.innerHTML = canal.nombre;

  BtnCanal.onclick = () => {
    // Eliminar la clase SeñalSeleccionada de todos los botones de canal
    const botonesCanales = document.querySelectorAll('.channel');
    botonesCanales.forEach(boton => boton.classList.remove('SeñalSeleccionada'));

    // Agregar la clase SeñalSeleccionada al botón actual
    BtnCanal.classList.add('SeñalSeleccionada');

    player.setAttribute('src', canal.url);
    document.getElementById('video-container').appendChild(nombreBarra);
    ancla.innerText = canal.nombre;
  };

  return BtnCanal;
}


//CierreBuscador

// Obten el botón por su ID
const btnEliminar = document.getElementById('BorrarLaSeñal');

// Botón para eliminar la señal
btnEliminar.onclick = () => {
  // Aquí defines la acción para eliminar la señal, por ejemplo, podrías detener el reproductor de video o eliminar la fuente (URL) del reproductor.
  player.removeAttribute('src');
  // También limpia el contenido del elemento "ancla" que muestra el nombre del canal.
  ancla.innerText = '';
  // Además, puedes borrar el elemento de barra de nombre debajo del reproductor si lo deseas.
  const nombreBarraElement = document.getElementById('nombreBarra');
  if (nombreBarraElement) {
    nombreBarraElement.remove();
  }

  // Quita la clase "SeñalSeleccionada" de todos los botones de canal
  const botonesCanales = seccionCanales.getElementsByClassName('channel');
  for (let i = 0; i < botonesCanales.length; i++) {
    botonesCanales[i].classList.remove('SeñalSeleccionada');
  }
};


