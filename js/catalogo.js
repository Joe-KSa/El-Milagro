import { catalogo, zapatos} from './zapatos.js';

// var paginas = {
//     'pagina1' : [],
//     'pagina2' : []
// }




$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var tienda = urlParams.get('tienda');

    
    function enviarProductos(products){
        setTimeout(function() {
            //Limpiar el contenedor
            $(".productos").empty();
    
            //Agregar cada producto
            for (let product of products) {
     
                product.addToPage();
            }
        }, 500);
    }
    
    if (tienda in catalogo){
        enviarProductos(catalogo[tienda]);
    
    } else {
         // Manejo de errores cuando la tienda no existe
        console.log("La tienda especificada en la URL no existe.");
    }
    
    


    // Actualizar la paginación
    var currentPage = parseInt(tienda.replace('pagina', ''));
    $('.pagination .page-item').each(function(index) {
        if (index === 0 || index === $('.pagination .page-item').length - 1) return; // Ignorar los botones 'previous' y 'next'
        var pageNumber = currentPage + index - 1; // -1 para que la página actual esté a la izquierda
        $(this).data('page-number', pageNumber);
        $(this).find('.page-link').text(pageNumber);
        $(this).find('.page-link').attr('href', 'catalogo.html?tienda=pagina' + pageNumber);
        if (index === 1) $(this).addClass('active'); // La página actual está a la izquierda
        else $(this).removeClass('active');
    });

    // Funcionalidad para los botones 'previous' y 'next'
    $('.page-link[aria-label="Previous"]').parent().click(function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            var newPage = Math.max(1, currentPage - 3); // Asegurarse de que la nueva página no sea menor que 1
            window.location.href = 'catalogo.html?tienda=pagina' + newPage;
        }
    });

    $('.page-link[aria-label="Next"]').parent().click(function(e) {
        e.preventDefault();
        if (currentPage < $('.pagination .page-item').length - 2) { // -2 debido a los botones 'previous' y 'next'
            window.location.href = 'catalogo.html?tienda=pagina' + (currentPage + 3);
        }
    });
});


