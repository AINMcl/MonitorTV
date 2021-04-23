
///canales/////////////////////////////////////////////////////////
var size = 6;

///6 = 2 PANTALLAS HORIZONTALMENTE///
///3 = 4 PANTALLAS HORIZONTALMENTE///
///4 = 3 PANTALLAS HORIZONTALMENTE///
var App = {
     channels: {
        
        '24HTVN': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_24HORAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Señal24HTVN.html" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">CANAL 24H</div></div></div>'
        },
        'CNN_CHILE': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_CNNCHILE2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalCNNCHILE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">CNN CHILE</div></div></div>'
        },
        'T13_MOVIL': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_T13_ENVIVO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalT13MOVIL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">T13 MOVIL</div></div></div>'
        },
        'MEGANOTICIAS': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_MEGANOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalMEGANOTICIAS.html" frameborder="0"></iframe><div href="../SeñalMEGANOTICIAS.html" class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">MEGANOTICIAS</div></div></div>'
        },
        '24PLAY': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_24PLAY.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Señal24PLAY.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">24PLAY</div></div></div>'
        },
        'LARED': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_LARED.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalLARED.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">LA RED</div></div></div>'
        },
        'TVN.cl': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_TVNCL.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://strm.tvn.cl/testbed/limpio.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">TVN</div></div></div>'
        },
        'TVN': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalTVN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">TVN</div></div></div>'
        },
        'TVN2': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_TVN2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalTVN2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">TVN2</div></div></div>'
        },
        'MEGA': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalMEGA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">MEGA</div></div></div>'
        },
        'CHV': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_CHV.jpg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalCHV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">CHV</div></div></div>'
        },
        'CANAL 13': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_CANAL13.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalCANAL13.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">CANAL 13</div></div></div>'
        },
        'Señal_Interna_24HTVN_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_24HTVN.svg"></img>SEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInterna24H_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SEÑAL 24H 1</div></div></div>'
        },
        'Señal_Interna_24HTVN_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_24HTVN.svg"></img> SEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInterna24H_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SEÑAL 24H 2</div></div></div>'
        },
        'Señal_Interna_24HTVN_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_24HTVN.svg"></img> SEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInterna24H_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SEÑAL 24H 3</div></div></div>'
        },
        'Señal_Interna_24HTVN_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_24HTVN.svg"></img>SEÑAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInterna24H_4.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SEÑAL 24H 4</div></div></div>'
        },
        'MEGANOTICIAS_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_MEGANOTICIAS2.svg"></img>SEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInternaMEGANOTICIAS_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">MEGANOTICIAS 1</div></div></div>'
        },
        'MEGANOTICIAS_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_MEGANOTICIAS2.svg"></img>SEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInternaMEGANOTICIAS_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">MEGANOTICIAS 2</div></div></div>'
        },
        'MEGANOTICIAS_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_MEGANOTICIAS2.svg"></img>SEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInternaMEGANOTICIAS_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">MEGANOTICIAS 3</div></div></div>'
        },
        'MEGANOTICIAS_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_MEGANOTICIAS2.svg"></img>SEÑAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInternaMEGANOTICIAS_4.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">MEGANOTICIAS 4</div></div></div>'
        },
        'Señal_Interna_CNNCHILE_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_CNNCHILE2.svg"></img> SEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalInternaCNNCHILE_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SEÑAL CNNCHILE 1</div></div></div>'
        },
        'TVSENADO': {
            'nombre': ' TVSENADO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalTVSENADO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SEÑAL CNNCHILE 1</div></div></div>'
        },
        'ADNRADIO': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_ADNRADIO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalADNRADIO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ADN RADIO</div></div></div>'
        },
        'PARQUEMET_CUMBRE': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Icono_Camara.svg"></img> PARQUEMET CUMBRE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalCAMPARQUEMET_CUMBRE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">PARQUEMET CUMBRE</div></div></div>'
        },
        'PARQUEMET_TERRAZA': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Icono_Camara.svg"></img> PARQUEMET TERRAZA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalCAMPARQUEMET_TERRAZA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">PARQUEMET TERRAZA</div></div></div>'
        },
        'PLAZAITALIA_CIMA': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Icono_Camara.svg"></img> PLAZA ITALIA CIMA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC4GOcOKkEefz5NamN4WyMFg&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">PARQUEMET TERRAZA</div></div></div>'
        },
        'PRESIDENCIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_GOB.svg"></img> PRESIDENCIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalPRESIDENCIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">PRESIDENCIA</div></div></div>'
        },
        'MEDIABANCO': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Icono_Antena2.svg"></img> MEDIABANCO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalMEDIABANCO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">MEDIABANCO</div></div></div>'
        },
        'REUTERS': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Icono_Antena2.svg"></img> REUTERS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalREUTERS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">REUTERS</div></div></div>'
        },
        'AFPTVLIVE': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Icono_Antena2.svg"></img> AFP TV LIVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalAFPTV_LIVE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">AFP TV LIVE</div></div></div>'
        },
        'RUPTLY': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Icono_Antena2.svg"></img><img style="height: 20px; width:auto:" src="../imagenes/Logo_YT.svg"></img>  RUPTLY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC5aeU5hk31cLzq_sAExLVWg&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">RUPTLY</div></div></div>'
        },
        'SPUTNIK': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Icono_Antena2.svg"></img><img style="height: 20px; width:auto:" src="../imagenes/Logo_YT.svg"></img>  SPUTNIK',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCI4lx9retCL7_cBmmceEQ8g&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPUTNIK</div></div></div>'
        },
        'TELEMUNDO': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Icono_Antena2.svg"></img> TELEMUNDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalTELEMUNDONOTICIAS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">TELEMUNDO</div></div></div>'
        },
        'TELEMUNDO_YT': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Icono_Antena2.svg"></img><img style="height: 20px; width:auto:" src="../imagenes/Logo_YT.svg"></img> TELEMUNDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRwA1NUcUnwsly35ikGhp0A&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">TELEMUNDO</div></div></div>'
        },
        'EURONEWS_ESP': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_EURONEWS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCyoGb3SMlTlB8CLGVH4c8Rw&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">EURONEWS</div></div></div>'
        },
        'FRANCE24ESP': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_FRANCE24.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUdOoVWuWmgo1wByzcsyKDQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">FRANCE24</div></div></div>'
        },
        '24HTVE': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_24HTVE.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/XBSRLazo64Y?autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">24H TVE</div></div></div>'
        },
        'TN': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_TN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalTN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">TN</div></div></div>'
        },
        //'CNN_ESP1': {
        //    'nombre': '</img><img style="height: 20px; width:auto:" src="../imagenes/Logo_CNNESPANOL.svg"></img></img>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC_lEiu6917IJz03TnntWUaQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">CNN ESPAÑOL</div></div></div>'
        //},
        //'CNN_ESP2': {
        //    'nombre': '</img><img style="height: 20px; width:auto:" src="../imagenes/Logo_CNNESP.svg"></img></img>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fKacUV-8WBo?autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">CNN ESPAÑOL</div></div></div>'
        //},
        'DWESP': {
            'nombre': '</img><img style="height: 20px; width:auto:" src="../imagenes/Logo_DW.svg"> DW ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCT4Jg8h03dD0iN3Pb5L0PMA&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">DW ESPAÑOL</div></div></div>'
        },
        
        'RT_ESP': {
            'nombre': '</img><img style="height: 20px; width:auto:" src="../imagenes/Logo_RT.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9DXGrOU5wKQ?autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">RT ESPAÑOL</div></div></div>'
        },
        'RELOJES': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Icono_Reloj.png"></img> RELOJES',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Reloj_Pantalla.html" frameborder="0"></iframe></div>'
        },
        'NASA_TV_PUBLIC': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_NASA.svg"></img> NASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalNASATVPUBLIC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">NASA TV PUBLIC</div></div></div>'
        },
        'NASA_TV_MEDIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_NASA.svg"></img> NASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../SeñalNASATVMEDIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">NASA TV MEDIA</div></div></div>'
        },
        'ISS_SD': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_NASA.svg"></img> ISS CAM SD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Señal_ISS_SD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ISS SD</div></div></div>'
        },
        'ISS_HD': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_NASA.svg"></img> ISS CAM HD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Señal_ISS_HD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ISS HD</div></div></div>'
        },
        '321LAUNCH_CAM': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_YT.svg"></img> 321LAUNCH CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUccOGcvTNrJuihXhYsrp7w&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">321LAUNCH CAM</div></div></div>'
        },
        'SPACEX': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_YT.svg"></img>  SPACEX',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCtI0Hodo5o5dUb67FeUjDeA&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX</div></div></div>'
        },
        'BLUE_ORIGIN': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_YT.svg"></img>  BLUE ORIGIN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCVxTHEKKLxNjGcvVaZindlg&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">BLUE ORIGIN</div></div></div>'
        },
        'NASASpaceflight ': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_YT.svg"></img>  NASASpaceflight ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCSUu1lih2RifWkKtDOJdsBA&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX</div></div></div>'
        },
        'Rocket_Lab ': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_YT.svg"></img>  Rocket Lab',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCsWq7LZaizhIi-c-Yo_bcpw&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX</div></div></div>'
        },
        'RDRONE_UY_YouTube': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_YT.svg"></img> RDRONE UY YT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC2BCLTaBqFwyc3CZlkEHg_Q&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">RDRONE UY</div></div></div>'
        },
        'SPACEX_STORM_YouTube': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_YT.svg"></img> SPACEX STORM YT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCxjGXSXK3Ss-mkiZ-wYtjtg&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX STORM</div></div></div>'
        }, 
        'Rocket_Lab': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_YT.svg"></img> Rocket Lab',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCsWq7LZaizhIi-c-Yo_bcpw&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX</div></div></div>'
        }, 
        'LapPadre_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_LABPADRE.svg"></img> Nerdle Cam',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/sTA0GTgFn5E?autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX</div></div></div>'
        }, 
        'LapPadre_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_LABPADRE.svg"></img> Lab Cam',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tYZaaz8UbRE?autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX</div></div></div>'
        }, 
        'LapPadre_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_LABPADRE.svg"></img> Launch Pad Cam',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/qCbgoqMcirI?autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX</div></div></div>'
        }, 
        'LapPadre_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_LABPADRE.svg"></img> Sentinel Cam',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/richjW1jj20?autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX</div></div></div>'
        },
        'RDRONE_UY_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="../imagenes/Logo_Twitch.png"></img> RDRONE UY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=rdroneuy&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">RDRONE UY</div></div></div>'
        },
        'RDRONE_UY_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="../imagenes/Logo_Twitch.png"></img> RDRONE UY CHAT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/rdroneuy/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">RDRONE UY</div></div></div>'
        },
        'SPACEX_STORM_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="../imagenes/Logo_Twitch.png"></img> SPACEX STORM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=spacexstorm&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX STORM</div></div></div>'
        },
        'SPACEX_STORM_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="../imagenes/Logo_Twitch.png"></img> SPACEX STORM CHAT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/spacexstorm/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX STORM</div></div></div>'
        },
        'COPANO_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="../imagenes/Logo_Twitch.png"></img> COPANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=copano&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX STORM</div></div></div>'
        },
        'COPANO_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="../imagenes/Logo_Twitch.png"></img> COPANO CHAT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/copano/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">SPACEX STORM</div></div></div>'
        },
        'KRAOESP_YouTube': {
            'nombre': '<img style="height: 20px; width:auto:" src="../imagenes/Logo_YT.svg"></img> KRAO ESP',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCZPR5ypKlxb1W_3RNIfWGKQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">RDRONE UY</div></div></div>'
        },
        'PantallaVacia1': {
            'nombre': '<img style="height: 20px; width:auto;" src="../imagenes/Icono_TV.svg"></img> VACIO 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="" frameborder="0"></iframe></div>'
        },
        'PantallaVacia2': {
            'nombre': '<img style="height: 20px; width:auto;" src="../imagenes/Icono_TV.svg"></img> VACIO 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="" frameborder="0"></iframe></div>'
        },
        'PantallaVacia3': {
            'nombre': '<img style="height: 20px; width:auto;" src="../imagenes/Icono_TV.svg"></img> VACIO 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="" frameborder="0"></iframe></div>'
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
    n.classList.remove("BotonBordeAZUL");
    n.classList.add("BotonBordeVERDE");
}
    },
remove: function(canal) {
    var findCanal = document.querySelector('div[data-canal="' + canal + '"]');
    var losCanales = document.getElementById("los-canales");
    if (findCanal != null) {
        losCanales.removeChild(findCanal);
        var n = document.querySelector('button[data-canal="' + canal + '"]');
        n.classList.remove("BotonBordeVERDE");
        n.classList.add("BotonBordeAZUL");
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
        buttonTV.classList.add("BotonBordeAZUL");
        buttonTV.setAttribute("data-canal", llave);
        buttonTV.innerHTML = App.channels[llave].nombre;
        let n = document.querySelector(".modal-body");
        n.appendChild(buttonTV);
        buttonTV.addEventListener("click", function () {
            if (buttonTV.getAttribute("class").includes("BotonBordeAZUL")) {
                App.add(llave);
            } else if (buttonTV.getAttribute("class").includes("BotonBordeVERDE")) {
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
