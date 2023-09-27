class Zapato {
    constructor(id, descripcion, precio, calificacion, genero, tipo, talla, imagenes) {
        this.id = id
        this.descripcion = descripcion;
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
                    <a href="producto.html?producto=${this.id}" class="zapatos-img">
                        <img src="${this.imagenes.frontal}" alt="...">
                    </a>                                
                    <div class="card-body text-center row row-cols-1 p-0 m-0">
                        <div class="col mt-3">
                            <span class="fs-6 fw-semibold">${this.descripcion}</span>
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


    addDetails(){
        $(".item-producto").append(
            `
            <div class="col row-cols-1 ps-5">
                <div class="col" style="height: 20em"><img class="h-100 w-100 object-fit-contain img-fondo-producto" src="${this.imagenes.frontal}" alt="" style="object-position: center"></div>
                <div class="col row row-cols-3 img-preview">
                    ${this.imagenes.trasera ? `<div class="producto-item-block"><img class="w-100 h-100" src="${this.imagenes.trasera}" alt=""></div>` : ''}
                    ${this.imagenes.lateral ? `<div class="producto-item-block"><img class="w-100 h-100" src="${this.imagenes.lateral}" alt=""></div>` : ''}
                    ${this.imagenes.lateralLeft ? `<div class="producto-item-block"><img class="w-100 h-100" src="${this.imagenes.lateralLeft}" alt=""></div>` : ''}
                </div>
            </div>
            <div class="col row row-cols-1 border-0 border-lg gap-3 p-3">
                <div class="mx-3 row row-cols-1 gap-3">
                    <div class="col">
                        <span class="fw-semibold fs-6">${this.descripcion}</span>
                    </div>
                    <div class="col">
                        <span class="price">S/. ${this.precio}</span>
                    </div>
                    <div><input type="color" class="form-control p-0  form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></div>
                    <div class="col row row-cols-2 justify-content-center">
                        <div class="col-6 row row-cols-3">
                            <button class="btn btn-color col-1 pe-4  rounded-0">+</button>
                            <input type="text" class="border col col-6 rounded-0"></input>
                            <button class="btn btn-color col-1 pe-4 text-center rounded-0">-</button>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-color rounded-0" >Añadir a carrito</button>
                        </div>
                    </div>
                    
                    <div class="col row row-cols-1">
                        <span class="col">Materiales: </span>
                        <span class="col">Apariencia: </span>
                        <span class="col">Forro: </span>
                        <span class="col">Planta: </span>
                        <span class="col">Altura de taco: </span>
                    </div>
                    <div class="col">
                        <p>!Eleva tu <span>#GottaLook</span> con las zapatillas soñadas! Las plataformas siempre sumarán en tus outfits si te atreves a combinarlas como más te gustan.
                        El tip más importante para resaltar tus zapatilas es: !Elegir la que está a la altura de tu estilo!</p>
                    </div>
                    <div class="info-user row">
                        <div class="col">
                            <div class="user-favorite d-flex align-items-center gap-2">
                                <img src="src/heart.svg" alt="">
                                <span>Agregar a Favoritos</span>
                            </div>
                        </div>
                        <div class="col user-dislike d-none">
                            <div class=" d-flex align-items-center gap-2">
                                <img src="src/dislike.svg" alt="">
                                <span>Eliminar de Favoritos</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>`
        )
        const imagenes = $('.img-preview div img');
        const fondo = $('.img-fondo-producto');
        imagenes.click(function () {
            let tempSrc = $(this).attr('src');
            $(this).attr('src', fondo.attr('src'));
            fondo.attr('src', tempSrc);
        });



        $(document).ready(function(){

            $('.user-favorite').on({
                mouseover: function(){
                    $('.user-favorite img').attr("src", "src/heart-hover.svg")
                },
                mouseout: function(){
                    $('.user-favorite img').attr("src", "src/heart.svg")
                },
                click: function(){
                    $('.user-favorite img').replaceWith('<img src="src/heart-hover.svg" alt="">')
                    $('.user-dislike').removeClass("d-none")
                    $('.user-favorite').off('mouseover mouseout')
                }
            })
        
            $('.user-dislike').on({
                click: function(){
                    $(this).addClass('d-none')
                    $('.user-favorite img').attr("src", "src/heart.svg")
                },
                mouseover: function(){
                    $('.user-dislike img').attr("src", "src/dislike-hover.svg")
                },
                mouseout: function(){
                    $('.user-dislike img').attr("src", "src/dislike.svg")
                }
            })
        })
    }


}

// Crear algunos zapatos de ejemplo
let zapatos = [
    new Zapato('ZP001','Zapatillas cremas de mujer', 50.0, 8, 'mujer', 'deportivo', 42, { frontal: 'https://drive.google.com/uc?export=view&id=1AH1vbbelCSMOY1X5XRVjYcqHc10b77QX', trasera: 'https://drive.google.com/uc?export=view&id=1HJqIMAyXEstnEpPA1GlKNG-GlDkON2Se', lateral: '' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1DK93ZsHKUdkVqR3OeQVazGR-pjfmc0lm'}),
    new Zapato('ZP002', 'Zapato de vestir para mujer', 70.0, 9, 'mujer', 'deportivo', 38, { frontal: 'https://drive.google.com/uc?export=view&id=1PHDue1sg0RTdCvsuVnHys8vkx7JkoY_C', trasera: 'https://drive.google.com/uc?export=view&id=1g-IdACnnojoeOncJsPhuzerr_1Rv0GSo', lateral: 'https://drive.google.com/uc?export=view&id=1MuSdGjDoxFqe9vubsKvpco1DYbMjgFQb', lateralLeft: 'https://drive.google.com/uc?export=view&id=1tgWtAcQR7QbHzRTDHgick_nUwwgRv2hY'}),
    new Zapato('ZP003','Zapatillas blancas de mujer', 80.0, 7, 'mujer', 'deportivo', 40, { frontal: 'https://drive.google.com/uc?export=view&id=1aM8ld42-YTDhPSjw0yL6ljjBlrrBeY9q', trasera: '', lateral: '' , lateralLeft: ''}),
    new Zapato('ZP004','Zapatillas rosadas de mujer', 60.0, 10, 'mujer', 'deportivo', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1iR4lu2G0O8RN_SgZG5PhFoQFAc-dLH3s', trasera: 'https://drive.google.com/uc?export=view&id=1QZaD689rcWnjZ4vWmz7GrpoJzrt_v7Iv', lateral: 'https://drive.google.com/uc?export=view&id=1Q_fatUyoEHdxXvgoc3OJQQapEht6N5YV', lateralLeft: 'https://drive.google.com/uc?export=view&id=14eXMCdF6vBSe1xjHBSaBG489EidqM7K_'}),
    new Zapato('ZP005', '', 60.0, 10, 'mujer', 'deportivo', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1GDlFH7aaK0KjqpdJCf2rl5I8j8BlSnoD', trasera: 'https://drive.google.com/uc?export=view&id=1g7PpoWs_9paQ_p4izaZcX835EBxxpnCK', lateral: 'https://drive.google.com/uc?export=view&id=1_TisD0g7Th5G8TNfHWlfm7PFxhA-z_tJ' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1sBvNGk0paTVrzPsX3T9-3cfiEqWmTEFX'}),
    new Zapato('ZP006','', 60.0, 10, 'mujer', 'deportivo', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1Bo7w6obj1FZFANc2pkuJQCbbx5nwPqkX', trasera: 'https://drive.google.com/uc?export=view&id=1TOby3KTiv5vlVl5vTrFpaOf4FCVTXR76', lateral: 'https://drive.google.com/uc?export=view&id=1HwQUTKpCVojXgPKInB-grjBS07nzMH8m' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1FkG5C33oXiI6mJO2BlQKwhWY7wup2qwp'}),
    new Zapato('ZP007','', 60.0, 10, 'mujer', 'deportivo', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1GBxvXMJjgsfV4O4zPpUdBap3t6kCdNVQ', trasera: 'https://drive.google.com/uc?export=view&id=14rbaFSBx5Ul186sv3R21loP9Ecar6LLI', lateral: 'https://drive.google.com/uc?export=view&id=1dBFzhed7H8hDMbNULIFIXyUoZswu3Vuy' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1y8VAb3L0HA1dp9xMdjNprFnxYJpDd536'}),
    new Zapato('ZP008','', 60.0, 10, 'mujer', 'deportivo', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1fKySAYsp8N0uuF_uzGtS4avy-1krUvQB', trasera: 'https://drive.google.com/uc?export=view&id=1PCNBGlcODzCsy3PZdwyTWsmrbarmslxU', lateral: 'https://drive.google.com/uc?export=view&id=1oLHZDxrTm_xhmCw-NCW7n41EGUFJEGvw' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1eIunrJsAHZAa8z0gbw-y2C1K0oNR7COp'}),
    new Zapato('ZP009','', 60.0, 10, 'mujer', 'deportivo', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1JJaXZZ4yHXR-MmVsOBiJ2cCcv8yXEYpG', trasera: 'https://drive.google.com/uc?export=view&id=1pleeVrj_WFE5VTzDRzk8CZYjQsoldkFw', lateral: 'https://drive.google.com/uc?export=view&id=1cHLN_AZBJdL683QpuYh0puBGvIhEfWMw' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1BmpGL_5qJ-nT1Wm9SCsn5eSr92dLObRg'}),
    new Zapato('ZP010', '', 60.0, 10, 'mujer', 'deportivo', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1H489YWDyPh841QrACjAPIOmgu0-Qlwd8', trasera: 'https://drive.google.com/uc?export=view&id=1v0NM6sjf_d3n7ikp5Cixsd9pvVascmcV', lateral: 'https://drive.google.com/uc?export=view&id=19uh_AzTE9Oqe_3WpclNoU1NexZq08Hyo' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1QD4zqmFCv2fenQn343FSyDjUeudCefsz'}),
    new Zapato('ZP011', '', 60.0, 10, 'mujer', 'deportivo', 37, { frontal: 'https://drive.google.com/uc?export=view&id=13UV5mw1pVEbvGOdsp5f_UXhDAVOP97hs', trasera: 'https://drive.google.com/uc?export=view&id=1eoW97Tr5qGzar1bQ4aKm-EWeS2m7ESu3', lateral: 'https://drive.google.com/uc?export=view&id=14CjRuNrnUw8OrTDVm1NFIpoX75Wp5HNh' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1M7IQ_fTW1xBM5sy6xq9z4qdZX6ryWh5q'}),
    new Zapato('ZP012', '', 60.0, 10, 'mujer', 'deportivo', 37, { frontal: 'https://drive.google.com/uc?export=view&id=10zaNywHGpN2HV2YHpcIjjGatNGq7l-AJ', trasera: 'https://drive.google.com/uc?export=view&id=1CZo6c6WcG2KGnGQN3Q2swXT9KhrbrIjz', lateral: 'https://drive.google.com/uc?export=view&id=10KRTsa7G3lJkneUf1MnYMNM8WGJCXeOW' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1hfYzQ3gvyVZh9jlV9Qrv3b9txyO-nymc'}),
    new Zapato('ZP013', '', 60.0, 10, 'mujer', 'deportivo', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1cYI_VO0bqa1O_QTbzmNWWMZb-3zBh_aS', trasera: '', lateral: 'https://drive.google.com/uc?export=view&id=1jU050q3WwlFm73J5DCejFna9p4maARup' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1yClaxZKT915Zd-Pw3jWW-Os87nCjcVM5'}),
    new Zapato('ZP014','', 60.0, 10, 'mujer', 'deportivo', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1pTwdFMvYtttYRR39LeYViI-rkovfihxf', trasera: 'https://drive.google.com/uc?export=view&id=1FV5DYzGKc4OkeBGEKYEpTxDbdWHnG5xt', lateral: 'https://drive.google.com/uc?export=view&id=1DOMkocvk6e49l4E0pXUYVumluJG3k3UT' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1FBu2izQa2WlcE3RM3KQyADXbTY9mk4IO'}),
    new Zapato('ZP015', '', 60.0, 10, 'hombre', 'zapato', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1O5qlU8Ek1HxqZOqRsClOcc09ZmCg1V2X', trasera: '', lateral: 'https://drive.google.com/uc?export=view&id=1M8EuyTXkX0FmeVRu3_fELVq3XDvnXfSb' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1J1Lvh-wlEJMHm4jZA2C2GKx6HCrqJdP3'}),
    new Zapato('ZP016', '', 60.0, 10, 'hombre', 'zapato', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1478FOSCgyfXPrkFG72mrGugtIYY63Nwc', trasera: 'https://drive.google.com/uc?export=view&id=1dEyF8opKfmhSfvWqV4nVfUR3bq97wDbx', lateral: 'https://drive.google.com/uc?export=view&id=1HKAJkgYy-9fSu2X6Lfai9xTzQUomCaqX' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1nyH2JvrJs_WTuxFraj_FKZKY4qLO_fl2'}),
    new Zapato('ZP017', '', 60.0, 10, 'hombre', 'zapato', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1maaEanENXt25aCRSsIGimy30EZFq3Q8B', trasera: 'https://drive.google.com/uc?export=view&id=1R7URHkZpgc6tht-hJHVnoOvyFTEBQwvJ', lateral: 'https://drive.google.com/uc?export=view&id=1OiD_LdoMzwrf21yrWkCTy6WT3TQIrtqk' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1F7zXyTZMaVqC6xR3NmA4g8YrHoqU_me9'}),
    new Zapato('ZP018', '', 60.0, 10, 'hombre', 'zapato', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1QdHvxWEQsmfQkTsLkdZD2AC0bEaTdKZ9', trasera: 'https://drive.google.com/uc?export=view&id=18qWZr_P87a05Ml7V7VSYF3iLJO-stEko', lateral: 'https://drive.google.com/uc?export=view&id=1kX21Nb1g8sa3pEU_0IgJfhLVmAJWaUVm' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1kV4myONF5OKjSMV1eUty5JuBNymf2iCd'}),
    new Zapato('ZP019', 'Zapato color negro para hombre', 60.0, 10, 'hombre', 'zapato', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1D3Z1LDeoU60hCojoCOZ44D5_Kp1AATLb', trasera: 'https://drive.google.com/uc?export=view&id=1k8Jrm6CdiOEa2WXfksnECIWKYSZ8BtBc', lateral: 'https://drive.google.com/uc?export=view&id=1jJN0pan4JW0q2vl_W94xj4UVuHrtjWLW' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1aJJopDPPlAtKuffSiW4EvaGhr972ar4G'}),
    new Zapato('ZP020', 'Zato color marrón para hombre', 60.0, 10, 'hombre', 'zapato', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1CPSQP35IWJ95ArBUbt7bfwPXsSl4zSym', trasera: '', lateral: 'https://drive.google.com/uc?export=view&id=158Fu-4thCyeFTvbYhI2KaeLXnIPrkXEd' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1Dkl4VzlwG1tUQOg1M6STKSmDmR4t8bCP'}),
    new Zapato('ZP021', 'Zapato color marrón oscuro para hombre', 60.0, 10, 'hombre', 'zapato', 37, { frontal: 'https://drive.google.com/uc?export=view&id=10jOmlp5FRE-IhvX7qi_MpMI29MIClZ0t', trasera: 'https://drive.google.com/uc?export=view&id=15oQ7_TOjRWGbXBGY09i0k2jw-6km_PTb', lateral: 'https://drive.google.com/uc?export=view&id=1CoxfkNmAfQyNZe08EZvHh2wPvFq1XImv' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1FUImYa_42GT6kd-cRg2RSqiTdftAulME'}),
    new Zapato('ZP022', 'Zapato color marrón claro para hombre', 60.0, 10, 'hombre', 'zapato', 37, { frontal: 'https://drive.google.com/uc?export=view&id=1W5qM63pS2Kwbw03unmOMR-Mih9j2lpWW', trasera: 'https://drive.google.com/uc?export=view&id=1IjoXNltWQYvc9q7zQrkG8JClrtIhnHst', lateral: 'https://drive.google.com/uc?export=view&id=1LS_AfxnwiLtiDfMKc0vSPEmbz3u23dQk' , lateralLeft: 'https://drive.google.com/uc?export=view&id=1FbU1SIBle2RxM5cSU3uvMIKBn87P4aIQ'})
];

// Filtrar los zapatos según ciertos criterios

//Paginas
// Crear un objeto para almacenar las páginas
let catalogo = {
    'pagina1' : [],
    'pagina2' : []
}

// Función para filtrar y agregar zapatos a las páginas
function filtrarYAgregar(zapatos) {
    // Filtrar los zapatos por género
    
    
    // Dividir los zapatos filtrados en grupos de 8
    let grupos = [];
    for (let i = 0; i < zapatos.length; i += 9) {
        grupos.push(zapatos.slice(i, i + 9));
    }
    
    // Agregar cada grupo a una página
    for (let i = 0; i < grupos.length; i++) {
        catalogo['pagina' + (i + 1)] = grupos[i];
    }
}


// Usar la función para filtrar por género 'mujer' y agregar a las páginas
filtrarYAgregar(zapatos);
console.log(catalogo)

export {catalogo, zapatos}