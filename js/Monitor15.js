const channelsData = [
    
    
    { 
      id: "24HTVN",
      name: "CANAL 24 HORAS",
      visibilidad: "",
      tipo: "video",
      source: "Señal24HTVN.html"
    },
    { 
      id: "CNN_CHILE",
      name: "CNN CHILE",
      visibilidad: "",
      tipo: "video",
      source: "SeñalCNNCHILE.html"
    },
    { 
      id: "MEGANOTICIAS_1",
      name: "MEGANOTICIAS",
      visibilidad: "",
      tipo: "video",
      source: "SeñalInternaMEGANOTICIAS_1.html"
    },
    { 
      id: "T13_ENVIVO",
      name: "T13 EN VIVO",
      visibilidad: "",
      tipo: "video",
      source: "SeñalT13MOVIL.html"
    },
  ];

  function channelTemplate(channel) {
    return `
  
      <div class="channel-grid ${channel.id}-channel ${channel.visibilidad}">
          <div id="video" class="video-container" style="--aspect-ratio: 16 / 9;">
              <iframe id="player" width="100%" src="${channel.source}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
        </div>
          <a href="${channel.source}" class="NombreSeñalMonitor15"><h4>${channel.name}</h4></a>
      </div>
    `;
        
  }

  //function channelTemplate(channel) {
  //  return `
  //
  //    <div class="channel-grid ${channel.id}-channel ${channel.visibilidad}">
  //        <div id="video" class="video-container" style="--aspect-ratio: 16 / 9;">
  //            <iframe id="player" width="100%" src="${channel.source}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  //            <a href="${channel.source}" class="FondoTitulosMonitor1">
  //      <div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤ${channel.name}ㅤ</div>
  //      </a>
  //      </div>
  //        <div class="channel-name"><h4>${channel.name}</h4></div>
  //    </div>
  //  `;
  //      
  //}
  
  document.getElementById("grid-channels").innerHTML = `
    ${channelsData.map(channelTemplate).join("")}
  `;
  