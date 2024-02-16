// Función para eliminar señales
function eliminarSenales() {
    const transmisionesPorLimpiar = document.querySelectorAll('.stream');
    
    transmisionesPorLimpiar.forEach(transmision => {
        const dataCanal = transmision.getAttribute('data-canal');
        App.remove(dataCanal);
    });
}

// Event listener para BTN1 y BTN2
function agregarEventListener(btnId, handler) {
    const btn = document.querySelector(`#${btnId}`);
    btn.addEventListener('click', handler);
}

// BTN1
agregarEventListener('BorrarStreams1', eliminarSenales);

// BTN2
agregarEventListener('BorrarStreams2', eliminarSenales);