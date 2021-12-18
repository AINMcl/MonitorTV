
var size = 12;

///6 = 2 PANTALLAS HORIZONTALMENTE///
///3 = 4 PANTALLAS HORIZONTALMENTE///
///4 = 3 PANTALLAS HORIZONTALMENTE///
var App = {
    channels: {
        'Contador_Inicio_Elecciones_Inicio_2': {
            'nombre': '<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠAPERTURA DE MESAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Contador_1.html" frameborder="0" allowfullscreen></iframe></div>'
        },
        'Contador_Inicio_Elecciones_Cierre_2': {
            'nombre': '<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠCIERRE DE MESAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Contador_2.html" frameborder="0"></iframe></div>'
        },
        'ELECCIONES_YOUTUBE_BORIC': {
            'nombre': '<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg">ﾠ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠGABRIEL BORIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Elecciones_YouTube_Boric.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBORICㅤ</div></div></div>'
        },
        'ELECCIONES_YOUTUBE_KAST': {
            'nombre': '<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg">ﾠ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠJOSE ANTONIO KAST',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Elecciones_YouTube_Kast.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤKASTㅤ</div></div></div>'
        },
        'ELECCIONES_FACEBOOK_BORIC': {
            'nombre': '<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg">ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠGABRIEL BORIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Elecciones_Facebook_Boric.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBORICㅤ</div></div></div>'
        },
        'ELECCIONES_FACEBOOK_KAST': {
            'nombre': '<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg">ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠJOSE ANTONIO KAST',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Elecciones_Facebook_Kast.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤKASTㅤ</div></div></div>'
        },
        'PRESIDENCIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_GOB.svg"></img>ﾠPRESIDENCIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPRESIDENCIA2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPRESIDENCIAㅤ</div></div></div>'
        },
        'SERVEL': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠSERVEL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCB8s6rETjmWgXrp_BxyXqdg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSERVELㅤ</div></div></div>'
        },
        'MEDIABANCO_IFRAME': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠMEDIABANCO LIMPIAﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_WebIframe.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEDIABANCO_IFRAME.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEDIABANCOㅤ</div></div></div>'
        },
        'MEDIABANCO2_IFRAME': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠMEDIABANCOﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_WebIframe.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEDIABANCO_IFRAME_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEDIABANCOㅤ</div></div></div>'
        },
        'MEDIABANCO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠMEDIABANCO LIMPIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEDIABANCO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEDIABANCOㅤ</div></div></div>'
        },
        'MEDIABANCO2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠMEDIABANCO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEDIABANCO2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEDIABANCOㅤ</div></div></div>'
        },
        'MEDIABANCO_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠMEDIABANCOﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_MEDIABANCO_YT.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEDIABANCOㅤ</div></div></div>'
        },
        '24HTVN_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_24HORAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCTXNz3gjAypWp3EhlIATEJQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 24Hㅤ</div></div></div>'
        },
        'CNN_CHILE_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_CNNCHILE2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCpOAcjJNAp0Y0fhznRrXIJQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN CHILEㅤ</div></div></div>'
        },
        'MEGANOTICIAS_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCkccyEbqhhM3uKOI6Shm-4Q&autoplay=true&mute=1" frameborder="0"></iframe><div href="SeñalMEGANOTICIAS.html" class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGANOTICIASㅤㅤ</div></div></div>'
        },
        'CHV_NOTICIAS_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_CHV_NOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRsUoZYC1ULUspipMRnMhwg&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHV NOTICIASㅤ</div></div></div>'
        },
        'T13_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_T13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCsRnhjcUCR78Q3Ud6OXCTNg&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤT13 MOVILㅤ</div></div></div>'
        },
        '24HTVN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_24PLAY.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24HTVN.html" frameborder="0"></iframe><a href="Señal24HTVN.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤ24 PLAYㅤ</div></a></div>'
        },
        'T13_WEB_IFRAME': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_T13_ENVIVO.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_WebIframe.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalT13_ENVIVO_IFRAME_AINM_GITHUB.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤT13ㅤ</div></div></div>'
        },
        'MEGA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEGA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGAㅤ</div></div></div>'
        },
        'CHV_WEB_IFRAME': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_WebIframe.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalCHV_IFRAME.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHVㅤ</div></div></div>'
        },
        'CANAL13_WEB_IFRAME': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Canal13.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_WebIframe.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalCANAL13_IFRAME.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 13ㅤ</div></div></div>'
        },
        'LARED': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_LA_RED.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalLARED.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLA REDㅤ</div></div></div>'
        },
        'TVMAS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVMAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVMAS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV MASㅤ</div></div></div>'
        },
        'UCVTV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_UCVTV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_UCVTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤUCVㅤ</div></div></div>'
        },
        'Señal_Interna_24HTVN_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠSEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24HORAS 1ㅤ</div></div></div>'
        },
        'Señal_Interna_24HTVN_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠSEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24HORAS 2ㅤ</div></div></div>'
        },
        'Señal_Interna_24HTVN_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠSEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24HORAS 3ㅤ</div></div></div>'
        },
        'Señal_Interna_24HTVN_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠSEÑAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_4.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24HORAS 4ㅤ</div></div></div>'
        },
        'Señal_Interna_24HTVN_5': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠSEÑAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_5.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24HORAS 5ㅤ</div></div></div>'
        },
        'DocumentacionTVN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="imagenes/Logo_TVN.svg"></img>ﾠDOCUMENTACION TVN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCeKSSTjG4r-Qvcpjnwgo0VQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDOCUMENTACION TVNㅤ</div></div></div>'
        },
        'Señal_Interna_CNNCHILE_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CNNCHILE2.svg"></img>ﾠSEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInternaCNNCHILE_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNNCHILE 1ㅤ</div></div></div>'
        },
        'BIOBIO_CHILE_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_BIOBIOCHILE.svg"></img>ﾠSEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBIOBIOCHILE_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIOBIO CHILE 1ㅤ</div></div></div>'
        },
        'ADNRADIO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_ADNRADIO.svg"></img>ﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_ADN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤADN RADIOㅤ</div></div></div>'
        },
        'COOPERATIVA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_Radio_Cooperativa.svg"></img>ﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_COOPERATIVA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCOOPERATIVAㅤ</div></div></div>'
        },
        'BIOBIOTV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_BIOBIOCHILE.svg"></img>ﾠBIOBIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_BIOBIOTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIOBIO TVㅤ</div></div></div>'
        },
        'T13RADIO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Tele13RADIO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_T13.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤT13 RADIOㅤ</div></div></div>'
        },
        'INFINITA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠRADIO INFINITA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_INFINITA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO INFINITAㅤ</div></div></div>'
        },
        'LA_CLAVE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠRADIO LA CLAVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_LACLAVE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO LA CLAVEㅤ</div></div></div>'
        },
        'TIEMPO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠRADIO TIEMPO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_TIEMPO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO TIEMPOㅤ</div></div></div>'
        },
        'PUDAHUEL': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠRADIO PUDAHUEL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_PUDAHUEL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO PUDAHUELㅤ</div></div></div>'
        },
        'SeñalRADIO_DUNA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠRADIO DUNA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_DUNA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO DUNAㅤ</div></div></div>'
        },
        'SeñalRADIO_AGRICULTURA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠRADIO AGRICULTURA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_AGRICULTURA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO AGRICULTURAㅤ</div></div></div>'
        },
        'AGENCIA_UNO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠAGENCIA UNO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_AGENCIAUNOTV_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAGENCIA UNOㅤ</div></div></div>'
        },
        'TVN_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCaVaCaiG6qRzDiJDuEGKOhQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVNㅤ</div></div></div>'
        },
        'MEGA_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCEpId-jtRABuZyX6D2z6FZQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGAㅤ</div></div></div>'
        },
        'CHV_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC8EdTmyUaFIfZvVttJ9lgIA&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHVㅤ</div></div></div>'
        },
        'CANAL 13_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_Canal13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCd4D3LfXC_9MY2zSv_3gMgw&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 13ㅤ</div></div></div>'
        },


        'ARICA_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠARICA | ARICA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARICA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤARICA - ARICA TVㅤ</div></div></div>'
        },
        'CAPPISSIMA_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠARICA | CAPPISSIMA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/CAPPISSIMA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤARICA - CAPPISSIMA TVㅤ</div></div></div>'
        },
        'IQUIQUE_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠTARAPACA | IQUIQUE TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/IQUIQUE_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTARAPACA - IQUIQUE TVㅤ</div></div></div>'
        },
        'ANTOFAGASTA_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠANTOFAGASTA | ANTOFAGASTA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ANTOFAGASTA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤANTOFAGASTA - ANTOFAGASTA TVㅤ</div></div></div>'
        },
        'LRP_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠANTOFAGASTA | LRP TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LRP_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤANTOFAGASTA - LRP TVㅤ</div></div></div>'
        },
        'AM_CANAL': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠANTOFAGASTA | AM CANAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/AM_CANAL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤANTOFAGASTA - AM CANALㅤ</div></div></div>'
        },
        'TALTAL_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠANTOFAGASTA | TALTAL TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/TALTAL_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤANTOFAGASTA - TALTAL TVㅤ</div></div></div>'
        },
        'ATACAMA_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠATACAMA | ATACAMA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ATACAMA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤATACAMA - ATACAMA TVㅤ</div></div></div>'
        },
        'MIRADIO_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠCOQUIMBO | MI RADIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MIRADIO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMI RADIO LS - LA SERENAㅤ</div></div></div>'
        },
        'QUINTA_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠVALPARAISO | QUINTA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/QUINTA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVALPARAISO - QUINTA TVㅤ</div></div></div>'
        },
        'STGO_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠRM | STGO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/STGO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRM - STGO TVㅤ</div></div></div>'
        },
        'CAMPUS_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠMAULE | CAMPUS UTALCA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/CAMPUS_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMAULE - CAMPUS TVㅤ</div></div></div>'
        },
        'CONTIVICION': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠMAULE | CONTIVISION',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/CONTIVISION.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMAULE - CONTIVISIONㅤ</div></div></div>'
        },
        'TV5LINARES': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠMAULE | TV5 LINARES',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/TV5LINARES.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMAULE - TV5 LINARESㅤ</div></div></div>'
        },
        'UTVSANCLEMENTE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠMAULE | UTV SAN CLEMENTE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/TV5LINARES.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMAULE - UTV SAN CLEMENTEㅤ</div></div></div>'
        },
        'TVMAULESUR': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠMAULE | TV MAULE SUR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/TVMAULESUR.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMAULE - TV MAULE SURㅤ</div></div></div>'
        },
        'CANAL9BIOBIOTV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠBIOBIO | CANAL 9 BIOBIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/CANAL9BIOBIOTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIOBIO - CANAL 9 BIOBIO TVㅤ</div></div></div>'
        },
        'TVU': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠBIOBIO | TVU',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/TVU.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIOBIO - TVUㅤ</div></div></div>'
        },
        'TV8': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠBIOBIO | TV8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/TV8.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIOBIO - TV8ㅤ</div></div></div>'
        },
        'ENERGIATV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠBIOBIO | ENERGIA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ENERGIATV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIOBIO - ENERGIA TVㅤ</div></div></div>'
        },
        'TEMUCO_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠARAUCANIA | TEMUCO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/TEMUCO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤARAUCANIA - TEMUCO TVㅤ</div></div></div>'
        },
        'LTV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠARAUCANIA | LTV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤARAUCANIA - LTVㅤ</div></div></div>'
        },
        'PUCON_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠARAUCANIA | PUCON TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/PUCONTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤARAUCANIA - PUCON TVㅤ</div></div></div>'
        },
        'OSORNO_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠLOS LAGOS | OSORNO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/OSORNO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLOS LAGOS - OSORNO TVㅤ</div></div></div>'
        },
        'CANAL5_PTOMONTT': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠLOS LAGOS | CANAL 5 PUERTO MONTT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/CANAL5_PTOMONTT.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLOS LAGOS - CANAL 5 PUERTO MONTTㅤ</div></div></div>'
        },
        'DECIMA_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠLOS LAGOS | DECIMA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/DECIMA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLOS LAGOS - DECIMA TVㅤ</div></div></div>'
        },
        'CANAL2_QUELLON': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠLOS LAGOS | CANAL 2 QUELLON',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/CANAL2_QUELLON.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLOS LAGOS - CANAL 2 QUELLONㅤ</div></div></div>'
        },
        'ROCCOTV_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠAYSEN | ROCCO TV COYHAIQUE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ROCCOTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAYSEN - ROCCO TVㅤ</div></div></div>'
        },
        'SANTAMARIA_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠAYSEN | SANTA MARIA TV COYHAIQUE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/SANTAMARIA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAYSEN - SANTA MARIA TVㅤ</div></div></div>'
        },
        'ROCCOTV_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠAYSEN | CANAL 11 PUERTO AYSEN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/CANAL11_AY.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAYSEN - CANAL 11 PTO AYSENㅤ</div></div></div>'
        },
        'ITV_PATAGONIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠMAGALLANES | ITV PATAGONIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ITV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMAGALLANES - ITV PATAGONIAㅤ</div></div></div>'
        },
        'PINGUINO_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠMAGALLANES | PINGUINO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/PINGUINO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMAGALLANES - PINGUINO TVㅤ</div></div></div>'
        },




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
        'OSORNO_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠOSORNO PLAZA ARMAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/Camara_Osorno.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤOSORNO PLAZA ARMASㅤ</div></div></div>'
        },
        'COYHAIQUE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠCOYHAIQUE (Radio)ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_CANALSURPATAGONIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCOYHAIQUEㅤ</div></div></div>'
        },
        'CNN1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠOcasional - CNN 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInternaCNNCHILE_1_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1"></div></div></div>'
        },
        '24H1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠOcasional - TVN 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1"></div></div></div>'
        },
        '24H2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠOcasional - TVN 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1"></div></div></div>'
        },
        '24H3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠOcasional - TVN 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1"></div></div></div>'
        },
        '24H4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠOcasional - TVN 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_4.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1"></div></div></div>'
        },

        
        'RELOJES': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Reloj.svg"></img>ﾠRELOJES CHILE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Reloj_Pantalla_CHILE.html" frameborder="0"></iframe></div>'
        },
        'RELOJES2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Reloj.svg"></img>ﾠRELOJES INTERNACIONAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Reloj_Pantalla_INTERNACIONAL_1.html" frameborder="0"></iframe></div>'
        },
        'RELOJES3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Reloj.svg"></img>ﾠRELOJES INTERNACIONAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Reloj_Pantalla_INTERNACIONAL_2.html" frameborder="0"></iframe></div>'
        },
    },
    add: function (canal) {
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
    remove: function (canal) {
        var findCanal = document.querySelector('div[data-canal="' + canal + '"]');
        var losCanales = document.getElementById("los-canales");
        if (findCanal != null) {
            losCanales.removeChild(findCanal);
            var n = document.querySelector('button[data-canal="' + canal + '"]');
            n.classList.remove("BotonTV_SeñalSeleccionada");
            n.classList.add("BotonTV_Señales");
        }
    },
    isMobile: function () {
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    },

    seedModal: function () {
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

    init: function () {
        App.seedModal();
        App.add("cima");
        if (!App.isMobile()) {
            App.add("MEGANOTICIAS_YT");

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
