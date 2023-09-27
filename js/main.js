// Primero, selecciona todos los elementos que quieres animar
var elementos = $('.animado-section');

// Luego, crea una función que se ejecutará cada vez que se desplace la página
$(window).scroll(function() {
  // Obtén la posición actual de desplazamiento
  var scrollPos = $(this).scrollTop();

  // Revisa cada uno de los elementos
   elementos.each(function() {
    // Obtén la posición del elemento
    var elementoPos = $(this).offset().top;

    // Si el elemento está en la ventana del navegador, añade la clase 'visible'
    if (elementoPos < scrollPos + $(window).height()) {
      $(this).addClass('visible');
    } else {
      // Si no, remueve la clase 'visible'
      $(this).removeClass('visible');
    }
  });
});