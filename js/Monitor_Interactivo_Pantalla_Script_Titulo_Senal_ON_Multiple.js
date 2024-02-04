function toggleChannelList(screenId, updateURL = true) {
  const channelList = document.getElementById("channel-list");
  channelList.innerHTML = ''; // Limpiar contenido previo

  const urlParams = new URLSearchParams(window.location.search);
  
  for (const canal of LosCanales) {
    const channelBtn = document.createElement('div');
    channelBtn.classList.add('channel');
    channelBtn.classList.add('waves-effect');
    channelBtn.classList.add('waves-grisclaro');
    channelBtn.innerHTML = canal.nombre;

    channelBtn.onclick = () => {
      const player = document.getElementById(`player${screenId}`);
      player.setAttribute('src', canal.url);

      const titleBar = document.getElementById(`nombre-barra-${screenId}`);
      titleBar.innerHTML = '';
      const anchor = document.createElement('a');
      anchor.id = `links-${screenId}`;
      anchor.title = 'TITULO DE SEÑAL';
      anchor.innerHTML = canal.titulo;
      titleBar.appendChild(anchor);

      // Actualizar el canal seleccionado en la URL solo si se proporciona `updateURL`
      if (updateURL) {
        urlParams.set(`P${screenId}`, canal.id);
        history.replaceState({}, '', `?${urlParams}`);
      }
    };

    if (urlParams.has(`P${screenId}`)) {
      const channelId = urlParams.get(`P${screenId}`);
      if (channelId === canal.id.toString()) {
        channelBtn.click();
      }
    }

    channelList.appendChild(channelBtn);
  }
}


document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);

  // Definir asignaciones de canales por categoría
  const categorias = {
    'Chile': ['24PLAY', 'MEGANOTICIAS', 'CHVNOTICIAS', 'T13','CNNCHILE_YT'],
    'Argentina': ['TN_ARG_YT', 'LA_NACION_ARG_YT', 'CRONICATV_ARG_YT', 'A24_ARG_YT','C5N_ARG_YT','CANAL_26_ARG_YT'],
  };

  // Función para asignar canales a las pantallas
  function asignarCanalesPorCategoria(categoria) {
    const canalesAsignados = categorias[categoria];
    if (canalesAsignados) {
      for (let i = 1; i <= canalesAsignados.length; i++) {
        const screenId = `P${i}`;
        const canalAsignado = LosCanales.find(canal => canal.id === canalesAsignados[i - 1]);

        if (canalAsignado) {
          const player = document.getElementById(`player${screenId}`);
          const titleBar = document.getElementById(`nombre-barra-${screenId}`);

          player.setAttribute('src', canalAsignado.url);
          titleBar.innerHTML = '';

          const anchor = document.createElement('a');
          anchor.id = `links-${screenId}`;
          anchor.title = 'TITULO DE SEÑAL';
          anchor.innerText = canalAsignado.titulo;
          titleBar.appendChild(anchor);
        }
      }
    }
  }

  // Verificar si hay un parámetro de categoría en la URL y asignar canales
  if (urlParams.has("Categoria")) {
    const categoria = urlParams.get("Categoria");
    asignarCanalesPorCategoria(categoria);
  }

  // ... Resto del código para gestionar los canales según los parámetros P1, P2, etc.
});

document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);

  for (let i = 1; i <= 4; i++) { // Ajusta el número según sea necesario
    const screenId = `P${i}`;
    if (urlParams.has(screenId)) {
      const selectedChannelId = urlParams.get(screenId);
      const selectedChannel = LosCanales.find(canal => canal.id === selectedChannelId);

      if (selectedChannel) {
        const player = document.getElementById(`player${screenId}`);
        const titleBar = document.getElementById(`nombre-barra-${screenId}`);

        player.setAttribute('src', selectedChannel.url);
        titleBar.innerHTML = '';

        const anchor = document.createElement('a');
        anchor.id = `links-${screenId}`;
        anchor.title = 'TITULO DE SEÑAL';
        anchor.innerText = selectedChannel.titulo;
        titleBar.appendChild(anchor);
      }
    }
  }

});