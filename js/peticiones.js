/**
 * URL_API se utiliza para declarar la direccion a la cual se realizaran las consultas
 * en este caso la que no esta comentada es la direccion de la appi que se encuentra subida Heroku
 * y la que esta comentada es la que se utiliza para pruebas locales
 */
const URL_API = 'https://bsaleapiback.herokuapp.com'
//const URL_API = 'http://localhost:3000'

/**
 * ConsutalProductos reazliza la peticion de traer todo los productos que se encuentren registrados
 */
const consultarProductos = async() =>{
    try{
        const respuesta = await fetch(`${URL_API}/product`)
        console.log('pro ->',respuesta)
        const productos = await respuesta.json()
        cargaLista(productos);
    }catch(error){
        console.log(error)
    }
    
}

/**
 * filtrarVategoria Realiza la peticion de los productos de la categoria seleccionada
 */
const filtrarCategoria = async(filtro) =>{
    try{
        const respuesta = await fetch(`${URL_API}/filtroCat/${filtro}`)
        console.log('filtro ->',respuesta)
        const productos = await respuesta.json()
        cargaLista(productos);
    }catch(error){
        console.log(error)
    }
    
}

/**
 * consultarCategorias realiza la peticion de las categorias que se encuentran registradas, para asi poder realizar filtrado
 */
const consultarCategorias = async() =>{

    try {
        const respuesta = await fetch(`${URL_API}/category `)
        console.log('cat -> ',respuesta)
        const categorias = await respuesta.json()
        cargarCat(categorias);
    } catch (error) {
        console.log(error)
    }

}

/**
 * buscarProductos recibe el parametro buscado el cual trae lo ingresado en el buscador para poder traer los resultados similares a la busqueda
 * en el caso que no se encuentren realize una alerta avisando que no se encontraron productos relaziondos
 */
const buscarProductos = async(buscado) =>{

    try {
        const respuesta = await fetch(`${URL_API}/busqueda/${buscado}`)
        console.log('bus -> ',respuesta)
        const productos = await respuesta.json();
        console.log(productos)
        if(productos.length > 0){
            cargaLista(productos);
        }else{
            swal({
                title: "Pop-Up",
                text:  `No se encontraron productos relacionados`,
                confirmButtonText: "Aceptar",
            });
        }
       
    } catch (error) {
        console.log(error)
    }

}

/**
 *  ordenarMenor y ordenarMenorFiltrado pide los productos ordenados de menor a mayor
 *  el primero se utilza cuando se estan mostrando todos los productos y 
 *  el segundo se utilza cuando los productos se encuentran filtrados por categoria
 */
const ordenarMenor = async() =>{
    try{
        const respuesta = await fetch(`${URL_API}/orderby/menor`)
        console.log('pro ->',respuesta)
        const productos = await respuesta.json()
        cargaLista(productos);
    }catch(error){
        console.log(error)
    }
    
}
const ordenarMenorFiltrado = async(categoria) =>{
    try{
        const respuesta = await fetch(`${URL_API}/orderby/menor/${categoria}`)
        console.log('pro ->',respuesta)
        const productos = await respuesta.json()
        cargaLista(productos);
    }catch(error){
        console.log(error)
    }
    
}

/**
 *  ordenarMayor y ordenarMayorFiltrado pide los productos ordenados de mayor a menor
 *  el primero se utilza cuando se estan mostrando todos los productos y 
 *  el segundo se utilza cuando los productos se encuentran filtrados por categoria
 */
const ordenarMayor = async() =>{
    try{
        const respuesta = await fetch(`${URL_API}/orderby/mayor`)
        console.log('pro ->',respuesta)
        const productos = await respuesta.json()
        cargaLista(productos);
    }catch(error){
        console.log(error)
    }
    
}
const ordenarMayorFiltrado = async(categoria) =>{
    try{
        const respuesta = await fetch(`${URL_API}/orderby/mayor/${categoria}`)
        console.log('pro ->',respuesta)
        const productos = await respuesta.json()
        cargaLista(productos);
    }catch(error){
        console.log(error)
    }
    
}

/**
 *  ordenarDescuento y ordenarDescuentoFiltrado pide los productos ordenados de mayor descuento a menor descuento
 *  el primero se utilza cuando se estan mostrando todos los productos y 
 *  el segundo se utilza cuando los productos se encuentran filtrados por categoria
 */
const ordenarDescuento = async() =>{
    try{
        const respuesta = await fetch(`${URL_API}/orderby/descuento`)
        console.log('pro ->',respuesta)
        const productos = await respuesta.json()
        cargaLista(productos);
    }catch(error){
        console.log(error)
    }
    
}
const ordenarDescuentoFiltrado = async(categoria) =>{
    try{
        const respuesta = await fetch(`${URL_API}/orderby/descuento/${categoria}`)
        console.log('pro ->',respuesta)
        const productos = await respuesta.json()
        cargaLista(productos);
    }catch(error){
        console.log(error)
    }
    
}

/**
 *  ordenarAlfabetico y ordenarAlfabeticoFiltrado pide los productos ordenados de la A a la Z
 *  el primero se utilza cuando se estan mostrando todos los productos y 
 *  el segundo se utilza cuando los productos se encuentran filtrados por categoria
 */
const ordenarAlfabetico = async() =>{
    try{
        const respuesta = await fetch(`${URL_API}/orderby/alfabetico`)
        console.log('pro ->',respuesta)
        const productos = await respuesta.json()
        cargaLista(productos);
    }catch(error){
        console.log(error)
    }
    
}
const ordenarAlfabeticoFiltrado = async(categoria) =>{
    try{
        const respuesta = await fetch(`${URL_API}/orderby/alfabetico/${categoria}`)
        console.log('pro ->',respuesta)
        const productos = await respuesta.json()
        cargaLista(productos);
    }catch(error){
        console.log(error)
    }
    
}