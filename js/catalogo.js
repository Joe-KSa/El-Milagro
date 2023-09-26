import { catalogo, zapatos } from './zapatos.js';

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


// // Función para filtrar y agregar zapatos a las páginas
// function filtrarYAgregar(zapatos, genero) {
//     // Filtrar los zapatos por género
//     let zapatosFiltrados = zapatos.filter(zapato => zapato.genero === genero);
    
//     // Dividir los zapatos filtrados en grupos de 8
//     let grupos = [];
//     for (let i = 0; i < zapatosFiltrados.length; i += 9) {
//         grupos.push(zapatosFiltrados.slice(i, i + 9));
//     }
    
//     // Agregar cada grupo a una página
//     for (let i = 0; i < grupos.length; i++) {
//         paginas['pagina' + (i + 1)] = grupos[i];
//     }

//     // Guardar el estado en el almacenamiento local
//     localStorage.setItem('paginas', JSON.stringify(paginas));

//     // Actualizar la interfaz de usuario en todas las páginas
//     for (let pagina in paginas) {
//         enviarProductos(paginas[pagina]);
//     }
// }

// // Función para eliminar zapatos de las páginas
// function eliminar(genero) {
//     // Recorre todas las páginas
//     for (let pagina in paginas) {
//         // Filtra los zapatos que no coinciden con el género
//         paginas[pagina] = paginas[pagina].filter(zapato => zapato.genero !== genero);
//     }

//     // Guardar el estado en el almacenamiento local
//     localStorage.setItem('paginas', JSON.stringify(paginas));

//     // Actualizar la interfaz de usuario en todas las páginas
//     for (let pagina in paginas) {
//         enviarProductos(paginas[pagina]);
//     }
// }

// $(document).ready(function() {
//     // Cargar el estado desde el almacenamiento local al inicio
//     var paginas = JSON.parse(localStorage.getItem('paginas')) || {};

//     // Agrega un evento de escucha a la casilla de verificación del hombre
//     $('#flexCheckHombre').change(function() {
//         if($(this).is(":checked")) {
//             // Si la casilla del hombre está marcada, filtra y agrega los zapatos de hombre
//             filtrarYAgregar(zapatos, 'hombre');
//         } else {
//             // Si la casilla del hombre no está marcada, elimina los zapatos de hombre de las páginas
//             eliminar('hombre');
//         } 
        
        
//     })    
//     // Agrega un evento de escucha a la casilla de verificación de la mujer
//     $('#flexCheckMujer').change(function() {
//         if($(this).is(":checked")) {
//             // Si la casilla de la mujer está marcada, filtra y agrega los zapatos de mujer
//             filtrarYAgregar(zapatos, 'mujer');
            

//         } else {
//          // Si la casilla de la mujer no está marcada, elimina los zapatos de mujer de las páginas
//             eliminar('mujer');
            
//         }
        
//     });

// });