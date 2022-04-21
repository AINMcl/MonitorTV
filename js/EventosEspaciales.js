    //ELIMINAR SEÑALES = https://alplox.github.io/tele/
    const btnLimpiar = document.querySelector('#Borrar');
    btnLimpiar.addEventListener('click', () => {
      let transmisionPorLimpiar = document.querySelectorAll('.stream');
        transmisionPorLimpiar.forEach(transmision => {
          let dataCanal = transmision.getAttribute('data-canal');
          App.remove(dataCanal);
        })
    });

    //ELIMINAR SEÑALES = https://alplox.github.io/tele/
    const btnLimpiarSenal = document.querySelector('#BorrarSenales1');
    btnLimpiarSenal.addEventListener('click', () => {
      let transmisionPorLimpiar = document.querySelectorAll('.stream');
        transmisionPorLimpiar.forEach(transmision => {
          let dataCanal = transmision.getAttribute('data-canal');
          App.remove(dataCanal);
        })
    });