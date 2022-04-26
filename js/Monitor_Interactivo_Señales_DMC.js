
var size = 6;

///6 = 2 PANTALLAS HORIZONTALMENTE///
///3 = 4 PANTALLAS HORIZONTALMENTE///
///4 = 3 PANTALLAS HORIZONTALMENTE///
var App = {
     channels: {
        'CHILE_TRUECOLOR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>COLOR VERDADERO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_TRUECOLOR.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTRUE COLORㅤ</div></div></div>'
        },
        'CHILE_TRUECOLOR_NUBES_ALTAS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>NUBES ALTAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_TRUECOLOR_NUBES_ALTAS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNUBES ALTASㅤ</div></div></div>'
        },
        'CHILE_TRUECOLOR_NUBES_MEDIAS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>NUBES MEDIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_TRUECOLOR_NUBES_MEDIAS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNUBES MEDIASㅤ</div></div></div>'
        },
        'CHILE_TRUECOLOR_NUBES_BAJAS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>NUBES BAJAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_TRUECOLOR_NUBES_BAJAS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNUBES BAJASㅤ</div></div></div>'
        },
        'CHILE_TRUECOLOR_PRECIPITACION_TOTAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>PRECIPITACION TOTAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_TRUECOLOR_PRECIPITACION_TOTAL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPRECIPITACION TOTALㅤ</div></div></div>'
        },
        'CHILE_TRUECOLOR_AGUA_PRECIPITABLE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>AGUA PRECIPITABLE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_TRUECOLOR_AGUA_PRECIPITABLE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAGUA PRECIPITABLEㅤ</div></div></div>'
        },
        'CHILE_TRUECOLOR_VIENTOMAYORA20NUDOS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>VIENTO MAYOR A 20 NUDOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_TRUECOLOR_VIENTOMAYORA20NUDOS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVIENTO MAYOR A 20 NUDOSㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 1: VISIBLE AZUL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 2: VISIBLE ROJO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 3: VEGETACION IR CERCANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 4: CIRROS IR CERCANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL4.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 5: NIEVE/HIELO IR CERCANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL5.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL6': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 6: TAMANO PARTICULAS NUBES',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL6.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL7': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 7: INFRAROJA DE ONDA CORTA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL7.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL8': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 8: VAPOR AGUA NIVELES ALTOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL8.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL9': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 9: VAPOR AGUA NIVELES MEDIOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL9.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL10': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 10: VAPOR AGUA NIVELES BAJOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL10.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL11': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 11: IR, FASE TOMES NUBOSOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL11.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL12': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 12: IR, OZONO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL12.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL13': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 13: IR ONDA LARGA LIMPIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL13.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL14': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 14: IR ONDA LARGA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL14.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL15': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 15: IR ONDA LARGA SUCIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL15.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
        'CHILE_GOES_16_CANAL16': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">satellite_alt</span>CANAL 16: IR ONDA LARGA CO2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DMC/CHILE_GOES_16_CANAL16.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 1: VISIBLE AZULㅤ</div></div></div>'
        },
    },
    add: function(canal) {
        if (App.channels[canal]) {
    var thisCanal = document.createElement("div");
    thisCanal.innerHTML = App.channels[canal].code;

    if (App.isMobile()) {
        thisCanal.classList.add("col-" + sizeMobile);
    } else {
        thisCanal.classList.add("col-" + size);
    }
    thisCanal.classList.add("stream");
    thisCanal.setAttribute("data-canal", canal);
    var losCanales = document.getElementById("los-canales");
    losCanales.appendChild(thisCanal);
    var n = document.querySelector('button[data-canal="' + canal + '"]');
    n.classList.remove("BotonTV_Señales");
    n.classList.add("BotonTV_SeñalSeleccionada");
}
    },
remove: function(canal) {
    var findCanal = document.querySelector('div[data-canal="' + canal + '"]');
    var losCanales = document.getElementById("los-canales");
    if (findCanal != null) {
        losCanales.removeChild(findCanal);
        var n = document.querySelector('button[data-canal="' + canal + '"]');
        n.classList.remove("BotonTV_SeñalSeleccionada");
        n.classList.add("BotonTV_Señales");
    }
},
isMobile: function() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
},

seedModal: function() {
    for (const llave in App.channels) {
        let buttonTV;
        buttonTV = document.createElement("button");
        buttonTV.classList.add("btn");
        buttonTV.classList.add("BotonTV_Señales");
        buttonTV.setAttribute("data-canal", llave);
        buttonTV.innerHTML = App.channels[llave].nombre;
        let n = document.querySelector(".modal-body");
        n.appendChild(buttonTV);
        buttonTV.addEventListener("click", function () {
            if (buttonTV.getAttribute("class").includes("BotonTV_Señales")) {
                App.add(llave);
            } else if (buttonTV.getAttribute("class").includes("BotonTV_SeñalSeleccionada")) {
                App.remove(llave);
            }
        })
    };
},

init: function() {
    App.seedModal();
    App.add("cima");
    if (!App.isMobile()) {
        //App.add("24HTVN");

    }
}
};

App.init();

var modal = document.getElementById("custom-modal");
var btn = document.getElementById("custom-btn");
var span = document.getElementById("custom-close");
var span2 = document.getElementById("custom-close2");

var hue = document.getElementById("Stream_por_fila");

hue.onchange = function (event) {
    size = event.target.value
    sizeMobile = event.target.value
    let canal2 = document.querySelectorAll(".stream");
    for (let videos of canal2) {
        videos.classList.remove("col-12", "col-6", "col-4", "col-3", "col-2");
        videos.classList.add("col-" + event.target.value);
    }
}

btn.onclick = function () {
    modal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

span.onclick = function () {
    modal.style.display = "none";
}

span2.onclick = function () {
    modal.style.display = "none";
}



var anchoStreams = document.getElementById("Tamaño_streams");

anchoStreams.oninput = function (event) {
    let streams2 = document.getElementById("los-canales");
    streams2.style.maxWidth = event.target.value + "%"
}