let player = document.getElementById("player");


function Señal24HTVN(){
    player.setAttribute('src','Señal24HTVN.html');
}
function SeñalCNNCHILE(){
  player.setAttribute('src','SeñalCNNCHILE.html');
}
function SeñalMEGANOTICIAS(){
  player.setAttribute('src','SeñalMEGANOTICIAS.html');
}


var item = document.getElementById("video");
var live = document.getElementById("live");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func()
{
   live.setAttribute("style", "opacity:0;")
}

function func1()
{  
    live.setAttribute("style", "opacity:1;")
}

window.onload = () => {
    const player9 = document.getElementById('player-9')
    player9.setAttribute('src','https://www.youtube.com/embed/JYC0kvUlVXo?autoplay=1');
}