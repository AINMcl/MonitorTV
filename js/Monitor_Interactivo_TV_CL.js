
var size = 4;

///6 = 2 PANTALLAS HORIZONTALMENTE///
///3 = 4 PANTALLAS HORIZONTALMENTE///
///4 = 3 PANTALLAS HORIZONTALMENTE///
var App = {
     channels: {
        '24HTVN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_24PLAY.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24HTVN.html" frameborder="0"></iframe><a href="Señal24HTVN.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤ24 PLAYㅤ</div></a></div>'
        },
        'CANAL24HTVN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CANAL24H.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCanal24HTVN.html" frameborder="0"></iframe><a href="Señal24HTVN.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCANAL 24 HORASㅤ</div></a></div>'
        },
        'CNN_CHILE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CNNCHILE2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNNCHILE.html" frameborder="0"></iframe><a href="SeñalCNNCHILE.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCNN CHILEㅤ</div></a></div>'
        },
        'MEGANOTICIAS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEGANOTICIAS.html" frameborder="0"></iframe><a href="SeñalMEGANOTICIAS.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤMEGANOTICIASㅤ</div></a></div>'
        },
        'T13_ENVIVO': {
            'nombre': '<img style="height: 25px; width:auto:" src="imagenes/Icono_Aviso_Iframe_Externo.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_T13_ENVIVO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalT13_ENVIVO.html" frameborder="0"></iframe><a href="SeñalT13MOVIL.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤT13ㅤ</div></a></div>'
        },
        'TVN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVNㅤ</div></div></div>'
        },
        'MEGA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEGA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGAㅤ</div></div></div>'
        },
        'TVN_WEB_IFRAME': {
            'nombre': '<img style="height: 25px; width:auto:" src="imagenes/Icono_Aviso_Iframe_Externo.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalTVN_IFRAME.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVNㅤ</div></div></div>'
        },
        'MEGA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEGA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGAㅤ</div></div></div>'
        },
        'CHV_WEB_IFRAME': {
            'nombre': '<img style="height: 25px; width:auto:" src="imagenes/Icono_Aviso_Iframe_Externo.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalCHV_IFRAME.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHVㅤ</div></div></div>'
        },
        'CANAL13_WEB_IFRAME': {
            'nombre': '<img style="height: 25px; width:auto:" src="imagenes/Icono_Aviso_Iframe_Externo.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_Canal13.svg"></img>',
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
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalUCVTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤUCVㅤ</div></div></div>'
        },
        'UCHILE_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_UCHILETV_2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalUCHILETV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤUCHILE TVㅤ</div></div></div>'
        },
        'WAPP_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/LogoTV_WappTV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalWAPPTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤWAPP TVㅤ</div></div></div>'
        },
        'NTV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NTV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNTVㅤ</div></div></div>'
        },
        'TV_CHILE': {
            'nombre': '<img style="height: 25px; width:auto:" src="imagenes/Icono_Aviso_Iframe_Externo.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_TVCHILE.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVCHILE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV CHILEㅤ</div></div></div>'
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
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="imagenes/Logo_Radio_Infinita.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_INFINITA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO INFINITAㅤ</div></div></div>'
        },
        'LA_CLAVE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_RadioLaClave.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_LACLAVE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO LA CLAVEㅤ</div></div></div>'
        },
        'TIEMPO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_RadioTiempo.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_TIEMPO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO TIEMPOㅤ</div></div></div>'
        },
        'PUDAHUEL': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_RadioPudahuel.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_PUDAHUEL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO PUDAHUELㅤ</div></div></div>'
        },
        'SeñalRADIO_DUNA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_RadioDuna.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_DUNA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO DUNAㅤ</div></div></div>'
        },


        'SENADO_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠTV SENADO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalSENADO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSENADO TVㅤ</div></div></div>'
        },
        'DIPUTADOS_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠDIPUTADOS TVﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCDTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS TVㅤ</div></div></div>'
        },
        'PRESIDENCIA': {
            'nombre': '<img style="height: 25px; width:auto:" src="imagenes/Icono_Aviso_Ocasional.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_GOB.svg"></img>ﾠPRESIDENCIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPRESIDENCIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPRESIDENCIAㅤ</div></div></div>'
        },
        'SERVEL': {
            'nombre': '<img style="height: 25px; width:auto:" src="imagenes/Icono_Aviso_Ocasional.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠSERVEL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCB8s6rETjmWgXrp_BxyXqdg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSERVELㅤ</div></div></div>'
        },
        'AGENCIA_UNO': {
            'nombre': '<img style="height: 25px; width:auto:" src="imagenes/Icono_Aviso_Ocasional.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠAGENCIA UNO TVﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalAGENCIAUNOTV_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAGENCIA UNOㅤ</div></div></div>'
        },
        'MEDIABANCO_YT': {
            'nombre': '<img style="height: 25px; width:auto:" src="imagenes/Icono_Aviso_Ocasional.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠMEDIABANCO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEDIABANCO_YT.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEDIABANCOㅤ</div></div></div>'
        },
        '24HTVN_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_24HORAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCTXNz3gjAypWp3EhlIATEJQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 24Hㅤ</div></div></div>'
        },
        'DocumentacionTVN_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="imagenes/Logo_TVN.svg"></img>ﾠDOCUMENTACION TVN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCeKSSTjG4r-Qvcpjnwgo0VQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDOCUMENTACION TVNㅤ</div></div></div>'
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


        '24HTVN_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_24HORAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F24horas.cl%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 24Hㅤ</div></div></div>'
        },
        'CNN_CHILE_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_CNNCHILE2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcnnchile%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN CHILEㅤ</div></div></div>'
        },
        'MEGANOTICIAS_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmeganoticiascl%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div href="SeñalMEGANOTICIAS.html" class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGANOTICIASㅤㅤ</div></div></div>'
        },
        'T13_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_T13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fteletrece%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤT13 MOVILㅤ</div></div></div>'
        },
        'TVN_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftvn.cl%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVNㅤ</div></div></div>'
        },
        'MEGA_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FMEGACL%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGAㅤ</div></div></div>'
        },
        'CHV_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fchilevision%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHVㅤ</div></div></div>'
        },
        'CANAL 13_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_Canal13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Felcanal13%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 13ㅤ</div></div></div>'
        },

        
        'TC_YouTube': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠTRIB. CONSTITUCIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCZaI-1N1oaGb-U8K2VNztjg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOSㅤ</div></div></div>'
        },
        'SENADO_YouTube': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠTV SENADO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC4GJ43VNn4AYfiYa0RBCHQg&autoplay=true&mute=1"frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADOㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠTV DIPUTADOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCYd5k2TyOyOmUJNx0SH17KA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOSㅤ</div></div></div>'
        },

        
        'CONVENCION_CONSTITUCIONAL_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_1.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal1.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal1.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 1ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal2.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal2.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 2ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_3.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal3.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 3ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_4.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal4.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 4ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_5': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_5.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal5.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 5ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_6': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_6.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal6.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 6ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_7': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_7.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal7.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 7ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_8': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_8.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal8.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 8ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_9': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_9.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal9.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 9ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_10': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_10.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal10.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 10ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_11': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_11.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal11.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 11ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_12': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_12.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal12.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 12ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_13': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal13.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 13ㅤ</div></a></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_1': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSEÑAL 1',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRlIWVAxQdAnCl4D4UR9r3Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSEÑAL 1ㅤ</div></div></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_2': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSEÑAL 2',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCXdVTVjJR0O-VbN78Sd89Gg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSEÑAL 2ㅤ</div></div></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_3': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSEÑAL 3',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCrU5uanHGl-cc7ZdLatPDDg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSEÑAL 3ㅤ</div></div></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_4': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSEÑAL 4',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCnRIVAs0Ov_-QYqEVfA2MRQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSEÑAL 4ㅤ</div></div></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_5': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSEÑAL 5',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCSzWo-vzG3F54HJs7e3CXxw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSEÑAL 5ㅤ</div></div></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_6': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSEÑAL 6',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCjj0ghVa8skE1jNq4pQyhrA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSEÑAL 6ㅤ</div></div></div>'
        },
        'TV_SENADO_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSenado_Señal_1.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO - SEÑAL 2ㅤ</div></div></div>'
        },
        'TV_SENADO_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSenado_Señal_2.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO - SEÑAL 2ㅤ</div></div></div>'
        },
        'TV_SENADO_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSenado_Señal_3.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO - SEÑAL 3ㅤ</div></div></div>'
        },
        'TV_SENADO_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSenado_Señal_4.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO - SEÑAL 4ㅤ</div></div></div>'
        },
        'TV_SENADO_5': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSenado_Señal_5.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO - SEÑAL 5ㅤ</div></div></div>'
        },
        'TV_SENADO_6': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSenado_Señal_6.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_6.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO - SEÑAL 6ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_1': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCcULnWuDzgQG9yF0Dv3DIgg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 1ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_3': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCF6KgLfQqQzekn8U1DwVs9g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 3ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_5': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC0QKtI8NpeMObauDylsSUDA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 5ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_6': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCspWzpGflwb6A8PZqWw49CQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 6ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_7': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCyVjDDBZGDywVGrpGBvGEsw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 7ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_8': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCyVjDDBZGDywVGrpGBvGEsw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 8ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_11': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 11',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCYPKjGKq2yLbAnmth5rFZmQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 11ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_12': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 12',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCVOWFY-sgbDglBsfOap9okg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 12ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_13': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 13',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC33MG3YdoQ16a8a3wODh6lw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 13ㅤ</div></div></div>'
        },



        'PoderJudicialTV_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 1ㅤ</div></div></div>'
        },
        'PoderJudicialTV_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 2ㅤ</div></div></div>'
        },
        'PoderJudicialTV_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 3ㅤ</div></div></div>'
        },
        'PoderJudicialTV_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 4ㅤ</div></div></div>'
        },
        'PoderJudicialTV_5': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 5ㅤ</div></div></div>'
        },
        'PoderJudicialTV_6': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_6.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 6ㅤ</div></div></div>'
        },
        'PoderJudicialTV_7': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_7.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 7ㅤ</div></div></div>'
        },
        'PoderJudicialTV_8': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_8.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 8ㅤ</div></div></div>'
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
        //App.add("Señal_Interna_24HTVN_1");
        App.add("TN");
        App.add("CANAL_26_ARG");
        App.add("AMERICA_TV_ARG");
        App.add("A24_ARG");
        App.add("CRONICA_TV");
        App.add("TV_PUBLICA_ARG");

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
