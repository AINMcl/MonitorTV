window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      var button = document.getElementById("volver-arriba");
      if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
      
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        button.style.bottom = "80px";
      } else {
        button.style.bottom = "20px";
      }
    }

    function volverArriba() {
      document.body.scrollTop = 0; // Para Safari
      document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
    }