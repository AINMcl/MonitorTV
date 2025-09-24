
var size = 4;
//////
///6 = 2 PANTALLAS HORIZONTALMENTE///
///3 = 4 PANTALLAS HORIZONTALMENTE///
///4 = 3 PANTALLAS HORIZONTALMENTE///
var App = {
     channels: {
        '24HTVN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoAzul">tv</span><img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_CANAL24H.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/24HTVN_IFRAME.html" frameborder="0"></iframe><a href="Señal24HTVN_IFRAME.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">24 PLAY</div></a></div>',
            'tags': ['Chile','Noticias'],
        },
        'CNN_CHILE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_CNNCHILE2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CNNCHILE.html" frameborder="0"></iframe><a href="SeñalCNNCHILE.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">CNN CHILE</div></a></div>',
            'tags': ['Chile','Noticias'],
        },/*
        'MEGANOTICIAS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoAzul">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_MEGANOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/MEGANOTICIAS_IFRAME.html" frameborder="0"></iframe><a href="SeñalMEGANOTICIAS_IFRAME.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">MEGANOTICIAS</div></a></div>',
            'tags': ['Chile','Noticias'],
        },*/
        'CHV_NOTICIAS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_CHV_NOTICIAS.svg"></img><span title="AGREGADO RECIENTEMENTE" style="margin-left: 0px;" class="BotonAvisoListaSeñales TextoIconoVerdeClaro"><span style="font-size: 17px" class="material-icons-round">auto_awesome</span><span style="font-size: 12px; margin-left: 5px;">NUEVO</span></span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CHVNOTICIAS.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CHV NOTICIAS</div></div></div>',
            'tags': ['Chile','Noticias'],
        },
        'T13': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_T13_ENVIVO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/T13_ENVIVO.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">T13</div></div></div>',
            'tags': ['Chile','Noticias'],
        },
        'MEGA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/MEGA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">MEGA</div></div></div>',
            'tags': ['Chile'],
        },
        'CANAL13': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_Canal13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CANAL13.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 13</div></div></div>',
            'tags': ['Chile'],
        },
        'LARED': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_LA_RED.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/LARED.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">LA RED</div></div></div>',
            'tags': ['Chile'],
        },
        'TV+': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVMAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TVMAS.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV+</div></div></div>',
            'tags': ['Chile'],
        },
        'CNNCHILE_WEB': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoAzul">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_CNNCHILE2.svg"></img><span style="font-size: 17px" class="material-icons-round">auto_awesome</span><span style="font-size: 12px; margin-left: 5px;">NUEVO</span></span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CNNCHILE_IFRAME.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNN CHILE</div></div></div>',
            'tags': ['Chile','Noticias'],
        },
        'TELE13_WEB': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoAzul">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_T13_ENVIVO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/T13_ENVIVO_IFRAME.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">T13</div></div></div>',
            'tags': ['Chile','Noticias'],
        },
        'CHV_WEB_IFRAME': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoAzul">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_CHV.svg"></img><span title="AGREGADO RECIENTEMENTE" style="margin-left: 0px;" class="BotonAvisoListaSeñales TextoIconoVerdeClaro"><span style="font-size: 17px" class="material-icons-round">auto_awesome</span><span style="font-size: 12px; margin-left: 5px;">NUEVO</span></span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalCHV_IFRAME.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CHV</div></div></div>',
            'tags': ['Chile'],
        },
        'CANAL13_WEB_IFRAME': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoAzul">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_Canal13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalCANAL13_IFRAME.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 13</div></div></div>',
            'tags': ['Chile'],
        },
        'TV CHILE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoAzul">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVCHILE.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TVCHILE.html" frameborder="0" allowfullscreen referrerpolicy="no-referrer"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV CHILE</div></div></div>',
            'tags': ['Chile'],
        },
        'NTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoAzul">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_NTV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NTV.html" frameborder="0" allowfullscreen referrerpolicy="no-referrer"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NTV</div></div></div>',
            'tags': ['Chile'],
        },
        'TVN3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVN3.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TVN3.html" frameborder="0" allowfullscreen referrerpolicy="no-referrer"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVN3</div></div></div>',
            'tags': ['Chile'],
        },
        /*'TVN_IFRAME': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoAzul">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVN.svg"></img><span title="RECOMENDADO USAR BLOQUEADOR DE ANUNCIOS" style="margin-left: 5px;" class="BotonAvisoListaSeñales"><span style="font-size: 20px" class="material-icons-round">security</span><span style="font-size: 12px; margin-left: 5px;">USAR BLOQ. ANUNCIOS</span></span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://ainmcl.github.io/MonitorTV/Monitores/SeñalEXTERNA.html?id=1221" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVN</div></div></div>',
            'tags': ['Chile'],
        },*/
        'UCV_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_UCVTV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/UCVTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">UCV TV</div></div></div>',
            'tags': ['Chile'],
        },
        'UCV_TV_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_UCVTV.svg"></img> SEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/UCVTV2.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">UCV TV 2</div></div></div>',
            'tags': ['Chile'],
        },
        'WAPP_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/LogoTV_WappTV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WAPPTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">WAPPTV</div></div></div>',
            'tags': ['Chile'],
        },
        'U_CHILE_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_UCHILETV_2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/UCHILETV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">U CHILE TV</div></div></div>',
            'tags': ['Chile'],
        },
        'EmolTV_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>EMOL TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/EMOLTV_1.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EMOL TV</div></div></div>',
            'tags': ['Chile','Noticias'],
        },
        'EmolTV_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>EMOL TV 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/EMOLTV_2.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EMOL TV 2</div></div></div>',
            'tags': ['Chile','Noticias'],
        },
        'Señal_Ocasional_24HTVN_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span><img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_24H_Solo.svg"></img>SEÑAL OCASIONAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/Interna24H_1.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">24HORAS 1</div></div></div>',
            'tags': ['Chile','Ocasional'],
        },
        'Señal_Ocasional_24HTVN_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span><img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_24H_Solo.svg"></img>SEÑAL OCASIONAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/Interna24H_2.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">24HORAS 2</div></div></div>',
            'tags': ['Chile','Ocasional'],
        },
        'Señal_Ocasional_24HTVN_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_24H_Solo.svg"></img>SEÑAL OCASIONAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/Interna24H_3.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">24HORAS 3</div></div></div>',
            'tags': ['Chile','Ocasional'],
        },
        'Señal_Ocasional_24HTVN_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_24H_Solo.svg"></img>SEÑAL OCASIONAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/Interna24H_4.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">24HORAS 4</div></div></div>',
            'tags': ['Chile','Ocasional'],
        },
        'Señal_Ocasional_24HTVN_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_24H_Solo.svg"></img>SEÑAL OCASIONAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/Interna24H_5.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">24HORAS 5</div></div></div>',
            'tags': ['Chile','Ocasional'],
        },
        'Señal_Ocasional_Meganoticias_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoAzul">cell_tower</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_MEGANOTICIAS2.svg"></img>SEÑAL OCASIONAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/InternaMEGANOTICIAS_IFRAME_1.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">MEGANOTICIAS 1</div></div></div>',
            'tags': ['Chile','Ocasional'],
        },
        'Señal_Ocasional_Meganoticias_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoAzul">cell_tower</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_MEGANOTICIAS2.svg"></img>SEÑAL OCASIONAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/InternaMEGANOTICIAS_IFRAME_2.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">MEGANOTICIAS 2</div></div></div>',
            'tags': ['Chile','Ocasional'],
        },
        'Señal_Ocasional_Meganoticias_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoAzul">cell_tower</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_MEGANOTICIAS2.svg"></img>SEÑAL OCASIONAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/InternaMEGANOTICIAS_IFRAME_3.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">MEGANOTICIAS 3</div></div></div>',
            'tags': ['Chile','Ocasional'],
        },
        'Señal_Ocasional_Meganoticias_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoAzul">cell_tower</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_MEGANOTICIAS2.svg"></img>SEÑAL OCASIONAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/InternaMEGANOTICIAS_IFRAME_4.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">MEGANOTICIAS 4</div></div></div>',
            'tags': ['Chile','Ocasional'],
        },
        'Señal_Ocasional_CNNCHILE_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_CNNCHILE2.svg"></img>SEÑAL OCASIONAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/InternaCNNCHILE_1.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNNCHILE 1</div></div></div>',
            'tags': ['Chile','Ocasional'],
        },
        'Señal_Ocasional_CHV_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_CHV.svg"></img>SEÑAL OCASIONAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CHV_EVENTOS.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CHV EVENTOS</div></div></div>',
            'tags': ['Chile','Ocasional'],
        },
        'Señal_Ocasional_Canal13_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_Canal13.svg"></img>SEÑAL OCASIONAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/InternaCANAL13_1.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 13 LIVE 1</div></div></div>',
            'tags': ['Chile','Ocasional'],
        },
        'ZAPPING_TV_MUSIC': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">music_note</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_ZAPPING_TV_MUSIC.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ZAPPINGTV_MUSIC.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ZAPPING MUSIC</div></div></div>',
            'tags': ['Chile','Musica'],
        },
        'REWIND_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">music_note</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_REWIND_TV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/REWINDTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">REWIND TV RADIO</div></div></div>',
            'tags': ['Chile','Musica'],
        },


        'ADNRADIO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">mic</span>ADN RADIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_ADN.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ADN RADIO</div></div></div>',
            'tags': ['Chile','Radio'],
        },
        'COOPERATIVA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">mic</span>RADIO COOPERATIVA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_COOPERATIVA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">COOPERATIVA</div></div></div>',
            'tags': ['Chile','Radio'],
        },
        'BIOBIOTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">mic</span>RADIO BIOBIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_BIOBIOTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BIOBIO TV</div></div></div>',
            'tags': ['Chile','Radio'],
        },
        'T13_RADIO_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">mic</span>TELE13 RADIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_T13_2.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">T13 RADIO</div></div></div>',
            'tags': ['Chile','Radio'],
        },
        'INFINITA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">mic</span>RADIO INFINITA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_INFINITA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RADIO INFINITA</div></div></div>',
            'tags': ['Chile','Radio'],
        },
        'LA_CLAVE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">mic</span>RADIO LA CLAVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_LACLAVE.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RADIO LA CLAVE</div></div></div>',
            'tags': ['Chile','Radio'],
        },
        'CNN_CHILE_AUDIO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">mic</span>CNN CHILE (AUDIO)',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CNNCHILE_Audio.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNN CHILE AUDIO</div></div></div>',
            'tags': ['Chile','Radio'],
        },
        'SUBELA_RADIO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">mic</span>SUBELA RADIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_SUBELA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SUBELA RADIO</div></div></div>',
            'tags': ['Chile','Radio'],
        },
        'TIEMPO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">mic</span>RADIO TIEMPO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_TIEMPO.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RADIO TIEMPO</div></div></div>',
            'tags': ['Chile','Radio'],
        },
        'PAUTA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">mic</span>RADIO PAUTA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_PAUTA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RADIO PAUTA</div></div></div>',
            'tags': ['Chile','Radio'],
        },
        'PAUTA2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">mic</span>RADIO PAUTA 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_PAUTA_2.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RADIO PAUTA 2</div></div></div>',
            'tags': ['Chile','Radio'],
        },
        'PUDAHUEL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">mic</span>RADIO PUDAHUEL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_PUDAHUEL.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RADIO PUDAHUEL</div></div></div>',
            'tags': ['Chile','Radio'],
        },
        'SeñalRADIO_DUNA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">mic</span>RADIO DUNA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_DUNA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RADIO DUNA</div></div></div>',
            'tags': ['Chile','Radio'],
        },
        'SeñalRADIO_ROMANTICA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">mic</span>RADIO ROMANTICA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_ROMANTICA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RADIO ROMANTICA</div></div></div>',
            'tags': ['Chile','Radio'],
        },

        'PRESIDENCIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span><img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_GOB.svg"></img>PRESIDENCIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PRESIDENCIA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PRESIDENCIA</div></div></div>',
            'tags': ['Chile','Politica'],
        },
        'SENADO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>TV SENADO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/SENADO_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV SENADO</div></div></div>',
            'tags': ['Chile','Politica'],
        },
        'DIPUTADOS_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>TV DIPUTADOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CDTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV DIPUTADOS</div></div></div>',
            'tags': ['Chile','Politica'],
        },
        'TV_DIPUTADOS_PRENSA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>TV DIPUTADOS PRENSA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TV_DIPUTADOS_PRENSA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV DIPUTADOS PRENSA</div></div></div>',
            'tags': ['Chile','Politica'],
        },
        'SENADO_YouTube': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img>TV SENADO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC4GJ43VNn4AYfiYa0RBCHQg&autoplay=true&mute=1"frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV SENADO</div></div></div>',
            'tags': ['Chile','Politica'],
        },
        'DIPUTADOS_YouTube': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img>TV DIPUTADOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCYd5k2TyOyOmUJNx0SH17KA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV DIPUTADOS</div></div></div>',
            'tags': ['Chile','Politica'],
        },
        'SeñalVOA_LIVE_01': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>VOA TV LIVE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/VOA_LIVE_01.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VOA TV LIVE 1</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'SeñalVOA_LIVE_02': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>VOA TV LIVE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/VOA_LIVE_02.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VOA TV LIVE 2</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'SeñalVOA_LIVE_03': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>VOA TV LIVE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/VOA_LIVE_03.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VOA TV LIVE 3</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'SeñalVOA_LIVE_04': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>VOA TV LIVE 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/VOA_LIVE_04.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VOA TV LIVE 4</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'SeñalVOA_LIVE_05': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>VOA TV LIVE 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/VOA_LIVE_05.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VOA TV LIVE 5</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'SeñalVOA_LIVE_06': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>VOA TV LIVE 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/VOA_LIVE_06.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VOA TV LIVE 6</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'SeñalVOA_LIVE_07': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>VOA TV LIVE 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/VOA_LIVE_07.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VOA TV LIVE 7</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'SeñalVOA_LIVE_08': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>VOA TV LIVE 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/VOA_LIVE_08.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VOA TV LIVE 8</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'SeñalVOA_LIVE_09': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>VOA TV LIVE 9',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/VOA_LIVE_09.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VOA TV LIVE 9</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'SeñalVOA_LIVE_10': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>VOA TV LIVE 10',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/VOA_LIVE_10.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VOA TV LIVE 10</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'SeñalVOA_LIVE_11': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>VOA TV LIVE 11',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/VOA_LIVE_11.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VOA TV LIVE 11</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'SeñalVOA_LIVE_12': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>VOA TV LIVE 12',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/VOA_LIVE_12.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VOA TV LIVE 12</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'SeñalVOA_LIVE_13': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>VOA TV LIVE 13',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/VOA_LIVE_13.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VOA TV LIVE 13</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'SKY_NEWS_EXTRA_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>SKY NEWS EXTRA 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/SKY_NEWS_EXTRA_1.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SKY NEWS EXTRA 1</div></div></div>',
            'tags': ['Reino Unido','Video News'],
        },
        'SKY_NEWS_EXTRA_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>SKY NEWS EXTRA 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/SKY_NEWS_EXTRA_2.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SKY NEWS EXTRA 2</div></div></div>',
            'tags': ['Reino Unido','Video News'],
        },
        'SKY_NEWS_EXTRA_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>SKY NEWS EXTRA 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/SKY_NEWS_EXTRA_3.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SKY NEWS EXTRA 3</div></div></div>',
            'tags': ['Reino Unido','Video News'],
        },
        'NBC_NEWS_NOW_EVENT_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>NBC NEWS LIVE EVENT 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NBC_LIVE_1.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NBC NEWS LIVE EVENT 1</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'NBC_NEWS_NOW_EVENT_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>NBC NEWS LIVE EVENT 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NBC_LIVE_2.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NBC NEWS LIVE EVENT 2</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'NBC_NEWS_NOW_EVENT_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>NBC NEWS LIVE EVENT 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NBC_LIVE_3.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NBC NEWS LIVE EVENT 3</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'NBC_NEWS_NOW_EVENT_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>NBC NEWS LIVE EVENT 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NBC_LIVE_4.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NBC NEWS LIVE EVENT 4</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'CBSNEWS_LIVE_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>CBS NEWS LIVE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CBSNEWS_LIVE_1.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CBS NEWS LIVE 1</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'CBSNEWS_LIVE_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>CBS NEWS LIVE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CBSNEWS_LIVE_2.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CBS NEWS LIVE 2</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'CBSNEWS_LIVE_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>CBS NEWS LIVE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CBSNEWS_LIVE_3.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CBS NEWS LIVE 3</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'ABCNEWS_LIVE_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>ABC NEWS LIVE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ABCNEWS_LIVE_1.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 1</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'ABCNEWS_LIVE_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>ABC NEWS LIVE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ABCNEWS_LIVE_2.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 2</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'ABCNEWS_LIVE_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>ABC NEWS LIVE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ABCNEWS_LIVE_3.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 3</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'ABCNEWS_LIVE_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>ABC NEWS LIVE 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ABCNEWS_LIVE_4.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 4</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'ABCNEWS_LIVE_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>ABC NEWS LIVE 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ABCNEWS_LIVE_5.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 5</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'ABCNEWS_LIVE_6': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>ABC NEWS LIVE 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ABCNEWS_LIVE_6.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 6</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'ABCNEWS_LIVE_7': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>ABC NEWS LIVE 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ABCNEWS_LIVE_7.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 7</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'ABCNEWS_LIVE_8': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>ABC NEWS LIVE 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ABCNEWS_LIVE_8.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 8</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'ABCNEWS_LIVE_9': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>ABC NEWS LIVE 9',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ABCNEWS_LIVE_9.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 9</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'ABCNEWS_LIVE_10': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>ABC NEWS LIVE 10',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ABCNEWS_LIVE_10.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ABC NEWS LIVE 10</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'BBC_NEWS_LIVE_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>BBC NEWS LIVE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/BBCNEWS_LIVE_1.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 1</div></div></div>',
            'tags': ['Reino Unido','Video News'],
        },
        'BBC_NEWS_LIVE_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>BBC NEWS LIVE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/BBCNEWS_LIVE_2.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 2</div></div></div>',
            'tags': ['Reino Unido','Video News'],
        },
        'BBC_NEWS_LIVE_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>BBC NEWS LIVE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/BBCNEWS_LIVE_3.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 3</div></div></div>',
            'tags': ['Reino Unido','Video News'],
        },
        'BBC_NEWS_LIVE_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>BBC NEWS LIVE 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/BBCNEWS_LIVE_4.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 4</div></div></div>',
            'tags': ['Reino Unido','Video News'],
        },
        'BBC_NEWS_LIVE_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>BBC NEWS LIVE 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/BBCNEWS_LIVE_5.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 5</div></div></div>',
            'tags': ['Reino Unido','Video News'],
        },
        'BBC_NEWS_LIVE_6': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>BBC NEWS LIVE 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/BBCNEWS_LIVE_6.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 6</div></div></div>',
            'tags': ['Reino Unido','Video News'],
        },
        'BBC_NEWS_LIVE_7': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>BBC NEWS LIVE 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/BBCNEWS_LIVE_7.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 7</div></div></div>',
            'tags': ['Reino Unido','Video News'],
        },
        'BBC_NEWS_LIVE_8': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>BBC NEWS LIVE 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/BBCNEWS_LIVE_8.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 8</div></div></div>',
            'tags': ['Reino Unido','Video News'],
        },
        'BBC_NEWS_LIVE_9': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>BBC NEWS LIVE 9',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/BBCNEWS_LIVE_9.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BBC NEWS LIVE 9</div></div></div>',
            'tags': ['Reino Unido','Video News'],
        },
        'CNN_LIVE_EVENT_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>CNN LIVE EVENT 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CNN_LIVE_EVENT_1.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNN LIVE EVENT 1</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'CNN_LIVE_EVENT_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>CNN LIVE EVENT 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CNN_LIVE_EVENT_2.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNN LIVE EVENT 2</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'CNN_LIVE_EVENT_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>CNN LIVE EVENT 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CNN_LIVE_EVENT_3.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNN LIVE EVENT 3</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'CNN_LIVE_EVENT_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>CNN LIVE EVENT 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CNN_LIVE_EVENT_4.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNN LIVE EVENT 4</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'CNN_LIVE_EVENT_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>CNN LIVE EVENT 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CNN_LIVE_EVENT_5.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNN LIVE EVENT 5</div></div></div>',
            'tags': ['Estados Unidos','Video News'],
        },
        'MAS_24_RTVE_SEÑAL_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>RTVE PLAY OCASIONAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RTVE_PLAY_OCASIONAL_1.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RTVE PLAY OCASIONAL 1</div></div></div>',
            'tags': ['España','Video News','Ocasional'],
        },
        'MAS_24_RTVE_SEÑAL_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>RTVE PLAY OCASIONAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RTVE_PLAY_OCASIONAL_2.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RTVE PLAY OCASIONAL 2</div></div></div>',
            'tags': ['España','Video News','Ocasional'],
        },
        'MAS_24_RTVE_SEÑAL_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>RTVE PLAY OCASIONAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RTVE_PLAY_OCASIONAL_3.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RTVE PLAY OCASIONAL 3</div></div></div>',
            'tags': ['España','Video News','Ocasional'],
        },
        'MAS_24_RTVE_SEÑAL_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>RTVE PLAY OCASIONAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RTVE_PLAY_OCASIONAL_4.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RTVE PLAY OCASIONAL 4</div></div></div>',
            'tags': ['España','Video News','Ocasional'],
        },
        /*
        'RTVE_LIVE_OCASIONAL_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>RTVE LIVE OCASIONAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RTVEOCASIONAL_1.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RTVE LIVE OCASIONAL 1</div></div></div>',
            'tags': ['España','Video News','Ocasional'],
        },
        'RTVE_LIVE_OCASIONAL_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>RTVE LIVE OCASIONAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RTVEOCASIONAL_2.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RTVE LIVE OCASIONAL 2</div></div></div>',
            'tags': ['España','Video News','Ocasional'],
        },
        'RTVE_LIVE_OCASIONAL_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>RTVE LIVE OCASIONAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RTVEOCASIONAL_3.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RTVE LIVE OCASIONAL 3</div></div></div>',
            'tags': ['España','Video News','Ocasional'],
        },
        'RTVE_LIVE_OCASIONAL_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>RTVE LIVE OCASIONAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RTVEOCASIONAL_4.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RTVE LIVE OCASIONAL 4</div></div></div>',
            'tags': ['España','Video News','Ocasional'],
        },
        'RTVE_LIVE_OCASIONAL_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>RTVE LIVE OCASIONAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RTVEOCASIONAL_5.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RTVE LIVE OCASIONAL 5</div></div></div>',
            'tags': ['España','Video News','Ocasional'],
        },
        'RTVE_LIVE_OCASIONAL_6': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">cell_tower</span>RTVE LIVE OCASIONAL 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RTVEOCASIONAL_6.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RTVE LIVE OCASIONAL 6</div></div></div>',
            'tags': ['España','Video News','Ocasional'],
        },*/
        'CCTV+1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>CCTV+ 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CCTVPLUS_1.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CCTV+ 1</div></div></div>',
            'tags': ['China','Video News'],
        },
        'CCTV+2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>CCTV+ 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CCTVPLUS_2.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CCTV+ 2</div></div></div>',
            'tags': ['China','Video News'],
        },
        'CCTV+3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>CCTV+ 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CCTVPLUS_3.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CCTV+ 3</div></div></div>',
            'tags': ['China','Video News'],
        },
        'CCTV+4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>CCTV+ 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CCTVPLUS_4.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CCTV+ 4</div></div></div>',
            'tags': ['China','Video News'],
        },
        
        //PANAM_SPORTS
        /*'PANAM_SPORTS_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">emoji_events</span>PANAM SPORTS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PANAMSPORTS_S1.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PANAM SPORTS 1</div></div></div>',
            'tags': ['SinTag'],
        },
        'PANAM_SPORTS_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">emoji_events</span>PANAM SPORTS 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PANAMSPORTS_S2.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PANAM SPORTS 2</div></div></div>',
            'tags': ['SinTag'],
        },
        'PANAM_SPORTS_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">emoji_events</span>PANAM SPORTS 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PANAMSPORTS_S3.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PANAM SPORTS 3</div></div></div>',
            'tags': ['SinTag'],
        },
        'PANAM_SPORTS_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">emoji_events</span>PANAM SPORTS 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PANAMSPORTS_S4.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PANAM SPORTS 4</div></div></div>',
            'tags': ['SinTag'],
        },
        'PANAM_SPORTS_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">emoji_events</span>PANAM SPORTS 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PANAMSPORTS_S5.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PANAM SPORTS 5</div></div></div>',
            'tags': ['SinTag'],
        },
        'PANAM_SPORTS_6': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">emoji_events</span>PANAM SPORTS 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PANAMSPORTS_S6.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PANAM SPORTS 6</div></div></div>',
            'tags': ['SinTag'],
        },
        'PANAM_SPORTS_7': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">emoji_events</span>PANAM SPORTS 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PANAMSPORTS_S7.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PANAM SPORTS 7</div></div></div>',
            'tags': ['SinTag'],
        },
        'PANAM_SPORTS_8': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">emoji_events</span>PANAM SPORTS 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PANAMSPORTS_S8.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PANAM SPORTS 8</div></div></div>',
            'tags': ['SinTag'],
        },*/

        //SEÑALES PRESIDENCIA
        
        'LA_CASA_BLANCA_LIVE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><span style="margin-right: 10px;" class="material-icons-round">language</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="CHILE"></img>THE WHITE HOUSE LIVE EVENTS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/THEWHITEHOUSE_LIVE_EVENT.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">THE WHITE HOUSE</div></div></div>',
            'tags': ['Estados Unidos','Politica','Ocasional'],
        },
        'PRESIDENCIA_CHILE': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">language</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>PRESIDENCIA CHILE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC_5Sh9VhJlgCspl4mLM2duw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PRESIDENCIA CHILE</div></div></div>',
            'tags': ['Chile','Politica','Ocasional'],
        },
        'PRESIDENCIA_ARGENTINA': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">language</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>PRESIDENCIA ARGENTINA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCXOIosipLXV0p_35MjTu0Aw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PRESIDENCIA ARGENTINA</div></div></div>',
            'tags': ['Argentina','Politica','Ocasional'],
        },
        'PRESIDENCIA_ECUADOR': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">language</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ec.svg" title="ECUADOR"></img>PRESIDENCIA ECUADOR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCn2XiuAROvRcqscSI2Ni-6A&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PRESIDENCIA ECUADOR</div></div></div>',
            'tags': ['Ecuador','Politica','Ocasional'],
        },
        'PRESIDENCIA_BRASIL': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">language</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/br.svg" title="BRASIL"></img>PRESIDENCIA BRASIL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCjjYaSHsZSUNTSwUV8OfOrA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PRESIDENCIA BRASIL</div></div></div>',
            'tags': ['Brasil','Politica','Ocasional'],
        },
        //SEÑALES NOTICIAS LIMPIO YOUTUBE
        
        
        //CANALES NOTICIAS
        'TN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>TN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TN.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TN</div></div></div>',
            'tags': ['Argentina','Noticias'],
        },
        'CANAL_26_ARG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>CANAL 26',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CANAL_26_ARG.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 26</div></div></div>',
            'tags': ['Argentina','Noticias'],
        },
        //PATRAGUAY
        'ABCTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/py.svg" title="PARAGUAY"></img>ABC TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ABCTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ABC TV</div></div></div>',
            'tags': ['Paraguay','Noticias'],
        },
        'TRECE_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/py.svg" title="PARAGUAY"></img>TRECE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PY_TRECE.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TRECE</div></div></div>',
            'tags': ['Paraguay','Noticias'],
        },
        'C9N_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/py.svg" title="PARAGUAY"></img>C9N',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PY_C9N.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">C9N</div></div></div>',
            'tags': ['Paraguay','Noticias'],
        },
        //PERU
        'ATV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>ATV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ATV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ATV</div></div></div>',
            'tags': ['Peru','Noticias'],
        },
        'ATV+': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>ATV PLUS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ATVPLUS.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ATV PLUS</div></div></div>',
            'tags': ['Peru','Noticias'],
        },
        'TVPERUINTERNACIONAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>TVPERU INTERNACIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TVPERU_INTERNACIONAL.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVPERU INTERNACIONAL</div></div></div>',
            'tags': ['Peru','Noticias'],
        },
        'PANAMERICANATV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>PANAMERICANA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PANAMERICANATV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PANAMERICANA TV</div></div></div>',
            'tags': ['Peru','Noticias'],
        },
        'WILLAX_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>WILLAX TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WILLAXTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">WILLAX TV</div></div></div>',
            'tags': ['Peru'],
        },
        'ONDADIGITALTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>ONDA DIGITAL TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ONDADIGITALTV_1.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ONDA DIGITAL TV</div></div></div>',
            'tags': ['Peru'],
        },
        //Bolivia
        'BOLIVIA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/bo.svg" title="BOLIVIA"></img>BOLIVIA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/BOLIVIA_TV_72.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BOLIVIA TV</div></div></div>',
            'tags': ['Bolivia'],
        },
        'CADENA_A': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/bo.svg" title="BOLIVIA"></img>CADENA A',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CADENA_A.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CADENA A</div></div></div>',
            'tags': ['Bolivia'],
        },
        'RTP': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/bo.svg" title="BOLIVIA"></img>RTP',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RTP.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RTP</div></div></div>',
            'tags': ['Bolivia'],
        },
        'PAT': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/bo.svg" title="BOLIVIA"></img>PAT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PAT_BOLIVIA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PAT</div></div></div>',
            'tags': ['Bolivia'],
        },
        //Colombia
        'CANAL_13_COLOMBIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/co.svg" title="COLOMBIA"></img>CANAL 13',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CANAL13_COLOMBIA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 13</div></div></div>',
            'tags': ['Colombia'],
        },
        'ATN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/co.svg" title="COLOMBIA"></img>ATN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ATN_TV_COLOMBIA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ATN</div></div></div>',
            'tags': ['Colombia'],
        },
        'TELEPACIFICO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/co.svg" title="COLOMBIA"></img>TELEPACIFICO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TELEPACIFICO_COLOMBIA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TELEPACIFICO</div></div></div>',
            'tags': ['Colombia'],
        },
        'CABLENOTICIAS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/co.svg" title="COLOMBIA"></img>CABLENOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CABLENOTICIAS_COLOMBIA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CABLENOTICIAS</div></div></div>',
            'tags': ['Colombia'],
        },
        'RED+_NOTICIAS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/co.svg" title="COLOMBIA"></img>RED+ NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RED+NOTICIAS_COLOMBIA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RED+ NOTICIAS</div></div></div>',
            'tags': ['Colombia'],
        },
        //Ecuador
        'ECUADOR_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ec.svg" title="ECUADOR"></img>ECUADOR TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ECUADOR_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ECUADOR TV</div></div></div>',
            'tags': ['Ecuador'],
        },
        'RTU_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ec.svg" title="ECUADOR"></img>RTU TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RTU_TV_ECUADOR.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RTU TV</div></div></div>',
            'tags': ['Ecuador'],
        },
        'UCSG_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ec.svg" title="ECUADOR"></img>UCSG TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/UCSG_ECUADOR.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">UCSG TV</div></div></div>',
            'tags': ['Ecuador'],
        },
        //Guatemala
        'CANAL3_GUATEMALA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gt.svg" title="GUATEMALA"></img>CANAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CANAL3_GUATEMALA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 3</div></div></div>',
            'tags': ['Guatemala'],
        },
        'CANAL7_GUATEMALA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gt.svg" title="GUATEMALA"></img>CANAL 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CANAL7_GUATEMALA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 7</div></div></div>',
            'tags': ['Guatemala'],
        },
        'CANALTN27_GUATEMALA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gt.svg" title="GUATEMALA"></img>CANAL TN27',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CANAL_TN27_GUATEMALA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL TN27</div></div></div>',
            'tags': ['Guatemala'],
        },
        //Venezuela
        'TELESUR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ve.svg" title="VENEZUELA"></img>TELESUR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TELESUR.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TELESUR</div></div></div>',
            'tags': ['Venezuela'],
        },
        'TELESUR_ENG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ve.svg" title="VENEZUELA"></img>TELESUR ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TELESUR_ENG.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TELESUR ENGLISH</div></div></div>',
            'tags': ['Venezuela'],
        },
        'VTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ve.svg" title="VENEZUELA"></img>VTV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/VTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VTV</div></div></div>',
            'tags': ['Venezuela'],
        },
        'TVes': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ve.svg" title="VENEZUELA"></img>TVes',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TVes.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVes</div></div></div>',
            'tags': ['Venezuela'],
        },
        //Mexico
        'N+': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>N+',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NMAS_MEXICO.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">N+</div></div></div>',
            'tags': ['Mexico'],
        },
        'N+_MEDIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>N+ MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NMAS_MEDIA_MEXICO.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">N+ MEDIA</div></div></div>',
            'tags': ['Mexico'],
        },
        'FORO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>FORO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/FOROTV_MEXICO.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">FORO TV</div></div></div>',
            'tags': ['Mexico'],
        },
        'MILENIO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>MILENIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/MILENIO_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">MILENIO TV</div></div></div>',
            'tags': ['Mexico'],
        },
        'ADN40': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>ADN40',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ADN40.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ADN40</div></div></div>',
            'tags': ['Mexico'],
        },
        //Francia
        'EURONEWS_ESP': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/EURONEWS_ESPANOL.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EURONEWS ESPAÑOL</div></div></div>',
            'tags': ['Francia'],
        },
        'EURONEWS_ENG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/EURONEWS_ENGLISH.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EURONEWS ENGLISH</div></div></div>',
            'tags': ['Francia'],
        },
        'EURONEWS_RU': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS RUSO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/EURONEWS_RUSO.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EURONEWS RUSO</div></div></div>',
            'tags': ['Francia'],
        },
        'EURONEWS_PORT': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS PORTUGUÉS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/EURONEWS_PORTUGUES.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EURONEWS PORTUGUÉS</div></div></div>',
            'tags': ['Francia'],
        },
        'EURONEWS_ALB': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ALBANIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/EURONEWS_ALBANIA.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EURONEWS ALBANIA</div></div></div>',
            'tags': ['Francia'],
        },
        'EURONEWS_ITA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ITALIANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/EURONEWS_ITALIANO.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EURONEWS ITALIANO</div></div></div>',
            'tags': ['Francia'],
        },
        'FRANCE24': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>FRANCE24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/FRANCE24.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">FRANCE24</div></div></div>',
            'tags': ['Francia'],
        },
        'FRANCE24_ESP': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>FRANCE24 ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/FRANCE24_ESPANOL.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">FRANCE24 ESPAÑOL</div></div></div>',
            'tags': ['Francia'],
        },
        'FRANCE24_ENG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>FRANCE24 ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/FRANCE24_ENGLISH.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">FRANCE24 ENGLISH</div></div></div>',
            'tags': ['Francia'],
        },
        'BFM_TV_FR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>BFM TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/BFMTV.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BFM TV</div></div></div>',
            'tags': ['Francia'],
        },
        //Italia
        'RAI_NEWS24': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/it.svg" title="FRANCIA"></img>RAI NEWS 24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RAI_NEWS24.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RAI NEWS 24</div></div></div>',
            'tags': ['Italia'],
        },
        //España
        '24HTVE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>CANAL 24 HORAS TVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/24HORASTVE.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">24H TVE</div></div></div>',
            'tags': ['España'],
        },
        'LA1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>LA 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TVE_LA1.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">LA 1</div></div></div>',
            'tags': ['España'],
        },
        'LA2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>LA 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TVE_LA2.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">LA 2</div></div></div>',
            'tags': ['España'],
        },
        //Alemania
        'DW': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/de.svg" title="ALEMANIA"></img>DW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DW_DEUTSCH.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">DW DEUTSCH</div></div></div>',
            'tags': ['Alemania'],
        },
        'DW_PLUS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/de.svg" title="ALEMANIA"></img>DW+',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DW_DEUTSCH_PLUS.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">DW+</div></div></div>',
            'tags': ['Alemania'],
        },
        'DW_ARABIC': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/de.svg" title="ALEMANIA"></img>DW ARABIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DW_ARABIC.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">DW ARABIC</div></div></div>',
            'tags': ['Alemania'],
        },
        'DWENG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/de.svg" title="ALEMANIA"></img>DW ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DW_ENGLISH.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">DW ENGLISH</div></div></div>',
            'tags': ['Alemania'],
        },
        'DWESP': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/de.svg" title="ALEMANIA"></img>DW ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/DW_ESPAÑOL.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">DW ESPAÑOL</div></div></div>',
            'tags': ['Alemania'],
        },
        //Rusia
        'RT_ENG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>RT ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RT_ENGLISH.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RT ENGLISH</div></div></div>',
            'tags': ['Rusia'],
        },
        'RT_ESP': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>RT ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RT_ESPANOL.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RT ESPAÑOL</div></div></div>',
            'tags': ['Rusia'],
        },
        'RT_FR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>RT FRANCE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RT_FRANCE.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RT FRANCE</div></div></div>',
            'tags': ['Rusia'],
        },
        'RT_ALEMAN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>RT ALEMAN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RT_ALEMAN.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RT ALEMAN</div></div></div>',
            'tags': ['Rusia'],
        },
        //China
        'CGTN_ENGLISH': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cn.svg" title="CHINA"></img>CGTN ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CGTN_ENG.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CGTN ENGLISH</div></div></div>',
            'tags': ['China'],
        },
        'CGTN_ESPAÑOL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cn.svg" title="CHINA"></img>CGTN ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CGTN_ESP.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CGTN ESPAÑOL</div></div></div>',
            'tags': ['China'],
        },
        'CGTN_FR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cn.svg" title="CHINA"></img>CGTN FRANCÉS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CGTN_FR.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CGTN FRANCÉS</div></div></div>',
            'tags': ['China'],
        },
        'CGTN_RUSO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cn.svg" title="CHINA"></img>CGTN RUSO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CGTN_RUSO.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CGTN RUSO</div></div></div>',
            'tags': ['China'],
        },
        'CGTN_ARABIC': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cn.svg" title="CHINA"></img>CGTN ARABIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CGTN_ARABIC.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CGTN ARABIC</div></div></div>',
            'tags': ['China'],
        },
        //Japon
        'NHK': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/jp.svg" title="JAPON"></img>NHK WORLD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NHK.html" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NHK WORLD</div></div></div>',
            'tags': ['Japon'],
        },
        'NHK_GENERAL_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/jp.svg" title="JAPON"></img>NHK GENERAL TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NHK_GENERAL_TV.html" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NHK GENERAL TV</div></div></div>',
            'tags': ['Japon'],
        },
        'NHK_EDUCATIONAL_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/jp.svg" title="JAPON"></img>NHK EDUCATIONAL TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NHK_EDUCATIONAL_TV.html" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NHK EDUCATIONAL TV</div></div></div>',
            'tags': ['Japon'],
        },
        'NIPPONTV_NEWS_24': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/jp.svg" title="JAPON"></img>NIPPON TV NEWS24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NIPPONTV_NEWS_24.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NIPPON TV NEWS24</div></div></div>',
            'tags': ['Japon'],
        },
        //Corea del Norte
        'KOREAN_CENTRAL_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/kp.svg" title="KOREA DEL NORTE"></img>KOREAN CENTRAL TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/KOREAN_CENTRAL_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">KOREAN CENTRAL TV</div></div></div>',
            'tags': ['Corea del Norte'],
        },
        //Iran
        'IRAN_INT': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ir.svg" title="IRÁN"></img>IRAN INTERNATIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/IRAN_INTERNACIONAL.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">IRAN INTERNATIONAL</div></div></div>',
            'tags': ['Iran'],
        },
        'PRESSTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ir.svg" title="IRÁN"></img>PRESS TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PRESSTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PRESS TV</div></div></div>',
            'tags': ['Iran'],
        },
        'HISPANTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ir.svg" title="IRÁN"></img>HISPAN TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/HISPANTV_ESP.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">HISPAN TV</div></div></div>',
            'tags': ['Iran'],
        },
        //Israel
        'CHANNEL12_ISRAEL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/il.svg" title="ISRAEL"></img>CHANNEL 12',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CHANNEL12_ISRAEL.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CHANNEL 12</div></div></div>',
            'tags': ['Israel'],
        },
        'CHANNEL13_ISRAEL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/il.svg" title="ISRAEL"></img>CHANNEL 13',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CHANNEL13_ISRAEL.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CHANNEL 13</div></div></div>',
            'tags': ['Israel'],
        },
        'CHANNEL14_ISRAEL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/il.svg" title="ISRAEL"></img>CHANNEL 14',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CHANNEL14_ISRAEL.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CHANNEL 14</div></div></div>',
            'tags': ['Israel'],
        },
        //Türkiye
        'TRTWORLD': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/tr.svg" title="TÜRKIYE"></img>TRT WORLD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TRTWORLD.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TRT WORLD</div></div></div>',
            'tags': ['Türkiye'],
        },
        //Catar
        'AL_JAZEERA_ENGLISH': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: 20px; margin-right: 10px;" src="https://flagcdn.com/qa.svg" title="CATAR"></img>AL JAZEERA ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/AL_JAZEERA_EN.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">AL JAZEERA ENGLISH</div></div></div>',
            'tags': ['Catar'],
        },
        'AL_JAZEERA_ARABIC': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: 20px; margin-right: 10px;" src="https://flagcdn.com/qa.svg" title="CATAR"></img>AL JAZEERA ARABIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/AL_JAZEERA_ARABIC.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">AL JAZEERA ARABIC</div></div></div>',
            'tags': ['Catar'],
        },
        'AL_JAZEERA_MUBASHER': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: 20px; margin-right: 10px;" src="https://flagcdn.com/qa.svg" title="CATAR"></img>AL JAZEERA MUBASHER',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/AL_JAZEERA_MUBASHER.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">AL JAZEERA MUBASHER</div></div></div>',
            'tags': ['Catar'],
        },
        //Reino Unido
        'SKY_NEWS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>SKY NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/SKY_NEWS.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SKY NEWS</div></div></div>',
            'tags': ['Reino Unido'],
        },
        'BBC_NEWS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>BBC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/BBCNEWS.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BBC NEWS</div></div></div>',
            'tags': ['Reino Unido'],
        },
        'BBC_NEWS_ARABIC': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>BBC NEWS ARABIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/BBCNEWS_ARABIC.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BBC NEWS ARABIC</div></div></div>',
            'tags': ['Reino Unido'],
        },
        //Australia
        'ABC_NEWS_AUSTRALIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/au.svg" title="AUSTRALIA"></img>ABC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ABC_NEWS_AU.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ABC NEWS</div></div></div>',
            'tags': ['Australia'],
        },
        //Estados Unidos
        'ABC_NEWS_USA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>ABC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ABC_NEWS.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ABC NEWS</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'NBC_NEWS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>NBC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NBCNEWS.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NBC NEWS</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'CBS_NEWS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>CBS NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CBSNEWS.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CBS NEWS</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'FOX_NEWS_NOW': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>FOX NEWS NOW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/FOX_NEWS_NOW.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">FOX NEWS NOW</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'FOX_NEWS_WEATHER': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>FOX WEATHER',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/FOX_WEATHER.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">FOX NEWS WEATHER</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'CNN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>CNN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CNN.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNN</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'CNN_INTERNACIONAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>CNN INTERNATIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CNNINTERNACIONAL.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNN INTERNATIONAL</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        //Indonesia
        'CNN_INDONESIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/id.svg" title="INDONESIA"></img>CNN INDONESIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CNNINDONESIA.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNN INDONESIA</div></div></div>',
            'tags': ['Indonesia'],
        },
        //Filipinas
        'CNN_PHILIPPINES': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ph.svg" title="FILIPINAS"></img>CNN PHILIPPINES',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CNN_PHILIPPINES.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNN PHILIPPINES</div></div></div>',
            'tags': ['Filipinas'],
        },

        //NOTICIAS YOUTUBE
        //LATINOAMERICA
        'DIRECTV_NEWS': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><span style="margin-right: 10px;" class="material-icons-round">language</span>DNEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC4dWvSKVWJ36tJyhjDQCCaQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">DNEWS</div></div></div>',
            'tags': ['LatinoAmerica'],
        },
        //Brasil
        'CNN_BRASIL': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/br.svg" title="BRASIL"></img>CNN BRASIL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCvdwhh_fDyWccR42-rReZLw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNN BRASIL</div></div></div>',
            'tags': ['Brasil'],
        },
        'TV_BRASIL': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/br.svg" title="BRASIL"></img>TV BRASIL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCSv9d0kQegylHWpP83jWSQg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV BRASIL</div></div></div>',
            'tags': ['Brasil'],
        },
        'RECORD_NEWS': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/br.svg" title="BRASIL"></img>RECORD NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCuiLR4p6wQ3xLEm15pEn1Xw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RECORD NEWS</div></div></div>',
            'tags': ['Brasil'],
        },
        'STB_NEWS': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/br.svg" title="BRASIL"></img>STB NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC376n347Ob5Lwzq2WGzF1AA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">STB NEWS</div></div></div>',
            'tags': ['Brasil'],
        },
        'BAND_JORNALISMO': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/br.svg" title="BRASIL"></img>BAND JORNALISMO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCoa-D_VfMkFrCYodrOC9-mA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BAND JORNALISMO</div></div></div>',
            'tags': ['Brasil'],
        },
        'JOVEM_PAN_NEWS': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/br.svg" title="BRASIL"></img>JOVEM PAN NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCP391YRAjSOdM_bwievgaZA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">JOVEM PAN NEWS</div></div></div>',
            'tags': ['Brasil'],
        },
        //Australia
        'ABC_NEWS_AU_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/au.svg" title="AUSTRALIA"></img>ABC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCVgO39Bk5sMo66-6o6Spn6Q&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ABC NEWS</div></div></div>',
            'tags': ['Australia'],
        },
        //Estados Unidos
        'ABC_NEWS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>ABC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCBi2mrWuNuyYy4gbM6fU18Q&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ABC NEWS</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'NBCNEWS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>NBC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCeY0bbntWzzVIaj2z3QigXg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NBC NEWS</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'PBS_NEWSHOUR_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>PBS NEWSHOUR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC6ZFN9Tx6xh-skXCuRHCDpQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PBS NEWSHOUR</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'UNIVISION_NOTICIAS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>UNIVISION NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC32TdiIsh_5X8tKr_9rKQyA&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">UNIVISION NOTICIAS</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'TELEMUNDO_NOTICIAS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>TELEMUNDO NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCRwA1NUcUnwsly35ikGhp0A&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TELEMUNDO NOTICIAS</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'AL_ROJO_VIVO_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>AL ROJO VIVO (TELEMUNDO)',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCDUxOvbwu1bnyD7AucP0ESw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">AL ROJO VIVO (TELEMUNDO)</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'VOA_TV_ESPAÑOL_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>VOA TV ESP',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCJ46VgZgCMLFUvOT671AOJw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VOA TV ESPAÑOL</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'REUTERS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>REUTERS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UChqUTb7kYRX8-EiaN3XFrSQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">REUTERS</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        //Reino Unidos
        'SKY_NEWS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>SKY NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCoMdktPbSTixAyNGwb-UYkQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SKY NEWS</div></div></div>',
            'tags': ['Reino Unidos'],
        },
        'ITV_NEWS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>ITV NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCFQgi22Ht00CpaOQLtvZx2A&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ITV NEWS</div></div></div>',
            'tags': ['Reino Unidos'],
        },
        'BBC_NEWS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>BBC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC16niRr50-MSBwiO3YDb3RA&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BBC NEWS</div></div></div>',
            'tags': ['Reino Unidos'],
        },
        'BBC_NEWS_ARABIC_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>BBC NEWS ARABIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCelk6aHijZq-GJBBB9YpReA&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BBC NEWS ARABIC</div></div></div>',
            'tags': ['Reino Unidos'],
        },
        'BBC_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>BBC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCCj956IF62FbT7Gouszaj9w&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BBC</div></div></div>',
            'tags': ['Reino Unidos'],
        },
        'THE_SUN_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>THE SUN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCIzXayRP7-P0ANpq-nD-h5g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">THE SUN</div></div></div>',
            'tags': ['Reino Unidos'],
        },
        'DAILY_MAIL': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>DAILY MAIL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCw3fku0sH3qA3c3pZeJwdAw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">DAILY MAIL</div></div></div>',
            'tags': ['Reino Unidos'],
        },
        'RoyalChannel_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/gb.svg" title="REINO UNIDO"></img>THE ROYAL FAMILY CHANNEL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCCvgLV2Ixb8KCemj-UtXZ-g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">THE ROYAL FAMILY CHANNEL</div></div></div>',
            'tags': ['Reino Unidos'],
        },
        //Alemania
        'DW_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/de.svg" title="ALEMANIA"></img>DW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCknLrEdhRCp1aegoMqRaCZg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">DW</div></div></div>',
            'tags': ['Alemania'],
        },
        'DWENG_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/de.svg" title="ALEMANIA"></img>DW ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCknLrEdhRCp1aegoMqRaCZg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">DW ENGLISH</div></div></div>',
            'tags': ['Alemania'],
        },
        'DWESP_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/de.svg" title="ALEMANIA"></img>DW ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCT4Jg8h03dD0iN3Pb5L0PMA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">DW ESPAÑOL</div></div></div>',
            'tags': ['Alemania'],
        },
        //Francia
        'EURONEWS_ESP_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCyoGb3SMlTlB8CLGVH4c8Rw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EURONEWS ESPAÑOL</div></div></div>',
            'tags': ['Francia'],
        },
        'EURONEWS_FR_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS FRANCIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCW2QcKZiU8aUGg4yxCIditg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EURONEWS FRANCIA</div></div></div>',
            'tags': ['Francia'],
        },
        'EURONEWS_ENG_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCSrZ3UV4jOidv8ppoVuvW9Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EURONEWS ENGLISH</div></div></div>',
            'tags': ['Francia'],
        },
        'EURONEWS_RU_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS RUSO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCFzJjgVicCtFxJ5B0P_ei8A&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EURONEWS RUSO</div></div></div>',
            'tags': ['Francia'],
        },
        'EURONEWS_PORT_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS PORTUGUÉS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCUmEPYxmnyQDeRUcFkslmQw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EURONEWS PORTUGUÉS</div></div></div>',
            'tags': ['Francia'],
        },
        'EURONEWS_ALB_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ALBANIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UChR-A__NS_C5kHDWj3PeAhw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EURONEWS ALBANIA</div></div></div>',
            'tags': ['Francia'],
        },
        'EURONEWS_ITA_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>EURONEWS ITALIANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC1mX9vuLOYf8fhaXS_KcDRg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EURONEWS ITALIANO</div></div></div>',
            'tags': ['Francia'],
        },
        'FRANCE24_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>FRANCE24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCCCPCZNChQdGa9EkATeye4g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">FRANCE24</div></div></div>',
            'tags': ['Francia'],
        },
        'FRANCE24_ESP_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>FRANCE24 ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCUdOoVWuWmgo1wByzcsyKDQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">FRANCE24 ESPAÑOL</div></div></div>',
            'tags': ['Francia'],
        },
        'FRANCE24_ENG_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/fr.svg" title="FRANCIA"></img>FRANCE24 ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCQfwfsi5VrQ8yKZ-UWmAEFg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">FRANCE24 ENGLISH</div></div></div>',
            'tags': ['Francia'],
        },
        //Italia
        'SKY TG24': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/it.svg" title="ITALIA"></img>SKY TG24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCz6E3lF72mb6uoJ-mOlNo2A&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SKY TG24</div></div></div>',
            'tags': ['Italia'],
        },
        //España
        '24HTVE_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>CANAL 24 HORAS TVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC7QZIf0dta-XPXsp9Hv4dTw&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">24H TVE</div></div></div>',
            'tags': ['España'],
        },
        'AGENCIA_EFE_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>AGENCIA EFE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCvJS-YNyaWyOucx8bGrHVvw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">AGENCIA EFE</div></div></div>',
            'tags': ['España'],
        },
        'EUROPA_PRESS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>EUROPA PRESS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCh_chnQ7OJPQ8mZ7vbXFpIQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EUROPA PRESS</div></div></div>',
            'tags': ['España'],
        },
        'EL_PAIS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>EL PAIS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCnsvJeZO4RigQ898WdDNoBw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EL PAIS</div></div></div>',
            'tags': ['España'],
        },
        'MARCA_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>MARCA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCop57Z1sYHrtCyxCpE2z2Bg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">MARCA</div></div></div>',
            'tags': ['España'],
        },
        'LA_VANGUARDIA_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/es.svg" title="ESPAÑA"></img>LA VANGUARDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UClLLRs_mFTsNT5U-DqTYAGg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">LA VANGUARDIA</div></div></div>',
            'tags': ['España'],
        },
        //Corea del Sur
        'KBS_WORLD_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/kr.svg" title="Corea del Sur"></img>KBS WORLD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC5BMQOsAB8hKUyHu9KI6yig&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">KBS WORLD</div></div></div>',
            'tags': ['Corea del Sur'],
        },
        'KBS_NEWS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/kr.svg" title="Corea del Sur"></img>KBS NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCcQTRi69dsVYHN3exePtZ1A&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">KBS NEWS</div></div></div>',
            'tags': ['Corea del Sur'],
        },
        'YONHAP_TV_NEWS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/kr.svg" title="Corea del Sur"></img>YONHAP TV NEWS (YTN)',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UChlgI3UHCOnwUGzWzbJ3H5w&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">YONHAP TV NEWS (YTN)</div></div></div>',
            'tags': ['Corea del Sur'],
        },
        'JTBC_NEWS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/kr.svg" title="Corea del Sur"></img>JTBC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCsU-I-vHLiaMfV_ceaYz5rQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">JTBC NEWS</div></div></div>',
            'tags': ['Corea del Sur'],
        },
        'SBS_NEWS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/kr.svg" title="Corea del Sur"></img>SBS NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCkinYTS9IHqOEwR1Sze2JTw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SBS NEWS</div></div></div>',
            'tags': ['Corea del Sur'],
        },
        'MBC_NEWS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/kr.svg" title="Corea del Sur"></img>MBC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCF4Wxdo3inmxP-Y59wXDsFw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">MBC NEWS</div></div></div>',
            'tags': ['Corea del Sur'],
        },
        //Argentina
        'TN_ARG_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>TN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCj6PcyLvpnIRT_2W_mwa9Aw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TN</div></div></div>',
            'tags': ['Argentina'],
        },
        'AMERICA_TV_ARG_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>AMERICA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC6NVDkuzY2exMOVFw4i9oHw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">AMERICA TV</div></div></div>',
            'tags': ['Argentina'],
        },
        'A24_ARG_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>A24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCR9120YBAqMfntqgRTKmkjQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">A24</div></div></div>',
            'tags': ['Argentina'],
        },
        'IP_ARG_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>IP NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC1bBjOZieJWHbsFA0LwjjJA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">IP NOTICIAS</div></div></div>',
            'tags': ['Argentina'],
        },
        'TV_PUBLICA_ARG_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>TV PUBLICA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCs231K71Bnu5295_x0MB5Pg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV PUBLICA</div></div></div>',
            'tags': ['Argentina'],
        },
        'C5N_ARG_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>C5N',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCFgk2Q2mVO1BklRQhSv6p0w&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">C5N</div></div></div>',
            'tags': ['Argentina'],
        },
        'CANAL_26_ARG_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>CANAL 26',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 26</div></div></div>',
            'tags': ['Argentina'],
        },
        'CRONICATV_ARG_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>CRONICA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCT7KFGv6s2a-rh2Jq8ZdM1g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CRONICA TV</div></div></div>',
            'tags': ['Argentina'],
        },
        'LA_NACION_ARG_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>LA NACION',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCba3hpU7EFBSk817y9qZkiA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">LA NACION</div></div></div>',
            'tags': ['Argentina'],
        },
        'INFOBAE_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>INFOBAE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCvsU0EGXN7Su7MfNqcTGNHg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">INFOBAE</div></div></div>',
            'tags': ['Argentina'],
        },
        'CLARIN_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>CLARIN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCjMGMWnToRcQRqmyVB4R2xQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CLARIN</div></div></div>',
            'tags': ['Argentina'],
        },
        'PAGINA12_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>PAGINA 12',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCJNDedOnljCssaiRZqg8-Dg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PAGINA 12</div></div></div>',
            'tags': ['Argentina'],
        },
        //Peru
        'TVPERU_NOTICIAS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>TVPERU NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCkZCoc42IipR1ucqJmIehsA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVPERU NOTICIAS</div></div></div>',
            'tags': ['Peru'],
        },
        'ATV_NOTICIAS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>ATV NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCYG5uXS3xdsoaXIxum1pAEw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ATV NOTICIAS</div></div></div>',
            'tags': ['Peru'],
        },
        'EXITOSA_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>RADIO EXITOSA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCbyblOHU12USUbbPL_M7BNg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RADIO EXITOSA</div></div></div>',
            'tags': ['Peru'],
        },
        'LATINA_TV_NOTICIAS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/pe.svg" title="PERU"></img>LATINA NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCpSJ5fGhmAME9Kx2D3ZvN3Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">LATINA NOTICIAS</div></div></div>',
            'tags': ['Peru'],
        },
        //Colombia
        'RCN_NOTICIAS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/co.svg" title="COLOMBIA"></img>NOTICIAS RCN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCnr6pbeXJmkNQJ9PSYle7QQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NOTICIAS RCN</div></div></div>',
            'tags': ['Colombia'],
        },
        'NOTICIAS_CARACOL_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/co.svg" title="COLOMBIA"></img>NOTICIAS CARACOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC2Xq2PK-got3Rtz9ZJ32hLQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NOTICIAS RCN</div></div></div>',
            'tags': ['Colombia'],
        },
        //Ecuador
        'ECUADOR_TV_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ec.svg" title="ECUADOR"></img>ECUADOR TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCfXVS_zw_XmAx8iIiia1IkA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ECUADOR TV</div></div></div>',
            'tags': ['Ecuador'],
        },
        'EL_UNIVERSO_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ec.svg" title="ECUADOR"></img>EL UNIVERSO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCLwBAR1YA6bQRNVCLYOM6Sg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EL UNIVERSO</div></div></div>',
            'tags': ['Ecuador'],
        },
        'ECUAVISA_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ec.svg" title="ECUADOR"></img>ECUAVISA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCRUV3nUNSc-xpBrTwQOCQQg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ECUAVISA</div></div></div>',
            'tags': ['Ecuador'],
        },
        //Mexico
        'FORO_TV_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>FORO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCUsm-fannqOY02PNN67C0KA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">FORO TV</div></div></div>',
            'tags': ['Mexico'],
        },
        'MILENIO_NOTICIAS_YT':{
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>MILENIO NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCFxHplbcoJK9m70c4VyTIxg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">MILENIO NOTICIAS</div></div></div>',
            'tags': ['Mexico'],
        },
        'ADN40_YT':{
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/mx.svg" title="MEXICO"></img>ADN40',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC7k--FhnJzhPTrbtldMSoQQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ADN40</div></div></div>',
            'tags': ['Mexico'],
        },
        //Vaticano
        'VATICAN_NEWS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/va.svg" title="CIUDAD DEL VATICANO"></img>VATICAN NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC7E-LYc1wivk33iyt5bR5zQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VATICAN NEWS</div></div></div>',
            'tags': ['Vaticano'],
        },
        'VATICAN_NEWS_ITALIANO_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/va.svg" title="CIUDAD DEL VATICANO"></img>VATICAN NEWS ITALIANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCkwbN2a1L1H6P9rcA7FhAqg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VATICAN NEWS ITALIANO</div></div></div>',
            'tags': ['Vaticano'],
        },
        'VATICAN_NEWS_ENGLISH_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/va.svg" title="CIUDAD DEL VATICANO"></img>VATICAN NEWS ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCxIsefyl9g9A5SGWA4FvGIA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VATICAN NEWS ENGLISH</div></div></div>',
            'tags': ['Vaticano'],
        },
        'VATICAN_NEWS_ESPAÑOL_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/va.svg" title="CIUDAD DEL VATICANO"></img>VATICAN NEWS ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCnB5vfb9FMMNTnC6-kAT3fQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VATICAN NEWS ESPAÑOL</div></div></div>',
            'tags': ['Vaticano'],
        },
        //Singapore
        'CNA_NEWS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/sg.svg" title="SINGAPORE"></img>CNA NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC83jt4dlz1Gjl58fzQrrKZg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNA NEWS</div></div></div>',
            'tags': ['Singapore'],
        },
        //Rusia
        'RT_YT_2': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>RT<span style="margin-left: 5px;" class="BotonAvisoListaSeñales"><span style="font-size: 20px" class="material-icons-round TextoIconoRojo" title="SEÑAL BLOQUEADA POR YOUTUBE">error_outline</span></span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCpwvZwUam-URkxB7g4USKpg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RT</div></div></div>',
            'tags': ['Rusia'],
        },
        'RT_ENVIVO_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>RT ESPAÑOL<span style="margin-left: 5px;" class="BotonAvisoListaSeñales"><span style="font-size: 20px" class="material-icons-round TextoIconoRojo" title="SEÑAL BLOQUEADA POR YOUTUBE">error_outline</span></span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCEIhICHOQOonjE6V0SLdrHQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RT ESPAÑOL</div></div></div>',
            'tags': ['Rusia'],
        },
        'RUPTLY_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>RUPTLY<span style="margin-left: 5px;" class="BotonAvisoListaSeñales"><span style="font-size: 20px" class="material-icons-round TextoIconoRojo" title="SEÑAL BLOQUEADA POR YOUTUBE">error_outline</span></span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC5aeU5hk31cLzq_sAExLVWg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RUPTLY</div></div></div>',
            'tags': ['Rusia'],
        },
        'SPUTNIK_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ru.svg" title="RUSIA"></img>SPUTNIK<span style="margin-left: 5px;" class="BotonAvisoListaSeñales"><span style="font-size: 20px" class="material-icons-round TextoIconoRojo" title="SEÑAL BLOQUEADA POR YOUTUBE">error_outline</span></span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCI4lx9retCL7_cBmmceEQ8g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SPUTNIK</div></div></div>',
            'tags': ['Rusia'],
        },
        //China
        'CCTV+_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cn.svg" title="CHINA"></img>CCTV+',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCmv5DbNpxH8X2eQxJBqEjKQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CCTV+</div></div></div>',
            'tags': ['China'],
        },
        'CGTN_YT_EUROPE': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cn.svg" title="CHINA"></img>CGTN EUROPE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCj0TppyxzQWm9JbMg3CP8Rg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CGTN EUROPE</div></div></div>',
            'tags': ['China'],
        },
        'CGTN_YT_ESP': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cn.svg" title="CHINA"></img>CGTN ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCd94YCD7yp6d-YZSRYWyeFA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CGTN ESPAÑOL</div></div></div>',
            'tags': ['China'],
        },
        'CGTN_YT_FR': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cn.svg" title="CHINA"></img>CGTN FRANCÉS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCcfLuU0NFT0ZRoQy4jk6GdA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CGTN FRANCÉS</div></div></div>',
            'tags': ['China'],
        },
        'CGTN_YT_ARABIC': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cn.svg" title="CHINA"></img>CGTN ARABIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCQmJk0ErE_FiorcLBsDKORA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CGTN ARABIC</div></div></div>',
            'tags': ['China'],
        },
        //Catar
        'AL_JAZEERA_ENG_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: 25px; margin-right: 10px;" src="https://flagcdn.com/qa.svg" title="CATAR"></img>AL JAZEERA ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCNye-wNBqNL5ZzHSJj3l8Bg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">AL JAZEERA ENGLISH</div></div></div>',
            'tags': ['Catar'],
        },
        'AL_JAZEERA_ARABIC_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: 25px; margin-right: 10px;" src="https://flagcdn.com/qa.svg" title="CATAR"></img>AL JAZEERA ARABIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCfiwzLy-8yKzIbsmZTzxDgw&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">AL JAZEERA ARABIC</div></div></div>',
            'tags': ['Catar'],
        },
        'AL_JAZEERA_MUBASHER_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: 25px; margin-right: 10px;" src="https://flagcdn.com/qa.svg" title="CATAR"></img>AL JAZEERA MUBASHER',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCCv1Pd24oPErw5S7zJWltnQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">AL JAZEERA MUBASHER</div></div></div>',
            'tags': ['Catar'],
        },
        //Ucrania
        'UCRANIA24_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ua.svg" title="UCRANIA"></img>UCRANIA24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCMp5Buw-6LpbbV9r9Sl_5yg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">UCRANIA24</div></div></div>',
            'tags': ['Ucrania'],
        },
        //Chile
        'MEDIABANCO_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>MEDIABANCO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/MEDIABANCO_YT.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">MEDIABANCO</div></div></div>',
            'tags': ['Chile'],
        },
        'AGENCIA_UNO_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>AGENCIA UNO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/AGENCIAUNOTV_2.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">AGENCIA UNO TV</div></div></div>',
            'tags': ['Chile'],
        },
        'SERVEL_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>SERVEL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCB8s6rETjmWgXrp_BxyXqdg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SERVEL</div></div></div>',
            'tags': ['Chile'],
        },
        '24HTVN_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_24HORAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCTXNz3gjAypWp3EhlIATEJQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 24H</div></div></div>',
            'tags': ['Chile'],
        },
        'CNN_CHILE_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_CNNCHILE2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCpOAcjJNAp0Y0fhznRrXIJQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNN CHILE</div></div></div>',
            'tags': ['Chile'],
        },
        'MEGANOTICIAS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_MEGANOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCkccyEbqhhM3uKOI6Shm-4Q&autoplay=true&mute=1" frameborder="0"></iframe><div href="SeñalMEGANOTICIAS.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">MEGANOTICIAS</div></div></div>',
            'tags': ['Chile'],
        },
        'CHV_NOTICIAS_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_CHV_NOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCRsUoZYC1ULUspipMRnMhwg&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CHV NOTICIAS</div></div></div>',
            'tags': ['Chile'],
        },
        'T13_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_T13_ENVIVO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCsRnhjcUCR78Q3Ud6OXCTNg&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">T13 MOVIL</div></div></div>',
            'tags': ['SinChileTag'],
        },
        'TVN_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCaVaCaiG6qRzDiJDuEGKOhQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVN</div></div></div>',
            'tags': ['Chile'],
        },
        'MEGA_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCEpId-jtRABuZyX6D2z6FZQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">MEGA</div></div></div>',
            'tags': ['Chile'],
        },
        'CHV_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_CHV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC8EdTmyUaFIfZvVttJ9lgIA&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CHV</div></div></div>',
            'tags': ['Chile'],
        },
        'CANAL 13_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_Canal13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCd4D3LfXC_9MY2zSv_3gMgw&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 13</div></div></div>',
            'tags': ['Chile'],
        },

        '24HTVN_FACEBOOK': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_24HORAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F24horas.cl%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe></div><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 24H</div></div></div>',
            'tags': ['Chile'],
        },
        'CNN_CHILE_FACEBOOK': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_CNNCHILE2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcnnchile%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CNN CHILE</div></div></div>',
            'tags': ['Chile'],
        },
        'MEGANOTICIAS_FACEBOOK': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_MEGANOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmeganoticiascl%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div href="SeñalMEGANOTICIAS.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">MEGANOTICIAS</div></div></div>',
            'tags': ['Chile'],
        },
        'T13_FACEBOOK': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_T13_ENVIVO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fteletrece%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">T13 MOVIL</div></div></div>',
            'tags': ['Chile'],
        },
        'TVN_FACEBOOK': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftvn.cl%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVN</div></div></div>',
            'tags': ['Chile'],
        },
        'MEGA_FACEBOOK': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FMEGACL%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">MEGA</div></div></div>',
            'tags': ['Chile'],
        },
        'CHV_FACEBOOK': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_CHV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fchilevision%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CHV</div></div></div>',
            'tags': ['Chile'],
        },
        'CANAL 13_FACEBOOK': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_Canal13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Felcanal13%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 13</div></div></div>',
            'tags': ['Chile'],
        },


        'REUTERS_FB': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>REUTERS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Reuters/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">REUTERS</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'TELEMUNDO_FB': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>TELEMUNDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/NoticiasTelemundo/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TELEMUNDO</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'VOA_FB': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>VOZ DE AMERICA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/VozDeAmerica/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VOA ESP</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'RUPTLY_FB': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>RUPTLY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Ruptly/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RUPTLY</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'SPUTNIK_FB': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">cell_tower</span>SPUTNIK',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/SputnikNews/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SPUTNIK</div></div></div>',
            'tags': ['Rusia'],
        },
        'ADNRADIO_FB': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">mic</span>ADN RADIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/VozDeAmerica/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ADN RADIO</div></div></div>',
            'tags': ['Chile'],
        },
        'COOPERATIVA_FB': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">mic</span>COOPERATIVA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Cooperativa/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">COOPERATIVA</div></div></div>',
            'tags': ['Chile'],
        },


        //TVN REGIONES
        'TVN_FB_ANTOFAGASTA': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVN.svg"></img>ANTOFAGASTA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/TVNREDANTOFAGASTA/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVN ANTOFAGASTA</div></div></div>',
            'tags': ['Chile'],
        },
        'TVN_FB_COQUIMBO': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVN.svg"></img>COQUIMBO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/redcoquimbotvn/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVN COQUIMBO</div></div></div>',
            'tags': ['Chile'],
        },
        'TVN_FB_VALPARAISO': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVN.svg"></img>VALPARAISO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Tvn-Red-Valparaíso-1051261168227502/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVN VALPARAISO</div></div></div>',
            'tags': ['Chile'],
        },
        'TVN_FB_OHIGGINS': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVN.svg"></img>OHIGGINS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/tvnohiggins/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVN OHIGGINS</div></div></div>',
            'tags': ['Chile'],
        },
        'TVN_FB_MAULE': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVN.svg"></img>MAULE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/TVNRedMaule/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVN MAULE</div></div></div>',
            'tags': ['Chile'],
        },
        'TVN_FB_BIOBIO': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVN.svg"></img>BIOBIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/tvnredbiobio/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVN BIOBIO</div></div></div>',
            'tags': ['Chile'],
        },
        'TVN_FB_ARAUCANIA': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVN.svg"></img>ARAUCANIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/tvnredaraucaniaoficial/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVN ARAUCANIA</div></div></div>',
            'tags': ['Chile'],
        },
        'TVN_FB_AUSTRAL': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Facebook.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVN.svg"></img>AUSTRAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/redaustral/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVN AUSTRAL</div></div></div>',
            'tags': ['Chile'],
        },

        
        'TC_YouTube': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>TRIB. CONSTITUCIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCZaI-1N1oaGb-U8K2VNztjg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TRIB. CONSTITUCIONAL</div></div></div>',
            'tags': ['Chile'],
        },

        //TV SENADO
        'TV_SENADO_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVSenado_Señal_1.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TVSENADO_1.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV SENADO - SEÑAL 2</div></div></div>',
            'tags': ['Chile'],
        },
        'TV_SENADO_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVSenado_Señal_2.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TVSENADO_2.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV SENADO - SEÑAL 2</div></div></div>',
            'tags': ['Chile'],
        },
        'TV_SENADO_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVSenado_Señal_3.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TVSENADO_3.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV SENADO - SEÑAL 3</div></div></div>',
            'tags': ['Chile'],
        },
        'TV_SENADO_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVSenado_Señal_4.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TVSENADO_4.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV SENADO - SEÑAL 4</div></div></div>',
            'tags': ['Chile'],
        },
        'TV_SENADO_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVSenado_Señal_5.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TVSENADO_5.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV SENADO - SEÑAL 5</div></div></div>',
            'tags': ['Chile'],
        },
        'TV_SENADO_6': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_TVSenado_Señal_6.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/TVSENADO_6.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV SENADO - SEÑAL 6</div></div></div>',
            'tags': ['Chile'],
        },

        //CAMARA DE DIPUTADOS TV
        'CAMARA_DIPUTADOS SEÑAL_YT_1': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCcULnWuDzgQG9yF0Dv3DIgg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 1</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_2': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCt6ZTZoyFaCrMHURyjQ3PxA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 2</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_3': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCF6KgLfQqQzekn8U1DwVs9g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 3</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_5': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC0QKtI8NpeMObauDylsSUDA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 5</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_6': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCspWzpGflwb6A8PZqWw49CQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 6</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_7': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCyVjDDBZGDywVGrpGBvGEsw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 7</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_8': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCyVjDDBZGDywVGrpGBvGEsw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 8</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_9': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 9',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCgLlv-wIHnE_68RRSYRj8ZQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 9</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_10': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 10',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCJlJ6Q6ZV2InsE6fZWfJ9_g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 10</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_11': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 11',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCYPKjGKq2yLbAnmth5rFZmQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 11</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_12': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 12',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCVOWFY-sgbDglBsfOap9okg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 12</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_13': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 13',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC33MG3YdoQ16a8a3wODh6lw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 13</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_14': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 14',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCUG6xs0GZ-t8IL3RUSWDSOQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 14</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_15': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 15',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC8VmxlxvDhkrG6g0GnA5ksA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 15</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_16': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 16',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCZz97rh70D0WSSjYSfTl-2Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 16</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_17': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 17',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCzkd-4oNNpWFN2zGWoyOz5w&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 17</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_18': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 18',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCNIa8pU-npLY7qm-8NVA3Sg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 18</div></div></div>',
            'tags': ['Chile'],
        },
        'CAMARA_DIPUTADOS SEÑAL_YT_20': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CAMARA DIPUTADOS - SEÑAL 20',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCwk-F5PutmZrjZC8eHJ12Pg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMARA DIPUTADOS - SEÑAL 20</div></div></div>',
            'tags': ['Chile'],
        },


        //PODER JUDICIAL TV
        'PoderJudicialTV_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PoderJudicial_1.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 1</div></div></div>',
            'tags': ['Chile'],
        },
        'PoderJudicialTV_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PoderJudicial_2.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 2</div></div></div>',
            'tags': ['Chile'],
        },
        'PoderJudicialTV_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PoderJudicial_3.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 3</div></div></div>',
            'tags': ['Chile'],
        },
        'PoderJudicialTV_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PoderJudicial_4.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 4</div></div></div>',
            'tags': ['Chile'],
        },
        'PoderJudicialTV_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PoderJudicial_5.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 5</div></div></div>',
            'tags': ['Chile'],
        },
        'PoderJudicialTV_6': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PoderJudicial_6.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 6</div></div></div>',
            'tags': ['Chile'],
        },
        'PoderJudicialTV_7': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PoderJudicial_7.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 7</div></div></div>',
            'tags': ['Chile'],
        },
        'PoderJudicialTV_8': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_PoderJudicialTV.svg"></img>SEÑAL 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PoderJudicial_8.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PODER JUDICIAL - SEÑAL 8</div></div></div>',
            'tags': ['Chile'],
        },



        
        
        //CAMARAS
        'PARQUEMET_CUMBRE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>STGO. PARQUEMET CUMBRE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMPARQUEMET_CUMBRE_2.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">STGO. PARQUEMET CUMBRE</div></div></div>',
            'tags': ['Chile'],
        },
        'PARQUEMET_TERRAZA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>STGO. PARQUEMET TERRAZA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMPARQUEMET_TERRAZA_2.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">STGO. PARQUEMET TERRAZA</div></div></div>',
            'tags': ['Chile'],
        },
        'PLAZAITALIA_CIMA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>STGO. PLAZA ITALIA<span style="margin-left: 3px; font-size: 12px;">(GALERIA CIMA)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMARA_PLAZA_ITALIA_CIMA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">STGO. PLAZA ITALIA</div></div></div>',
            'tags': ['Chile'],
        },
        'STGO_SUR_ORIENTE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>STGO. SUR ORIENTE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCMvQGOyumsXP4V7dGAdIKWg&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">STGO. SUR ORIENTE</div></div></div>',
            'tags': ['Chile'],
        //},
        //'LEDRIUM_CERRILLOS': {
        //    'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>CERRILLOS<span style="margin-left: 3px; font-size: 12px;">(LEDRIUM)</span>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMARA_LEDRIUM_CERRILLOS.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CERRILLOS</div></div></div>',
        //    'tags': ['Chile'],
        },
        'LEDRIUM_PENALOLEN_NORTE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>PEÑALOLEN NORTE<span style="margin-left: 3px; font-size: 12px;">(LEDRIUM)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMARA_LEDRIUM_PENALOLEN_NORTE.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PEÑALOLEN NORTE</div></div></div>',
            'tags': ['Chile'],
        },
        'LEDRIUM_PENALOLEN_SUR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>PEÑALOLEN SUR<span style="margin-left: 3px; font-size: 12px;">(LEDRIUM)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMARA_LEDRIUM_PENALOLEN_SUR.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PEÑALOLEN SUR</div></div></div>',
            'tags': ['Chile'],
        },
        'LEDRIUM_C_CENTER': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>COSTANERA CENTER<span style="margin-left: 3px; font-size: 12px;">(LEDRIUM)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMARA_LEDRIUM_COSTANERA_CENTER.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">COSTANERA CENTER</div></div></div>',
            'tags': ['Chile'],
        },
        'LEDRIUM_FARELLONES': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>FARELLONES<span style="margin-left: 3px; font-size: 12px;">(LEDRIUM)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMARA_LEDRIUM_FARELLONES.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">FARELLONES</div></div></div>',
            'tags': ['Chile'],
        },
        'LEDRIUM_PROVIDENCIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>PROVIDENCIA<span style="margin-left: 3px; font-size: 12px;">(LEDRIUM)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMARA_LEDRIUM_PROVIDENCIA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PROVIDENCIA</div></div></div>',
            'tags': ['Chile'],
        },
        'LEDRIUM_TOBALABA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>TOBALABA<span style="margin-left: 3px; font-size: 12px;">(LEDRIUM)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMARA_LEDRIUM_TOBALABA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TOBALABA</div></div></div>',
            'tags': ['Chile'],
        },
        'LEDRIUM_CAM_MAS_RECIENTE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>STGO. LEDRIUM<span style="margin-left: 3px; font-size: 12px;">(MAS RECIENTE)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCDMqTaUZsY3ElB4xWpO8tFA&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SANTIAGO</div></div></div>',
            'tags': ['Chile'],
        },
        'VALPARAISO_BAHIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>VALPARAISO BAHIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMARA_VALPARAISO.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VALPARAISO BAHIA</div></div></div>',
            'tags': ['Chile'],
        },
        'VALPARAISO_CIUDAD': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>VALPARAISO CIUDAD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCXaQjESu5cdF1CGH1aAA52Q&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VALPARAISO CIUDAD</div></div></div>',
            'tags': ['Chile'],
        },
        'V_DEL_MAR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>VIÑA DEL MAR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCLir6Xg0TVDGccruOZp8jaQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VIÑA DEL MAR</div></div></div>',
            'tags': ['Chile'],
        },
        'V_DEL_MAR_CAM_AV_PERU': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>VIÑA DEL MAR - AVENIDA PERU',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMARA_MAREJADA_UV_V_DEL_MAR_AV_PERU.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VIÑA DEL MAR - AVENIDA PERU</div></div></div>',
            'tags': ['Chile'],
        },
        'V_DEL_MAR_CAM_PLAYA_ACAPULCO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>VIÑA DEL MAR - PLAYA ACAPULCO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMARA_MAREJADA_UV_V_DEL_MAR_PLAYA_ACAPULCO.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VIÑA DEL MAR - PLAYA ACAPULCO</div></div></div>',
            'tags': ['Chile'],
        },
        'V_DEL_MAR_CAM_PLAYA_REÑACA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>VIÑA DEL MAR - PLAYA REÑACA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMARA_MAREJADA_UV_V_DEL_MAR_PLAYA_REÑACA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VIÑA DEL MAR - PLAYA REÑACA</div></div></div>',
            'tags': ['Chile'],
        },
        'V_DEL_MAR_CAM_MAS_RECIENTE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>VIÑA DEL MAR<span style="margin-left: 3px; font-size: 12px;">(MAS RECIENTE)</span>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCMfVFofrKT5qV71nG-sDBRg&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VIÑA DEL MAR</div></div></div>',
            'tags': ['Chile'],
        },
        'OSORNO_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>OSORNO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCbOdujzxdR-D-o1jKLr96CA&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">OSORNO</div></div></div>',
            'tags': ['Chile'],
        },
        'PUNTA_ARENAS_CAM_YT': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/cl.svg" title="CHILE"></img>PUNTA ARENAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCKBgtFx0lRnflT3uBD7ppLw&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PUNTA ARENAS</div></div></div>',
            'tags': ['Chile'],
        },
        'CAPITOLIO_EEUU_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>CAPITOLIO EEUU',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMARA_CAPITOLIO_EEUU.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAPITOLIO EEUU</div></div></div>',
            'tags': ['Estados Unidos'],
        },
        'NYC_Brooklyn_Bridge': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>NYC BROOKLYN BRIDGE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KGuCGd726RA?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/KGuCGd726RA" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">NYC BROOKLYN BRIDGE</div></a></div>',
            'tags': ['Estados Unidos'],
        },
        'Lower_Manhattan_New_York_Harbor': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>NYC LOWER MANHATTAN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Vj0XKu6AoOw?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/Vj0XKu6AoOw" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">NYC LOWER MANHATTAN & NEW YORK HARBOR</div></a></div>',
            'tags': ['Estados Unidos'],
        },
        'Times_Square_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>TIMES SQUARE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/AdUw5RdyZxI?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/AdUw5RdyZxI" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">TIMES SQUARE</div></a></div>',
            'tags': ['Estados Unidos'],
        },
        'Times_Square_2_DUFFY_SQUARE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>TIMES SQUARE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/mNawBricEYw?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/mNawBricEYw" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">TIMES SQUARE: DUFFY SQUARE</div></a></div>',
            'tags': ['Estados Unidos'],
        },
        'Times_Square_3_EXPRESS_VIEW': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>TIMES SQUARE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6dtpPYTQaSQ?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/OBmXqlPxtAQ" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">TIMES SQUARE: EXPRESS VIEW</div></a></div>',
            'tags': ['Estados Unidos'],
        },
        'Times_Square_4_1560_BROADWAY': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/us.svg" title="ESTADOS UNIDOS"></img>TIMES SQUARE 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Hb-jD7q6Tqw?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/4qyZLflp-sI" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">TIMES SQUARE: 1540 BROADWAY</div></a></div>',
            'tags': ['Estados Unidos'],
        },
        'Four_Seasons_Hotel_Buenos_Aires': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>FOUR SEASONS HOTEL BS.As',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/if91GyWP3zQ?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/if91GyWP3zQ" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">FOUR SEASONS HOTEL BUENOS AIRES</div></a></div>',
            'tags': ['Argentina'],
        },
        'Ushuaia': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/ar.svg" title="ARGENTINA"></img>USHUAIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/CAMARA_USHUAIA.html" frameborder="0"></iframe><a href="" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">USHUAIA</div></a></div>',
            'tags': ['Argentina'],
        },
        'Tokio_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">photo_camera</span><img style="height: 15px; width: auto; margin-right: 10px;" src="https://flagcdn.com/jp.svg" title="JAPON"></img>TOKYO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QOjmvL3e7Lc?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/QOjmvL3e7Lc" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">TOKYO</div></a></div>',
            'tags': ['Japon'],
        },



        //REGIONALES
        //ARICA
        'ARICA_ARICA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>ARICA | ARICA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARICA_ARICA_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ARICA TV</div></div></div>',
            'tags': ['Chile', 'Arica'],
        },
        'ARICA_CAPPISSIMA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>ARICA | CAPPISSIMA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARICA_CAPPISSIMA_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAPPISSIMA TV</div></div></div>',
            'tags': ['Chile', 'Arica'],
        },
        //TARAPACA
        'TARAPACA_IQUIQUE_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>TARAPACA | IQUIQUE TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/TARAPACA_IQUIQUE_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">IQUIQUE TV</div></div></div>',
            'tags': ['Chile', 'Tarapaca'],
        },
        //ANTOFAGASTA
        'ANTOFAGASTA_ANTOFAGASTA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>ANTOFAGASTA | ANTOFAGASTA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ANTOFAGASTA_ANTOFAGASTA_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ANTOFAGASTA TV</div></div></div>',
            'tags': ['Chile', 'Antofagasta'],
        },
        'ANTOFAGASTA_LRP_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>ANTOFAGASTA | LRP TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ANTOFAGASTA_LRP_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">LRP TV</div></div></div>',
            'tags': ['Chile', 'Antofagasta'],
        },
        'ANTOFAGASTA_AM_CANAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>ANTOFAGASTA | AM CANAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ANTOFAGASTA_AM_CANAL.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">AM CANAL</div></div></div>',
            'tags': ['Chile', 'Antofagasta'],
        },
        //Atacama
        'ATACAMA_ATACAMA TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>ATACAMA | ATACAMA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ATACAMA_ATACAMA_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ATACAMA TV</div></div></div>',
            'tags': ['Chile', 'Atacama'],
        },
        'ATACAMA_HOLVOET_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>ATACAMA | HOLVOET TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ATACAMA_HOLVOET_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">HOLVOET TV</div></div></div>',
            'tags': ['Chile', 'Atacama'],
        },
        //Coquimbo
        'COQUIMBO_MIRADIO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>COQUIMBO | MI RADIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/COQUIMBO_MIRADIO_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">MI RADIO TV</div></div></div>',
            'tags': ['Chile', 'Coquimbo'],
        },
        //VALPARAISO
        'VALPARAISO_CANAL_2_SAN_ANTONIO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>VALPARAISO | CANAL 2 SAN ANTONIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/VALPARAISO_CANAL2.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 2 SAN ANTONIO</div></div></div>',
            'tags': ['Chile', 'Valparaiso'],
        },
        'VALPARAISO_VALPARAISO_VTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>VALPARAISO | VTV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/VALPARAISO_VTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">VTV</div></div></div>',
            'tags': ['Chile', 'Valparaiso'],
        },
        'VALPARAISO_GIROVISUAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>VALPARAISO | GIROVISUAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/VALPARAISO_GIROVISUAL.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">GIROVISUAL</div></div></div>',
            'tags': ['Chile', 'Valparaiso'],
        },
        //RM
        'METROPOLITANA_STGO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>RM | STGO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/METROPOLITANA_STGO_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">STGO TV</div></div></div>',
            'tags': ['Chile','Santiago','Metropolitana'],
        },
        'METROPOLITANA_TVR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>RM | TVR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/METROPOLITANA_TVR.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVR</div></div></div>',
            'tags': ['Chile','Santiago','Metropolitana'],
        },
        'METROPOLITANA_PURANOTICIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>RM | PURANOTICIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/PURANOTICIA_CL.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PURANOTICIA</div></div></div>',
            'tags': ['Chile','Santiago','Metropolitana'],
        },
        //OHIGGINS
        'OHIGGINS_TELECANAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>OHIGGINS | TELECANAL SANTA CRUZ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/OHIGGINS_TELECANAL.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TELECANAL STA. CRUZ</div></div></div>',
            'tags': ['Chile', 'Ohiggins'],
        },
        //MAULE
        'MAULE_CAMPUS_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>MAULE | CAMPUS UTALCA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_CAMPUS_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CAMPUS UTALCA TV</div></div></div>',
            'tags': ['Chile'],
        },
        'MAULE_TELECANAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>MAULE | TELECANAL TALCA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_TELECANAL.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TELECANAL TALCA</div></div></div>',
            'tags': ['Chile', 'Maule'],
        },
        'MAULE_CONTIVISION': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>MAULE | CONTIVISION',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_CONTIVISION.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CONTIVISION</div></div></div>',
            'tags': ['Chile', 'Maule'],
        },
        'MAULE_TV5_LINARES': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>MAULE | TV5 LINARES',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_TV5LINARES.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV5 LINARES</div></div></div>',
            'tags': ['Chile', 'Maule'],
        },
        'MAULE_UTV_SANCLEMENTE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>MAULE | UTV SANCLEMENTE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_UTVSANCLEMENTE.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">UTV SANCLEMENTE</div></div></div>',
            'tags': ['Chile', 'Maule'],
        },
        //BIOBIO
        'BIOBIO_CANAL9_BIOBIO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>BIOBIO | CANAL 9 BIOBIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/BIOBIO_CANAL9BIOBIOTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 9 BIOBIO TV</div></div></div>',
            'tags': ['Chile', 'Bio Bio'],
        },
        'BIOBIO_TVU': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>BIOBIO | TVU',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/BIOBIO_TVU.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TVU</div></div></div>',
            'tags': ['Chile', 'Bio Bio'],
        },
        'BIOBIO_TV8': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>BIOBIO | TV8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/BIOBIO_TV8.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV8</div></div></div>',
            'tags': ['Chile'],
        },
        'BIOBIO_ENERGIA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>BIOBIO | ENERGIA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/BIOBIO_ENERGIATV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ENERGIA TV</div></div></div>',
            'tags': ['Chile', 'Bio Bio'],
        },
        'BIOBIO_EL3DECONCE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>BIOBIO | EL 3 DE CONCE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/BIOBIO_EL3DECONCE.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EL 3 DE CONCE</div></div></div>',
            'tags': ['Chile', 'Bio Bio'],
        },
        //ARAUCANIA
        'ARAUCANIA_TEMUCO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>ARAUCANIA | TEMUCO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARAUCANIA_TEMUCO_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TEMUCO TV</div></div></div>',
            'tags': ['Chile', 'Araucania'],
        },
        'ARAUCANIA_LTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>ARAUCANIA | LTV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARAUCANIA_LTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">LTV</div></div></div>',
            'tags': ['Chile', 'Araucania'],
        },
        'ARAUCANIA_PUCON_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>ARAUCANIA | PUCON TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARAUCANIA_PUCONTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PUCON TV</div></div></div>',
            'tags': ['Chile', 'Araucania'],
        },
        'ARAUCANIA_TELEANGOL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>ARAUCANIA | TELEANGOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARAUCANIA_TELEANGOL.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TELEANGOL</div></div></div>',
            'tags': ['Chile', 'Araucania'],
        },
        'ARAUCANIA_RADIO_EDELWEISS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>ARAUCANIA | RADIO EDELWEISS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARAUCANIA_RADIO_EDELWEISS.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RADIO EDELWEISS</div></div></div>',
            'tags': ['Chile', 'Araucania'],
        },
        //LOS LAGOS
        'LOS_LAGOS_OSORNO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>LOS LAGOS | OSORNO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_OSORNO_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">OSORNO TV</div></div></div>',
            'tags': ['Chile', 'Los Lagos'],
        },
        'LOS_LAGOS_TVINET': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>LOS LAGOS | TV INET',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_TVINET.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">TV INET</div></div></div>',
            'tags': ['Chile', 'Los Lagos'],
        },
        'LOS_LAGOS_CANAL5_PTO_MONTT': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>LOS LAGOS | CANAL 5 PUERTO MONTT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_CANAL5_PTOMONTT.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 5 PUERTO MONTT</div></div></div>',
            'tags': ['Chile', 'Los Lagos'],
        },
        'LOS_LAGOS_DECIMA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>LOS LAGOS | DECIMA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_DECIMA_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">DECIMA TV</div></div></div>',
            'tags': ['Chile', 'Los Lagos'],
        },
        'LOS_LAGOS_CANAL2_QUELLON': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>LOS LAGOS | CANAL 2 QUELLON',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_CANAL2_QUELLON.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 2 QUELLON</div></div></div>',
            'tags': ['Chile', 'Los Lagos'],
        },
        'LOS_LAGOS_MUNICIPIOTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>LOS LAGOS | CASTRO MUNICIPIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_CASTROMUNICIPIO.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CASTRO MUNICIPIO TV</div></div></div>',
            'tags': ['Chile', 'Los Lagos'],
        },
        'LOS_LAGOS_PATAGONIA_RADIOTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>LOS LAGOS | PATAGONIA RADIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_PATAGONIARADIOTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PATAGONIA RADIO TV</div></div></div>',
            'tags': ['Chile', 'Los Lagos'],
        },
        //AYSEN
        'AYSEN_AYSEN TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>AYSEN | AYSEN TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/AYSEN_AYSENTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">AYSEN TV</div></div></div>',
            'tags': ['Chile', 'Aysen'],
        },
        'AYSEN_CANAL11_AYSEN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>AYSEN | CANAL 11 AYSEN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/AYSEN_CANAL11.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CANAL 11</div></div></div>',
            'tags': ['Chile', 'Aysen'],
        },
        'RLN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>AYSEN | RADIO LAS NIEVES',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIOLASNIEVES.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RADIO LAS NIEVES</div></div></div>',
            'tags': ['Chile', 'Aysen'],
        },
        'PANORAMICA_INFORMATIVA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round TextoIconoNaranja">tv</span>AYSEN | RADIO PANORAMICA INFORMATIVA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_PANORAMICAINFORMATIVA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RADIO PANORAMICA INFORMATIVA</div></div></div>',
            'tags': ['Chile', 'Aysen'],
        },
        'GENIAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>AYSEN | RADIO GENIAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_GENIAL.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RADIO GENIAL</div></div></div>',
            'tags': ['Chile', 'Aysen'],
        },
        'CANAL_SUR_PATAGONIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>AYSEN | CANAL SUR PATAGONIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_CANALSURPATAGONIA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RADIO CANAL SUR PATAGONIA</div></div></div>',
            'tags': ['Chile', 'Aysen'],
        },
        'AYSEN_ROCCO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>AYSEN | ROCCO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/AYSEN_ROCCOTV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ROCCO TV</div></div></div>',
            'tags': ['Chile', 'Aysen'],
        },
        'AYSEN_SANTAMARIA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>AYSEN | SANTA MARIA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/AYSEN_SANTAMARIA_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SANTA MARIA TV</div></div></div>',
            'tags': ['Chile', 'Aysen'],
        },
        'AYSEN_LA_MELINKANA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>AYSEN | LA MELINKANA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/AYSEN_LAMELINKANATV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SANTA MARIA TV</div></div></div>',
            'tags': ['Chile', 'Aysen'],
        },
        //MAGALLANES
        'MAGALLANES_ITV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>MAGALLANES | ITV PATAGONIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAGALLANES_ITV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ITV PATAGONIA</div></div></div>',
            'tags': ['Chile', 'Magallanes'],
        },
        'MAGALLANES_PINGUINO TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>MAGALLANES | PINGUINO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAGALLANES_PINGUINO_TV.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">PINGUINO TV</div></div></div>',
            'tags': ['Chile', 'Magallanes'],
        },
        'RADIO_POLAR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>MAGALLANES | RADIO POLAR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/RADIO_POLAR.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RADIO POLAR</div></div></div>',
            'tags': ['Chile', 'Magallanes'],
        },


        //SISMOS
        'EARLY_EST_DETEC': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_ALOMAX.svg"></img>DETECTOR SISMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="MonitorEARLY-EST_DETECTOR.html" frameborder="0" scrolling="no"></iframe></div>',
            'tags': ['Sismos','Informaciones'],
        },
        'EARLY_EST_SIS': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_ALOMAX.svg"></img>ULTIMOS SISMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="MonitorEARLY-EST_SISMOS.html" frameborder="0"></iframe></div>',
            'tags': ['Sismos','Informaciones'],
        },

        //ESPACIO
        'ISS_TRACKER': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Ubicacion.svg"></img><img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_ESA.svg"></img>ISS TRACKER MAP 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS_ESA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ISS TRACKER</div></div></div>',
            'tags': ['Espacio','Informaciones'],
        },
        'ISS_TRACKER_2': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Ubicacion.svg"></img>ISS TRACKER MAP 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ISS TRACKER</div></div></div>',
            'tags': ['Espacio','Informaciones'],
        },
        'ISS_TRACKER_3': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Ubicacion.svg"></img>ISS TRACKER MAP 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS_2_2.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ISS TRACKER</div></div></div>',
            'tags': ['Espacio','Informaciones'],
        },
        'ISS_TRACKER_4': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Icono_Ubicacion.svg"></img>ISS TRACKER MAP 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS_3.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ISS TRACKER</div></div></div>',
            'tags': ['Espacio','Informaciones'],
        },
        'NASA_TV_PUBLIC': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_NASA.svg"></img>NASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NASATV_PUBLIC.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NASA TV PUBLIC</div></div></div>',
            'tags': ['Espacio','NASA'],
        },
        'NASA_TV_MEDIA': {
            'nombre': '<img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_NASA.svg"></img>NASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NASATV_MEDIA.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NASA TV MEDIA</div></div></div>',
            'tags': ['Espacio','NASA'],
        },
        'ESA_1': {
            'nombre': '<img id="Logo" style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_ESA.svg"></img>ESA WEB TV 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/ESATV_1.html" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ESA WEB TV 1</div></div></div>',
            'tags': ['Espacio','ESA'],
        },
        'ROSCOSMOS': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_ROSCOSMOS.svg"></img>ROSCOSMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCOcpUgXosMCIlOsreUfNFiA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ISS TRACKER</div></div></div>',
            'tags': ['Espacio','Roscosmos'],
        },
        'NASA_YT_PUBLIC': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_NASA.svg"></img>NASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NASATV_PUBLIC_YOUTUBE.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NASA TV PUBLIC</div></div></div>',
            'tags': ['Espacio','NASA'],
        },
        'NASA_YT_MEDIA': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_NASA.svg"></img>NASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NASATV_MEDIA_YOUTUBE.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NASA TV MEDIA</div></div></div>',
            'tags': ['Espacio','NASA'],
        },
        'NASA_YT_ISS_HD': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_NASA.svg"></img>ISS LIVE HD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NASATV_ISS_HD_YOUTUBE.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ISS HD</div></div></div>',
            'tags': ['Espacio','NASA'],
        },
        'NASA_YT_ISS_SD': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_NASA.svg"></img>ISS LIVE SD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NASATV_ISS_SD_YOUTUBE.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ISS SD</div></div></div>',
            'tags': ['Espacio','NASA'],
        },
        'NASA_YT_KSC': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_NASA.svg"></img>KENNEDY SPACE CENTER',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/NASATV_KSC.html" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NASA KENNEDY SPACE CENTER</div></div></div>',
            'tags': ['Espacio','NASA'],
        },
        'NASA_YT_VIDEO': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_NASA.svg"></img>NASA VIDEO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC_aP7p621ATY_yAa8jMqUVA&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NASA TV PUBLIC</div></div></div>',
            'tags': ['Espacio','NASA'],
        },
        'NASATV_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><img style="height: 20px; width: auto; margin-right: 10px;" src="Imagenes/Logo_NASA.svg"></img>NASA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCLA_DiR1FfKNvjuUpBHmylQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NASA</div></div></div>',
            'tags': ['Espacio','NASA'],
        },
        'SPACEX': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>SPACEX',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCtI0Hodo5o5dUb67FeUjDeA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SPACEX</div></div></div>',
            'tags': ['Espacio'],
        },
        'BLUE_ORIGIN': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>BLUE ORIGIN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCVxTHEKKLxNjGcvVaZindlg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">BLUE ORIGIN</div></div></div>',
            'tags': ['Espacio'],
        },
        'ULA': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>ULA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCnrGPRKAg1PgvuSHrRIl3jg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ULA</div></div></div>',
            'tags': ['Espacio'],
        }, 
        'ARIANESPACE': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>ARIANESPACE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCRn9F2D9j-t4A-HgudM7aLQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">ARIANESPACE</div></div></div>',
            'tags': ['Espacio'],
        },
        'Rocket_Lab': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>ROCKET LAB',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCsWq7LZaizhIi-c-Yo_bcpw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SPACEX</div></div></div>',
            'tags': ['Espacio'],
        }, 
        'Virgin_Galactic': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>VIRGIN GALACTIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UClcvOr7LV8tlJwJvkNMmnKg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">Virgin Galactic</div></div></div>',
            'tags': ['Espacio'],
        },
        'CGTN': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CGTN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCgrNz-aDmcr2uuto8_DL2jg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CGTN</div></div></div>',
            'tags': ['China'],
        },
        'RDRONE_UY_YOUTUBE': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>RDRONE UY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC2BCLTaBqFwyc3CZlkEHg_Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">RDRONE UY</div></div></div>',
            'tags': ['Espacio'],
        },
        'SPACEX_STORM_YOUTUBE': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>SPACEX STORM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCxjGXSXK3Ss-mkiZ-wYtjtg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SPACEX STORM</div></div></div>',
            'tags': ['Espacio'],
        },
        'FRONTERA_ESPACIAL_YOUTUBE': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>FRONTERA ESPACIAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCurxSOUxQszWp-5juh48wmg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">FRONTERA ESPACIAL</div></div></div>',
            'tags': ['Espacio'],
        },
        'CONEXION_ESPACIAL_YOUTUBE': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CONEXION ESPACIAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCS6DjxV3L8XdnGa70ZxS_FA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CONEXION ESPACIAL</div></div></div>',
            'tags': ['Espacio'],
        },
        'EXPLORACION_ESPACIAL_YOUTUBE': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>EXPLORACION ESPACIAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCtcUKKBhYEf7lX5UkF7279Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EXPLORACION ESPACIAL</div></div></div>',
            'tags': ['Espacio'],
        },
        'EXPLORANDO_EL_ESPACIO_YOUTUBE': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>EXPLORANDO EL ESPACIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCGP4eGnUxu7BGaqR4m-55fg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EXPLORANDO EL ESPACIO</div></div></div>',
            'tags': ['Espacio'],
        },
        'CONTROL_DE_MISION_YOUTUBE': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>CONTROL DE MISION',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCch5At0S1Q-qqCM3iilFI5w&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">CONTROL DE MISION</div></div></div>',
            'tags': ['Espacio'],
        },
        'NSF:_NASA_SPACE_FLIGHT_YOUTUBE': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>NSF: NASASPACEFLIGHT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCSUu1lih2RifWkKtDOJdsBA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">NSF: NASASPACEFLIGHT</div></div></div>',
            'tags': ['Espacio'],
        },
        'EVERYDAY_ASTRONAUT_YOUTUBE': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>EVERYDAY ASTRONAUT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC6uKrU_WqJ1R2HMTY3LIx5Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">EVERY ASTRONAUT</div></div></div>',
            'tags': ['Espacio'],
        },
        'LAB_PADRE_YOUTUBE': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">photo_camera</span>LAB PADRE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCFwMITSkc1Fms6PoJoh1OUQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">LAB PADRE</div></div></div>',
            'tags': ['Espacio'],
        },
        'THE_LAUNCH_PAD_YOUTUBE': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">photo_camera</span>THE LAUNCH PAD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCGCndz0n0NHmLHfd64FRjIA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">THE LAUNCH PAD</div></div></div>',
            'tags': ['Espacio'],
        },
        '321LAUNCH_CAM_YOUTUBE': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">photo_camera</span>321LAUNCH CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCUccOGcvTNrJuihXhYsrp7w&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">321LAUNCH CAM</div></div></div>',
            'tags': ['Espacio'],
        },
        'SPACEFLIGHT_NOW_YOUTUBE': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">photo_camera</span>SPACEFLIGHT NOW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCoLdERT4-TJ82PJOHSrsZLQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SPACEFLIGHT NOW</div></div></div>',
            'tags': ['Espacio'],
        }, 
        'COSMO_SAPIENS_YOUTUBE': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">photo_camera</span>COSMOSAPIENS ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UC3ZODI-xZfdPanPP6tKUg9g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">COSMOSAPIENS</div></div></div>',
            'tags': ['Espacio'],
        }, 
        'INFINITE_SPACE_YOUTUBE': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">photo_camera</span>INFINITE SPACE ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCn8SmzG1xXx_inu-XADxcMg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">INFINITE SPACE</div></div></div>',
            'tags': ['Espacio'],
        },
        'SPACEX_MISSIONS_YOUTUBE': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons-round">photo_camera</span>SPACEX MISSIONS ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCE_z1X3v8ZdBNHn9IFHBfNw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">SPACEX MISSIONS</div></div></div>',
            'tags': ['Espacio'],
        },
        'COPANO_Twitch': {
            'nombre': '<img style="height: 20px; width:auto; margin-right: 10px;" src="Imagenes/Logo_Twitch.svg"></img><span style="margin-right: 10px;" class="material-icons-round">tv</span>COPANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=copano&parent=ainmcl.github.io" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">COPANO</div></div></div>',
            'tags': ['Noticias'],
        },
        'Copano_YT': {
            'nombre': '<img id="Logo" style="height: 15px; width: auto; margin-right: 10px;" src="Imagenes/Logo_YT.svg"></img>COPANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/live_stream?channel=UCoMBIlBDtaxuqUfTLzV6PDQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1">COPANO</div></div></div>',
            'tags': ['Noticias'],
        },
        'Barras_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>BARRAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <img class="embed-responsive-item" src="Imagenes/SinSeñal.png" frameborder="0"></img></div>',
            'tags': ['SinTag'],
        },
        'Barras_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>BARRAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <img class="embed-responsive-item" src="Imagenes/SinSeñal.png" frameborder="0"></img></div>',
            'tags': ['SinTag'],
        },
        'Barras_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">tv</span>BARRAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <img class="embed-responsive-item" src="Imagenes/SinSeñal.png" frameborder="0"></img></div>',
            'tags': ['SinTag'],
        },
        'RELOJES': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">schedule</span>RELOJES CHILE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Reloj/Reloj_Pantalla_CHILE.html" frameborder="0"></iframe></div>',
            'tags': ['SinTag'],
        },
        'RELOJES2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">schedule</span>RELOJES INTERNACIONAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Reloj/Reloj_Pantalla_INTERNACIONAL_1.html" frameborder="0"></iframe></div>',
            'tags': ['SinTag'],
        },
        'RELOJES3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons-round">schedule</span>RELOJES INTERNACIONAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Reloj/Reloj_Pantalla_INTERNACIONAL_2.html" frameborder="0"></iframe></div>',
            'tags': ['SinTag'],
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

        // Crear la div BotonCambiarSeñal
        var divBotonCambiarSeñal = document.createElement("div");
        divBotonCambiarSeñal.classList.add("BotonCambiarSeñal");

        // Crear el botón BotonCambiarSeñalTexto
        var botonCambiarSeñalTexto = document.createElement("div");
        botonCambiarSeñalTexto.classList.add("BotonCambiarSeñalTexto");
        botonCambiarSeñalTexto.classList.add("BotonEstiloRojo");
        botonCambiarSeñalTexto.classList.add("waves-effect");
        botonCambiarSeñalTexto.classList.add("waves-light");
        botonCambiarSeñalTexto.setAttribute("data-canal", canal);
        botonCambiarSeñalTexto.title = "Borrar Señal";

        // Agregar el ícono al botón
        var icono = document.createElement("span");
        icono.classList.add("material-icons-round");
        icono.textContent = "delete";

        // Agregar el ícono al botón
        botonCambiarSeñalTexto.appendChild(icono);

        // Agregar el botón a la div
        divBotonCambiarSeñal.appendChild(botonCambiarSeñalTexto);

        // Agregar la div al canal
        thisCanal.appendChild(divBotonCambiarSeñal);

        // Asociar evento de clic al botón para eliminar el canal
        botonCambiarSeñalTexto.addEventListener("click", function() {
            App.remove(canal);
        });

        // Crear el botón BotonCambiarSeñalTexto (Refrescar)
        var botonRefrescar = document.createElement("div");
        botonRefrescar.classList.add("BotonCambiarSeñalTexto");
        botonRefrescar.classList.add("waves-effect");
        botonRefrescar.classList.add("waves-light");
        botonRefrescar.setAttribute("data-canal", canal);
        botonRefrescar.title = "Refrescar Señal";

        // Agregar el ícono al botón
        var iconoRefrescar = document.createElement("span");
        iconoRefrescar.classList.add("material-icons-round");
        iconoRefrescar.textContent = "refresh";

        // Agregar el ícono al botón
        botonRefrescar.appendChild(iconoRefrescar);

        // Asociar evento de clic al botón para refrescar la señal (puedes definir la función handleRefrescarClick)
        botonRefrescar.addEventListener("click", function() {
            App.refrescar(canal); // Ajusta el nombre de la función según sea necesario
        });

        // Agregar el botón a la div
        divBotonCambiarSeñal.appendChild(botonRefrescar);

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
    refrescar: function(canal) {
        // Obtén el elemento del canal que quieres refrescar (puede variar dependiendo de tu implementación)
        var canalElement = document.querySelector('div[data-canal="' + canal + '"]');

        // Si encuentras el elemento del canal
        if (canalElement) {
            // Obtén el iframe dentro del canal
            var iframe = canalElement.querySelector('iframe');

            // Si encuentras el iframe
            if (iframe) {
                // Vuelve a cargar el contenido del iframe
                iframe.src = iframe.src;
            } else {
                console.error("No se pudo encontrar el iframe dentro del elemento del canal para refrescar");
            }
        } else {
            console.error("No se pudo encontrar el elemento del canal para refrescar");
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

        // Obtener los parámetros de la URL
        const urlParams = new URLSearchParams(window.location.search);

        // Verificar si hay parámetros y agregar canales según los parámetros
        if (urlParams.has('Categoria')) {
            const Categoria = urlParams.get('Categoria');
            if (Categoria === 'Chile') {
                App.add("24HTVN");
                App.add("MEGANOTICIAS");
                App.add("CHV_NOTICIAS");
                App.add("T13");
            } else if (Categoria === 'Argentina') {
                App.add("TN_ARG_YT");
                App.add("LA_NACION_ARG_YT");
                App.add("CRONICATV_ARG_YT");
                App.add("A24_ARG_YT");
                App.add("C5N_ARG_YT");
                App.add("CANAL_26_ARG_YT");
            } else if (Categoria === 'Noticias') {
                App.add("24HTVN");
                App.add("TN_ARG_YT");
                App.add("FRANCE24_ENG");
                App.add("24HTVE");
                App.add("CNN_INTERNACIONAL");
                App.add("SKY_NEWS");
            }
        } else {
            // Si no hay parámetros, agregar canales predeterminados
            App.add("cima");
            if (!App.isMobile()) {
                App.add("24HTVN");
                App.add("MEGANOTICIAS");
                App.add("CHV_NOTICIAS");
                App.add("T13");
                App.add("RELOJES");
                App.add("CNN_CHILE");
            }
        }
    },


    };



    App.init();

    //Señales por Fila
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

    // Evento para filtrar canales por tag
    function filtrarPorTag(tagSeleccionado) {
        const seccionCanales = document.getElementById("PorFiltrar"); // Obtener la sección de la lista de canales
        seccionCanales.innerHTML = ''; // Limpiar la lista de canales para mostrar nuevos resultados

        for (const llave in App.channels) {
            const canalTags = App.channels[llave].tags.map(tag => tag.toLowerCase());

            // Comprobar si el tag seleccionado está presente en las etiquetas del canal
            if (!tagSeleccionado || canalTags.includes(tagSeleccionado.toLowerCase())) {
                const buttonTV = document.createElement("button");
                buttonTV.classList.add("btn");
                buttonTV.classList.add("BotonTV_Señales");
                buttonTV.classList.add("waves-effect");
                buttonTV.classList.add("waves-grisclaro");
                buttonTV.setAttribute("data-canal", llave);
                buttonTV.innerHTML = App.channels[llave].nombre;

                seccionCanales.appendChild(buttonTV);

                buttonTV.addEventListener("click", function () {
                    if (buttonTV.getAttribute("class").includes("BotonTV_Señales")) {
                        App.add(llave);
                    } else if (buttonTV.getAttribute("class").includes("BotonTV_SeñalSeleccionada")) {
                        App.remove(llave);
                    }
                });
            }
        }
    }

    // Agregar evento al select para filtrar los canales por tag
    const selectTag = document.getElementById('tag-select');
    selectTag.addEventListener('change', function() {
        const tagSeleccionado = selectTag.value;
        filtrarPorTag(tagSeleccionado);
    });


    //BuscadorNuevo
    // Evento para filtrar canales por nombre o ID
    function filtrarPorNombreID() {
        const seccionCanales = document.getElementById("PorFiltrar"); // Obtener la sección de la lista de canales
        seccionCanales.innerHTML = ''; // Limpiar la lista de canales para mostrar nuevos resultados

        const textoBuscado = buscador.value.toLowerCase().trim(); // Obtener el texto del buscador y convertirlo a minúsculas

        for (const llave in App.channels) {
            const nombreCanal = App.channels[llave].nombre.toLowerCase();
            const canalId = llave.toLowerCase();

            // Comprobar si el nombre o ID del canal coincide con el texto buscado
            if (nombreCanal.includes(textoBuscado) || canalId.includes(textoBuscado)) {
                const buttonTV = document.createElement("button");
                buttonTV.classList.add("btn");
                buttonTV.classList.add("BotonTV_Señales");
                buttonTV.classList.add("waves-effect");
                buttonTV.classList.add("waves-grisclaro");
                buttonTV.setAttribute("data-canal", llave);
                buttonTV.innerHTML = App.channels[llave].nombre;

                seccionCanales.appendChild(buttonTV);

                buttonTV.addEventListener("click", function () {
                    if (buttonTV.getAttribute("class").includes("BotonTV_Señales")) {
                        App.add(llave);
                    } else if (buttonTV.getAttribute("class").includes("BotonTV_SeñalSeleccionada")) {
                        App.remove(llave);
                    }
                });
            }
        }
    }

    // Buscar
    const buscador = document.getElementById("buscador");
    buscador.addEventListener("input", filtrarPorNombreID);

    // Función para borrar el texto del input y restaurar la lista original
    function borrarTexto() {
        buscador.value = ''; // Borra el contenido del input
        filtrarPorNombreID(); // Restaurar la lista original
    }

    // Botón para borrar el texto del buscador
    const botonBorrar = document.getElementById('boton-borrar');
    botonBorrar.addEventListener('click', borrarTexto);