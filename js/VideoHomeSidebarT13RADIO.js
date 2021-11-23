var playerJw;

$(window).ready(function() {
    var isActiveFloatBox = false;

    var tempAdvertising = {}
    //var prerollState = $.cookie('preroll.state');

    //if (!prerollState) {
        tempAdvertising = {
            client: 'vast',
            skipoffset: '5',
            skipmessage: 'Saltar en XX',
            skiptext: 'Saltar',
            admessage: 'El anuncio terminará en XX segundos.',
            schedule: {
                preroll: {
                    offset: 'pre',
                    tag: 'https://pubads.g.doubleclick.net/gampad/live/ads?iu=/112372207/tele13radio.cl/podcast/prestreaming&description_url=[placeholder]&env=vp&impl=s&correlator=&tfcd=0&npa=0&gdfp_req=1&output=vast&sz=640x480&cust_params=demo%3D[demo]&unviewed_position_start=1'
                }
            }
        };
        //var pr_date = new Date();
        //var pr_minutes = 30;
        //pr_date.setTime(pr_date.getTime() + (pr_minutes * 60 * 1000));
        //$.cookie('preroll.state', 'exist', {expires: pr_date, path: '/'});
    //}

    var autoStart = true;


    var playState = $.cookie('play.state');
    if (playState && playState == 'false') {
        autoStart = true;
        $("#envivo-loading").hide();
        $(".envivo-destacado").css('position', 'relative');
        $(".envivo-destacado").css('left', '0');
        playerWith = '100%';
        playerHeight = '';
    }

    var statusMute = true;
    var cookieMute = $.cookie('mute.state');
    if (cookieMute) {
        statusMute = cookieMute;
    }

    var token = getToken("5f50f1b1b7b7a6084611bbac", "live");

    playerJw = jwplayer('player-t13-movil').setup({
        playlist: [{
            image: "https://resource.t13.cl/img/radio/maqueta/t13radio-estudio.jpg",
            sources: [{ 
                file: "https://mdstrm.com/live-stream-playlist/5f50f1b1b7b7a6084611bbac.m3u8?access_token="+token,
                label: "HD",
                "default": "true"
            }]
        }],
        image: 'https://static.t13.cl/images/sizes/1024x576/1460579829-t13-movil-b.jpg',
        title: "T13 Movil" ,
        width: "100%",
        height: "100%",
        aspectratio: "16:9",
        mute: true,
        autostart: true,
        primary: 'html5',
        skin: {
            name: "six",
            active: "#1b70f7"
        },
        advertising: tempAdvertising
    });
    // StreamSense
    try {
        loadStreamSense(playerJw);
    } catch(error) {
        console.log(error);
    }

    // si es mobile o tablet
    if ($(window).width() <= 1024) {
        showBoxPlayerResized();
    }

    // playerJw.addButton(
    //     url_resource + "/img/iconos/new_window.png",
    //     "",
    //     function() {
    //         openPopupPlayer();
    //     },
    //     'open-popup'
    // );

    var isPlay = false;
    function playOrPause() {
        if (isPlay) {
            playerJw.pause();
            isPlay = false;
        } else {
            playerJw.play();
            isPlay = true;
        }
    }

    function changePlayerButton(state) {
        $(".button-pause").hide();
        $(".button-play").hide();
        if (state == "playing" || state == "buffering") {
            $(".button-pause").show();
        } else if (state == "paused" || state == "idle") {
            $(".button-play").show();
        }
    }

    $(".toolbar-button-play-pause").click(function() {
        playOrPause();
    });

    playerJw.on('play' , function(state) {
        $.cookie('play.state', 'true', {expires: 1, path: '/'});
        isActiveFloatBox = true;
//        autoRefresh = "off"; // Deshabilitado a pedido de Juan José en 20150509
        showBoxPlayerResized();
        changePlayerButton(state.newstate);
        isPlay = true;
        isDisabledPlayer = false;
        if (playerJw.getMute()) {
            $('.button-mute').css('display','inline');
        }
    });
    playerJw.on('adPlay', function(state) {
        isActiveFloatBox = true;
//        autoRefresh = "off"; // Deshabilitado a pedido de Juan José en 20150509
        showBoxPlayerResized();
    });
    playerJw.on('adError', function(state) {
        playerJw.play();
    });
    playerJw.on('buffer' , function(state) {
        changePlayerButton(state.newstate);
        isPlay = true;
    });
    playerJw.on('pause' , function(state) {
        $.cookie('play.state', 'false', {expires: 1, path: '/'});
        isActiveFloatBox = false;
//        autoRefresh = "on"; // Deshabilitado a pedido de Juan José en 20150509
        changePlayerButton(state.newstate);
        isPlay = false;
    });
    playerJw.on('idle', function(state) {
        $.cookie('play.state', 'false', {expires: 1, path: '/'});
        isActiveFloatBox = false;
//        autoRefresh = "on"; // Deshabilitado a pedido de Juan José en 20150509
        changePlayerButton(state.newstate);
        isPlay = false;
    });
    playerJw.on('complete', function(state) {
        changePlayerButton("paused");
        isPlay = false;
    });
    playerJw.on('mute' , function(state) {
        if (state.mute) {
            $('.button-mute').css('display','inline');
        } else {
            $('.button-mute').css('display','none');
        }
        setCookieMute(state.mute);
    });


    //
    // SLIDER VOLUMEN
    //
    // var sliderVolumen = new Slider('#volumen-input', {reversed:true, tooltip:'hide'});
    // sliderVolumen.on("slide", function(slideEvt) {
    //     //console.log(slideEvt);
    //     playerJw.setVolume(slideEvt);
    // });
    // sliderVolumen.on("slideStop", function(slideEvt) {
    //     //console.log(slideEvt);
    //     playerJw.setVolume(slideEvt);
    // });

    // $('#toolbar-div-volumen').hover(
    //     function () {
    //         var tempVol = playerJw.getVolume();
    //         sliderVolumen.setValue(tempVol);
    //         $("#volumen-slider").show();
    //     },
    //     function () {
    //         $("#volumen-slider").hide();
    //     }
    // );

    // $('#toolbar-button-volumen, .button-mute').click(
    //     function () {
    //         playerJw.setMute();
    //     }
    // );

    playerJw.on('volume', function(event){
        //console.log('the volume is now: ' + event.volume);
        if (event.volume == 0) {
            $('.button-mute').css('display','inline');
        } else {
            $('.button-mute').css('display','none');
        }
        sliderVolumen.setValue(event.volume);
    });


    //
    // PLAYER FLOTANTE
    //
    $(window).scroll(function() {
        if ($("#floatable-video-home").is(':in-viewport')) {
            desactivateFloatBox();
        } else {
            if (isActiveFloatBox) {
                activateFloatBox();
            }
        }
    });

    var isDisabledPlayer = false;
    function activateFloatBox() {
        if (isDisabledPlayer) {
            return;
        }
        if(!$("#t13-tv").data('ui-draggable')) {
            $(".top-panel").show();
            $("#t13-tv").addClass("floating-window");
            $("#t13-tv").draggable({handle: ".top-panel"});
        }
    }

    function desactivateFloatBox() {
        if($("#t13-tv").data('ui-draggable')) {
            $(".top-panel").hide();
            $("#t13-tv").removeClass("floating-window");
            $("#t13-tv").draggable("destroy");
        }
    }

    function openPopupPlayer() {
//        autoRefresh = "on"; // Deshabilitado a pedido de Juan José en 20150509
        isDisabledPlayer = true;
        playerJw.pause(true);
        window.open("/en-vivo/popup", "T13 Video", "scrollbars=yes, width=800, height=720");   // Opens a new window
    }

    function setCookieMute(mute_state) {
        $.cookie('mute.state', mute_state, {expires: 365, path: '/'});
    }

    function showBoxPlayerResized() {
        $("#envivo-loading").hide();
        $(".envivo-destacado").css('position', 'relative');
        $(".envivo-destacado").css('left', '0');
        var anchoPlayer = $("#floatable-video-home").width();
        anchoPlayer = parseInt(anchoPlayer*9/16);
        //playerJw.resize('100%', anchoPlayer);
    }

    $("#btn-close-float").click(function() {
        isDisabledPlayer = true;
        playerJw.pause(true);
        desactivateFloatBox();
    });

    $("#btn-open-float").click(function() {
        openPopupPlayer();
    });

});