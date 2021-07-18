
var size = 4;

///6 = 2 PANTALLAS HORIZONTALMENTE///
///3 = 4 PANTALLAS HORIZONTALMENTE///
///4 = 3 PANTALLAS HORIZONTALMENTE///
var App = {
     channels: {
        '24HTVN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_24HORAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24HTVN.html" frameborder="0"></iframe><a href="Señal24HTVN.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCANAL 24Hㅤ</div></a></div>'
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
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_T13_ENVIVO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalT13MOVIL.html" frameborder="0"></iframe><a href="SeñalT13MOVIL.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤT13ㅤ</div></a></div>'
        },
        'TVN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤTVNㅤ</div></div></div>'
        },
        'TVNPLAY': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVNPLAY_2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVNPLAY.html" frameborder="0"></iframe><a href="SeñalTVNPLAY.html" class="FondoTitulosMonitor1"><div class="TextoTitulosSeñales2 waves-effect waves-gris">ㅤTVNㅤ</div></a></div>'
        },
        'TVN2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVN2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤTVN2ㅤ</div></div></div>'
        },
        'TV_CHILE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVCHILE.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVCHILE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤTV CHILEㅤ</div></div></div>'
        },
        'MEGA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEGA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤMEGAㅤ</div></div></div>'
        },
        'CHV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCHV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤCHVㅤ</div></div></div>'
        },
        'CANAL 13': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Canal13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCANAL13.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤCANAL 13ㅤ</div></div></div>'
        },
        'LARED': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_LA_RED.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalLARED.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤLA REDㅤ</div></div></div>'
        },
        'TVMAS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVMAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVMAS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤTV MASㅤ</div></div></div>'
        },
        'WAPP_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/LogoTV_WappTV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalWAPPTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤWAPP TVㅤ</div></div></div>'
        },
        'Señal_Interna_24HTVN_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠSEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ24HORAS 1ㅤ</div></div></div>'
        },
        'Señal_Interna_24HTVN_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠSEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ24HORAS 2ㅤ</div></div></div>'
        },
        'Señal_Interna_24HTVN_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠSEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ24HORAS 3ㅤ</div></div></div>'
        },
        'Señal_Interna_24HTVN_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠSEÑAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_4.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ24HORAS 4ㅤ</div></div></div>'
        },
        'Señal_Interna_24HTVN_5': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠSEÑAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_5.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ24HORAS 5ㅤ</div></div></div>'
        },
        'MEGANOTICIAS_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS2.svg"></img>ﾠSEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInternaMEGANOTICIAS_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤMEGANOTICIAS 1ㅤ</div></div></div>'
        },
        'MEGANOTICIAS_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS2.svg"></img>ﾠSEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInternaMEGANOTICIAS_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤMEGANOTICIAS 2ㅤ</div></div></div>'
        },
        'MEGANOTICIAS_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS2.svg"></img>ﾠSEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInternaMEGANOTICIAS_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤMEGANOTICIAS 3ㅤ</div></div></div>'
        },
        'MEGANOTICIAS_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS2.svg"></img>ﾠSEÑAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInternaMEGANOTICIAS_4.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤMEGANOTICIAS 4ㅤ</div></div></div>'
        },
        'Señal_Interna_CNNCHILE_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CNNCHILE2.svg"></img>ﾠSEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInternaCNNCHILE_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤCNNCHILE 1ㅤ</div></div></div>'
        },
        //'TVN.cl1': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVNCL.svg"></img>ﾠ1',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://strm.tvn.cl/testbed/limpio.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤTVNㅤ</div></div></div>'
        //},
        //'TVN.cl2': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVNCL.svg"></img>ﾠ2',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://live.mrf.io/www.tvn.cl/index/widgets.amp.html?src=www.tvn.cl/index/MediastreamVideo.js&index=0&sectionName=home&selector=.ppal_contenidoEventoEnVivo#%7B%22divId%22%3A%22%22%2C%22param%22%3A%7B%7D%7D" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤTVNㅤ</div></div></div>'
        //},
        //'TVN.cl3': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVNCL.svg"></img>ﾠ3',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://mdstrm.com/live-stream/57a498c4d7b86d600e5461cb?jsapi=true&loop=false&autoplay=true&player=609d326198d195082656d684&access_token=IyWpxijagtHO1IAwKm5euLw56AVojeCDyaDu7tkes3yLcdg54vF1jRYViltmg3v8b7TR2tNHbM3&c=60deab2f9bca9420d23f4f6f&watermark[content]=navarro.andre%40live.cl" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤTVNㅤ</div></div></div>'
        //},
        //'CHVEVENTOS': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img> EVENTOS',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCHV_EVENTOS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤCHV EVENTOSㅤ</div></div></div>'
        //},
        //'TNT': {
        //    'nombre': ' TNT',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTNT.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤTNTㅤ</div></div></div>'
        //},
        'MUNIAYSEN_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_MuniAysen.svg"></img>ﾠMUNIAYSEN TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMUNIAYSEN_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤMUNIAYSEN TVㅤ</div></div></div>'
        },
        'RLN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_RLN.svg"></img>ﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIOLASNIEVES.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤRADIO LAS NIEVESㅤ</div></div></div>'
        },
        'MILENARIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠRADIO MILENARIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_MILENARIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤRADIO MILENARIAㅤ</div></div></div>'
        },
        'GENIAL': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠRADIO GENIAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_GENIAL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤRADIO GENIALㅤ</div></div></div>'
        },
        'CANAL_SUR_PATAGONIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠCANAL SUR PATAGONIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_CANALSURPATAGONIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤRADIO CANAL SUR PATAGONIAㅤ</div></div></div>'
        },
        'ADNRADIO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_ADNRADIO.svg"></img>ﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_ADN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤADN RADIOㅤ</div></div></div>'
        },
        'COOPERATIVA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠRADIO COPERATIVA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_COOPERATIVA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤCOOPERATIVAㅤ</div></div></div>'
        },
        'BIOBIOTV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠBIOBIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_BIOBIOTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤBIOBIO TVㅤ</div></div></div>'
        },
        'T13RADIO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠT13 RADIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalT13RADIO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤT13 RADIOㅤ</div></div></div>'
        },
        'INFINITA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠRADIO INFINITA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_INFINITA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤRADIO INFINITAㅤ</div></div></div>'
        },
        'TIEMPO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠRADIO TIEMPO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_TIEMPO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤRADIO TIEMPOㅤ</div></div></div>'
        },
        'PUDAHUEL': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Microfono1.svg"></img>ﾠRADIO PUDAHUEL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_PUDAHUEL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤRADIO PUDAHUELㅤ</div></div></div>'
        },
        'SENADO_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSENADO_2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalSENADO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤSENADO TVㅤ</div></div></div>'
        },
        'CONVENCION_CONSTITUCIONAL': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CC.svg"></img>ﾠCONVENCION CONSTITUCIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCONVENCION_CONSTITUCIONAL.html" frameborder="0"></iframe><a href="SeñalCONVENCION_CONSTITUCIONAL_2.html" class="FondoTitulosMonitor1"><div class="TextoTitulosSeñales2 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONALㅤ</div></a></div>'
        },
        'PRESIDENCIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_GOB.svg"></img>ﾠPRESIDENCIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPRESIDENCIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤPRESIDENCIAㅤ</div></div></div>'
        },
        'REUTERS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠREUTERS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalREUTERS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤREUTERSㅤ</div></div></div>'
        },
        'MEDIABANCO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠMEDIABANCO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEDIABANCO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤMEDIABANCOㅤ</div></div></div>'
        },
        'MEDIABANCO2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠMEDIABANCO 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEDIABANCO2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤMEDIABANCOㅤ</div></div></div>'
        },
        'TELEMUNDO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠTELEMUNDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTELEMUNDONOTICIAS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤTELEMUNDOㅤ</div></div></div>'
        },
        'AFPTVLIVE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠAFP TV LIVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalAFPTV_LIVE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤAFP TV LIVEㅤ</div></div></div>'
        },
        'RUPTLY': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠRUPTLY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC5aeU5hk31cLzq_sAExLVWg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤRUPTLYㅤ</div></div></div>'
        },
        'SPUTNIK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSPUTNIK',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCI4lx9retCL7_cBmmceEQ8g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤSPUTNIKㅤ</div></div></div>'
        },
        'ELPAIS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠEL PAIS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCnsvJeZO4RigQ898WdDNoBw&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠEL PAISㅤ</div></div></div>'
        },
        'THE_SUN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠTHE SUN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCIzXayRP7-P0ANpq-nD-h5g&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠTHE SUNㅤ</div></div></div>'
        },
        'TELEMUNDO_YT': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Antena2.svg">ﾠ</img><img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠTELEMUNDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRwA1NUcUnwsly35ikGhp0A&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤTELEMUNDOㅤ</div></div></div>'
        },
        'EURONEWS_ESP': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_EURONEWS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCyoGb3SMlTlB8CLGVH4c8Rw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤEURONEWSㅤ</div></div></div>'
        },
        'FRANCE24ESP': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_FRANCE24.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUdOoVWuWmgo1wByzcsyKDQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤFRANCE24ㅤ</div></div></div>'
        },
        '24HTVE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVE.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/XBSRLazo64Y?autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ24H TVEㅤ</div></div></div>'
        },
        'TN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤTNㅤ</div></div></div>'
        },
        'DWESP': {
            'nombre': '</img><img style="height: 20px; width:auto:" src="imagenes/Logo_DW.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCT4Jg8h03dD0iN3Pb5L0PMA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤDW ESPAÑOLㅤ</div></div></div>'
        },
        'RT_ESP': {
            'nombre': '</img><img style="height: 20px; width:auto:" src="imagenes/Logo_RT.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9DXGrOU5wKQ?autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤRT ESPAÑOLㅤ</div></div></div>'
        },
        'IP_NOTICIAS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠIP NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/pzfYWbAlKy4?autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤIP NOTICIASㅤ</div></div></div>'
        },
        'TELESUR': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/NoLogo.svg"></img>ﾠTELESUR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTELESUR.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤTELESURㅤ</div></div></div>'
        },
        'FORO_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠFORO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUsm-fannqOY02PNN67C0KA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤFORO TVㅤ</div></div></div>'
        },
        'SKY_NEWS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSKY NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤSPUTNIKㅤ</div></div></div>'
        },
        'AL_JAZEERA_ENG': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠAL JAZEERA ENG',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-upyPouRrB8?autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤAL JAZEERAㅤ</div></div></div>'
        },
        'AL_JAZEERA_ARABIC': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠAL JAZEERA ENG',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/EeCn9FN94RU?autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤAL JAZEERAㅤ</div></div></div>'
        },
        //'CNN_ESP1': {
        //    'nombre': '</img><img style="height: 20px; width:auto:" src="imagenes/Logo_CNNESPANOL.svg"></img></img>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC_lEiu6917IJz03TnntWUaQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤCNN ESPAÑOLㅤ</div></div></div>'
        //},
        //'CNN_ESP2': {
        //    'nombre': '</img><img style="height: 20px; width:auto:" src="imagenes/Logo_CNNESP.svg"></img></img>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fKacUV-8WBo?autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤCNN ESPAÑOLㅤ</div></div></div>'
        //},
        'FOX35ORLANDO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠFOX 35 ORLANDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCuXT13wiqK56NR7QSfDWpvg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠFOX 35 ORLANDOㅤ</div></div></div>'
        },
        'WCNC': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠWCNC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC-RxXi2Xws6Uk22vp-sLbGA&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠWCNCㅤ</div></div></div>'
        },
        '11ALIVE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ11 ALIVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCzF4Ryn8TKn64md77gS5Q5Q&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ11ALIVEㅤ</div></div></div>'
        },
        'NHK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠNHK WORLD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNHK.html" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠNHK WORLDㅤ</div></div></div>'
        },
        'NBCNEWS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠNBC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCeY0bbntWzzVIaj2z3QigXg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠNBC NEWSㅤ</div></div></div>'
        },
        'CNN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_CNN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤCNNㅤ</div></div></div>'
        },
        'BBC': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_BBC.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBBC.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤBBCㅤ</div></div></div>'
        },
        '24HTVN_YT': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_24HORAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCTXNz3gjAypWp3EhlIATEJQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠCANAL 24Hㅤ</div></div></div>'
        },
        'CNN_CHILE_YT': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_CNNCHILE2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCpOAcjJNAp0Y0fhznRrXIJQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠCNN CHILEㅤ</div></div></div>'
        },
        'MEGANOTICIAS_YT': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCkccyEbqhhM3uKOI6Shm-4Q&autoplay=true&mute=1" frameborder="0"></iframe><div href="SeñalMEGANOTICIAS.html" class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠMEGANOTICIASㅤㅤ</div></div></div>'
        },
        'T13_YT': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_T13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCsRnhjcUCR78Q3Ud6OXCTNg&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠT13 MOVILㅤ</div></div></div>'
        },
        'TVN_YT': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCaVaCaiG6qRzDiJDuEGKOhQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠTVNㅤ</div></div></div>'
        },
        'MEGA_YT': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCEpId-jtRABuZyX6D2z6FZQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠMEGAㅤ</div></div></div>'
        },
        'CHV_YT': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC8EdTmyUaFIfZvVttJ9lgIA&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠCHVㅤ</div></div></div>'
        },
        'CANAL 13_YT': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_Canal13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCd4D3LfXC_9MY2zSv_3gMgw&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠCANAL 13ㅤ</div></div></div>'
        },
        'PARQUEMET_CUMBRE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠPARQUEMET CUMBRE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMPARQUEMET_CUMBRE_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤCUMBREㅤ</div></div></div>'
        },
        'PARQUEMET_TERRAZA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠPARQUEMET TERRAZA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMPARQUEMET_TERRAZA_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤTERRAZAㅤ</div></div></div>'
        },
        'PLAZAITALIA_CIMA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠPLAZA ITALIA CIMA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC4GOcOKkEefz5NamN4WyMFg&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤPLAZA ITALIAㅤ</div></div></div>'
        },
        'WHITE_HOUSE_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠWHITE HOUSE LIVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dHf1sLpowAs?autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤWHITE HOUSEㅤ</div></div></div>'
        },
        'NYC_Brooklyn_Bridge': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠNYC BROOKLYN BRIDGE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KGuCGd726RA?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/KGuCGd726RA" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤNYC BROOKLYN BRIDGEㅤ</div></a></div>'
        },
        'Lower_Manhattan_New_York_Harbor': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠNYC LOWER MANHATTAN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Vj0XKu6AoOw?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/Vj0XKu6AoOw" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤNYC LOWER MANHATTAN & NEW YORK HARBORㅤ</div></a></div>'
        },
        'Four_Seasons_Hotel_Buenos_Aires': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠFOUR SEASONS HOTEL BS.As',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/if91GyWP3zQ?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/if91GyWP3zQ" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤFOUR SEASONS HOTEL BUENOS AIRESㅤ</div></a></div>'
        },
        'Times_Square': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠTIMES SQUARE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/AdUw5RdyZxI?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/AdUw5RdyZxI" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤTIMES SQUAREㅤ</div></a></div>'
        },
        'Times_Square_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠTIMES SQUARE: DUFFY SQUARE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/jirltse20TY?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/jirltse20TY" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤTIMES SQUARE: DUFFY SQUAREㅤ</div></a></div>'
        },
        'Times_Square_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠTIMES SQUARE: EXPRESS VIEW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/xEqYYK3RxZg?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/xEqYYK3RxZg" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤTIMES SQUARE: EXPRESS VIEWㅤ</div></a></div>'
        },
        'Times_Square_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠTIMES SQUARE: 1540 BROADWAY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/VZOXbxdYnWg?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/VZOXbxdYnWg" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤTIMES SQUARE: 1540 BROADWAYㅤ</div></a></div>'
        },
        'LasVegas_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠLAS VEGAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/oy3tQ5Hacm8?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/oy3tQ5Hacm8" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤLAS VEGASㅤ</div></a></div>'
        },
        'Tokio_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Camara.svg"></img>ﾠTOKYO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QOjmvL3e7Lc?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/QOjmvL3e7Lc" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤTOKYOㅤ</div></a></div>'
        },
        'EARLY_EST_DETEC': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_ALOMAX.svg"></img>ﾠDETECTOR SISMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="MonitorEARLY-EST_DETECTOR.html" frameborder="0"></iframe></div>'
        },
        'EARLY_EST_SIS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_ALOMAX.svg"></img>ﾠULTIMOS SISMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="MonitorEARLY-EST_SISMOS.html" frameborder="0"></iframe></div>'
        },
        'NASA_TV_PUBLIC': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATVPUBLIC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤNASA TV PUBLICㅤ</div></div></div>'
        },
        'NASA_TV_MEDIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATVMEDIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤNASA TV MEDIAㅤ</div></div></div>'
        },
        'NASA_CSBF_Operations': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA CSBF OPERATIONS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_CSBF.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤNASA CSBF Operationsㅤㅤ</div></div></div>'
        },
        'NASA_LaRC': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA LaRC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_LaRC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤNASA LaRCㅤ</div></div></div>'
        },
        'NASA_Wallops': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA WALLOPS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_Wallops.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤNASA WALLOPSㅤ</div></div></div>'
        },
        'ISS_SD': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠISS CAM SD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_ISS_SD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤISS SDㅤ</div></div></div>'
        },
        'ISS_HD': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠISS CAM HD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_ISS_HD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤISS HDㅤ</div></div></div>'
        },
        'ISS_TRACKER': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠISS TRACKER',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_ISS_TRACKER.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'NASA_NE02': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA NE02',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_NE02.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤNASA NE02ㅤ</div></div></div>'
        },
        'ESA_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_ESA.svg"></img>ﾠESA WEB TV 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalESATV_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤESA WEB TV 1ㅤ</div></div></div>'
        },
        'ROSCOSMOS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_ROSCOSMOS.svg"></img>ﾠROSCOSMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCOcpUgXosMCIlOsreUfNFiA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'SPACEX': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSPACEX',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCtI0Hodo5o5dUb67FeUjDeA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤSPACEXㅤ</div></div></div>'
        },
        'BLUE_ORIGIN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠBLUE ORIGIN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCVxTHEKKLxNjGcvVaZindlg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤBLUE ORIGINㅤ</div></div></div>'
        },
        'ULA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠULA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCnrGPRKAg1PgvuSHrRIl3jg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤULAㅤ</div></div></div>'
        }, 
        'ARIANESPACE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠARIANESPACE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRn9F2D9j-t4A-HgudM7aLQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤARIANESPACEㅤ</div></div></div>'
        },
        'Rocket_Lab': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠROCKET LAB',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCsWq7LZaizhIi-c-Yo_bcpw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤSPACEXㅤ</div></div></div>'
        }, 
        'Virgin_Galactic': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠVIRGIN GALACTIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UClcvOr7LV8tlJwJvkNMmnKg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤVirgin Galacticㅤ</div></div></div>'
        }, 
        '321LAUNCH_CAM': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ321LAUNCH CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUccOGcvTNrJuihXhYsrp7w&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤ321LAUNCH CAMㅤ</div></div></div>'
        },
        'Spaceflight Now': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSPACEFLIGHT NOW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCoLdERT4-TJ82PJOHSrsZLQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤSPACEFLIGHT NOWㅤ</div></div></div>'
        }, 
        'CGTN': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠCGTN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCgrNz-aDmcr2uuto8_DL2jg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤCGTNㅤ</div></div></div>'
        },
        'RDRONE_UY_YouTube': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠRDRONE UY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC2BCLTaBqFwyc3CZlkEHg_Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤRDRONE UYㅤ</div></div></div>'
        },
        'SPACEX_STORM_YouTube': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSPACEX STORM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCxjGXSXK3Ss-mkiZ-wYtjtg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤSPACEX STORMㅤ</div></div></div>'
        },
        'NASASpaceflight': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠNASASpaceflight ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCSUu1lih2RifWkKtDOJdsBA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤNASA Spaceflightㅤ</div></div></div>'
        },
        'EverydayAstronaut': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠEVERYDAY ASTRONAUT ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC6uKrU_WqJ1R2HMTY3LIx5Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤEveryday Astronautㅤ</div></div></div>'
        },
        'LabPadre_LabCam': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_LABPADRE.svg"></img>ﾠNerdle Cam',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="LabPadre_LabCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤNerdle Camㅤ</div></div></div>'
        }, 
        'LabPadre_LaunchPadCam': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_LABPADRE.svg"></img>ﾠLaunch Pad Cam',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="LabPadre_LaunchPadCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤLaunch Pad Camㅤ</div></div></div>'
        }, 
        'LabPadre_NerdleCam4K': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_LABPADRE.svg"></img>ﾠNerdle Cam 4K',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="LabPadre_NerdleCam4K.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤNerdle Cam 4Kㅤ</div></div></div>'
        }, 
        'LabPadre_SapphireCam': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_LABPADRE.svg"></img>ﾠSapphire Cam',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="LabPadre_SapphireCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤSapphire Camㅤ</div></div></div>'
        }, 
        'LabPadre_SentinelCam': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_LABPADRE.svg"></img>ﾠSentinel Cam',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="LabPadre_SentinelCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤSentinel Camㅤ</div></div></div>'
        },
        'RDRONE_UY_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Logo_Twitch.svg"></img>ﾠRDRONE UY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=rdroneuy&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤRDRONE UYㅤ</div></div></div>'
        },
        'RDRONE_UY_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Logo_Twitch.svg"></img>ﾠRDRONE UY CHAT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/rdroneuy/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤRDRONE UYㅤ</div></div></div>'
        },
        'SPACEX_STORM_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Logo_Twitch.svg"></img>ﾠSPACEX STORM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=spacexstorm&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤSPACEX STORMㅤ</div></div></div>'
        },
        'SPACEX_STORM_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Logo_Twitch.svg"></img>ﾠSPACEX STORM CHAT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/spacexstorm/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤSPACEX STORMㅤ</div></div></div>'
        },
        'COPANO_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Logo_Twitch.svg"></img>ﾠCOPANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=copano&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤCOPANOㅤ</div></div></div>'
        },
        'COPANO_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Logo_Twitch.svg"></img>ﾠCOPANO CHAT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/copano/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤCOPANO CHATㅤ</div></div></div>'
        },
        'FENIX_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Logo_Twitch.svg"></img>ﾠFENIX',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=fenixreview&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤFENIXㅤ</div></div></div>'
        },
        'FENIX_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Logo_Twitch.svg"></img>ﾠFENIX CHAT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/fenixreview/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤFENIX CHATㅤ</div></div></div>'
        },
        'JACK_Twitch': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Logo_Twitch.svg"></img>ﾠJACK',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=unjackwallace&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤJACKㅤ</div></div></div>'
        },
        'JACK_Twitch_CHAT': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Logo_Twitch.svg"></img>ﾠJACK CHAT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.twitch.tv/embed/unjackwallace/chat?parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤJACK CHATㅤ</div></div></div>'
        },
        'KRAOESP_YouTube': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠKRAO ESP',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCZPR5ypKlxb1W_3RNIfWGKQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤKRAO ESPㅤ</div></div></div>'
        },
        'Rovi23_YouTube': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠROVI23',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCHgleR62IO4SCuDaOLZ4njw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤROVI23ㅤ</div></div></div>'
        },
        'Tecnonauta': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠTECNONAUTA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCFOSg71CRAJ58IPuV_-jMbw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤﾠTECNONAUTAㅤ</div></div></div>'
        },
        'SENADO_YouTube': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠTV SENADO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC4GJ43VNn4AYfiYa0RBCHQg&autoplay=true&mute=1"frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤT. Constitucionalㅤ</div></div></div>'
        },
        'TC_YouTube': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠT. CONTITUCIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCZaI-1N1oaGb-U8K2VNztjg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤDIPUTADOSㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠTV DIPUTADOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCYd5k2TyOyOmUJNx0SH17KA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤDIPUTADOSㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCcULnWuDzgQG9yF0Dv3DIgg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤDIPUTADOS 1ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCF6KgLfQqQzekn8U1DwVs9g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤDIPUTADOS 3ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_5': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC0QKtI8NpeMObauDylsSUDA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤDIPUTADOS 5ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_6': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCspWzpGflwb6A8PZqWw49CQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤDIPUTADOS 6ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_7': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCyVjDDBZGDywVGrpGBvGEsw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤDIPUTADOS 7ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_8': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCyVjDDBZGDywVGrpGBvGEsw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤDIPUTADOS 8ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_11': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 11',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCYPKjGKq2yLbAnmth5rFZmQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤDIPUTADOS 11ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_12': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 12',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCVOWFY-sgbDglBsfOap9okg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤDIPUTADOS 12ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_13': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 13',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC33MG3YdoQ16a8a3wODh6lw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤDIPUTADOS 13ㅤ</div></div></div>'
        },
        'TVEDUCACHILE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/NoLogo.svg"></img>ﾠTV EDUCA CHILE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVEDUCACHILE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤTV EDUCA CHILEㅤ</div></div></div>'
        },
        'ETC_TV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/NoLogo.svg"></img>ﾠETC TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalETCTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤETC TVㅤ</div></div></div>'
        },
        'STGOTV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/NoLogo.svg"></img>ﾠSANTIAGO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalSTGOTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤSANTIAGO TVㅤ</div></div></div>'
        },
        'SMTV': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/NoLogo.svg"></img>ﾠSANTA MARIA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalSMTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤSANTA MARIA TVㅤ</div></div></div>'
        },
        'CANAL11': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/NoLogo.svg"></img>ﾠCANAL 11 TV AYSEN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCANAL11.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤCANAL 11ㅤ</div></div></div>'
        },
        'Twitter_Copano': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitter.svg"></img>ﾠCOPANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="PantallaTwitterCopano.html" frameborder="0"></iframe></div>'
        },
        'Twitter_6w_es': {
            'nombre': '<img style="height: 20px; width:auto;" src="imagenes/Icono_Twitter.svg"></img>ﾠ6w_es',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="PantallaTwitter6w_es.html" frameborder="0"></iframe></div>'
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
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Reloj.png"></img>ﾠRELOJES',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Reloj_Pantalla.html" frameborder="0"></iframe></div>'
        },
        'Especial': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠEspecial',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCZg5VJxuq3m8VoX0eFA5tVA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TEXTOTituloDePantallaPequeña2">ㅤRDRONE UYㅤ</div></div></div>'
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
        App.add("CNN_CHILE");
        App.add("MEGANOTICIAS");

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
