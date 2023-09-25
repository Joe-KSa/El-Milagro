class Zapato {
    constructor(descripcion, precio, calificacion, genero, tipo, talla, imagenes) {
        this.precio = descripcion;
        this.precio = precio;
        this.calificacion = calificacion;
        this.genero = genero;
        this.tipo = tipo;
        this.talla = talla;
        this.imagenes = imagenes;  // Un objeto con las imágenes frontal, trasera y laterales
    }

    addToPage() {        
        $(".productos").append(`
            <div class="col">
                <div class="card">
                    <a href="#" class="zapatos-img">
                        <img src="${this.imagenes.frontal}" alt="...">
                    </a>                                
                    <div class="card-body text-center row row-cols-1">
                        <div class="col">
                            <span class="fs-6">${this.descripcion}</span>
                        </div>
                        <div class="col">
                            <span class="price">S/. ${this.precio}</span>
                        </div>
                        <div class="col">
                            <span class="free">Envió Gratis</span>    
                        </div>
                    </div>
                </div>
            </div>
        `);
        $(".zapatos-img").css({'height': '15em'})
        $(".zapatos-img img").css({'height': '100%', 'object-fit': 'contain', 'width': '100%', 'scale': '1.2', 'object-position': 'top'})
                
    }
}

// Crear algunos zapatos de ejemplo
let zapatos = [
    new Zapato('Zapatillas deportivas color rosado',50.0, 8, 'mujer', 'deportivo', 42, {frontal: 'https://drive.google.com/uc?export=view&id=1AH1vbbelCSMOY1X5XRVjYcqHc10b77QX', trasera: 'https://drive.google.com/uc?export=view&id=1HJqIMAyXEstnEpPA1GlKNG-GlDkON2Se', lateral: 'https://drive.google.com/uc?export=view&id=1DK93ZsHKUdkVqR3OeQVazGR-pjfmc0lm'}),
    new Zapato('', 70.0, 9, 'mujer', 'deportivo', 38, {frontal: 'https://drive.google.com/uc?export=view&id=1PHDue1sg0RTdCvsuVnHys8vkx7JkoY_C', trasera: 'imagen_trasera2.jpg', lateral: 'imagen_lateral2.jpg'}),
    new Zapato('', 80.0, 7, 'mujer', 'deportivo', 40, {frontal: 'https://drive.google.com/uc?export=view&id=1aM8ld42-YTDhPSjw0yL6ljjBlrrBeY9q', trasera: 'imagen_trasera3.jpg', lateral: 'imagen_lateral3.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1iR4lu2G0O8RN_SgZG5PhFoQFAc-dLH3s', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1GDlFH7aaK0KjqpdJCf2rl5I8j8BlSnoD', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1Bo7w6obj1FZFANc2pkuJQCbbx5nwPqkX', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1GBxvXMJjgsfV4O4zPpUdBap3t6kCdNVQ', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1fKySAYsp8N0uuF_uzGtS4avy-1krUvQB', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1JJaXZZ4yHXR-MmVsOBiJ2cCcv8yXEYpG', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1H489YWDyPh841QrACjAPIOmgu0-Qlwd8', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=13UV5mw1pVEbvGOdsp5f_UXhDAVOP97hs', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=10zaNywHGpN2HV2YHpcIjjGatNGq7l-AJ', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1cYI_VO0bqa1O_QTbzmNWWMZb-3zBh_aS', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1pTwdFMvYtttYRR39LeYViI-rkovfihxf', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1O5qlU8Ek1HxqZOqRsClOcc09ZmCg1V2X', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1478FOSCgyfXPrkFG72mrGugtIYY63Nwc', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1maaEanENXt25aCRSsIGimy30EZFq3Q8B', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1QdHvxWEQsmfQkTsLkdZD2AC0bEaTdKZ9', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1D3Z1LDeoU60hCojoCOZ44D5_Kp1AATLb', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1CPSQP35IWJ95ArBUbt7bfwPXsSl4zSym', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=10jOmlp5FRE-IhvX7qi_MpMI29MIClZ0t', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'}),
    new Zapato('', 60.0, 10, 'mujer', 'deportivo', 37, {frontal: 'https://drive.google.com/uc?export=view&id=1W5qM63pS2Kwbw03unmOMR-Mih9j2lpWW', trasera: 'imagen_trasera4.jpg', lateral: 'imagen_lateral4.jpg'})
];

// Filtrar los zapatos según ciertos criterios

//Paginas
// Crear un objeto para almacenar las páginas
let paginas = {
    'pagina1' : [],
    'pagina2' : []
}

// Función para filtrar y agregar zapatos a las páginas
function filtrarYAgregar(zapatos, genero) {
    // Filtrar los zapatos por género
    let zapatosFiltrados = zapatos.filter(zapato => zapato.genero === genero);
    
    // Dividir los zapatos filtrados en grupos de 8
    let grupos = [];
    for (let i = 0; i < zapatosFiltrados.length; i += 9) {
        grupos.push(zapatosFiltrados.slice(i, i + 9));
    }
    
    // Agregar cada grupo a una página
    for (let i = 0; i < grupos.length; i++) {
        paginas['pagina' + (i + 1)] = grupos[i];
    }
}

// Usar la función para filtrar por género 'mujer' y agregar a las páginas
filtrarYAgregar(zapatos, 'mujer');


export {paginas}