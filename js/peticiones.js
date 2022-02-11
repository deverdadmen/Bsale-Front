
const URL_API = 'https://bsaleapiback.herokuapp.com'
//const URL_API = 'http://localhost:3000'


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