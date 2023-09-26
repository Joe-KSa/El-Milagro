import { catalogo, zapatos } from './zapatos.js';





$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var itemId = urlParams.get('producto');

    let item = zapatos.find(zapato => zapato.id === itemId);

    if (item){
        item.addDetails();
        console.log(item);
    } else {
         // Manejo de errores cuando el producto no existe
        console.log("El producto especificado en la URL no existe.");
    }
})
