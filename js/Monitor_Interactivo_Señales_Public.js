
var size = 4;
///<span style="margin-left: 10px; color: #39AA1A; margin-right: 3px; font-size: 20px" class="material-icons-round" title="AGREGADO RECIENTEMENTE">auto_awesome</span><span style="color: #39AA1A; font-size: 13px;">NUEVO</span>///
//////
///6 = 2 PANTALLAS HORIZONTALMENTE///
///3 = 4 PANTALLAS HORIZONTALMENTE///
///4 = 3 PANTALLAS HORIZONTALMENTE///
var App = {
     channels: {
        '24HTVN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_24PLAY.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24HTVN.html" frameborder="0"></iframe><a href="Señal24HTVN.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">24 PLAY</div></a></div>'
        },
        'CANAL24HTVN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_CANAL24H.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCanal24HTVN.html" frameborder="0"></iframe><a href="Señal24HTVN.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">CANAL 24 HORAS</div></a></div>'
        },
        'CNN_CHILE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_CNNCHILE2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNNCHILE.html" frameborder="0"></iframe><a href="SeñalCNNCHILE.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">CNN CHILE</div></a></div>'
        },
        'MEGANOTICIAS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_MEGANOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEGANOTICIAS.html" frameborder="0"></iframe><a href="SeñalMEGANOTICIAS.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">MEGANOTICIAS</div></a></div>'
        },
        'CHV_NOTICIAS_PlutoTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_CHV_NOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCHVNOTICIAS_PLUTOTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CHV NOTICIAS</div></div></div>'
        },
        'TELE13': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_T13_ENVIVO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalT13_ENVIVO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">T13</div></div></div>'
        },
        'MEGA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEGA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MEGA</div></div></div>'
        },
        'LARED': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_LA_RED.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalLARED.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">LA RED</div></div></div>'
        },
        'T13_WEB_IFRAME': {
            'nombre': '<span style="margin-right: 10px; color: #0035FF" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_T13_ENVIVO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalT13_ENVIVO_IFRAME.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">T13</div></div></div>'
        },
        'TVN_WEB_IFRAME': {
            'nombre': '<span style="margin-right: 10px; color: #0035FF" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalTVN_IFRAME.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TVN</div></div></div>'
        },
        'CHV_WEB_IFRAME': {
            'nombre': '<span style="margin-right: 10px; color: #0035FF" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_CHV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalCHV_IFRAME.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CHV</div></div></div>'
        },
        'CANAL13_WEB_IFRAME': {
            'nombre': '<span style="margin-right: 10px; color: #0035FF" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_Canal13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalCANAL13_IFRAME.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CANAL 13</div></div></div>'
        },
        'TV+': {
            'nombre': '<span style="margin-right: 10px; color: #0035FF" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVMAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVMAS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TV+</div></div></div>'
        },
        'NTV': {
            'nombre': '<span style="margin-right: 10px; color: #0035FF" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_NTV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalNTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NTV</div></div></div>'
        },
        'UCV_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_UCVTV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalUCVTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">UCV TV</div></div></div>'
        },
        'UCV_TV_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_UCVTV.svg"></img> SEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalUCVTV2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">UCV TV 2</div></div></div>'
        },
        'WAPP_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/LogoTV_WappTV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalWAPPTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">WAPPTV</div></div></div>'
        },
        'U_CHILE_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_UCHILETV_2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalUCHILETV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">U CHILE TV</div></div></div>'
        },
        'CHV_CONTIGO_PlutoTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>CHV CONTIGO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCHVCONTIGO_PLUTOTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CHV CONTIGO</div></div></div>'
        },
        'CANAL_13DEPORTES': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>DEPORTES 13',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCANAL13_DEPORTES.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">DEPORTES 13</div></div></div>'
        },
        'Señal_Interna_24HTVN_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_24HTVN.svg"></img>SEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">24HORAS 1</div></div></div>'
        },
        'Señal_Interna_24HTVN_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_24HTVN.svg"></img>SEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">24HORAS 2</div></div></div>'
        },
        'Señal_Interna_24HTVN_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_24HTVN.svg"></img>SEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">24HORAS 3</div></div></div>'
        },
        'Señal_Interna_24HTVN_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_24HTVN.svg"></img>SEÑAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_4.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">24HORAS 4</div></div></div>'
        },
        'Señal_Interna_24HTVN_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_24HTVN.svg"></img>SEÑAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_5.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">24HORAS 5</div></div></div>'
        },
        'Señal_Interna_CNNCHILE_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_CNNCHILE2.svg"></img>SEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInternaCNNCHILE_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CNNCHILE 1</div></div></div>'
        },
        'CHVEVENTOS': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_CHV.svg"></img>EVENTOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCHV_EVENTOS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CHV EVENTOS</div></div></div>'
        },
        'ZAPPING_TV_MUSIC': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">music_note</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_ZAPPING_TV_MUSIC.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalZAPPINGTV_MUSIC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ZAPPING MUSIC</div></div></div>'
        },
        'REWIND_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">music_note</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_REWIND_TV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalREWINDTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">REWIND TV RADIO</div></div></div>'
        },


        'ADNRADIO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_ADNRADIO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_ADN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ADN RADIO</div></div></div>'
        },
        'COOPERATIVA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_Radio_Cooperativa.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_COOPERATIVA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">COOPERATIVA</div></div></div>'
        },
        'BIOBIOTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_BIOBIOCHILE.svg"></img>BIOBIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_BIOBIOTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BIOBIO TV</div></div></div>'
        },
        'T13_RADIO': {
            'nombre': '<span style="margin-right: 10px; color: #0035FF" class="material-icons">mic</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Tele13RADIO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_T13.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">T13 RADIO</div></div></div>'
        },
        'T13_RADIO_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Tele13RADIO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_T13_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">T13 RADIO</div></div></div>'
        },
        'INFINITA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_Radio_Infinita.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_INFINITA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RADIO INFINITA</div></div></div>'
        },
        'LA_CLAVE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_RadioLaClave.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_LACLAVE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RADIO LA CLAVE</div></div></div>'
        },
        'CNN_CHILE_AUDIO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_CNN.svg"></img>CHILE (AUDIO)',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNNCHILE_Audio.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CNN CHILE AUDIO</div></div></div>'
        },
        'SUBELA_RADIO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>SUBELA RADIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_SUBELA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SUBELA RADIO</div></div></div>'
        },
        'TIEMPO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>RADIO TIEMPO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_TIEMPO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RADIO TIEMPO</div></div></div>'
        },
        'PAUTA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>RADIO PAUTA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_PAUTA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RADIO PAUTA</div></div></div>'
        },
        'PAUTA2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>RADIO PAUTA 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_PAUTA_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RADIO PAUTA 2</div></div></div>'
        },
        'PUDAHUEL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>RADIO PUDAHUEL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_PUDAHUEL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RADIO PUDAHUEL</div></div></div>'
        },
        'SeñalRADIO_DUNA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>RADIO DUNA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_DUNA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RADIO DUNA</div></div></div>'
        },
        'SeñalRADIO_ROMANTICA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>RADIO ROMANTICA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_ROMANTICA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RADIO ROMANTICA</div></div></div>'
        },
        'SeñalRADIO_INICIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>RADIO INICIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_INICIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RADIO INICIA</div></div></div>'
        },


        'RLN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>AYSEN | RADIO LAS NIEVES',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIOLASNIEVES.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RADIO LAS NIEVES</div></div></div>'
        },
        'PANORAMICA_INFORMATIVA': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">mic</span>AYSEN | RADIO PANORAMICA INFORMATIVA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_PANORAMICAINFORMATIVA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RADIO PANORAMICA INFORMATIVA</div></div></div>'
        },
        'GENIAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>AYSEN | RADIO GENIAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_GENIAL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RADIO GENIAL</div></div></div>'
        },
        'CANAL_SUR_PATAGONIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>AYSEN | CANAL SUR PATAGONIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_CANALSURPATAGONIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RADIO CANAL SUR PATAGONIA</div></div></div>'
        },
        'PATAGONIA_RADIO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>LOS LAGOS | PATAGONIA RADIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_PATAGONIA_RADIO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PATAGONIA RADIO</div></div></div>'
        },
        'RADIO_POLAR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>MAGALLANES | RADIO POLAR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_POLAR.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RADIO POLAR</div></div></div>'
        },


        'PRESIDENCIA': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_GOB.svg"></img>PRESIDENCIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPRESIDENCIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PRESIDENCIA</div></div></div>'
        },
        'SENADO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>TV SENADO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalSENADO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TV SENADO</div></div></div>'
        },
        'DIPUTADOS_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>TV DIPUTADOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCDTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TV DIPUTADOS</div></div></div>'
        },
        'SENADO_YouTube': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img>TV SENADO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC4GJ43VNn4AYfiYa0RBCHQg&autoplay=true&mute=1"frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TV SENADO</div></div></div>'
        },
        'DIPUTADOS_YouTube': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img>TV DIPUTADOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCYd5k2TyOyOmUJNx0SH17KA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TV DIPUTADOS</div></div></div>'
        },
        'REUTERS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>REUTERS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalREUTERS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">REUTERS</div></div></div>'
        },
        'REUTERS_WEB': {
            'nombre': '<span style="margin-right: 10px; color: #0035FF" class="material-icons">cell_tower</span>REUTERS WEB',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.reuters.tv/live?nonav=true" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">REUTERS</div></div></div>'
        },
        'TELEMUNDO': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>TELEMUNDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTELEMUNDONOTICIAS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TELEMUNDO</div></div></div>'
        },
        'SeñalVOA_LIVE_01': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_01.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VOA TV LIVE 1</div></div></div>'
        },
        'SeñalVOA_LIVE_02': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_02.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VOA TV LIVE 2</div></div></div>'
        },
        'SeñalVOA_LIVE_03': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_03.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VOA TV LIVE 3</div></div></div>'
        },
        'SeñalVOA_LIVE_04': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_04.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VOA TV LIVE 4</div></div></div>'
        },
        'SeñalVOA_LIVE_05': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_05.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VOA TV LIVE 5</div></div></div>'
        },
        'SeñalVOA_LIVE_06': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_06.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VOA TV LIVE 6</div></div></div>'
        },
        'SeñalVOA_LIVE_07': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_07.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VOA TV LIVE 7</div></div></div>'
        },
        'SeñalVOA_LIVE_08': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_08.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VOA TV LIVE 8</div></div></div>'
        },
        'SeñalVOA_LIVE_09': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 9',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_09.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VOA TV LIVE 9</div></div></div>'
        },
        'SeñalVOA_LIVE_10': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 10',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_10.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VOA TV LIVE 10</div></div></div>'
        },
        'SeñalVOA_LIVE_11': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 11',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_11.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VOA TV LIVE 11</div></div></div>'
        },
        'SeñalVOA_LIVE_12': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 12',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_12.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VOA TV LIVE 12</div></div></div>'
        },
        'SeñalVOA_LIVE_13': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 13',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_13.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VOA TV LIVE 13</div></div></div>'
        },
        'SKY_NEWS_EXTRA_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>SKY NEWS EXTRA 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalSKY_NEWS_EXTRA_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SKY NEWS EXTRA 1</div></div></div>'
        },
        'SKY_NEWS_EXTRA_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>SKY NEWS EXTRA 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalSKY_NEWS_EXTRA_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SKY NEWS EXTRA 2</div></div></div>'
        },
        'SKY_NEWS_EXTRA_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>SKY NEWS EXTRA 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalSKY_NEWS_EXTRA_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SKY NEWS EXTRA 3</div></div></div>'
        },
        'NBC_NEWS_NOW_EVENT_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>NBC NEWS LIVE EVENT 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNBC_LIVE_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NBC NEWS LIVE EVENT 1</div></div></div>'
        },
        'NBC_NEWS_NOW_EVENT_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>NBC NEWS LIVE EVENT 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNBC_LIVE_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NBC NEWS LIVE EVENT 2</div></div></div>'
        },
        'NBC_NEWS_NOW_EVENT_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>NBC NEWS LIVE EVENT 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNBC_LIVE_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NBC NEWS LIVE EVENT 3</div></div></div>'
        },
        'NBC_NEWS_NOW_EVENT_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>NBC NEWS LIVE EVENT 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNBC_LIVE_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NBC NEWS LIVE EVENT 4</div></div></div>'
        },
        'CBSNEWS_LIVE_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CBS NEWS LIVE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCBSNEWS_LIVE_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CBS NEWS LIVE 1</div></div></div>'
        },
        'CBSNEWS_LIVE_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CBS NEWS LIVE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCBSNEWS_LIVE_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CBS NEWS LIVE 2</div></div></div>'
        },
        'CBSNEWS_LIVE_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CBS NEWS LIVE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCBSNEWS_LIVE_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CBS NEWS LIVE 3</div></div></div>'
        },
        'ABCNEWS_LIVE_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 1</div></div></div>'
        },
        'ABCNEWS_LIVE_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 2</div></div></div>'
        },
        'ABCNEWS_LIVE_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 3</div></div></div>'
        },
        'ABCNEWS_LIVE_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 4</div></div></div>'
        },
        'ABCNEWS_LIVE_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 5</div></div></div>'
        },
        'ABCNEWS_LIVE_6': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_6.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 6</div></div></div>'
        },
        'ABCNEWS_LIVE_7': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_7.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 7</div></div></div>'
        },
        'ABCNEWS_LIVE_8': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_8.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 8</div></div></div>'
        },
        'ABCNEWS_LIVE_9': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 9',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_9.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 9</div></div></div>'
        },
        'ABCNEWS_LIVE_10': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 10',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_10.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 10</div></div></div>'
        },
        'BBC_NEWS_LIVE_1': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>BBC NEWS LIVE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBBCNEWS_LIVE_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 1</div></div></div>'
        },
        'BBC_NEWS_LIVE_2': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>BBC NEWS LIVE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBBCNEWS_LIVE_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 2</div></div></div>'
        },
        'BBC_NEWS_LIVE_3': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>BBC NEWS LIVE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBBCNEWS_LIVE_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 3</div></div></div>'
        },
        'BBC_NEWS_LIVE_4': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>BBC NEWS LIVE 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBBCNEWS_LIVE_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 4</div></div></div>'
        },
        'BBC_NEWS_LIVE_5': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>BBC NEWS LIVE 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBBCNEWS_LIVE_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 5</div></div></div>'
        },
        'BBC_NEWS_LIVE_6': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>BBC NEWS LIVE 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBBCNEWS_LIVE_6.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 6</div></div></div>'
        },
        'BBC_NEWS_LIVE_7': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>BBC NEWS LIVE 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBBCNEWS_LIVE_7.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 7</div></div></div>'
        },
        'BBC_NEWS_LIVE_8': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>BBC NEWS LIVE 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBBCNEWS_LIVE_8.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 8</div></div></div>'
        },
        'BBC_NEWS_LIVE_9': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>BBC NEWS LIVE 9',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBBCNEWS_LIVE_9.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 9</div></div></div>'
        },
        'CNN_LIVE_EVENT_1': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>CNN LIVE EVENT 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_LIVE_EVENT_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CNN LIVE EVENT 1</div></div></div>'
        },
        'CNN_LIVE_EVENT_2': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>CNN LIVE EVENT 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_LIVE_EVENT_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CNN LIVE EVENT 2</div></div></div>'
        },
        'CNN_LIVE_EVENT_3': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>CNN LIVE EVENT 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_LIVE_EVENT_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CNN LIVE EVENT 3</div></div></div>'
        },
        'CNN_LIVE_EVENT_4': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>CNN LIVE EVENT 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_LIVE_EVENT_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CNN LIVE EVENT 4</div></div></div>'
        },
        'CNN_LIVE_EVENT_5': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>CNN LIVE EVENT 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_LIVE_EVENT_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CNN LIVE EVENT 5</div></div></div>'
        },
        'MAS_24_RTVE_SEÑAL_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>+24 RTVE SEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24H_TVE_OCASIONAL_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">+24 RTVE SEÑAL 1</div></div></div>'
        },
        'MAS_24_RTVE_SEÑAL_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>+24 RTVE SEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24H_TVE_OCASIONAL_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">+24 RTVE SEÑAL 2</div></div></div>'
        },
        'MAS_24_RTVE_SEÑAL_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>+24 RTVE SEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24H_TVE_OCASIONAL_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">+24 RTVE SEÑAL 3</div></div></div>'
        },
        'MAS_24_RTVE_SEÑAL_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>+24 RTVE SEÑAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24H_TVE_OCASIONAL_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">+24 RTVE SEÑAL 4</div></div></div>'
        },
        'MAS_24_RTVE_SEÑAL_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>+24 RTVE SEÑAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24H_TVE_OCASIONAL_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">+24 RTVE SEÑAL 5</div></div></div>'
        },
        'RTVE_LIVE_OCASIONAL_1': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>RTVE LIVE OCASIONAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRTVEOCASIONAL_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RTVE LIVE OCASIONAL 1</div></div></div>'
        },
        'RTVE_LIVE_OCASIONAL_2': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>RTVE LIVE OCASIONAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRTVEOCASIONAL_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RTVE LIVE OCASIONAL 2</div></div></div>'
        },
        'RTVE_LIVE_OCASIONAL_3': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>RTVE LIVE OCASIONAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRTVEOCASIONAL_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RTVE LIVE OCASIONAL 3</div></div></div>'
        },
        'RTVE_LIVE_OCASIONAL_4': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>RTVE LIVE OCASIONAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRTVEOCASIONAL_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RTVE LIVE OCASIONAL 4</div></div></div>'
        },
        'RTVE_LIVE_OCASIONAL_5': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>RTVE LIVE OCASIONAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRTVEOCASIONAL_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RTVE LIVE OCASIONAL 5</div></div></div>'
        },
        'RTVE_LIVE_OCASIONAL_6': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>RTVE LIVE OCASIONAL 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRTVEOCASIONAL_6.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RTVE LIVE OCASIONAL 6</div></div></div>'
        },
        'CCTV+1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CCTV+ 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCCTVPLUS_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CCTV+ 1</div></div></div>'
        },
        'CCTV+2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CCTV+ 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCCTVPLUS_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CCTV+ 2</div></div></div>'
        },
        //SEÑALES PRESIDENCIA
        'PRESIDENCIA_CHILE': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">language</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>PRESIDENCIA CHILE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC_5Sh9VhJlgCspl4mLM2duw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PRESIDENCIA CHILE</div></div></div>'
        },
        'PRESIDENCIA_ARGENTINA': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">language</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>PRESIDENCIA ARGENTINA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCXOIosipLXV0p_35MjTu0Aw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PRESIDENCIA ARGENTINA</div></div></div>'
        },
        'PRESIDENCIA_ECUADOR': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">language</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ec.svg" title="ECUADOR"></img>PRESIDENCIA ECUADOR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCn2XiuAROvRcqscSI2Ni-6A&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PRESIDENCIA ECUADOR</div></div></div>'
        },
        'PRESIDENCIA_BRASIL': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">language</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/br.svg" title="BRASIL"></img>PRESIDENCIA BRASIL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCjjYaSHsZSUNTSwUV8OfOrA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PRESIDENCIA BRASIL</div></div></div>'
        },
        //SEÑALES NOTICIAS LIMPIO YOUTUBE
        
        
        //CANALES NOTICIAS
        'TN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>TN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TN</div></div></div>'
        },
        'CANAL_26_ARG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>CANAL 26',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCANAL_26_ARG.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CANAL 26</div></div></div>'
        },
        'ABCTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/py.svg" title="PARAGUAY"></img>ABC TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ABC TV</div></div></div>'
        },
        'TRECE_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/py.svg" title="PARAGUAY"></img>TRECE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPY_TRECE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TRECE</div></div></div>'
        },
        'C9N_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/py.svg" title="PARAGUAY"></img>C9N',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPY_C9N.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">C9N</div></div></div>'
        },
        'ATV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>ATV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalATV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ATV</div></div></div>'
        },
        'ATV+': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>ATV PLUS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalATVPLUS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ATV PLUS</div></div></div>'
        },
        'TVPERUINTERNACIONAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>TVPERU INTERNACIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVPERU_INTERNACIONAL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TVPERU INTERNACIONAL</div></div></div>'
        },
        'PANAMERICANATV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>PANAMERICANA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPANAMERICANATV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PANAMERICANA TV</div></div></div>'
        },
        'WILLAX_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>WILLAX TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalWILLAXTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">WILLAX TV</div></div></div>'
        },
        'ONDADIGITALTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>ONDA DIGITAL TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalONDADIGITALTV_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ONDA DIGITAL TV</div></div></div>'
        },
        'BOLIVIA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/bo.svg" title="BOLIVIA"></img>BOLIVIA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBOLIVIA_TV_72.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BOLIVIA TV</div></div></div>'
        },
        'CADENA_A': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/bo.svg" title="BOLIVIA"></img>CADENA A',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCADENA_A.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CADENA A</div></div></div>'
        },
        'RTP': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/bo.svg" title="BOLIVIA"></img>RTP',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRTP.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RTP</div></div></div>'
        },
        'PAT': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/bo.svg" title="BOLIVIA"></img>PAT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPAT_BOLIVIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PAT</div></div></div>'
        },
        'CANAL_13_COLOMBIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/co.svg" title="COLOMBIA"></img>CANAL 13',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCANAL13_COLOMBIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CANAL 13</div></div></div>'
        },
        'ATN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/co.svg" title="COLOMBIA"></img>ATN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalATN_TV_COLOMBIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ATN</div></div></div>'
        },
        'TELEPACIFICO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/co.svg" title="COLOMBIA"></img>TELEPACIFICO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTELEPACIFICO_COLOMBIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TELEPACIFICO</div></div></div>'
        },
        'CITY_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/co.svg" title="COLOMBIA"></img>CITY TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCITY_TV_COLOMBIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CITY TV</div></div></div>'
        },
        'CABLENOTICIAS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/co.svg" title="COLOMBIA"></img>CABLENOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCABLENOTICIAS_COLOMBIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CABLENOTICIAS</div></div></div>'
        },
        'RED+_NOTICIAS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/co.svg" title="COLOMBIA"></img>RED+ NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRED+NOTICIAS_COLOMBIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RED+ NOTICIAS</div></div></div>'
        },
        'ECUADOR_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ec.svg" title="ECUADOR"></img>ECUADOR TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalECUADOR_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ECUADOR TV</div></div></div>'
        },
        'RTU_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ec.svg" title="ECUADOR"></img>RTU TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRTU_TV_ECUADOR.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RTU TV</div></div></div>'
        },
        'UCSG_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ec.svg" title="ECUADOR"></img>UCSG TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalUCSG_ECUADOR.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">UCSG TV</div></div></div>'
        },
        'TELESUR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ve.svg" title="VENEZUELA"></img>TELESUR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTELESUR.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TELESUR</div></div></div>'
        },
        'TELESUR_ENG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ve.svg" title="VENEZUELA"></img>TELESUR ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTELESUR_ENG.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TELESUR ENGLISH</div></div></div>'
        },
        'VTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ve.svg" title="VENEZUELA"></img>VTV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VTV</div></div></div>'
        },
        'TVes': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ve.svg" title="VENEZUELA"></img>TVes',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVes.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TVes</div></div></div>'
        },
        'N+': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>N+',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNMAS_MEXICO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">N+</div></div></div>'
        },
        'N+_MEDIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>N+ MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNMAS_MEDIA_MEXICO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">N+ MEDIA</div></div></div>'
        },
        'FORO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>FORO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalFOROTV_MEXICO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">FORO TV</div></div></div>'
        },
        'MILENIO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>MILENIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMILENIO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MILENIO TV</div></div></div>'
        },
        'ADN40': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>ADN40',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalADN40.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ADN40</div></div></div>'
        },
        'EURONEWS_ESP': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalEURONEWS_ESPANOL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EURONEWS ESPAÑOL</div></div></div>'
        },
        'EURONEWS_ENG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalEURONEWS_ENGLISH.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EURONEWS ENGLISH</div></div></div>'
        },
        'EURONEWS_RU': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS RUSO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalEURONEWS_RUSO.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EURONEWS RUSO</div></div></div>'
        },
        'EURONEWS_PORT': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS PORTUGUÉS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalEURONEWS_PORTUGUES.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EURONEWS PORTUGUÉS</div></div></div>'
        },
        'EURONEWS_ALB': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ALBANIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalEURONEWS_ALBANIA.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EURONEWS ALBANIA</div></div></div>'
        },
        'EURONEWS_ITA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ITALIANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalEURONEWS_ITALIANO.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EURONEWS ITALIANO</div></div></div>'
        },
        'FRANCE24': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>FRANCE24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalFRANCE24.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">FRANCE24</div></div></div>'
        },
        'FRANCE24_ESP': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>FRANCE24 ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalFRANCE24_ESPANOL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">FRANCE24 ESPAÑOL</div></div></div>'
        },
        'FRANCE24_ENG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>FRANCE24 ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalFRANCE24_ENGLISH.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">FRANCE24 ENGLISH</div></div></div>'
        },
        '24HTVE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>CANAL 24 HORAS TVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24HORASTVE.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">24H TVE</div></div></div>'
        },
        'LA1': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>LA 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVE_LA1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">LA 1</div></div></div>'
        },
        'LA2': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>LA 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVE_LA2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">LA 2</div></div></div>'
        },
        'DW': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/de.svg" title="ALEMANIA"></img>DW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalDW_DEUTSCH.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">DW DEUTSCH</div></div></div>'
        },
        'DWENG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/de.svg" title="ALEMANIA"></img>DW ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalDW_ENGLISH.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">DW ENGLISH</div></div></div>'
        },
        'DWESP': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/de.svg" title="ALEMANIA"></img>DW ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalDW_ESPAÑOL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">DW ESPAÑOL</div></div></div>'
        },
        'RT_ENG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>RT ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRT_ENGLISH.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RT ENGLISH</div></div></div>'
        },
        'RT_ESP': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>RT ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRT_ESPANOL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RT ESPAÑOL</div></div></div>'
        },
        'RT_FR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>RT FRANCE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRT_FRANCE.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RT FRANCE</div></div></div>'
        },
        'RT_ALEMAN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>RT ALEMAN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRT_ALEMAN.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RT ALEMAN</div></div></div>'
        },
        'NHK': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/jp.svg" title="JAPON"></img>NHK WORLD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNHK.html" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NHK WORLD</div></div></div>'
        },
        'NIPPONTV_NEWS_24': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/jp.svg" title="JAPON"></img>NIPPON TV NEWS24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNIPPONTV_NEWS_24.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NIPPON TV NEWS24</div></div></div>'
        },
        'KOREAN_CENTRAL_TV': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/kp.svg" title="KOREA DEL NORTE"></img>KOREAN CENTRAL TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalKOREAN_CENTRAL_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">KOREAN CENTRAL TV</div></div></div>'
        },
        'IRAN_INT': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ir.svg" title="IRÁN"></img>IRAN INTERNATIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalIRAN_INTERNACIONAL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">IRAN INTERNATIONAL</div></div></div>'
        },
        'PRESSTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ir.svg" title="IRÁN"></img>PRESS TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPRESSTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PRESS TV</div></div></div>'
        },
        'HISPANTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ir.svg" title="IRÁN"></img>HISPAN TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalHISPANTV_ESP.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">HISPAN TV</div></div></div>'
        },
        'TRTWORLD': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/tr.svg" title="TÜRKIYE"></img>TRT WORLD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTRTWORLD.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TRT WORLD</div></div></div>'
        },
        'AL_JAZEERA_ENGLISH': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: 20px; margin-right: 10px;" src="https://flagcdn.com/qa.svg" title="CATAR"></img>AL JAZEERA ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalAL_JAZEERA_EN.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">AL JAZEERA ENGLISH</div></div></div>'
        },
        'AL_JAZEERA_ARABIC': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: 20px; margin-right: 10px;" src="https://flagcdn.com/qa.svg" title="CATAR"></img>AL JAZEERA ARABIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalAL_JAZEERA_ARABIC.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">AL JAZEERA ARABIC</div></div></div>'
        },
        'AL_JAZEERA_MUBASHER': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: 20px; margin-right: 10px;" src="https://flagcdn.com/qa.svg" title="CATAR"></img>AL JAZEERA MUBASHER',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalAL_JAZEERA_MUBASHER.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">AL JAZEERA MUBASHER</div></div></div>'
        },
        'SKY_NEWS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>SKY NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalSKY_NEWS.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SKY NEWS</div></div></div>'
        },
        'BBC_NEWS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>BBC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBBCNEWS.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BBC NEWS</div></div></div>'
        },
        'BBC_NEWS_ARABIC': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>BBC NEWS ARABIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBBCNEWS_ARABIC.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BBC NEWS ARABIC</div></div></div>'
        },
        'ABC_NEWS_AUSTRALIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/au.svg" title="AUSTRALIA"></img>ABC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABC_NEWS_AU.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ABC NEWS</div></div></div>'
        },
        'ABC_NEWS_USA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>ABC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABC_NEWS.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ABC NEWS</div></div></div>'
        },
        'NBC_NEWS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>NBC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNBCNEWS.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NBC NEWS</div></div></div>'
        },
        'CBS_NEWS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>CBS NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCBSNEWS.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CBS NEWS</div></div></div>'
        },
        'FOX_NEWS_NOW': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>FOX NEWS NOW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalFOX_NEWS_NOW.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">FOX NEWS NOW</div></div></div>'
        },
        'FOX_NEWS_WEATHER': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>FOX WEATHER',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalFOX_WEATHER.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">FOX NEWS WEATHER</div></div></div>'
        },
        'CNN_INTERNACIONAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>CNN INTERNATIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNNINTERNACIONAL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CNN INTERNATIONAL</div></div></div>'
        },
        'CNN_INDONESIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/id.svg" title="INDONESIA"></img>CNN INDONESIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNNINDONESIA.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CNN INDONESIA</div></div></div>'
        },
        'CNN_PHILIPPINES': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ph.svg" title="FILIPINAS"></img>CNN PHILIPPINES',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_PHILIPPINES.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CNN PHILIPPINES</div></div></div>'
        },

        //NOTICIAS YOUTUBE
        //BRASIL
        'CNN_BRASIL': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/br.svg" title="BRASIL"></img>CNN BRASIL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCvdwhh_fDyWccR42-rReZLw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CNN BRASIL</div></div></div>'
        },
        //AUSTRALIA
        'ABC_NEWS_AU_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/au.svg" title="AUSTRALIA"></img>ABC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCVgO39Bk5sMo66-6o6Spn6Q&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ABC NEWS</div></div></div>'
        },
        //ESTADOS UNIDOS
        'ABC_NEWS_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>ABC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCBi2mrWuNuyYy4gbM6fU18Q&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ABC NEWS</div></div></div>'
        },
        'NBCNEWS_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>NBC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCeY0bbntWzzVIaj2z3QigXg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NBC NEWS</div></div></div>'
        },
        'PBS_NEWSHOUR_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>PBS NEWSHOUR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC6ZFN9Tx6xh-skXCuRHCDpQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PBS NEWSHOUR</div></div></div>'
        },
        'UNIVISION_NOTICIAS_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>UNIVISION NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC32TdiIsh_5X8tKr_9rKQyA&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">UNIVISION NOTICIAS</div></div></div>'
        },
        'TELEMUNDO_NOTICIAS_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>TELEMUNDO NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRwA1NUcUnwsly35ikGhp0A&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TELEMUNDO NOTICIAS</div></div></div>'
        },
        'AL_ROJO_VIVO_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>AL ROJO VIVO (TELEMUNDO)',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCDUxOvbwu1bnyD7AucP0ESw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">AL ROJO VIVO (TELEMUNDO)</div></div></div>'
        },
        'VOA_TV_ESPAÑOL_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>VOA TV ESP',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCJ46VgZgCMLFUvOT671AOJw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VOA TV ESPAÑOL</div></div></div>'
        },
        'REUTERS_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>REUTERS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UChqUTb7kYRX8-EiaN3XFrSQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">REUTERS</div></div></div>'
        },
        //REINO UNIDO
        'SKY_NEWS_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>SKY NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCoMdktPbSTixAyNGwb-UYkQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SKY NEWS</div></div></div>'
        },
        'ITV_NEWS_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>ITV NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCFQgi22Ht00CpaOQLtvZx2A&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ITV NEWS</div></div></div>'
        },
        'BBC_NEWS_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>BBC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC16niRr50-MSBwiO3YDb3RA&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BBC NEWS</div></div></div>'
        },
        'BBC_NEWS_ARABIC_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>BBC NEWS ARABIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCelk6aHijZq-GJBBB9YpReA&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BBC NEWS ARABIC</div></div></div>'
        },
        'BBC_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>BBC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCCj956IF62FbT7Gouszaj9w&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BBC</div></div></div>'
        },
        'THE_SUN_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>THE SUN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCIzXayRP7-P0ANpq-nD-h5g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">THE SUN</div></div></div>'
        },
        'DAILY_MAIL': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>DAILY MAIL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCw3fku0sH3qA3c3pZeJwdAw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">DAILY MAIL</div></div></div>'
        },
        'RoyalChannel_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>THE ROYAL FAMILY CHANNEL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCCvgLV2Ixb8KCemj-UtXZ-g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">THE ROYAL FAMILY CHANNEL</div></div></div>'
        },
        //ALEMANIA
        'DW_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/de.svg" title="ALEMANIA"></img>DW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCknLrEdhRCp1aegoMqRaCZg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">DW</div></div></div>'
        },
        'DWENG_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/de.svg" title="ALEMANIA"></img>DW ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCknLrEdhRCp1aegoMqRaCZg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">DW ENGLISH</div></div></div>'
        },
        'DWESP_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/de.svg" title="ALEMANIA"></img>DW ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCT4Jg8h03dD0iN3Pb5L0PMA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">DW ESPAÑOL</div></div></div>'
        },
        //FRANCIA
        'EURONEWS_ESP_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCyoGb3SMlTlB8CLGVH4c8Rw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EURONEWS ESPAÑOL</div></div></div>'
        },
        'EURONEWS_FR_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS FRANCIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCW2QcKZiU8aUGg4yxCIditg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EURONEWS FRANCIA</div></div></div>'
        },
        'EURONEWS_ENG_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCSrZ3UV4jOidv8ppoVuvW9Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EURONEWS ENGLISH</div></div></div>'
        },
        'EURONEWS_RU_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS RUSO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCFzJjgVicCtFxJ5B0P_ei8A&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EURONEWS RUSO</div></div></div>'
        },
        'EURONEWS_PORT_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS PORTUGUÉS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUmEPYxmnyQDeRUcFkslmQw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EURONEWS PORTUGUÉS</div></div></div>'
        },
        'EURONEWS_ALB_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ALBANIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UChR-A__NS_C5kHDWj3PeAhw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EURONEWS ALBANIA</div></div></div>'
        },
        'EURONEWS_ITA_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ITALIANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC1mX9vuLOYf8fhaXS_KcDRg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EURONEWS ITALIANO</div></div></div>'
        },
        'FRANCE24_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>FRANCE24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCCCPCZNChQdGa9EkATeye4g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">FRANCE24</div></div></div>'
        },
        'FRANCE24_ESP_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>FRANCE24 ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUdOoVWuWmgo1wByzcsyKDQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">FRANCE24 ESPAÑOL</div></div></div>'
        },
        'FRANCE24_ENG_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>FRANCE24 ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCQfwfsi5VrQ8yKZ-UWmAEFg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">FRANCE24 ENGLISH</div></div></div>'
        },
        //ITALIA
        'SKY TG24': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/it.svg" title="ITALIA"></img>SKY TG24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCz6E3lF72mb6uoJ-mOlNo2A&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SKY TG24</div></div></div>'
        },
        //ESPAÑA
        '24HTVE_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>CANAL 24 HORAS TVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC7QZIf0dta-XPXsp9Hv4dTw&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">24H TVE</div></div></div>'
        },
        'AGENCIA_EFE_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>AGENCIA EFE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCvJS-YNyaWyOucx8bGrHVvw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">AGENCIA EFE</div></div></div>'
        },
        'EUROPA_PRESS_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>EUROPA PRESS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCh_chnQ7OJPQ8mZ7vbXFpIQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EUROPA PRESS</div></div></div>'
        },
        'EL_PAIS_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>EL PAIS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCnsvJeZO4RigQ898WdDNoBw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EL PAIS</div></div></div>'
        },
        'MARCA_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>MARCA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCop57Z1sYHrtCyxCpE2z2Bg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MARCA</div></div></div>'
        },
        'LA_VANGUARDIA_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>LA VANGUARDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UClLLRs_mFTsNT5U-DqTYAGg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">LA VANGUARDIA</div></div></div>'
        },
        //ARGENTINA
        'AMERICA_TV_ARG_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>AMERICA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC6NVDkuzY2exMOVFw4i9oHw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">AMERICA TV</div></div></div>'
        },
        'A24_ARG_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>A24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCR9120YBAqMfntqgRTKmkjQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">A24</div></div></div>'
        },
        'IP_ARG_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>IP NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC1bBjOZieJWHbsFA0LwjjJA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">IP NOTICIAS</div></div></div>'
        },
        'TV_PUBLICA_ARG_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>TV PUBLICA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCs231K71Bnu5295_x0MB5Pg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TV PUBLICA</div></div></div>'
        },
        'C5N_ARG_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>C5N',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCFgk2Q2mVO1BklRQhSv6p0w&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">C5N</div></div></div>'
        },
        'LA_NACION_ARG_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>LA NACION',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCba3hpU7EFBSk817y9qZkiA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">LA NACION</div></div></div>'
        },
        'INFOBAE_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>INFOBAE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCvsU0EGXN7Su7MfNqcTGNHg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">INFOBAE</div></div></div>'
        },
        //PERU
        'TVPERU_NOTICIAS_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>TVPERU NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCkZCoc42IipR1ucqJmIehsA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TVPERU NOTICIAS</div></div></div>'
        },
        'ATV_NOTICIAS_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>ATV NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCYG5uXS3xdsoaXIxum1pAEw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ATV NOTICIAS</div></div></div>'
        },
        'EXITOSA_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>RADIO EXITOSA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCbyblOHU12USUbbPL_M7BNg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RADIO EXITOSA</div></div></div>'
        },
        'LATINA_TV_NOTICIAS_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>LATINA NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCpSJ5fGhmAME9Kx2D3ZvN3Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">LATINA NOTICIAS</div></div></div>'
        },
        //COLOMBIA
        'RCN_NOTICIAS': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/co.svg" title="COLOMBIA"></img>NOTICIAS RCN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCnr6pbeXJmkNQJ9PSYle7QQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NOTICIAS RCN</div></div></div>'
        },
        //ECUADOR
        'NOTICIAS_CARACOL': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/co.svg" title="COLOMBIA"></img>NOTICIAS CARACOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC2Xq2PK-got3Rtz9ZJ32hLQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NOTICIAS RCN</div></div></div>'
        },
        //MEXICO
        'FORO_TV_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>FORO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUsm-fannqOY02PNN67C0KA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">FORO TV</div></div></div>'
        },
        'MILENIO_NOTICIAS_YT':{
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>MILENIO NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCFxHplbcoJK9m70c4VyTIxg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MILENIO NOTICIAS</div></div></div>'
        },
        'ADN40_YT':{
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>ADN40',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC7k--FhnJzhPTrbtldMSoQQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ADN40</div></div></div>'
        },
        //EL VATICANO
        'VATICAN NEWS': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/va.svg" title="CIUDAD DEL VATICANO"></img>VATICAN NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC7E-LYc1wivk33iyt5bR5zQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VATICAN NEWS</div></div></div>'
        },
        'VATICAN NEWS ITALIANO': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/va.svg" title="CIUDAD DEL VATICANO"></img>VATICAN NEWS ITALIANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCkwbN2a1L1H6P9rcA7FhAqg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VATICAN NEWS ITALIANO</div></div></div>'
        },
        'VATICAN NEWS ENGLISH': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/va.svg" title="CIUDAD DEL VATICANO"></img>VATICAN NEWS ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCxIsefyl9g9A5SGWA4FvGIA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VATICAN NEWS ENGLISH</div></div></div>'
        },
        'VATICAN NEWS ESPAÑOL': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/va.svg" title="CIUDAD DEL VATICANO"></img>VATICAN NEWS ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCnB5vfb9FMMNTnC6-kAT3fQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VATICAN NEWS ESPAÑOL</div></div></div>'
        },
        //RUSIA
        'RT_YT_2': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>RT<span style="color: #FF0000; margin-right: 3px; font-size: 20px" class="material-icons-round" title="SEÑAL BLOQUEADA POR YOUTUBE">error_outline</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCpwvZwUam-URkxB7g4USKpg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RT</div></div></div>'
        },
        'RT_ENVIVO_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>RT ESPAÑOL<span style="color: #FF0000; margin-right: 3px; font-size: 20px" class="material-icons-round" title="SEÑAL BLOQUEADA POR YOUTUBE">error_outline</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCEIhICHOQOonjE6V0SLdrHQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RT ESPAÑOL</div></div></div>'
        },
        'RUPTLY_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><span style="margin-right: 10px;"><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>RUPTLY</span><span style="color: #FF0000; margin-right: 3px; font-size: 20px" class="material-icons-round" title="SEÑAL BLOQUEADA POR YOUTUBE">error_outline</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC5aeU5hk31cLzq_sAExLVWg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RUPTLY</div></div></div>'
        },
        'SPUTNIK_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><span style="margin-right: 10px;"><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>SPUTNIK</span><span style="color: #FF0000; margin-right: 3px; font-size: 20px" class="material-icons-round" title="SEÑAL BLOQUEADA POR YOUTUBE">error_outline</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCI4lx9retCL7_cBmmceEQ8g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SPUTNIK</div></div></div>'
        },
        //CHINA
        'CCTV+_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cn.svg" title="CHINA"></img>CCTV+',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCmv5DbNpxH8X2eQxJBqEjKQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CCTV+</div></div></div>'
        },
        //CATAR
        'AL_JAZEERA_ENG_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: 25px; margin-right: 10px;" src="https://flagcdn.com/qa.svg" title="CATAR"></img>AL JAZEERA ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCNye-wNBqNL5ZzHSJj3l8Bg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">AL JAZEERA ENGLISH</div></div></div>'
        },
        'AL_JAZEERA_ARABIC_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: 25px; margin-right: 10px;" src="https://flagcdn.com/qa.svg" title="CATAR"></img>AL JAZEERA ARABIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCfiwzLy-8yKzIbsmZTzxDgw&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">AL JAZEERA ARABIC</div></div></div>'
        },
        'AL_JAZEERA_MUBASHER_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: 25px; margin-right: 10px;" src="https://flagcdn.com/qa.svg" title="CATAR"></img>AL JAZEERA MUBASHER',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCCv1Pd24oPErw5S7zJWltnQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">AL JAZEERA MUBASHER</div></div></div>'
        },
        //UCRANIA
        'UCRANIA24_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ua.svg" title="UCRANIA"></img>UCRANIA24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCMp5Buw-6LpbbV9r9Sl_5yg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">UCRANIA24</div></div></div>'
        },
        //CHILE
        'MEDIABANCO_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>MEDIABANCO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEDIABANCO_YT.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MEDIABANCO</div></div></div>'
        },
        'AGENCIA_UNO_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>AGENCIA UNO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalAGENCIAUNOTV_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">AGENCIA UNO TV</div></div></div>'
        },
        'SERVEL_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>SERVEL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCB8s6rETjmWgXrp_BxyXqdg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SERVEL</div></div></div>'
        },
        '24HTVN_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_24HORAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCTXNz3gjAypWp3EhlIATEJQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CANAL 24H</div></div></div>'
        },
        'DocumentacionTVN_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px; color: #FF4900" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_24HTVN.svg"></img><img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVN.svg"></img>DOCUMENTACION TVN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCeKSSTjG4r-Qvcpjnwgo0VQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">DOCUMENTACION TVN</div></div></div>'
        },
        'CNN_CHILE_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_CNNCHILE2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCpOAcjJNAp0Y0fhznRrXIJQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CNN CHILE</div></div></div>'
        },
        'MEGANOTICIAS_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_MEGANOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCkccyEbqhhM3uKOI6Shm-4Q&autoplay=true&mute=1" frameborder="0"></iframe><div href="SeñalMEGANOTICIAS.html" class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MEGANOTICIAS</div></div></div>'
        },
        'CHV_NOTICIAS_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_CHV_NOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRsUoZYC1ULUspipMRnMhwg&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CHV NOTICIAS</div></div></div>'
        },
        'T13_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_T13_ENVIVO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCsRnhjcUCR78Q3Ud6OXCTNg&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">T13 MOVIL</div></div></div>'
        },
        'TVN_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCaVaCaiG6qRzDiJDuEGKOhQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TVN</div></div></div>'
        },
        'MEGA_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCEpId-jtRABuZyX6D2z6FZQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MEGA</div></div></div>'
        },
        'CHV_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_CHV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC8EdTmyUaFIfZvVttJ9lgIA&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CHV</div></div></div>'
        },
        'CANAL 13_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_Canal13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCd4D3LfXC_9MY2zSv_3gMgw&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CANAL 13</div></div></div>'
        },

        '24HTVN_FACEBOOK': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_24HORAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F24horas.cl%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CANAL 24H</div></div></div>'
        },
        'CNN_CHILE_FACEBOOK': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_CNNCHILE2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcnnchile%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CNN CHILE</div></div></div>'
        },
        'MEGANOTICIAS_FACEBOOK': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_MEGANOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmeganoticiascl%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div href="SeñalMEGANOTICIAS.html" class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MEGANOTICIAS</div></div></div>'
        },
        'T13_FACEBOOK': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_T13_ENVIVO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fteletrece%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">T13 MOVIL</div></div></div>'
        },
        'TVN_FACEBOOK': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftvn.cl%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TVN</div></div></div>'
        },
        'MEGA_FACEBOOK': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FMEGACL%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">MEGA</div></div></div>'
        },
        'CHV_FACEBOOK': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_CHV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fchilevision%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CHV</div></div></div>'
        },
        'CANAL 13_FACEBOOK': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_Canal13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Felcanal13%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CANAL 13</div></div></div>'
        },


        'REUTERS_FB': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span>REUTERS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Reuters/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">REUTERS</div></div></div>'
        },
        'TELEMUNDO_FB': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span>TELEMUNDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/NoticiasTelemundo/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TELEMUNDO</div></div></div>'
        },
        'VOA_FB': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOZ DE AMERICA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/VozDeAmerica/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VOA ESP</div></div></div>'
        },
        'RUPTLY_FB': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span>RUPTLY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Ruptly/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RUPTLY</div></div></div>'
        },
        'SPUTNIK_FB': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">cell_tower</span>SPUTNIK',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/SputnikNews/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SPUTNIK</div></div></div>'
        },
        'ADNRADIO_FB': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">mic</span>ADN RADIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/VozDeAmerica/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ADN RADIO</div></div></div>'
        },
        'COOPERATIVA_FB': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">mic</span>COOPERATIVA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Cooperativa/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">COOPERATIVA</div></div></div>'
        },


        //TVN REGIONES
        'TVN_FB_ANTOFAGASTA': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVN.svg"></img>ANTOFAGASTA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/TVNREDANTOFAGASTA/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TVN ANTOFAGASTA</div></div></div>'
        },
        'TVN_FB_COQUIMBO': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVN.svg"></img>COQUIMBO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/redcoquimbotvn/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TVN COQUIMBO</div></div></div>'
        },
        'TVN_FB_VALPARAISO': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVN.svg"></img>VALPARAISO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Tvn-Red-Valparaíso-1051261168227502/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TVN VALPARAISO</div></div></div>'
        },
        'TVN_FB_OHIGGINS': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVN.svg"></img>OHIGGINS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/tvnohiggins/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TVN OHIGGINS</div></div></div>'
        },
        'TVN_FB_MAULE': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVN.svg"></img>MAULE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/TVNRedMaule/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TVN MAULE</div></div></div>'
        },
        'TVN_FB_BIOBIO': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVN.svg"></img>BIOBIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/tvnredbiobio/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TVN BIOBIO</div></div></div>'
        },
        'TVN_FB_ARAUCANIA': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVN.svg"></img>ARAUCANIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/tvnredaraucaniaoficial/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TVN ARAUCANIA</div></div></div>'
        },
        'TVN_FB_AUSTRAL': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVN.svg"></img>AUSTRAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/redaustral/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TVN AUSTRAL</div></div></div>'
        },

        
        'TC_YouTube': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>TRIB. CONSTITUCIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCZaI-1N1oaGb-U8K2VNztjg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TRIB. CONSTITUCIONAL</div></div></div>'
        },

        //TV SENADO
        'TV_SENADO_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVSenado_Señal_1.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TV SENADO - SEÑAL 2</div></div></div>'
        },
        'TV_SENADO_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVSenado_Señal_2.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TV SENADO - SEÑAL 2</div></div></div>'
        },
        'TV_SENADO_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVSenado_Señal_3.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TV SENADO - SEÑAL 3</div></div></div>'
        },
        'TV_SENADO_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVSenado_Señal_4.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TV SENADO - SEÑAL 4</div></div></div>'
        },
        'TV_SENADO_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVSenado_Señal_5.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TV SENADO - SEÑAL 5</div></div></div>'
        },
        'TV_SENADO_6': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_TVSenado_Señal_6.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_6.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TV SENADO - SEÑAL 6</div></div></div>'
        },

        //CAMARA DE DIPUTADOS TV
        'CAMARA_DIPUTADOS SEÑAL_YT_1': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCcULnWuDzgQG9yF0Dv3DIgg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 1</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_2': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCt6ZTZoyFaCrMHURyjQ3PxA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 2</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_3': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCF6KgLfQqQzekn8U1DwVs9g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 3</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_5': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC0QKtI8NpeMObauDylsSUDA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 5</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_6': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCspWzpGflwb6A8PZqWw49CQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 6</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_7': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCyVjDDBZGDywVGrpGBvGEsw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 7</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_8': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCyVjDDBZGDywVGrpGBvGEsw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 8</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_9': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 9',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCgLlv-wIHnE_68RRSYRj8ZQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 9</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_10': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 10',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCJlJ6Q6ZV2InsE6fZWfJ9_g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 10</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_11': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 11',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCYPKjGKq2yLbAnmth5rFZmQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 11</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_12': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 12',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCVOWFY-sgbDglBsfOap9okg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 12</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_13': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 13',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC33MG3YdoQ16a8a3wODh6lw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 13</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_14': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 14',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUG6xs0GZ-t8IL3RUSWDSOQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 14</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_15': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 15',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC8VmxlxvDhkrG6g0GnA5ksA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 15</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_16': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 16',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCZz97rh70D0WSSjYSfTl-2Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 16</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_17': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 17',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCzkd-4oNNpWFN2zGWoyOz5w&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 17</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_18': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 18',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCNIa8pU-npLY7qm-8NVA3Sg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 18</div></div></div>'
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_20': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CAMARA DIPUTADOS - SEÑAL 20',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCwk-F5PutmZrjZC8eHJ12Pg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 20</div></div></div>'
        },


        //PODER JUDICIAL TV
        'PoderJudicialTV_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 1</div></div></div>'
        },
        'PoderJudicialTV_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 2</div></div></div>'
        },
        'PoderJudicialTV_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 3</div></div></div>'
        },
        'PoderJudicialTV_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 4</div></div></div>'
        },
        'PoderJudicialTV_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 5</div></div></div>'
        },
        'PoderJudicialTV_6': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_6.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 6</div></div></div>'
        },
        'PoderJudicialTV_7': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_7.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 7</div></div></div>'
        },
        'PoderJudicialTV_8': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_8.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 8</div></div></div>'
        },



        
        
        //CAMARAS
        'PARQUEMET_CUMBRE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>STGO. PARQUEMET CUMBRE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMPARQUEMET_CUMBRE_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">STGO. PARQUEMET CUMBRE</div></div></div>'
        },
        'PARQUEMET_TERRAZA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>STGO. PARQUEMET TERRAZA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMPARQUEMET_TERRAZA_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">STGO. PARQUEMET TERRAZA</div></div></div>'
        },
        'PLAZAITALIA_CIMA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>STGO. PLAZA ITALIA<span style="margin-left: 3px; font-size: 12px;">(GALERIA CIMA)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_PLAZA_ITALIA_CIMA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">STGO. PLAZA ITALIA</div></div></div>'
        },
        'STGO_SUR_ORIENTE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>STGO. SUR ORIENTE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCMvQGOyumsXP4V7dGAdIKWg&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">STGO. SUR ORIENTE</div></div></div>'
        //},
        //'LEDRIUM_CERRILLOS': {
        //    'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>CERRILLOS<span style="margin-left: 3px; font-size: 12px;">(LEDRIUM)</span>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_LEDRIUM_CERRILLOS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CERRILLOS</div></div></div>'
        },
        'LEDRIUM_PENALOLEN_NORTE': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>PEÑALOLEN NORTE<span style="margin-left: 3px; font-size: 12px;">(LEDRIUM)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_LEDRIUM_PENALOLEN_NORTE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PEÑALOLEN NORTE</div></div></div>'
        },
        'LEDRIUM_PENALOLEN_SUR': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>PEÑALOLEN SUR<span style="margin-left: 3px; font-size: 12px;">(LEDRIUM)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_LEDRIUM_PENALOLEN_SUR.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PEÑALOLEN SUR</div></div></div>'
        },
        'LEDRIUM_C_CENTER': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>COSTANERA CENTER<span style="margin-left: 3px; font-size: 12px;">(LEDRIUM)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_LEDRIUM_COSTANERA_CENTER.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">COSTANERA CENTER</div></div></div>'
        },
        'LEDRIUM_FARELLONES': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>FARELLONES<span style="margin-left: 3px; font-size: 12px;">(LEDRIUM)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_LEDRIUM_FARELLONES.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">FARELLONES</div></div></div>'
        },
        'LEDRIUM_PROVIDENCIA': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>PROVIDENCIA<span style="margin-left: 3px; font-size: 12px;">(LEDRIUM)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_LEDRIUM_PROVIDENCIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">PROVIDENCIA</div></div></div>'
        },
        'LEDRIUM_TOBALABA': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>TOBALABA<span style="margin-left: 3px; font-size: 12px;">(LEDRIUM)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_LEDRIUM_TOBALABA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">TOBALABA</div></div></div>'
        },
        'LEDRIUM_CAM_MAS_RECIENTE': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>STGO. LEDRIUM<span style="margin-left: 3px; font-size: 12px;">(MAS RECIENTE)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCDMqTaUZsY3ElB4xWpO8tFA&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">STGO. LEDRIUM</div></div></div>'
        },
        'VALPARAISO_BAHIA': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>VALPARAISO BAHIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_VALPARAISO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VALPARAISO BAHIA</div></div></div>'
        },
        'VALPARAISO_CIUDAD': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>VALPARAISO CIUDAD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCXaQjESu5cdF1CGH1aAA52Q&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VALPARAISO CIUDAD</div></div></div>'
        },
        'V_DEL_MAR': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>VIÑA DEL MAR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCLir6Xg0TVDGccruOZp8jaQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">VIÑA DEL MAR</div></div></div>'
        },
        'OSORNO_1': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>OSORNO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCbOdujzxdR-D-o1jKLr96CA&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">OSORNO</div></div></div>'
        },
        'COYHAIQUE': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>COYHAIQUE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_CANALSURPATAGONIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">COYHAIQUE</div></div></div>'
        },
        'CAPITOLIO_EEUU_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>CAPITOLIO EEUU',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_CAPITOLIO_EEUU.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CAPITOLIO EEUU</div></div></div>'
        },
        'NYC_Brooklyn_Bridge': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>NYC BROOKLYN BRIDGE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KGuCGd726RA?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/KGuCGd726RA" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">NYC BROOKLYN BRIDGE</div></a></div>'
        },
        'Lower_Manhattan_New_York_Harbor': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>NYC LOWER MANHATTAN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Vj0XKu6AoOw?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/Vj0XKu6AoOw" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">NYC LOWER MANHATTAN & NEW YORK HARBOR</div></a></div>'
        },
        'Times_Square_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>TIMES SQUARE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/AdUw5RdyZxI?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/AdUw5RdyZxI" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">TIMES SQUARE</div></a></div>'
        },
        'Times_Square_2_DUFFY_SQUARE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>TIMES SQUARE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/mNawBricEYw?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/mNawBricEYw" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">TIMES SQUARE: DUFFY SQUARE</div></a></div>'
        },
        'Times_Square_3_EXPRESS_VIEW': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>TIMES SQUARE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6dtpPYTQaSQ?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/OBmXqlPxtAQ" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">TIMES SQUARE: EXPRESS VIEW</div></a></div>'
        },
        'Times_Square_4_1560_BROADWAY': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>TIMES SQUARE 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Hb-jD7q6Tqw?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/4qyZLflp-sI" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">TIMES SQUARE: 1540 BROADWAY</div></a></div>'
        },
        'Four_Seasons_Hotel_Buenos_Aires': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>FOUR SEASONS HOTEL BS.As',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/if91GyWP3zQ?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/if91GyWP3zQ" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">FOUR SEASONS HOTEL BUENOS AIRES</div></a></div>'
        },
        'Ushuaia': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>USHUAIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_USHUAIA.html" frameborder="0"></iframe><a href="" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">USHUAIA</div></a></div>'
        },
        'Tokio_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/jp.svg" title="JAPON"></img>TOKYO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QOjmvL3e7Lc?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/QOjmvL3e7Lc" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">TOKYO</div></a></div>'
        },



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


        //SISMOS
        'EARLY_EST_DETEC': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_ALOMAX.svg"></img>DETECTOR SISMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="MonitorEARLY-EST_DETECTOR.html" frameborder="0" scrolling="no"></iframe></div>'
        },
        'EARLY_EST_SIS': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_ALOMAX.svg"></img>ULTIMOS SISMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="MonitorEARLY-EST_SISMOS.html" frameborder="0"></iframe></div>'
        },

        //ESPACIO
        'NASA_TV_PUBLIC': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_NASA.svg"></img>NASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATVPUBLIC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NASA TV PUBLIC</div></div></div>'
        },
        'NASA_TV_MEDIA': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_NASA.svg"></img>NASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATVMEDIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NASA TV MEDIA</div></div></div>'
        },
        'ISS_SD': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_NASA.svg"></img>ISS CAM SD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalISS_SD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ISS SD</div></div></div>'
        },
        'ISS_HD': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_NASA.svg"></img>ISS CAM HD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalISS_HD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ISS HD</div></div></div>'
        },
        'ISS_TRACKER': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Ubicacion.svg"></img><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_ESA.svg"></img>ISS TRACKER MAP 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS_ESA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ISS TRACKER</div></div></div>'
        },
        'ISS_TRACKER_2': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Ubicacion.svg"></img>ISS TRACKER MAP 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ISS TRACKER</div></div></div>'
        },
        'ISS_TRACKER_3': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Ubicacion.svg"></img>ISS TRACKER MAP 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS_2_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ISS TRACKER</div></div></div>'
        },
        'ISS_TRACKER_4': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Icono_Ubicacion.svg"></img>ISS TRACKER MAP 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ISS TRACKER</div></div></div>'
        },
        'NASA_Wallops': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_NASA.svg"></img>NASA WALLOPS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_Wallops.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NASA WALLOPS</div></div></div>'
        },
        'NASA_VIDEO': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_NASA.svg"></img>NASA VIDEO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC_aP7p621ATY_yAa8jMqUVA&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NASA TV PUBLIC</div></div></div>'
        },
        'NASA_TV_PUBLIC2': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_NASA.svg"></img>NASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_PUBLIC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NASA TV PUBLIC</div></div></div>'
        },
        'NASA_TV_MEDIA2': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_NASA.svg"></img>NASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_MEDIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NASA TV MEDIA</div></div></div>'
        },
        'ISS_SD2': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_NASA.svg"></img>ISS CAM SD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_ISSSD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ISS SD</div></div></div>'
        },
        'ISS_HD2': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_NASA.svg"></img>ISS CAM HD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_ISSHD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ISS HD</div></div></div>'
        },
        'ESA_1': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_ESA.svg"></img>ESA WEB TV 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalESATV_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ESA WEB TV 1</div></div></div>'
        },
        'ROSCOSMOS': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_ROSCOSMOS.svg"></img>ROSCOSMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCOcpUgXosMCIlOsreUfNFiA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ISS TRACKER</div></div></div>'
        },
        'NASA_YT_PUBLIC': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_NASA.svg"></img>NASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_PUBLIC_YOUTUBE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NASA TV PUBLIC</div></div></div>'
        },
        'NASA_YT_MEDIA': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_NASA.svg"></img>NASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_MEDIA_YOUTUBE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NASA TV MEDIA</div></div></div>'
        },
        'NASA_YT_KSC': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><img style="height: 20px; width: auto; margin-right: 10px;" src="imagenes/Logo_NASA.svg"></img>KENNEDY SPACE CENTER',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_KSC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NASA KENNEDY SPACE CENTER</div></div></div>'
        },
        'SPACEX': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>SPACEX',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCtI0Hodo5o5dUb67FeUjDeA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SPACEX</div></div></div>'
        },
        'BLUE_ORIGIN': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>BLUE ORIGIN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCVxTHEKKLxNjGcvVaZindlg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">BLUE ORIGIN</div></div></div>'
        },
        'ULA': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>ULA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCnrGPRKAg1PgvuSHrRIl3jg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ULA</div></div></div>'
        }, 
        'ARIANESPACE': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>ARIANESPACE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRn9F2D9j-t4A-HgudM7aLQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ARIANESPACE</div></div></div>'
        },
        'Rocket_Lab': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>ROCKET LAB',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCsWq7LZaizhIi-c-Yo_bcpw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SPACEX</div></div></div>'
        }, 
        'Virgin_Galactic': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>VIRGIN GALACTIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UClcvOr7LV8tlJwJvkNMmnKg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">Virgin Galactic</div></div></div>'
        },
        'CGTN': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CGTN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCgrNz-aDmcr2uuto8_DL2jg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CGTN</div></div></div>'
        },
        'RDRONE_UY_YouTube': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>RDRONE UY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC2BCLTaBqFwyc3CZlkEHg_Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RDRONE UY</div></div></div>'
        },
        'SPACEX_STORM_YouTube': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>SPACEX STORM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCxjGXSXK3Ss-mkiZ-wYtjtg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SPACEX STORM</div></div></div>'
        },
        'NASASpaceflight': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>NASASpaceflight ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCSUu1lih2RifWkKtDOJdsBA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NASA Spaceflight</div></div></div>'
        },
        'EverydayAstronaut': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>EVERYDAY ASTRONAUT ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC6uKrU_WqJ1R2HMTY3LIx5Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">EVERY ASTRONAUT</div></div></div>'
        },
        'FronteraEspacial': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>FRONTERA ESPACIAL ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCurxSOUxQszWp-5juh48wmg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">FRONTERA ESPACIAL</div></div></div>'
        },
        'ConexionEspacial': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>CONEXION ESPACIAL ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCS6DjxV3L8XdnGa70ZxS_FA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">CONEXION ESPACIAL</div></div></div>'
        }, 
        '321LAUNCH_CAM': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>321LAUNCH CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUccOGcvTNrJuihXhYsrp7w&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">321LAUNCH CAM</div></div></div>'
        },
        'Spaceflight Now': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>SPACEFLIGHT NOW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCoLdERT4-TJ82PJOHSrsZLQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SPACEFLIGHT NOW</div></div></div>'
        }, 
        'ComoSapiens': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>COSMOSAPIENS ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC3ZODI-xZfdPanPP6tKUg9g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">COSMOSAPIENS</div></div></div>'
        }, 
        'InfiniteSpace': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>INFINITE SPACE ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCn8SmzG1xXx_inu-XADxcMg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">INFINITE SPACE</div></div></div>'
        },
        'SpaceXMissions': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>SPACEX MISSIONS ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCE_z1X3v8ZdBNHn9IFHBfNw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SPACEX MISSIONS</div></div></div>'
        },
        'OceanCam': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>OCEAN CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCF8IYFF60clbbznjvJ7qoTQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">OCEAN CAM</div></div></div>'
        }, 
        'LabPadre_LabCam': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>LAB CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/LabCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">LAB CAM</div></div></div>'
        }, 
        'LabPadre_RoverCam': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>ROVER CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/RoverCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ROVER CAM</div></div></div>'
        }, 
        'LabPadre_NerdleCam4K': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>Nerdle Cam 4K',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/NerdleCam4K.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">NERDLE CAM</div></div></div>'
        }, 
        'LabPadre_SapphireCam': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>SAPPHIRE CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/SapphireCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SAPPHIRE CAM</div></div></div>'
        }, 
        'LabPadre_SentinelCam': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>SENTINEL CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/SentinelCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SENTINEL CAM</div></div></div>'
        },
        'RDRONE_UY_Twitch': {
            'nombre': '<img style="height: 20px; width:auto; margin-right: 10px;" src="imagenes/Logo_Twitch.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>RDRONE UY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=rdroneuy&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">RDRONE UY</div></div></div>'
        },
        'SPACEX_STORM_Twitch': {
            'nombre': '<img style="height: 20px; width:auto; margin-right: 10px;" src="imagenes/Logo_Twitch.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>SPACEX STORM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=spacexstorm&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">SPACEX STORM</div></div></div>'
        },
        'COPANO_Twitch': {
            'nombre': '<img style="height: 20px; width:auto; margin-right: 10px;" src="imagenes/Logo_Twitch.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>COPANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=copano&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">COPANO</div></div></div>'
        },
        'Copano_YT': {
            'nombre': '<img style="height: 15px; width: auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img>COPANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCoMBIlBDtaxuqUfTLzV6PDQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">COPANO</div></div></div>'
        },
        'Barras_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>BARRAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <img class="embed-responsive-item" src="imagenes/SinSeñal.png" frameborder="0"></img></div>'
        },
        'Barras_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>BARRAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <img class="embed-responsive-item" src="imagenes/SinSeñal.png" frameborder="0"></img></div>'
        },
        'Barras_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>BARRAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <img class="embed-responsive-item" src="imagenes/SinSeñal.png" frameborder="0"></img></div>'
        },
        'RELOJES': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">schedule</span>RELOJES CHILE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Reloj_Pantalla_CHILE.html" frameborder="0"></iframe></div>'
        },
        'RELOJES2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">schedule</span>RELOJES INTERNACIONAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Reloj_Pantalla_INTERNACIONAL_1.html" frameborder="0"></iframe></div>'
        },
        'RELOJES3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">schedule</span>RELOJES INTERNACIONAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Reloj_Pantalla_INTERNACIONAL_2.html" frameborder="0"></iframe></div>'
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
        buttonTV.classList.add("waves-effect");
        buttonTV.classList.add("waves-grisclaro");
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
        App.add("TELE13");

        App.add("CHV_WEB_IFRAME");
        App.add("TVN");
        App.add("CANAL13_WEB_IFRAME");
        
        
        
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
