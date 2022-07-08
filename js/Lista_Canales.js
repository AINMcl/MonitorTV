const seccionCanales = document.getElementById("channel-list");
const btns = seccionCanales.getElementsByClassName("ListaSeñales_Señal");

const nombreBarra = document.createElement('div');


const ancla = document.createElement('A');
ancla.id = 'links';
ancla.title = 'TITULO DE SEÑAL';


for (const canal of LosCanales) {
    const BtnCanal = document.createElement('div');

    BtnCanal.classList.add('ListaSeñales_Señal');
    BtnCanal.classList.add('waves-effect');
    BtnCanal.classList.add('waves-azulclaro');
    BtnCanal.innerHTML = canal.nombre;
    
    seccionCanales.appendChild(BtnCanal)
}