
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
        'CNN_CHILE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CNNCHILE2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNNCHILE.html" frameborder="0"></iframe><a href="SeñalCNNCHILE.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCNN CHILEㅤ</div></a></div>'
        },
        'MEGANOTICIAS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEGANOTICIAS.html" frameborder="0"></iframe><a href="SeñalMEGANOTICIAS.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤMEGANOTICIASㅤ</div></a></div>'
        //},
        //'T13_ENVIVO': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_T13_ENVIVO.svg"></img>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalT13_ENVIVO.html" frameborder="0"></iframe><a href="SeñalT13MOVIL.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤT13ㅤ</div></a></div>'
        },'T13_WEB_IFRAME': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_T13_ENVIVO.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_WebIframe.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalT13_ENVIVO_IFRAME_AINM_GITHUB.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤT13ㅤ</div></div></div>'
        },
        'TVN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVNㅤ</div></div></div>'
        },
        'TVN_WEB_IFRAME_AINMGITHUB_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_WebIframe.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalTVN_IFRAME_AINM_GITHUB.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVNㅤ</div></div></div>'
        },
        'MEGA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEGA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGAㅤ</div></div></div>'
        //},
        //'CHV': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCHV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHVㅤ</div></div></div>'
        },
        'CHV_WEB_IFRAME_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_WebIframe.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalCHV_IFRAME.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHVㅤ</div></div></div>'
        //},
        //'CANAL 13': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Canal13.svg"></img>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCANAL13.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 13ㅤ</div></div></div>'
        },
        'CANAL13_WEB_IFRAME_AINMGITHUB_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Canal13.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_WebIframe.svg"></img> AINM GITHUB',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalCANAL13_IFRAME_AINM_GITHUB.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 13ㅤ</div></div></div>'
        },
        '13E': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Canal13E.svg"></img>ﾠE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCANAL13_E.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 13Eㅤ</div></div></div>'
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
        'NTV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NTV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNTVㅤ</div></div></div>'
        },
        'TV_CHILE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVCHILE.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVCHILE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV CHILEㅤ</div></div></div>'
        },
        'WAPP_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/LogoTV_WappTV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalWAPPTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤWAPP TVㅤ</div></div></div>'
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
        'MEGANOTICIAS_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS2.svg"></img>ﾠSEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInternaMEGANOTICIAS_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGANOTICIAS 1ㅤ</div></div></div>'
        },
        'MEGANOTICIAS_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS2.svg"></img>ﾠSEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInternaMEGANOTICIAS_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGANOTICIAS 2ㅤ</div></div></div>'
        },
        'MEGANOTICIAS_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS2.svg"></img>ﾠSEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInternaMEGANOTICIAS_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGANOTICIAS 3ㅤ</div></div></div>'
        },
        'MEGANOTICIAS_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS2.svg"></img>ﾠSEÑAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInternaMEGANOTICIAS_4.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGANOTICIAS 4ㅤ</div></div></div>'
        },
        'Señal_Interna_CNNCHILE_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CNNCHILE2.svg"></img>ﾠSEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInternaCNNCHILE_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNNCHILE 1ㅤ</div></div></div>'
        },
        'CHVEVENTOS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img>ﾠEVENTOSﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCHV_EVENTOS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHV EVENTOSㅤ</div></div></div>'
        },
        'BIOBIO_CHILE_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_BIOBIOCHILE.svg"></img>ﾠSEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBIOBIOCHILE_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIOBIO CHILE 1ㅤ</div></div></div>'
        },
        'BIOBIO_CHILE_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_BIOBIOCHILE.svg"></img>ﾠSEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBIOBIOCHILE_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIOBIO CHILE 2ㅤ</div></div></div>'
        },
        'BIOBIO_CHILE_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_BIOBIOCHILE.svg"></img>ﾠSEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBIOBIOCHILE_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIOBIO CHILE 3ㅤ</div></div></div>'
        },
        'BIOBIO_CHILE_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_BIOBIOCHILE.svg"></img>ﾠSEÑAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBIOBIOCHILE_4.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIOBIO CHILE 4ㅤ</div></div></div>'
        },
        //'TVN.cl1': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVNCL.svg"></img>ﾠ1',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://strm.tvn.cl/testbed/limpio.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVNㅤ</div></div></div>'
        //},
        
        //'TVN.cl2': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVNCL.svg"></img>ﾠ2',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://live.mrf.io/www.tvn.cl/index/widgets.amp.html?src=www.tvn.cl/index/MediastreamVideo.js&index=0&sectionName=home&selector=.ppal_contenidoEventoEnVivo#%7B%22divId%22%3A%22%22%2C%22param%22%3A%7B%7D%7D" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVNㅤ</div></div></div>'
        //},
        //'TVN.cl3': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVNCL.svg"></img>ﾠ3',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://mdstrm.com/live-stream/57a498c4d7b86d600e5461cb?jsapi=true&loop=false&autoplay=true&player=609d326198d195082656d684&access_token=IyWpxijagtHO1IAwKm5euLw56AVojeCDyaDu7tkes3yLcdg54vF1jRYViltmg3v8b7TR2tNHbM3&c=60deab2f9bca9420d23f4f6f&watermark[content]=navarro.andre%40live.cl" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVNㅤ</div></div></div>'
        //},
        //'TNT': {
        //    'nombre': ' TNT',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTNT.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTNTㅤ</div></div></div>'
        //},
        //'MUNIAYSEN_TV': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MuniAysen.svg"></img>ﾠMUNIAYSEN TV',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMUNIAYSEN_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMUNIAYSEN TVㅤ</div></div></div>'
        //},
        'RLN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_RLN.svg"></img>ﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIOLASNIEVES.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO LAS NIEVESㅤ</div></div></div>'
        },
        'MILENARIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠRADIO MILENARIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_MILENARIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO MILENARIAㅤ</div></div></div>'
        },
        'GENIAL': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠRADIO GENIAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_GENIAL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO GENIALㅤ</div></div></div>'
        },
        'CANAL_SUR_PATAGONIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠCANAL SUR PATAGONIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_CANALSURPATAGONIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO CANAL SUR PATAGONIAㅤ</div></div></div>'
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

        'ELECCIONES_YOUTUBE_BORIC': {
            'nombre': '<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg">ﾠ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠGABRIEL BORIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC0gQkOPt6VVvJGO9mDy0ikw&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBORICㅤ</div></div></div>'
        },
        'ELECCIONES_FACEBOOK_BORIC': {
            'nombre': '<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg">ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠGABRIEL BORIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Elecciones_Facebook_Boric.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBORICㅤ</div></div></div>'
        },
        'ELECCIONES_YOUTUBE_KAST': {
            'nombre': '<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg">ﾠ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠJOSE ANTONIO KAST',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Elecciones_YouTube_Kast.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤKASTㅤ</div></div></div>'
        },
        'ELECCIONES_FACEBOOK_KAST': {
            'nombre': '<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg">ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠJOSE ANTONIO KAST',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Elecciones_Facebook_Kast.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤKASTㅤ</div></div></div>'
        },
        'ELECCIONES_RESULTADOS': {
            'nombre': '<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg">ﾠSERVEL RESULTADOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="EleccionesResultados.html" frameborder="0"></iframe></div>'
        },
        'ELECCIONES_RESULTADOS_INFOGRAM': {
            'nombre': '<img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg">ﾠINFOGRAM RESULTADOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="EleccionesResultadosInfogram.html" frameborder="0"></iframe><a href="EleccionesResultadosInfogram.html" class="FondoBotonAbrirEnOtraPestaña"><div class="TextoBotonAbrirEnOtraPestaña" waves-effect waves-gris">ㅤABRIRㅤ</div></a></div>'
        },
        'UCHILE_TV': {
            'nombre': 'UCHILE TVﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_UCHILETV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤUCHILE TVㅤ</div></div></div>'
        },
        'SENADO_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSENADO_2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalSENADO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSENADO TVㅤ</div></div></div>'
        },
        'DIPUTADOS_TV': {
            'nombre': 'DIPUTADOS TVﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_CDTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS TVㅤ</div></div></div>'
        },
        'PRESIDENCIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_GOB.svg"></img>ﾠPRESIDENCIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPRESIDENCIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPRESIDENCIAㅤ</div></div></div>'
        },
        'SERVEL': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠSERVEL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCB8s6rETjmWgXrp_BxyXqdg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSERVELㅤ</div></div></div>'
        },
        'AGENCIA_UNO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠAGENCIA UNO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_AGENCIAUNOTV_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAGENCIA UNOㅤ</div></div></div>'
        },
        'MEDIABANCO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠMEDIABANCO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEDIABANCO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEDIABANCOㅤ</div></div></div>'
        },
        'MEDIABANCO2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠMEDIABANCO 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEDIABANCO2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEDIABANCOㅤ</div></div></div>'
        },
        'REUTERS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠREUTERS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalREUTERS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤREUTERSㅤ</div></div></div>'
        },
        'TELEMUNDO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠTELEMUNDOﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTELEMUNDONOTICIAS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTELEMUNDOㅤ</div></div></div>'
        },
        'VOA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠVOA TV ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_ESPANOL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA TV ESPAÑOLㅤ</div></div></div>'
        },
        'SKY_NEWS_EXTRA_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠSKY NEWS EXTRA 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_SKY_NEWS_EXTRA_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSKY NEWS EXTRA 1ㅤ</div></div></div>'
        },
        'SKY_NEWS_EXTRA_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠSKY NEWS EXTRA 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_SKY_NEWS_EXTRA_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSKY NEWS EXTRA 2ㅤ</div></div></div>'
        },
        'SKY_NEWS_EXTRA_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠSKY NEWS EXTRA 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_SKY_NEWS_EXTRA_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSKY NEWS EXTRA 3ㅤ</div></div></div>'
        },
        'SeñalBloombergTV_LIVE_EVENT_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠBLOOMBERG TV LIVE EVENT 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBloombergTV_LIVE_EVENT_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBLOOMBERG TV LIVE EVENT 1ㅤ</div></div></div>'
        },
        'SeñalBloombergTV_LIVE_POLITICS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠBLOOMBERG TV LIVE POLITICS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBloombergTV_LIVE_POLITICS.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBLOOMBERG TV LIVE POLITICSㅤ</div></div></div>'
        },
        'NBC_NEWS_NOW_EVENT_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠNBC NEWS LIVE EVENT 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_NBC_LIVE_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNBC NEWS LIVE EVENT 1ㅤ</div></div></div>'
        },
        'NBC_NEWS_NOW_EVENT_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠNBC NEWS LIVE EVENT 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_NBC_LIVE_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNBC NEWS LIVE EVENT 2ㅤ</div></div></div>'
        },
        'NBC_NEWS_NOW_EVENT_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠNBC NEWS LIVE EVENT 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_NBC_LIVE_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNBC NEWS LIVE EVENT 3ㅤ</div></div></div>'
        },
        'NBC_NEWS_NOW_EVENT_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠNBC NEWS LIVE EVENT 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_NBC_LIVE_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNBC NEWS LIVE EVENT 4ㅤ</div></div></div>'
        },
        'Señal_CBS46_WGCL_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠCBS46 WGCL TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_CBS46_WGCL_TV.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCBS46 WGCL TVㅤ</div></div></div>'
        },
        'WYYK_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠWKYC 1ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_WKYC_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤWKYC 1ㅤ</div></div></div>'
        },
        'WYYK_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠWKYC 2ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_WKYC_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤWKYC 2ㅤ</div></div></div>'
        },
        'KHOU_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠKHOU 1ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_KHOU_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤKHOU 1ㅤ</div></div></div>'
        },
        'KHOU_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠKHOU 2ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_KHOU_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤKHOU 2ㅤ</div></div></div>'
        },
        'KHOU_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠKHOU 3ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_KHOU_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤKHOU 3ㅤ</div></div></div>'
        },
        'TEGNADIGITAL_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠWHITE HOUSE VIDEOﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_TEGNADIGITAL_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTEGNADIGITAL 1ㅤ</div></div></div>'
        },
        'CCTV+1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠCCTV+ 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_CCTVPLUS_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCCTV+ 1ㅤ</div></div></div>'
        },
        'CCTV+2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠCCTV+ 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_CCTVPLUS_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCCTV+ 2ㅤ</div></div></div>'
        },
        //'RTVC_1': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠRTVC LIVE 1',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_RTVC_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRTVC LIVE 1ㅤ</div></div></div>'
        //},
        //'RTVC_2': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠRTVC LIVE 2',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_RTVC_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRTVC LIVE 2ㅤ</div></div></div>'
        //},
        //'RTVC_3': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠRTVC LIVE 3',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SEÑAL_RTVC_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRTVC LIVE 3ㅤ</div></div></div>'
        //},
        'MEDIABANCO_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠMEDIABANCOﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalOcasional.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_MEDIABANCO_YT.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEDIABANCOㅤ</div></div></div>'
        },
        'TELEMUNDO_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠTELEMUNDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRwA1NUcUnwsly35ikGhp0A&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTELEMUNDOㅤ</div></div></div>'
        },
        'VOA_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠVOA ESP',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCJ46VgZgCMLFUvOT671AOJw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA ESPㅤ</div></div></div>'
        },
        'REUTERS_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠREUTERS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UChqUTb7kYRX8-EiaN3XFrSQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤREUTERSㅤ</div></div></div>'
        },
        'RUPTLY': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠRUPTLY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC5aeU5hk31cLzq_sAExLVWg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRUPTLYㅤ</div></div></div>'
        },
        'SPUTNIK': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠSPUTNIK',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCI4lx9retCL7_cBmmceEQ8g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPUTNIKㅤ</div></div></div>'
        },
        'ELPAIS': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠEL PAIS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCnsvJeZO4RigQ898WdDNoBw&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEL PAISㅤ</div></div></div>'
        },
        'MARCA': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠMARCA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCop57Z1sYHrtCyxCpE2z2Bg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMARCAㅤ</div></div></div>'
        },
        'LA_VANGUARDIA': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠLA VANGUARDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UClLLRs_mFTsNT5U-DqTYAGg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLA VANGUARDIAㅤ</div></div></div>'
        },
        'THE_SUN': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠTHE SUN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCIzXayRP7-P0ANpq-nD-h5g&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTHE SUNㅤ</div></div></div>'
        },
        'WKYC_Channel 3': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠWKYC Channel 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCNBmxc6FvKyxtCpUygcdINA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤWKYC Channel 3ㅤ</div></div></div>'
        },
        'EURONEWS_ESP_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/eu.svg"></img>ﾠEURONEWS ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_EURONEWS_ESPAÑOL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEURONEWS ESPAÑOLㅤ</div></div></div>'
        },
        'FRANCE24ESP': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/fr.svg"></img>ﾠFRANCE 24 ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUdOoVWuWmgo1wByzcsyKDQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFRANCE24ㅤ</div></div></div>'
        },
        '24HTVE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg">ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/es.svg"></img>ﾠCANAL 24 HORAS TVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24HORASTVE.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24H TVEㅤ</div></div></div>'
        },
        'TN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠTODO NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTNㅤ</div></div></div>'
        },
        'CANAL_26_ARG': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠCANAL 26',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCANAL_26_ARG.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 26ㅤ</div></div></div>'
        },
        'DWESP': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg">ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/de.svg"></img>ﾠDW ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_DW_ESPAÑOL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDW ESPAÑOLㅤ</div></div></div>'
        },
        'DW': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg">ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/de.svg"></img>ﾠDW DEUTSCH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_DW_DEUTSCH.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDW DEUTSCHㅤ</div></div></div>'
        },
        'RT_ESP': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg">ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/ru.svg"></img>ﾠRT ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9DXGrOU5wKQ?autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRT ESPAÑOLㅤ</div></div></div>'
        },
        'TELESUR': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/ve.svg"></img>ﾠTELESUR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTELESUR.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTELESURㅤ</div></div></div>'
        },
        'FORO_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/mx.svg"></img>ﾠFORO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUsm-fannqOY02PNN67C0KA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFORO TVㅤ</div></div></div>'
        },
        'SKY_NEWS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠSKY NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_SKY_NEWS.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPUTNIKㅤ</div></div></div>'
        },
        'AL_JAZEERA_ENG': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠAL JAZEERA ENG',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-upyPouRrB8?autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAL JAZEERAㅤ</div></div></div>'
        },
        'AL_JAZEERA_ARABIC': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/qa.svg"></img>ﾠAL JAZEERA ARABIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/EeCn9FN94RU?autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAL JAZEERAㅤ</div></div></div>'
        },
        'NHK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/jp.svg"></img>ﾠNHK WORLD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNHK.html" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNHK WORLDㅤ</div></div></div>'
        },
        'CSPAN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠCSPAN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñaCSPAN.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCSPANㅤ</div></div></div>'
        },
        'NBC_NEWS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠNBC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNBCNEWS.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNBC NEWSㅤ</div></div></div>'
        },
        'CBS_NEWS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠCBS NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_CBSNEWS.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCBS NEWSㅤ</div></div></div>'
        },
        'FOX_NEWS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠﾠFOX NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalFOX_NEWS.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFOX NEWSㅤ</div></div></div>'
        },
        'CNN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg">ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠCNN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNNㅤ</div></div></div>'
        },
        'CNN_INTERNACIONAL': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg">ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠCNN INTERNATIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNNINTERNACIONAL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN INTERNATIONALㅤ</div></div></div>'
        },
        'CNN_ESP1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg">ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠCNN ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNNESPANOL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN ESPAÑOLㅤ</div></div></div>'
        },
        'CNN_INDONESIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg">ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/id.svg"></img>ﾠCNN INDONESIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNNINDONESIA.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN INDONESIAㅤ</div></div></div>'
        },
        'CNN_PHILIPPINES': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg">ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/ph.svg"></img>ﾠCNN PHILIPPINES',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_PHILIPPINES.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN PHILIPPINESㅤ</div></div></div>'
        },
        'CNN_BRASIL': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/br.svg"></img>ﾠCNN BRASIL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCvdwhh_fDyWccR42-rReZLw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN BRASILㅤ</div></div></div>'
        },
        'NBCNEWS_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠﾠNBC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCeY0bbntWzzVIaj2z3QigXg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNBC NEWSㅤ</div></div></div>'
        },
        'ABCNEWS_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠﾠABC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCBi2mrWuNuyYy4gbM6fU18Q&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤABC NEWSㅤ</div></div></div>'
        },
        'DW_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/de.svg"></img>ﾠDW NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCknLrEdhRCp1aegoMqRaCZg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDW NEWSㅤ</div></div></div>'
        },
        'DWESP_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/de.svg"></img>ﾠDW ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCT4Jg8h03dD0iN3Pb5L0PMA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDW ESPAÑOLㅤ</div></div></div>'
        },
        'EURONEWS_ESP_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/eu.svg"></img>ﾠEURONEWS ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCyoGb3SMlTlB8CLGVH4c8Rw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEURONEWSㅤ</div></div></div>'
        },
        '24HTVE_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/es.svg"></img>ﾠCANAL 24 HORAS TVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC7QZIf0dta-XPXsp9Hv4dTw&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24H TVEㅤ</div></div></div>'
        },
        'RT_ENVIVO_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/ru.svg"></img>ﾠRT EN VIVO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCEIhICHOQOonjE6V0SLdrHQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRT EN VIVOㅤ</div></div></div>'
        },
        'TVPERU_NOTICIAS': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/pe.svg"></img>ﾠTVPERU NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCkZCoc42IipR1ucqJmIehsA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVPERU NOTICIASㅤ</div></div></div>'
        },
        'AMERICA_TV_ARG': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠAMERICA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC6NVDkuzY2exMOVFw4i9oHw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAMERICA TVㅤ</div></div></div>'
        },
        'A24_ARG': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠA24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCR9120YBAqMfntqgRTKmkjQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤA24ㅤ</div></div></div>'
        },
        'IP_ARG': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠIP NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC1bBjOZieJWHbsFA0LwjjJA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤIP NOTICIASㅤ</div></div></div>'
        },
        'TV_PUBLICA_ARG': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠTV PUBLICA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCs231K71Bnu5295_x0MB5Pg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV PUBLICAㅤ</div></div></div>'
        },
        'C5N_ARG': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠC5N',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCFgk2Q2mVO1BklRQhSv6p0w&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤC5Nㅤ</div></div></div>'
        },
        'LA_NACION_ARG': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠLA NACION',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCba3hpU7EFBSk817y9qZkiA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLA NACIONㅤ</div></div></div>'
        },
        'SKY_NEWS_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠSKY NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCoMdktPbSTixAyNGwb-UYkQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSKY NEWSㅤ</div></div></div>'
        },
        'FOX35ORLANDO': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠFOX 35 ORLANDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCuXT13wiqK56NR7QSfDWpvg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFOX 35 ORLANDOㅤ</div></div></div>'
        },
        'FOX5_WDC': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠFOX 5 WASHINGTON DC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCHLyP4MuA-JAFBCwxXOEDdA&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFOX 5 WASHINGTON DCㅤ</div></div></div>'
        },
        'WCNC': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠWCNC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC-RxXi2Xws6Uk22vp-sLbGA&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤWCNCㅤ</div></div></div>'
        },
        '11ALIVE': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠ11 ALIVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCzF4Ryn8TKn64md77gS5Q5Q&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ11ALIVEㅤ</div></div></div>'
        },
        //'CNN_ESP2': {
        //    'nombre': '</img><img style="height: 20px; width:auto:" src="imagenes/Logo_CNNESP.svg"></img></img>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fKacUV-8WBo?autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN ESPAÑOLㅤ</div></div></div>'
        //},
        //'BBC': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_BBC.svg"></img>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBBC.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBBCㅤ</div></div></div>'
        //},
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


        'REUTERS_FB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠREUTERS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Reuters/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤREUTERSㅤ</div></div></div>'
        },
        'TELEMUNDO_FB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠTELEMUNDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/NoticiasTelemundo/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTELEMUNDOㅤ</div></div></div>'
        },
        'VOA_FB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠVOZ DE AMERICA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/VozDeAmerica/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA ESPㅤ</div></div></div>'
        },
        'RUPTLY_FB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠRUPTLY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Ruptly/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRUPTLYㅤ</div></div></div>'
        },
        'SPUTNIK_FB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠSPUTNIK',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/SputnikNews/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPUTNIKㅤ</div></div></div>'
        },
        'ADNRADIO_FB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠADN RADIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/VozDeAmerica/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤADN RADIOㅤ</div></div></div>'
        },
        'COOPERATIVA_FB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠCOOPERATIVA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Cooperativa/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCOOPERATIVAㅤ</div></div></div>'
        },

        
        'CONVENCION_CONSTITUCIONAL_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CC.svg"></img>ﾠCONVENCION CONSTITUCIONAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal1.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal1.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL 1ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CC.svg"></img>ﾠCONVENCION CONSTITUCIONAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal2.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal2.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL 2ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CC.svg"></img>ﾠCONVENCION CONSTITUCIONAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal3.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL 3ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CC.svg"></img>ﾠCONVENCION CONSTITUCIONAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal4.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL 4ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_5': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CC.svg"></img>ﾠCONVENCION CONSTITUCIONAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal5.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL 5ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_6': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CC.svg"></img>ﾠCONVENCION CONSTITUCIONAL 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal6.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL 6ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_7': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CC.svg"></img>ﾠCONVENCION CONSTITUCIONAL 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal7.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL 7ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_8': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CC.svg"></img>ﾠCONVENCION CONSTITUCIONAL 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal8.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL 8ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_9': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CC.svg"></img>ﾠCONVENCION CONSTITUCIONAL 9',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal9.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL 9ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_10': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CC.svg"></img>ﾠCONVENCION CONSTITUCIONAL 10',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal10.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL 10ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_11': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CC.svg"></img>ﾠCONVENCION CONSTITUCIONAL 11',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal11.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL 11ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_12': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CC.svg"></img>ﾠCONVENCION CONSTITUCIONAL 12',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal12.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL 12ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_13': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CC.svg"></img>ﾠCONVENCION CONSTITUCIONAL 13',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal13.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL 13ㅤ</div></a></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_1': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠCONVENCION CONSTITUCIONAL 1',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRlIWVAxQdAnCl4D4UR9r3Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCONVENCION CONSTITUCIONAL 1ㅤ</div></div></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_2': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠCONVENCION CONSTITUCIONAL 2',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCXdVTVjJR0O-VbN78Sd89Gg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCONVENCION CONSTITUCIONAL 2ㅤ</div></div></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_3': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠCONVENCION CONSTITUCIONAL 3',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCrU5uanHGl-cc7ZdLatPDDg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCONVENCION CONSTITUCIONAL 3ㅤ</div></div></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_4': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠCONVENCION CONSTITUCIONAL 4',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCnRIVAs0Ov_-QYqEVfA2MRQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCONVENCION CONSTITUCIONAL 4ㅤ</div></div></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_5': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠCONVENCION CONSTITUCIONAL 5',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCSzWo-vzG3F54HJs7e3CXxw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCONVENCION CONSTITUCIONAL 5ㅤ</div></div></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_6': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠCONVENCION CONSTITUCIONAL 6',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCjj0ghVa8skE1jNq4pQyhrA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCONVENCION CONSTITUCIONAL 6ㅤ</div></div></div>'
        },
        'TC_YouTube': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠT. CONTITUCIONAL',
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
        'TV_SENADO_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSENADO_2.svg">ﾠSEÑAL 1ﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_TVSENADO_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO 2ㅤ</div></div></div>'
        },
        'TV_SENADO_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSENADO_2.svg">ﾠSEÑAL 2ﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_TVSENADO_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO 2ㅤ</div></div></div>'
        },
        'TV_SENADO_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSENADO_2.svg">ﾠSEÑAL 3ﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_TVSENADO_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO 3ㅤ</div></div></div>'
        },
        'TV_SENADO_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSENADO_2.svg">ﾠSEÑAL 4ﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_TVSENADO_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO 4ㅤ</div></div></div>'
        },
        'TV_SENADO_5': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSENADO_2.svg">ﾠSEÑAL 5ﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_TVSENADO_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO 5ㅤ</div></div></div>'
        },
        'TV_SENADO_6': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSENADO_2.svg">ﾠSEÑAL 6ﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_TVSENADO_6.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO 6ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_1': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCcULnWuDzgQG9yF0Dv3DIgg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS 1ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_3': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCF6KgLfQqQzekn8U1DwVs9g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS 3ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_5': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC0QKtI8NpeMObauDylsSUDA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS 5ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_6': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCspWzpGflwb6A8PZqWw49CQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS 6ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_7': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCyVjDDBZGDywVGrpGBvGEsw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS 7ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_8': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCyVjDDBZGDywVGrpGBvGEsw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS 8ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_11': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 11',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCYPKjGKq2yLbAnmth5rFZmQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS 11ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_12': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 12',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCVOWFY-sgbDglBsfOap9okg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS 12ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_13': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 13',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC33MG3YdoQ16a8a3wODh6lw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS 13ㅤ</div></div></div>'
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
        'EARLY_EST_DETEC': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_ALOMAX.svg"></img>ﾠDETECTOR SISMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="MonitorEARLY-EST_DETECTOR.html" frameborder="0" scrolling="no"></iframe></div>'
        },
        'EARLY_EST_SIS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_ALOMAX.svg"></img>ﾠULTIMOS SISMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="MonitorEARLY-EST_SISMOS.html" frameborder="0"></iframe></div>'
        },
        'NASA_TV_PUBLIC': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATVPUBLIC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV PUBLICㅤ</div></div></div>'
        },
        'NASA_TV_MEDIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATVMEDIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV MEDIAㅤ</div></div></div>'
        },
        'ISS_SD': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠISS CAM SD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_ISS_SD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS SDㅤ</div></div></div>'
        },
        'ISS_HD': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠISS CAM HD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_ISS_HD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS HDㅤ</div></div></div>'
        },
        'ISS_TRACKER': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Ubicacion.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_ESA.svg"></img>ﾠISS TRACKER MAP 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_ISS_TRACKER.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'ISS_TRACKER_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Ubicacion.svg"></img>ﾠISS TRACKER MAP 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'ISS_TRACKER_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Ubicacion.svg"></img>ﾠISS TRACKER MAP 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS_2_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'ISS_TRACKER_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Ubicacion.svg"></img>ﾠISS TRACKER MAP 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'NASA_CSBF_Operations': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA CSBF OPERATIONS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_CSBF.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA CSBF Operationsㅤㅤ</div></div></div>'
        },
        'NASA_LaRC': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA LaRC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_LaRC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA LaRCㅤ</div></div></div>'
        },
        'NASA_Wallops': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA WALLOPS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_Wallops.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA WALLOPSㅤ</div></div></div>'
        },
        'NASA_NE02': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA NE02',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_NE02.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA NE02ㅤ</div></div></div>'
        },
        'NASA_VIDEO': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA VIDEO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC_aP7p621ATY_yAa8jMqUVA&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV PUBLICㅤ</div></div></div>'
        },
        'NASA_TV_PUBLIC2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_PUBLIC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV PUBLICㅤ</div></div></div>'
        },
        'NASA_TV_MEDIA2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_MEDIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV MEDIAㅤ</div></div></div>'
        },
        'ISS_SD2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠISS CAM SD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_ISSSD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS SDㅤ</div></div></div>'
        },
        'ISS_HD2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠISS CAM HD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_ISSHD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS HDㅤ</div></div></div>'
        },
        'ESA_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_ESA.svg"></img>ﾠESA WEB TV 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalESATV_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤESA WEB TV 1ㅤ</div></div></div>'
        },
        'ROSCOSMOS': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_ROSCOSMOS.svg"></img>ﾠROSCOSMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCOcpUgXosMCIlOsreUfNFiA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'NASA_YT_PUBLIC': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_PUBLIC_YOUTUBE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV PUBLICㅤ</div></div></div>'
        },
        'NASA_YT_MEDIA': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_MEDIA_YOUTUBE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV MEDIAㅤ</div></div></div>'
        },
        'NASA_YT_KSC': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA KSC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_KSC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA KSCㅤ</div></div></div>'
        },
        'SPACEX': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠSPACEX',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCtI0Hodo5o5dUb67FeUjDeA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEXㅤ</div></div></div>'
        },
        'BLUE_ORIGIN': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠBLUE ORIGIN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCVxTHEKKLxNjGcvVaZindlg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBLUE ORIGINㅤ</div></div></div>'
        },
        'ULA': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠULA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCnrGPRKAg1PgvuSHrRIl3jg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤULAㅤ</div></div></div>'
        }, 
        'ARIANESPACE': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠARIANESPACE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRn9F2D9j-t4A-HgudM7aLQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤARIANESPACEㅤ</div></div></div>'
        },
        'Rocket_Lab': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠROCKET LAB',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCsWq7LZaizhIi-c-Yo_bcpw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEXㅤ</div></div></div>'
        }, 
        'Virgin_Galactic': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠVIRGIN GALACTIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UClcvOr7LV8tlJwJvkNMmnKg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVirgin Galacticㅤ</div></div></div>'
        },
        'CGTN': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠCGTN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCgrNz-aDmcr2uuto8_DL2jg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCGTNㅤ</div></div></div>'
        },
        'RDRONE_UY_YouTube': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠRDRONE UY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC2BCLTaBqFwyc3CZlkEHg_Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRDRONE UYㅤ</div></div></div>'
        },
        'SPACEX_STORM_YouTube': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠSPACEX STORM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCxjGXSXK3Ss-mkiZ-wYtjtg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEX STORMㅤ</div></div></div>'
        },
        'NASASpaceflight': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠNASASpaceflight ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCSUu1lih2RifWkKtDOJdsBA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA Spaceflightㅤ</div></div></div>'
        },
        'EverydayAstronaut': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠEVERYDAY ASTRONAUT ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC6uKrU_WqJ1R2HMTY3LIx5Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEVERY ASTRONAUTㅤ</div></div></div>'
        },
        'FronteraEspacial': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠFRONTERA ESPACIAL ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCurxSOUxQszWp-5juh48wmg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFRONTERA ESPACIALㅤ</div></div></div>'
        },
        'ConexionEspacial': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_TV_News.svg"></img>ﾠCONEXION ESPACIAL ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCS6DjxV3L8XdnGa70ZxS_FA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCONEXION ESPACIALㅤ</div></div></div>'
        }, 
        '321LAUNCH_CAM': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠ321LAUNCH CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUccOGcvTNrJuihXhYsrp7w&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ321LAUNCH CAMㅤ</div></div></div>'
        },
        'Spaceflight Now': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠSPACEFLIGHT NOW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCoLdERT4-TJ82PJOHSrsZLQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEFLIGHT NOWㅤ</div></div></div>'
        }, 
        'ComoSapiens': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠCOSMOSAPIENS ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC3ZODI-xZfdPanPP6tKUg9g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCOSMOSAPIENSㅤ</div></div></div>'
        }, 
        'InfiniteSpace': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠINFINITE SPACE ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCn8SmzG1xXx_inu-XADxcMg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤINFINITE SPACEㅤ</div></div></div>'
        },
        'SpaceXMissions': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠSPACEX MISSIONS ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCE_z1X3v8ZdBNHn9IFHBfNw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEX MISSIONSㅤ</div></div></div>'
        },
        'OceanCam': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠOCEAN CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCF8IYFF60clbbznjvJ7qoTQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤOCEAN CAMㅤ</div></div></div>'
        }, 
        'LabPadre_LabCam': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_LABPADRE.svg"></img>ﾠLAB CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/LabCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLAB CAMㅤ</div></div></div>'
        }, 
        'LabPadre_RoverCam': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_LABPADRE.svg"></img>ﾠROVER CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/RoverCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤROVER CAMㅤ</div></div></div>'
        }, 
        'LabPadre_NerdleCam4K': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_LABPADRE.svg"></img>ﾠNerdle Cam 4K',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/NerdleCam4K.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNERDLE CAMㅤ</div></div></div>'
        }, 
        'LabPadre_SapphireCam': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_LABPADRE.svg"></img>ﾠSAPPHIRE CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/SapphireCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSAPPHIRE CAMㅤ</div></div></div>'
        }, 
        'LabPadre_SentinelCam': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_LABPADRE.svg"></img>ﾠSENTINEL CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/SentinelCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSENTINEL CAMㅤ</div></div></div>'
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
        'IBAI_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠIBAI',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=ibai&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤIBAIㅤ</div></div></div>'
        },
        'AURONPLAY_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠAURONPLAY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=auronplay&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAURONPLAYㅤ</div></div></div>'
        },
        'THEFOCUS_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitch_Video_1.svg"></img>ﾠTHE FOCUS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=xxxthefocusxxx&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTHE FOCUSㅤ</div></div></div>'
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
        'PantallaVacia1': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_TV.svg"></img>ﾠVACIO 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="" frameborder="0"></iframe></div>'
        },
        'PantallaVacia2': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_TV.svg"></img>ﾠVACIO 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="" frameborder="0"></iframe></div>'
        },
        'PantallaVacia3': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_TV.svg"></img>ﾠVACIO 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="" frameborder="0"></iframe></div>'
        },
        'Barras_1': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_TV.svg"></img>ﾠBARRAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <img class="embed-responsive-item" src="imagenes/SinSeñal.png" frameborder="0"></img></div>'
        },
        'Barras_2': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_TV.svg"></img>ﾠBARRAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <img class="embed-responsive-item" src="imagenes/SinSeñal.png" frameborder="0"></img></div>'
        },
        'Barras_3': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_TV.svg"></img>ﾠBARRAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <img class="embed-responsive-item" src="imagenes/SinSeñal.png" frameborder="0"></img></div>'
        },
        'Barras_4': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_TV.svg"></img>ﾠBARRAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <img class="embed-responsive-item" src="imagenes/SinSeñal.png" frameborder="0"></img></div>'
        },
        'Barras_5': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_TV.svg"></img>ﾠBARRAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <img class="embed-responsive-item" src="imagenes/SinSeñal.png" frameborder="0"></img></div>'
        },
        'Barras_6': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_TV.svg"></img>ﾠBARRAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <img class="embed-responsive-item" src="imagenes/SinSeñal.png" frameborder="0"></img></div>'
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
        'Especial': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/NoLogo.svg"></img>ﾠAINM PANTALA ESPECIAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Pantalla_Especial_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNO INFOㅤ</div></div></div>'
        },
        'Especial2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_ADNRADIO.svg"></img>ﾠADN TV 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalADNTV_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤADNTV 1ㅤ</div></div></div>'
        },
        'Especial3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_ADNRADIO.svg"></img>ﾠADN TV 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Contador_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤADNTV 2ㅤ</div></div></div>'
        },
        'FRAMEEDIT': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/NoLogo.svg"></img>ﾠAÑADIR FRAME',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="FrameEdit.html" frameborder="0"></iframe></div>'
        },
        'MONITOR1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/NoLogo.svg"></img>ﾠMONITOR 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="MonitorAINM1.html" frameborder="0"></iframe></div>'
        },



        'TVN_WEB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>ﾠWEB',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalTVN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVNㅤ</div></div></div>'
        },
        'MEGA_WEB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGA.svg"></img>ﾠWEB',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalMEGA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGAㅤ</div></div></div>'
        },
        'CHV_WEB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img>ﾠWEB',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalCHV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHVㅤ</div></div></div>'
        },
        'CANAL_13_WEB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Canal13.svg"></img>ﾠWEB',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalC13.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 13ㅤ</div></div></div>'
        },
        'LARED_WEB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_LA_RED.svg"></img>ﾠWEB',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalLARED.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLA REDㅤ</div></div></div>'
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
        //App.add("CNN_CHILE");
        //App.add("MEGANOTICIAS");

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
