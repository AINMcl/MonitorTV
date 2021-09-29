/*
    Tomar una fotografÃ­a y guardarla en un archivo v3
    @date 2018-10-22
    @author parzibyte
    @web parzibyte.me/blog
*/
const tieneSoporteUserMedia = () =>
    !!(navigator.getUserMedia || (navigator.mozGetUserMedia || navigator.mediaDevices.getUserMedia) || navigator.webkitGetUserMedia || navigator.msGetUserMedia)
const _getUserMedia = (...arguments) =>
    (navigator.getUserMedia || (navigator.mozGetUserMedia || navigator.mediaDevices.getUserMedia) || navigator.webkitGetUserMedia || navigator.msGetUserMedia).apply(navigator, arguments);

// Declaramos elementos del DOM
const $video = document.querySelector("#video"),
    $canvas = document.querySelector("#canvas"),
    $estado = document.querySelector("#estado"),
    $boton = document.querySelector("#boton"),
    $listaDeDispositivos = document.querySelector("#listaDeDispositivos");

const limpiarSelect = () => {
    for (let x = $listaDeDispositivos.options.length - 1; x >= 0; x--)
        $listaDeDispositivos.remove(x);
};
const obtenerDispositivos = () => navigator
    .mediaDevices
    .enumerateDevices();

// La funciÃ³n que es llamada despuÃ©s de que ya se dieron los permisos
// Lo que hace es llenar el select con los dispositivos obtenidos
const llenarSelectConDispositivosDisponibles = () => {

    limpiarSelect();
    obtenerDispositivos()
        .then(dispositivos => {
            const dispositivosDeVideo = [];
            dispositivos.forEach(dispositivo => {
                const tipo = dispositivo.kind;
                if (tipo === "videoinput") {
                    dispositivosDeVideo.push(dispositivo);
                }
            });

            // Vemos si encontramos algÃºn dispositivo, y en caso de que si, entonces llamamos a la funciÃ³n
            if (dispositivosDeVideo.length > 0) {
                // Llenar el select
                dispositivosDeVideo.forEach(dispositivo => {
                    const option = document.createElement('option');
                    option.value = dispositivo.deviceId;
                    option.text = dispositivo.label;
                    $listaDeDispositivos.appendChild(option);
                });
            }
        });
}

(function() {
    // Comenzamos viendo si tiene soporte, si no, nos detenemos
    if (!tieneSoporteUserMedia()) {
        alert("Lo siento. Tu navegador no soporta esta caracterÃ­stica");
        $estado.innerHTML = "Parece que tu navegador no soporta esta caracterÃ­stica. Intenta actualizarlo.";
        return;
    }
    //AquÃ­ guardaremos el stream globalmente
    let stream;


    // Comenzamos pidiendo los dispositivos
    obtenerDispositivos()
        .then(dispositivos => {
            // Vamos a filtrarlos y guardar aquÃ­ los de vÃ­deo
            const dispositivosDeVideo = [];

            // Recorrer y filtrar
            dispositivos.forEach(function(dispositivo) {
                const tipo = dispositivo.kind;
                if (tipo === "videoinput") {
                    dispositivosDeVideo.push(dispositivo);
                }
            });

            // Vemos si encontramos algÃºn dispositivo, y en caso de que si, entonces llamamos a la funciÃ³n
            // y le pasamos el id de dispositivo
            if (dispositivosDeVideo.length > 0) {
                // Mostrar stream con el ID del primer dispositivo, luego el usuario puede cambiar
                mostrarStream(dispositivosDeVideo[0].deviceId);
            }
        });



    const mostrarStream = idDeDispositivo => {
        _getUserMedia({
                video: {
                    // Justo aquÃ­ indicamos cuÃ¡l dispositivo usar
                    deviceId: idDeDispositivo,
                }
            },
            (streamObtenido) => {
                // AquÃ­ ya tenemos permisos, ahora sÃ­ llenamos el select,
                // pues si no, no nos darÃ­a el nombre de los dispositivos
                llenarSelectConDispositivosDisponibles();

                // Escuchar cuando seleccionen otra opciÃ³n y entonces llamar a esta funciÃ³n
                $listaDeDispositivos.onchange = () => {
                    // Detener el stream
                    if (stream) {
                        stream.getTracks().forEach(function(track) {
                            track.stop();
                        });
                    }
                    // Mostrar el nuevo stream con el dispositivo seleccionado
                    mostrarStream($listaDeDispositivos.value);
                }

                // Simple asignaciÃ³n
                stream = streamObtenido;

                // Mandamos el stream de la cÃ¡mara al elemento de vÃ­deo
                $video.srcObject = stream;
                $video.play();

                //Escuchar el click del botÃ³n para tomar la foto
                //Escuchar el click del botÃ³n para tomar la foto
                $boton.addEventListener("click", function() {

                    //Pausar reproducciÃ³n
                    $video.pause();

                    //Obtener contexto del canvas y dibujar sobre Ã©l
                    let contexto = $canvas.getContext("2d");
                    $canvas.width = $video.videoWidth;
                    $canvas.height = $video.videoHeight;
                    contexto.drawImage($video, 0, 0, $canvas.width, $canvas.height);

                    let foto = $canvas.toDataURL(); //Esta es la foto, en base 64
                    $estado.innerHTML = "Enviando foto. Por favor, espera...";
                    fetch("./guardar_foto.php", {
                            method: "POST",
                            body: encodeURIComponent(foto),
                            headers: {
                                "Content-type": "application/x-www-form-urlencoded",
                            }
                        })
                        .then(resultado => {
                            // A los datos los decodificamos como texto plano
                            return resultado.text()
                        })
                        .then(nombreDeLaFoto => {
                            // nombreDeLaFoto trae el nombre de la imagen que le dio PHP
                            console.log("La foto fue enviada correctamente");
                            $estado.innerHTML = `Foto guardada con Ã©xito. Puedes verla <a target='_blank' href='./${nombreDeLaFoto}'> aquÃ­</a>`;
                        })

                    //Reanudar reproducciÃ³n
                    $video.play();
                });
            }, (error) => {
                console.log("Permiso denegado o error: ", error);
                $estado.innerHTML = "No se puede acceder a la cÃ¡mara, o no diste permiso.";
            });
    }
})();