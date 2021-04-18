
///canales/////////////////////////////////////////////////////////
var size = 6;

///6 = 2 PANTALLAS HORIZONTALMENTE///
///3 = 4 PANTALLAS HORIZONTALMENTE///
///4 = 3 PANTALLAS HORIZONTALMENTE///
var App = {
     channels: {
        
        '24HTVN': {
            'nombre': '24HTVN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Señal24HTVN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">CANAL 24H</div></div></div>'
        },
        'CNN_CHILE': {
            'nombre': 'CNN CHILE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalCNNCHILE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">CNN CHILE</div></div></div>'
        },
        'T13_MOVIL': {
            'nombre': 'T13 MOVIL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalT13MOVIL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">T13 MOVIL</div></div></div>'
        },
        'MEGANOTICIAS': {
            'nombre': 'MEGANOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalMEGANOTICIAS.html" frameborder="0"></iframe><div href="../SeñalMEGANOTICIAS.html" class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">MEGANOTICIAS</div></div></div>'
        },
        'MEGANOTICIAS_1': {
            'nombre': 'Señal Interna MEGANOTICIAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInternaMEGANOTICIAS_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">MEGANOTICIAS 1</div></div></div>'
        },
        'MEGANOTICIAS_2': {
            'nombre': 'Señal Interna MEGANOTICIAS 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInternaMEGANOTICIAS_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">MEGANOTICIAS 2</div></div></div>'
        },
        'MEGANOTICIAS_3': {
            'nombre': 'Señal Interna MEGANOTICIAS 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInternaMEGANOTICIAS_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">MEGANOTICIAS 3</div></div></div>'
        },
        'MEGANOTICIAS_4': {
            'nombre': 'Señal Interna MEGANOTICIAS 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInternaMEGANOTICIAS_4.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">MEGANOTICIAS 4</div></div></div>'
        },
        '24PLAY': {
            'nombre': '24PLAY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Señal24PLAY.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">24PLAY</div></div></div>'
        },
        'ADNRADIO': {
            'nombre': 'ADN RADIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalADNRADIO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ADN RADIO</div></div></div>'
        },
        'LARED': {
            'nombre': 'LA RED',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalLARED.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">LA RED</div></div></div>'
        },
        'TVN': {
            'nombre': 'TVN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalTVN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">TVN</div></div></div>'
        },
        'TVN2': {
            'nombre': 'TVN2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalTVN2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">TVN2</div></div></div>'
        },
        'MEGA': {
            'nombre': 'MEGA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalMEGA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">MEGA</div></div></div>'
        },
        'CHV': {
            'nombre': 'CHV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalCHV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">CHV</div></div></div>'
        },
        'CANAL 13': {
            'nombre': 'CANAL 13',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalCANAL13.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">CANAL 13</div></div></div>'
        },
        'Señal_Interna_24HTVN_1': {
            'nombre': 'Señal Interna 24HTVN 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInterna24H_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SEÑAL 24H 1</div></div></div>'
        },
        'Señal_Interna_24HTVN_2': {
            'nombre': 'Señal Interna 24HTVN 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInterna24H_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SEÑAL 24H 2</div></div></div>'
        },
        'Señal_Interna_24HTVN_3': {
            'nombre': 'Señal Interna 24HTVN 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInterna24H_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SEÑAL 24H 3</div></div></div>'
        },
        'Señal_Interna_24HTVN_4': {
            'nombre': 'Señal Interna 24HTVN 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInterna24H_4.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SEÑAL 24H 4</div></div></div>'
        },
        'Señal_Interna_CNNCHILE_1': {
            'nombre': 'Señal Interna CNN CHILE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInternaCNNCHILE_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SEÑAL CNNCHILE 1</div></div></div>'
        },
        'NASA_TV_PUBLIC': {
            'nombre': 'NASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalNASATVPUBLIC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">NASA TV PUBLIC</div></div></div>'
        },
        'NASA_TV_MEDIA': {
            'nombre': 'NASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalNASATVMEDIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">NASA TV MEDIA</div></div></div>'
        },
        'TN': {
            'nombre': 'TN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalTN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">TN</div></div></div>'
        },
        'PRESIDENCIA': {
            'nombre': 'PRESIDENCIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalPRESIDENCIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">PRESIDENCIA</div></div></div>'
        },
        'MEDIABANCO': {
            'nombre': 'MEDIABANCO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalMEDIABANCO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">MEDIABANCO</div></div></div>'
        },
        'TELEMUNDO': {
            'nombre': 'TELEMUNDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalTELEMUNDONOTICIAS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">TELEMUNDO</div></div></div>'
        },
        'REUTERS': {
            'nombre': 'REUTERS LIVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalREUTERS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">REUTERS</div></div></div>'
        },
        'AFPTVLIVE': {
            'nombre': 'AFP TV LIVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalAFPTV_LIVE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">AFP TV LIVE</div></div></div>'
        },
        
        'RELOJES': {
            'nombre': 'RELOJES',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Reloj_Pantalla.html" frameborder="0"></iframe></div>'
        },
        'ISS_SD': {
            'nombre': 'ISS CAM SD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Señal_ISS_SD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ISS SD</div></div></div>'
        },
        'ISS_HD': {
            'nombre': 'ISS CAM HD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Señal_ISS_HD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ISS HD</div></div></div>'
        },
        'SPACEX': {
            'nombre': 'SPACEX',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCtI0Hodo5o5dUb67FeUjDeA&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX</div></div></div>'
        },
        'BLUE_ORIGIN': {
            'nombre': 'BLUE ORIGIN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCVxTHEKKLxNjGcvVaZindlg&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">BLUE ORIGIN</div></div></div>'
        },
        'RDRONE_UY_YouTube': {
            'nombre': 'RDRONE UY YT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC2BCLTaBqFwyc3CZlkEHg_Q&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">RDRONE UY</div></div></div>'
        },
        'SPACEX_STORM_YouTube': {
            'nombre': 'SPACEX STORM YT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCxjGXSXK3Ss-mkiZ-wYtjtg&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX STORM</div></div></div>'
        },
        'RDRONE_UY_Twitch': {
            'nombre': 'RDRONE UY TWITCH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=rdroneuy&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">RDRONE UY</div></div></div>'
        },
        'SPACEX_STORM_Twitch': {
            'nombre': 'SPACEX STORM TWITCH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=spacexstorm&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX STORM</div></div></div>'
        },
        'tv-senado': {
            'nombre': '🏛️ TV Senado <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://janus-tv.senado.cl/embed.php" frameborder="0"></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://tv.senado.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">🏛️ TV Senado <img src="icons/chile.png"></img></a></div>'
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
    n.classList.remove("btn-outline-secondary");
    n.classList.add("btn-primary");
}
    },
remove: function(canal) {
    var findCanal = document.querySelector('div[data-canal="' + canal + '"]');
    var losCanales = document.getElementById("los-canales");
    if (findCanal != null) {
        losCanales.removeChild(findCanal);
        var n = document.querySelector('button[data-canal="' + canal + '"]');
        n.classList.remove("btn-primary");
        n.classList.add("btn-outline-secondary");
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
        buttonTV.classList.add("btn-outline-secondary");
        buttonTV.setAttribute("data-canal", llave);
        buttonTV.innerHTML = App.channels[llave].nombre;
        let n = document.querySelector(".modal-body");
        n.appendChild(buttonTV);
        buttonTV.addEventListener("click", function () {
            if (buttonTV.getAttribute("class").includes("btn-outline-secondary")) {
                App.add(llave);
            } else if (buttonTV.getAttribute("class").includes("btn-primary")) {
                App.remove(llave);
            }
        })
    };
},

init: function() {
    App.seedModal();
    App.add("cima");
    if (!App.isMobile()) {
        App.add("24HTVN");
        App.add("CNN_CHILE");
        App.add("REUTERS");
        App.add("AFPTVLIVE");
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
/////////////////////////////////////////////////////////
///nombre transmisiones on/off https://www.w3schools.com/jquery/jquery_hide_show.asp/////////
$(document).ready(function(){
    $("BotonTitulos_ON_OFF").click(function(){
        $("TEXTO_BotonIrAHome").toggle();
      });
  });
/////////////////////////////////////////////////////////
