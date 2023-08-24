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


// Este fragmento de código debe ejecutarse después de que se haya cargado el contenido de la página.
document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  
  for (let i = 1; i <= 6; i++) {
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
