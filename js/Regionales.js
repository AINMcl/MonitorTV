
var size = 6;

///6 = 2 PANTALLAS HORIZONTALMENTE///
///3 = 4 PANTALLAS HORIZONTALMENTE///
///4 = 3 PANTALLAS HORIZONTALMENTE///
var App = {
     channels: {
        //REGIONALES
        'ARICA_ARICA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ARICA | ARICA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARICA_ARICA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ARICA - ARICA TV</div></div></div>'
        },
        'ARICA_CAPPISSIMA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ARICA | CAPPISSIMA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARICA_CAPPISSIMA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ARICA - CAPPISSIMA TV</div></div></div>'
        },
        'TARAPACA_IQUIQUE_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>TARAPACA | IQUIQUE TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/TARAPACA_IQUIQUE_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TARAPACA - IQUIQUE TV</div></div></div>'
        },
        'ANTOFAGASTA_ANTOFAGASTA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ANTOFAGASTA | ANTOFAGASTA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ANTOFAGASTA_ANTOFAGASTA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ANTOFAGASTA - ANTOFAGASTA TV</div></div></div>'
        },
        'ANTOFAGASTA_LRP_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ANTOFAGASTA | LRP TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ANTOFAGASTA_LRP_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ANTOFAGASTA - LRP TV</div></div></div>'
        },
        'ANTOFAGASTA_AM_CANAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ANTOFAGASTA | AM CANAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ANTOFAGASTA_AM_CANAL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ANTOFAGASTA - AM CANAL</div></div></div>'
        },
        'ANTOFAGASTA_TALTAL_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ANTOFAGASTA | TALTAL TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ANTOFAGASTA_TALTAL_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ANTOFAGASTA - TALTAL TV</div></div></div>'
        },
        'ATACAMA_ATACAMA TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ATACAMA | ATACAMA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ATACAMA_ATACAMA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ATACAMA - ATACAMA TV</div></div></div>'
        },
        'ATACAMA_HOLVOET_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ATACAMA | HOLVOET TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ATACAMA_HOLVOET_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ATACAMA - HOLVOET TV</div></div></div>'
        },
        'COQUIMBO_MIRADIO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>COQUIMBO | MI RADIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/COQUIMBO_MIRADIO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">COQUIMBO - MI RADIO TV</div></div></div>'
        },
        'VALPARAISO_VALPARAISO_QUINTA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>VALPARAISO | QUINTA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/VALPARAISO_QUINTA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VALPARAISO - QUINTA TV</div></div></div>'
        },
        'VALPARAISO_VALPARAISO_VTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>VALPARAISO | VTV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/VALPARAISO_VTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VALPARAISO - VTV</div></div></div>'
        },
        'METROPOLITANA_STGO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>RM | STGO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/METROPOLITANA_STGO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RM - STGO TV</div></div></div>'
        },
        'OHIGGINS_TELECANAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>OHIGGINS | TELECANAL STA. CRUZ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/OHIGGINS_TELECANAL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">OHIGGINS - TELECANAL STA. CRUZ</div></div></div>'
        },
        'MAULE_CAMPUS_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAULE | CAMPUS UTALCA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_CAMPUS_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MAULE - CAMPUS UTALCA TV</div></div></div>'
        },
        'MAULE_TELECANAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAULE | TELECANAL TALCA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_TELECANAL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MAULE - TELECANAL TALCA</div></div></div>'
        },
        'MAULE_CONTIVISION': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAULE | CONTIVISION',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_CONTIVISION.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MAULE - CONTIVISION</div></div></div>'
        },
        'MAULE_TV5_LINARES': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAULE | TV5 LINARES',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_TV5LINARES.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MAULE - TV5 LINARES</div></div></div>'
        },
        'MAULE_TV_MAULESUR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAULE | TV MAULE SUR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_TVMAULESUR.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MAULE - TV MAULE SUR</div></div></div>'
        },
        'MAULE_UTV_SANCLEMENTE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAULE | UTV SANCLEMENTE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_UTVSANCLEMENTE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MAULE - UTV SANCLEMENTE</div></div></div>'
        },
        'BIOBIO_CANAL9_BIOBIO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>BIOBIO | CANAL 9 BIOBIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/BIOBIO_CANAL9BIOBIOTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BIOBIO - CANAL 9 BIOBIO TV</div></div></div>'
        },
        'BIOBIO_TVU': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>BIOBIO | TVU',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/BIOBIO_TVU.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BIOBIO - TVU</div></div></div>'
        },
        'BIOBIO_TV8': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>BIOBIO | TV8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/BIOBIO_TV8.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BIOBIO - TV8</div></div></div>'
        },
        'BIOBIO_ENERGIA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>BIOBIO | ENERGIA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/BIOBIO_ENERGIATV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BIOBIO - ENERGIA TV</div></div></div>'
        },
        'ARAUCANIA_TEMUCO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ARAUCANIA | TEMUCO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARAUCANIA_TEMUCO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ARAUCANIA - TEMUCO TV</div></div></div>'
        },
        'ARAUCANIA_LTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ARAUCANIA | LTV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARAUCANIA_LTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ARAUCANIA - LTV</div></div></div>'
        },
        'ARAUCANIA_PUCON_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ARAUCANIA | PUCON TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARAUCANIA_PUCONTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ARAUCANIA - PUCON TV</div></div></div>'
        },
        'ARAUCANIA_TELEANGOL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ARAUCANIA | TELEANGOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARAUCANIA_TELEANGOL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ARAUCANIA - TELEANGOL</div></div></div>'
        },
        'LOS_LAGOS_OSORNO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>LOS LAGOS | OSORNO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_OSORNO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">LOS LAGOS - OSORNO TV</div></div></div>'
        },
        'LOS_LAGOS_TVINET': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>LOS LAGOS | TV INET',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_TVINET.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">LOS LAGOS - TV INET</div></div></div>'
        },
        'LOS_LAGOS_CANAL5_PTO_MONTT': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>LOS LAGOS | CANAL 5 PUERTO MONTT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_CANAL5_PTOMONTT.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">LOS LAGOS - CANAL 5 PUERTO MONTT</div></div></div>'
        },
        'LOS_LAGOS_DECIMA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>LOS LAGOS | DECIMA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_DECIMA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">LOS LAGOS - DECIMA TV</div></div></div>'
        },
        'LOS_LAGOS_CANAL2_QUELLON': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>LOS LAGOS | CANAL 2 QUELLON',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_CANAL2_QUELLON.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">LOS LAGOS - CANAL 2 QUELLON</div></div></div>'
        },
        'AYSEN_ROCCO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>AYSEN | ROCCO TV COYHAIQUE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/AYSEN_ROCCOTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">AYSEN - ROCCO TV</div></div></div>'
        },
        'AYSEN_SANTAMARIA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>AYSEN | SANTA MARIA TV COYHAIQUE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/AYSEN_SANTAMARIA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">AYSEN - SANTA MARIA TV</div></div></div>'
        },
        'AYSEN_CANAL11_AYSEN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>AYSEN | CANAL 11 PUERTO AYSEN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/AYSEN_CANAL11.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">AYSEN - CANAL 11</div></div></div>'
        },
        'AYSEN_AYSEN TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>AYSEN | AYSEN TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/AYSEN_AYSENTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">AYSEN - AYSEN TV</div></div></div>'
        },
        'MAGALLANES_ITV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAGALLANES | ITV PATAGONIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAGALLANES_ITV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MAGALLANES - ITV PATAGONIA</div></div></div>'
        },
        'MAGALLANES_PINGUINO TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAGALLANES | PINGUINO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAGALLANES_PINGUINO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MAGALLANES - PINGUINO TV</div></div></div>'
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
        App.add("24HTVN");
        App.add("MEGANOTICIAS");

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