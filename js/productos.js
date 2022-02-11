/**
 * lista -> se utiliza para recibir las listas que devuelven las peticiones
 * filtro -> se utiliza para saber que categoria se esta utilziando actualemte
 */
let lista = []
let filtro = 'all'

/**
 * este codigo se utiliza para inhabilitar el Enter dentro de la pagina
 */
window.addEventListener("keypress", function(event){
    if (event.keyCode == 13){
        event.preventDefault();
    }
}, false);

/**
 * numberOfItems -> se utiliza para saber la cantidad de item tiene la lista para realiza la paginacion
 * numberPerPage -> define la cantidad de item que aparecen por cada page de la paginacion
 * currentPage -> Pagina de inicio de la paginacion
 * numberOfPages -> se utiliza para saber la cantidad de paginas de la paginacion
 */
let numberOfItems = 0
const numberPerPage = 12
const currentPage = 1
let numberOfPages = 0

$(document).ready(function(){
    /**
     * consultarCategorias se utiliza para consultar por las categorias que se encuentran en la base de datos
     * consultarProductos se utiliza para cargar por primera vez la cantidad de productos
     */
    consultarCategorias()
    consultarProductos()
    
    /**
     * Se utiliza para detectar cundo se quiere cambiar de pagina
     */
    $('.paginator').on('click', 'button', function() {
        var clickedPage = parseInt($(this).val())
        buildPagination(clickedPage)
        buildPage(clickedPage)
    });

    /**
     * se utiliza para detectar cambios en el select de ordenar y saber como se desea ordenar
     */
    $("#ordenar").change(function(){
        console.log($('#ordenar').val());
        orden = $('#ordenar').val();
        switch(orden){
            case 'menor':
                if(filtro == 'all'){
                    ordenarMenor()
                }else{
                    ordenarMenorFiltrado(filtro)
                } 
            break;
            case 'mayor':
                if(filtro == 'all'){
                    ordenarMayor()
                }else{
                    ordenarMayorFiltrado(filtro)
                }   
            break;
            case 'descuento':
                if(filtro == 'all'){
                    ordenarDescuento()
                }else{
                    ordenarDescuentoFiltrado(filtro)
                }  
            break;
            case 'alfabetico':
                if(filtro == 'all'){
                    ordenarAlfabetico()
                }else{
                    ordenarAlfabeticoFiltrado(filtro)
                }    
            break;

        }

    });

    /**
     * se utiliza para capturar lo que se desea buscar y llamar a la funcion para realizar la busqueda
     */
    $("#busqueda").on("click",function(event){
        event.preventDefault();
        var buscado = document.getElementById('formulario') ;
        buscarProductos(buscado.value)
        buscado.value = "";
     });

});

/**
 * accomodatePage -> se encarga de ubicar asi en que paginas ir
 */
function accomodatePage(clickedPage) {
    if (clickedPage <= 1) { return clickedPage + 1}
    if (clickedPage >= numberOfPages) { return clickedPage -1}
    return clickedPage
}
function buildPagination(clickedPage) {
    $('.paginator').empty()
    const currPageNum = accomodatePage(clickedPage)
    if (numberOfPages >= 10) {
        for (let i=-1; i<10; i++) {
            $('.paginator').append(`<button class="btn btn-light" value="${currPageNum+i}">${currPageNum+i}</button>`)
        }
    } else {
        for (let i=0; i<numberOfPages; i++) {
            $('.paginator').append(`<button class="btn btn-light" value="${i+1}">${i+1}</button>`)
        }
    }
}
function buildPage(currPage) {
    const trimStart = (currPage-1)*numberPerPage
    const trimEnd = trimStart + numberPerPage
    $('#galeria').empty().append(lista.slice(trimStart, trimEnd))
}
/**
 *  Se utiliza para cargar el html con la lista de productos que vienen de las consultas
 */
function cargaLista(array){
    lista = []
    array.forEach(function(producto){
        if(producto.discount > 0){
            var final =  producto.price - Math.round( (producto.discount / 100) * producto.price )
            lista.push(`
            <div class="card" style="width: 18rem;">
            <img src="${producto.url_image}" class="card-img-top" alt="..." style="max-width: 280px;">
            <div class="card-header" style=" background-color: #ffffff">
                <h6 class="card-title">${producto.name}</h6>
            </div>
            <div class="card-body">
                <p class="card-text"> <span style="text-decoration:line-through;">$${producto.price} </span>     $${final}   <img src="/asset/cart-plus-solid.svg" alt="" style="float:right; color: black; width: 20px; height: 20px; "></p>
            </div>
            </div>
          `) 
        }else{
            lista.push(`
            <div class="card" style="width: 18rem;">
            <img src="${producto.url_image}" class="card-img-top" alt="..." style="max-width: 280px;">
            <div class="card-header" style=" background-color: #ffffff">
                <h6 class="card-title">${producto.name}</h6>
            </div>
            <div class="card-body">
                <p class="card-text">$${producto.price} <img src="/asset/cart-plus-solid.svg" alt="" style="float:right; color: black; width: 20px; height: 20px; "></p>
            </div>
            </div>
          `) 
        }
        
      });
      numberOfItems = lista.length
      numberOfPages = Math.ceil(numberOfItems/numberPerPage)
      buildPage(1)
      buildPagination(currentPage)
}

/**
 * Se utiliza para cargar las categorias en el html que vienen de las consultas
 */
function cargarCat(array){
    $('.dropdown-menu').empty()
    $('.dropdown-menu').append(`<li><a class="dropdown-item" onclick="seccionar(this)">Todos los Productos</a></li>`)
    array.forEach(function(categoria){
        $('.dropdown-menu').append(`<li><a class="dropdown-item" onclick="seccionar(this)">${categoria.name}</a></li>`)
    });
}

/**
 * se utiliza para saber que categoria se selecciono y asi llamar a la funcion que solicita la lista filtrada a la api
 */
function seccionar(_this){

    if( _this.textContent == 'Todos los Productos'){
        allProduct()
    }else{
        console.log(_this.textContent)
        filtro = _this.textContent;
        filtrarCategoria(filtro);
    }
    
}
/**
 * se utiliza para listar todos los productos
 */
function allProduct(){
    filtro = 'all'
    consultarProductos()
}

