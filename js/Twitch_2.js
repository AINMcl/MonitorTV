
var size = 6;

///6 = 2 PANTALLAS HORIZONTALMENTE///
///3 = 4 PANTALLAS HORIZONTALMENTE///
///4 = 3 PANTALLAS HORIZONTALMENTE///
var App = {
     channels: {
        'IBAI_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠIBAI',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=ibai&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤIBAIㅤ</div></div></div>'
        },
        'AURONPLAY_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠAURONPLAY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=auronplay&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAURONPLAYㅤ</div></div></div>'
        },
        'RUBIUS_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠRUBIUS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=rubius&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRUBIUSㅤ</div></div></div>'
        },
        'THEFOCUS_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠTHE FOCUS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=xxxthefocusxxx&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTHE FOCUSㅤ</div></div></div>'
        },
        'juansguarnizo_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠJUAN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=juansguarnizo&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤJUANㅤ</div></div></div>'
        },
        'carola_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠCAROLA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=carola&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCAROLAㅤ</div></div></div>'
        },
        'biyin_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠBIYIN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=biyin_&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIYINㅤ</div></div></div>'
        },
        'axozer_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠAXOZER',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=axozer&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAXOZERㅤ</div></div></div>'
        },
        'deqiuv_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠDEQIUV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=deqiuv&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDEQIUVㅤ</div></div></div>'
        },
        'thegrefg_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠTHE GREF',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=thegrefg&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTHE GREFㅤ</div></div></div>'
        },
        'farganfb_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠFARGAN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=farganfb&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFARGANㅤ</div></div></div>'
        },
        'LUZU_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠLUZU',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=luzu&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLUZUㅤ</div></div></div>'
        },
        'FARGAN_FB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠFARGAN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/farganfb/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFARGANㅤ</div></div></div>'
        },
        'KraoESP': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠKRAO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=kraolives&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤKRAO ESPㅤ</div></div></div>'
        },
        'Rovi': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠROVI',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=byrovi23&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤROVIㅤ</div></div></div>'
        },
        'Rovi_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Chat_1.svg"></img>ﾠROVI',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/byrovi23/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤROVIㅤ</div></div></div>'
        },
        'RDRONE_UY_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠRDRONE UY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=rdroneuy&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRDRONE UYㅤ</div></div></div>'
        },
        'SPACEX_STORM_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠSPACEX STORM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=spacexstorm&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEX STORMㅤ</div></div></div>'
        },
        'COPANO_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠCOPANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=copano&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCOPANOㅤ</div></div></div>'
        },
        'FENIX_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠFENIX',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=fenixreview&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFENIXㅤ</div></div></div>'
        },
        'JACK_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠJACK',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=unjackwallace&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤJACKㅤ</div></div></div>'
        },
        'JACK_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Chat_1.svg"></img>ﾠJACK',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/unjackwallace/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤJACK CHATㅤ</div></div></div>'
        },
        'RDRONE_UY_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Chat_1.svg"></img>ﾠRDRONE UY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/rdroneuy/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRDRONE UYㅤ</div></div></div>'
        },
        'SPACEX_STORM_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Chat_1.svg"></img>ﾠSPACEX STORM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/spacexstorm/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEX STORMㅤ</div></div></div>'
        },
        'COPANO_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Chat_1.svg"></img>ﾠCOPANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/copano/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCOPANO CHATㅤ</div></div></div>'
        },
        'FENIX_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Chat_1.svg"></img>ﾠFENIX',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/fenixreview/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFENIX CHATㅤ</div></div></div>'
        },
        'IBAI_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Chat_1.svg"></img>ﾠIBAI',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/ibai/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤIBAI CHATㅤ</div></div></div>'
        },
        'AURONPLAY_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Chat_1.svg"></img>ﾠAURONPLAY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/auronplay/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAURONPLAY CHATㅤ</div></div></div>'
        },
        'LUZU_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Chat_1.svg"></img>ﾠLUZU',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/luzu/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLUZU CHATㅤ</div></div></div>'
        },
        'Copano_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠCOPANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCoMBIlBDtaxuqUfTLzV6PDQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCOPANOㅤ</div></div></div>'
        },
        'KRAOESP_YouTube': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠKRAO ESP',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCZPR5ypKlxb1W_3RNIfWGKQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤKRAO ESPㅤ</div></div></div>'
        },
        'Rovi23_YouTube': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠROVI23',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCHgleR62IO4SCuDaOLZ4njw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤROVI23ㅤ</div></div></div>'
        },
        'Tecnonauta': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠTECNONAUTA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCFOSg71CRAJ58IPuV_-jMbw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤﾠTECNONAUTAㅤ</div></div></div>'
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
        App.add("AURONPLAY_Twitch");
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
