document.addEventListener('DOMContentLoaded', function() {
  // Obtener el botón de alternar modo
  const toggleModeBtn = document.getElementById('botonMostrarOcultarModoOscuro');
  const iconSpan = toggleModeBtn.querySelector('.material-icons');

  // Función para activar el modo oscuro
  function activarModoOscuro() {
    document.body.classList.add('dark-mode');
    document.getElementById('TextoBotonMostrarOcultarModoOscuro').textContent = 'MODO CLARO';
    iconSpan.textContent = 'light_mode';
    cambiarClaseWaves('waves-azul', 'waves-modooscuro');
    cambiarClaseWaves('waves-red', 'waves-modooscuro');
    cambiarClaseWaves('waves-verde', 'waves-modooscuro');
    cambiarClaseWaves('waves-grisoscuro', 'waves-modooscuro');
    cambiarClaseWaves('waves-grisclaro', 'waves-white');
    localStorage.setItem('modo', 'oscuro');
  }

  // Función para desactivar el modo oscuro
  function desactivarModoOscuro() {
    document.body.classList.remove('dark-mode');
    document.getElementById('TextoBotonMostrarOcultarModoOscuro').textContent = 'MODO OSCURO';
    iconSpan.textContent = 'dark_mode';
    cambiarClaseWaves('waves-modooscuro', 'waves-azul');
    cambiarClaseWaves('waves-modooscuro', 'waves-red');
    cambiarClaseWaves('waves-modooscuro', 'waves-verde');
    cambiarClaseWaves('waves-modooscuro', 'waves-grisoscuro');
    cambiarClaseWaves('waves-white', 'waves-grisclaro');
    localStorage.setItem('modo', 'claro');
  }

  // Función para cambiar la clase waves en todos los elementos relevantes
  function cambiarClaseWaves(claseActual, nuevaClase) {
    const elementos = document.querySelectorAll('.' + claseActual);
    elementos.forEach(function(elemento) {
      elemento.classList.remove(claseActual);
      elemento.classList.add(nuevaClase);
    });
  }

  // Función para verificar el modo desde el localStorage y activar el modo oscuro si es necesario
  function verificarModoDesdeLocalStorage() {
    const modo = localStorage.getItem('modo');
    const urlParams = new URLSearchParams(window.location.search);
    const modoURL = urlParams.get('modo');

    if (modoURL === 'oscuro') {
      activarModoOscuro();
    } else if (modoURL === 'claro') {
      desactivarModoOscuro();
    } else if (modo === 'oscuro') {
      activarModoOscuro();
    } else {
      desactivarModoOscuro();
    }
  }

  // Agregar evento de clic al botón de alternar modo
  toggleModeBtn.addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
      desactivarModoOscuro();
    } else {
      activarModoOscuro();
    }
  });

  // Verificar el modo desde el localStorage y la URL cuando se carga la página
  verificarModoDesdeLocalStorage();
});
