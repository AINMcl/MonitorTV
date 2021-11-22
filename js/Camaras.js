
var size = 6;

///6 = 2 PANTALLAS HORIZONTALMENTE///
///3 = 4 PANTALLAS HORIZONTALMENTE///
///4 = 3 PANTALLAS HORIZONTALMENTE///
var App = {
     channels: {
        'PARQUEMET_CUMBRE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠPARQUEMET CUMBRE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMPARQUEMET_CUMBRE_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCUMBREㅤ</div></div></div>'
        },
        'PARQUEMET_TERRAZA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠPARQUEMET TERRAZA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMPARQUEMET_TERRAZA_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTERRAZAㅤ</div></div></div>'
        },
        'PLAZAITALIA_CIMA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠPLAZA ITALIA (Galeria Cima)',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_CAMARA_PLAZA_ITALIA_CIMA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPLAZA ITALIAㅤ</div></div></div>'
        },
        'LEDRIUM_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠPROVIDENCIA (Ledrium)',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_CAMARA_LEDRIUM_PROVIDENCIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPROVIDENCIA LEDRIUMㅤ</div></div></div>'
        },
        //'VIÑA_1': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠVIÑA DEL MAR (Meteo Sismos CL)',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_CAMARA_VIÑA_DEL_MAR.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVIÑA DEL MARㅤ</div></div></div>'
        //},
        'OSORNO_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠOSORNO PLAZA ARMAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/Camara_Osorno.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤOSORNO PLAZA ARMASㅤ</div></div></div>'
        },
        'COYHAIQUE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠCOYHAIQUE (Radio)ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_CANALSURPATAGONIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCOYHAIQUEㅤ</div></div></div>'
        },
        'CNN1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠCNNﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInternaCNNCHILE_1_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1"></div></div></div>'
        //},
        //'24H1': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠTVN 1ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1"></div></div></div>'
        //},
        //'24H2': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠTVN 2ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_4.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1"></div></div></div>'
        //},
        //'24H3': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠTVN 3ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1"></div></div></div>'
        //},
        //'PRESIDENCIA': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_GOB.svg"></img>ﾠSEÑAL PRESIDENCIA',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPRESIDENCIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPRESIDENCIAㅤ</div></div></div>'
        },
        'WHITE_HOUSE_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠWHITE HOUSE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/T5zRi2J0uYg?autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤWHITE HOUSEㅤ</div></div></div>'
        },
        'CAPITOLIO_EEUU_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠCAPITOLIO EEUU',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_CAMARA_CAPITOLIO_EEUU.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCAPITOLIO EEUUㅤ</div></div></div>'
        },
        'NYC_Brooklyn_Bridge': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠNYC BROOKLYN BRIDGE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KGuCGd726RA?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/KGuCGd726RA" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤNYC BROOKLYN BRIDGEㅤ</div></a></div>'
        },
        'Lower_Manhattan_New_York_Harbor': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠNYC LOWER MANHATTAN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Vj0XKu6AoOw?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/Vj0XKu6AoOw" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤNYC LOWER MANHATTAN & NEW YORK HARBORㅤ</div></a></div>'
        },
        'Times_Square': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠTIMES SQUARE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/AdUw5RdyZxI?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/AdUw5RdyZxI" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤTIMES SQUAREㅤ</div></a></div>'
        },
        'Times_Square_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠTIMES SQUARE: DUFFY SQUARE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/mNawBricEYw?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/mNawBricEYw" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤTIMES SQUARE: DUFFY SQUAREㅤ</div></a></div>'
        },
        'Times_Square_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠTIMES SQUARE: EXPRESS VIEW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/OBmXqlPxtAQ?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/OBmXqlPxtAQ" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤTIMES SQUARE: EXPRESS VIEWㅤ</div></a></div>'
        },
        'Times_Square_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠTIMES SQUARE: 1560 BROADWAY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/4qyZLflp-sI?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/4qyZLflp-sI" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤTIMES SQUARE: 1540 BROADWAYㅤ</div></a></div>'
        },
        'LasVegas_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠLAS VEGAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/oy3tQ5Hacm8?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/oy3tQ5Hacm8" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤLAS VEGASㅤ</div></a></div>'
        },
        'Four_Seasons_Hotel_Buenos_Aires': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠFOUR SEASONS HOTEL BS.As',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/if91GyWP3zQ?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/if91GyWP3zQ" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤFOUR SEASONS HOTEL BUENOS AIRESㅤ</div></a></div>'
        },
        'Ushuaia': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠUSHUAIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_CAMARA_USHUAIA.html" frameborder="0"></iframe><a href="" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤUSHUAIAㅤ</div></a></div>'
        },
        'Tokio_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/jp.svg"></img>ﾠTOKYO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QOjmvL3e7Lc?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/QOjmvL3e7Lc" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤTOKYOㅤ</div></a></div>'
        },
        'VolcanLaPalma': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/es.svg"></img>ﾠVOLCAN LA PALMAﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_RTVC_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOLCAN LA PALMAㅤ</div></div></div>'
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
        //App.add("PLAZAITALIA_CIMA");

    }
}
};

App.init();

var modal = document.getElementById("custom-modal");
var btn = document.getElementById("custom-btn");
var span = document.getElementById("custom-close");
var span2 = document.getElementById("custom-close2");

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

var anchoStreams = document.getElementById("Tamaño_streams");

anchoStreams.oninput = function (event) {
    let streams2 = document.getElementById("los-canales");
    streams2.style.maxWidth = event.target.value + "%"
}
