const btnFullscreen = document.querySelector('#fullscreen'),
btnFullscreenSpanIcon = btnFullscreen.querySelector('text'),
btnFullscreenSpan = btnFullscreen.querySelector('span');

function getFullscreenElement() {
return ['fullscreen', 'webkitFullscreen', 'mozFullscreen', 'msFullscreen']
.find(prop => document[prop + 'Element']);
}

function toggleFullscreen() {
const isFullscreen = getFullscreenElement();
if (isFullscreen) {
document.exitFullscreen();
} else {
document.documentElement.requestFullscreen().catch(console.log);
}
const actionText = isFullscreen ? 'ENTRAR' : 'SALIR';
const iconText = isFullscreen ? 'open_in_full' : 'close_fullscreen';
btnFullscreenSpanIcon.innerHTML = `${actionText} A PANTALLA COMPLETA`;
btnFullscreenSpan.innerHTML = iconText;
}

btnFullscreen.addEventListener('click', toggleFullscreen);