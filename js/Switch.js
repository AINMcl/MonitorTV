// ================= ELEMENTOS =================
const iframe = document.getElementById('player');
const overlay = document.getElementById('overlay');
const contenedorCanales = document.getElementById('channel-list');
const buscador = document.getElementById('buscador');
const tagSelect = document.getElementById('tag-select');
const offcanvasCanales = document.getElementById('MenuDespeglableSeñales');

// ================= CONFIG =================
const STORAGE_KEY = 'monitorTV_canal_actual';

// ================= ESTADO =================
let current = 0;
let startY = null;

// ================= URL PARAM =================
function getParameterValue(paramName) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName);
}

const parametroCanal = getParameterValue('senal');

// ================= CANAL INICIAL =================
const canalDesdeURL = parametroCanal
    ? LosCanales.findIndex(c => c.id === parametroCanal)
    : -1;

if (canalDesdeURL !== -1) {
    current = canalDesdeURL;
    localStorage.setItem(STORAGE_KEY, LosCanales[current].id);
} else {
    const canalGuardado = localStorage.getItem(STORAGE_KEY);
    const index = LosCanales.findIndex(c => c.id === canalGuardado);
    if (index !== -1) current = index;
}

// ================= CARGAR CANAL =================
function cargarCanal() {
    const canal = LosCanales[current];

    iframe.src = canal.url;
    overlay.innerHTML = canal.titulo;

    localStorage.setItem(STORAGE_KEY, canal.id);

    history.replaceState(
        null,
        '',
        `${window.location.pathname}?senal=${canal.id}`
    );

    actualizarSeleccion();
}

// ================= ZAPPING TECLADO =================
document.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown'].includes(e.key)) e.preventDefault();

    if (e.key === 'ArrowDown') {
        current = (current + 1) % LosCanales.length;
        cargarCanal();
    }

    if (e.key === 'ArrowUp') {
        current = (current - 1 + LosCanales.length) % LosCanales.length;
        cargarCanal();
    }
});

// ================= SWIPE CELULAR =================
document.addEventListener('touchstart', e => {
    startY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', e => {
    if (startY === null) return;

    const diff = startY - e.changedTouches[0].clientY;
    if (Math.abs(diff) < 50) return;

    current = diff > 0
        ? (current + 1) % LosCanales.length
        : (current - 1 + LosCanales.length) % LosCanales.length;

    cargarCanal();
    startY = null;
});

// ================= BOTÓN CANAL =================
function crearBotonCanal(canal) {
    const btn = document.createElement('button');

    const realIndex = LosCanales.findIndex(c => c.id === canal.id);

    btn.className = `
        btn
        BotonTV_Señales
        waves-effect
        waves-grisclaro
        ${realIndex === current ? 'BotonTV_SeñalSeleccionada' : ''}
    `;

    btn.innerHTML = canal.nombre;

    btn.onclick = () => {
        current = realIndex;
        cargarCanal();

        const bs = bootstrap.Offcanvas.getInstance(offcanvasCanales);
        if (bs) bs.hide();
    };

    return btn;
}

// ================= RENDER LISTA =================
function renderLista(lista) {
    contenedorCanales.innerHTML = '';
    lista.forEach(canal => {
        contenedorCanales.appendChild(crearBotonCanal(canal));
    });
}

// ================= ACTUALIZAR SELECCIÓN =================
function actualizarSeleccion() {
    document.querySelectorAll('.BotonTV_Señales').forEach(btn => {
        btn.classList.toggle(
            'BotonTV_SeñalSeleccionada',
            btn.innerHTML === LosCanales[current].nombre
        );
    });
}

// ================= FILTRO TAG =================
function filtrarPorTag() {
    const tag = tagSelect.value.toLowerCase().trim();

    if (!tag) {
        renderLista(LosCanales);
        return;
    }

    const filtrados = LosCanales.filter(c =>
        c.tags?.map(t => t.toLowerCase()).includes(tag)
    );

    renderLista(filtrados);
}

// ================= BUSCADOR =================
function filtrarSeñales() {
    const texto = buscador.value.toLowerCase().trim();

    if (!texto) {
        renderLista(LosCanales);
        return;
    }

    const filtrados = LosCanales.filter(c =>
        c.titulo.toLowerCase().includes(texto) ||
        c.tags?.some(t => t.toLowerCase().includes(texto))
    );

    renderLista(filtrados);
}

// ================= BORRAR TEXTO =================
function borrarTexto() {
    buscador.value = '';
    tagSelect.value = '';
    renderLista(LosCanales);
}

// ================= EVENTOS =================
buscador.addEventListener('input', filtrarSeñales);
tagSelect.addEventListener('change', filtrarPorTag);

// ================= INIT =================
document.body.focus();
renderLista(LosCanales);
cargarCanal();
