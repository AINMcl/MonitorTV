
var size = 6;

///6 = 2 PANTALLAS HORIZONTALMENTE///
///3 = 4 PANTALLAS HORIZONTALMENTE///
///4 = 3 PANTALLAS HORIZONTALMENTE///
var App = {
     channels: {
        'NASA_TV_PUBLIC': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠNASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATVPUBLIC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV PUBLICㅤ</div></div></div>'
        },
        'NASA_TV_MEDIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠNASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATVMEDIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV MEDIAㅤ</div></div></div>'
        },
        'ISS_SD': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠISS CAM SD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalISS_SD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS SDㅤ</div></div></div>'
        },
        'ISS_HD': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠISS CAM HD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalISS_HD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS HDㅤ</div></div></div>'
        },
        'ISS_TRACKER': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Icono_Ubicacion.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Logo_ESA.svg"></img>ﾠISS TRACKER MAP 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal_ISS_TRACKER.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'ISS_TRACKER_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Icono_Ubicacion.svg"></img>ﾠISS TRACKER MAP 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'ISS_TRACKER_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Icono_Ubicacion.svg"></img>ﾠISS TRACKER MAP 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS_2_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'ISS_TRACKER_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Icono_Ubicacion.svg"></img>ﾠISS TRACKER MAP 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'NASA_CSBF_Operations': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠNASA CSBF OPERATIONS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_CSBF.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA CSBF Operationsㅤㅤ</div></div></div>'
        },
        'NASA_LaRC': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠNASA LaRC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_LaRC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA LaRCㅤ</div></div></div>'
        },
        'NASA_Wallops': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠNASA WALLOPS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_Wallops.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA WALLOPSㅤ</div></div></div>'
        },
        'NASA_NE02': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠNASA NE02',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_NE02.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA NE02ㅤ</div></div></div>'
        },
        'NASA_VIDEO': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠNASA VIDEO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC_aP7p621ATY_yAa8jMqUVA&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV PUBLICㅤ</div></div></div>'
        },
        'NASA_TV_PUBLIC2': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠNASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_PUBLIC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV PUBLICㅤ</div></div></div>'
        },
        'NASA_TV_MEDIA2': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠNASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_MEDIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV MEDIAㅤ</div></div></div>'
        },
        'ISS_SD2': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠISS CAM SD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_ISSSD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS SDㅤ</div></div></div>'
        },
        'ISS_HD2': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠISS CAM HD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_ISSHD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS HDㅤ</div></div></div>'
        },
        'ESA_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_ESA.svg"></img>ﾠESA WEB TV 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalESATV_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤESA WEB TV 1ㅤ</div></div></div>'
        },
        'ROSCOSMOS': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Logo_ROSCOSMOS.svg"></img>ﾠROSCOSMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCOcpUgXosMCIlOsreUfNFiA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'NASA_YT_PUBLIC': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠNASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_PUBLIC_YOUTUBE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV PUBLICㅤ</div></div></div>'
        },
        'NASA_YT_MEDIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠNASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_MEDIA_YOUTUBE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV MEDIAㅤ</div></div></div>'
        },
        'NASA_YT_KSC': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Logo_NASA.svg"></img>ﾠNASA KSC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_KSC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA KSCㅤ</div></div></div>'
        },
        'SPACEX': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_TV_News.svg"></img>ﾠSPACEX',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCtI0Hodo5o5dUb67FeUjDeA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEXㅤ</div></div></div>'
        },
        'BLUE_ORIGIN': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_TV_News.svg"></img>ﾠBLUE ORIGIN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCVxTHEKKLxNjGcvVaZindlg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBLUE ORIGINㅤ</div></div></div>'
        },
        'ULA': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_TV_News.svg"></img>ﾠULA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCnrGPRKAg1PgvuSHrRIl3jg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤULAㅤ</div></div></div>'
        }, 
        'ARIANESPACE': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_TV_News.svg"></img>ﾠARIANESPACE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRn9F2D9j-t4A-HgudM7aLQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤARIANESPACEㅤ</div></div></div>'
        },
        'Rocket_Lab': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_TV_News.svg"></img>ﾠROCKET LAB',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCsWq7LZaizhIi-c-Yo_bcpw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEXㅤ</div></div></div>'
        }, 
        'Virgin_Galactic': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_TV_News.svg"></img>ﾠVIRGIN GALACTIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UClcvOr7LV8tlJwJvkNMmnKg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVirgin Galacticㅤ</div></div></div>'
        },
        'CGTN': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_TV_News.svg"></img>ﾠCGTN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCgrNz-aDmcr2uuto8_DL2jg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCGTNㅤ</div></div></div>'
        },
        'RDRONE_UY_YouTube': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_TV_News.svg"></img>ﾠRDRONE UY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC2BCLTaBqFwyc3CZlkEHg_Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRDRONE UYㅤ</div></div></div>'
        },
        'SPACEX_STORM_YouTube': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_TV_News.svg"></img>ﾠSPACEX STORM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCxjGXSXK3Ss-mkiZ-wYtjtg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEX STORMㅤ</div></div></div>'
        },
        'NASASpaceflight': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_TV_News.svg"></img>ﾠNASASpaceflight ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCSUu1lih2RifWkKtDOJdsBA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA Spaceflightㅤ</div></div></div>'
        },
        'EverydayAstronaut': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_TV_News.svg"></img>ﾠEVERYDAY ASTRONAUT ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC6uKrU_WqJ1R2HMTY3LIx5Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEVERY ASTRONAUTㅤ</div></div></div>'
        },
        'FronteraEspacial': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_TV_News.svg"></img>ﾠFRONTERA ESPACIAL ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCurxSOUxQszWp-5juh48wmg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFRONTERA ESPACIALㅤ</div></div></div>'
        },
        'ConexionEspacial': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_TV_News.svg"></img>ﾠCONEXION ESPACIAL ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCS6DjxV3L8XdnGa70ZxS_FA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCONEXION ESPACIALㅤ</div></div></div>'
        }, 
        '321LAUNCH_CAM': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_Camara.svg"></img>ﾠ321LAUNCH CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUccOGcvTNrJuihXhYsrp7w&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ321LAUNCH CAMㅤ</div></div></div>'
        },
        'Spaceflight Now': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_Camara.svg"></img>ﾠSPACEFLIGHT NOW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCoLdERT4-TJ82PJOHSrsZLQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEFLIGHT NOWㅤ</div></div></div>'
        }, 
        'ComoSapiens': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_Camara.svg"></img>ﾠCOSMOSAPIENS ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC3ZODI-xZfdPanPP6tKUg9g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCOSMOSAPIENSㅤ</div></div></div>'
        }, 
        'InfiniteSpace': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_Camara.svg"></img>ﾠINFINITE SPACE ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCn8SmzG1xXx_inu-XADxcMg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤINFINITE SPACEㅤ</div></div></div>'
        },
        'SpaceXMissions': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_Camara.svg"></img>ﾠSPACEX MISSIONS ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCE_z1X3v8ZdBNHn9IFHBfNw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEX MISSIONSㅤ</div></div></div>'
        },
        'OceanCam': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="Imagenes/Icono_Camara.svg"></img>ﾠOCEAN CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCF8IYFF60clbbznjvJ7qoTQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤOCEAN CAMㅤ</div></div></div>'
        }, 
        'LabPadre_LabCam': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_LABPADRE.svg"></img>ﾠLAB CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/LabCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLAB CAMㅤ</div></div></div>'
        }, 
        'LabPadre_RoverCam': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_LABPADRE.svg"></img>ﾠROVER CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/RoverCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤROVER CAMㅤ</div></div></div>'
        }, 
        'LabPadre_NerdleCam4K': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_LABPADRE.svg"></img>ﾠNerdle Cam 4K',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/NerdleCam4K.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNERDLE CAMㅤ</div></div></div>'
        }, 
        'LabPadre_SapphireCam': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_LABPADRE.svg"></img>ﾠSAPPHIRE CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/SapphireCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSAPPHIRE CAMㅤ</div></div></div>'
        }, 
        'LabPadre_SentinelCam': {
            'nombre': '<img style="height: 20px; width:auto:" src="Imagenes/Logo_LABPADRE.svg"></img>ﾠSENTINEL CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/SentinelCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSENTINEL CAMㅤ</div></div></div>'
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
        App.add("ISS_SD");
        App.add("ISS_HD");
        App.add("ISS_TRACKER");
        App.add("ISS_TRACKER_4");

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
