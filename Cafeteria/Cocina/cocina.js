// ======================================
// MÓDULO COCINA
// ======================================

const catalogo = [

{
    id: 1,
    nombre: "Café Cappuccino",
    categoria: "Bebida",
    precio: 35,
    detalle: "Mediano",
    disponible: true
},

{
    id: 2,
    nombre: "Café Americano",
    categoria: "Bebida",
    precio: 40,
    detalle: "Mediano",
    disponible: true
},

{
    id: 3,
    nombre: "Pastel de chocolate",
    categoria: "Postre",
    precio: 50,
    detalle: "Rebanada individual",
    disponible: true
},

{
    id: 4,
    nombre: "Galletas de mantequilla",
    categoria: "Postre",
    precio: 35,
    detalle: "4 piezas",
    disponible: true
},

{
    id: 5,
    nombre: "Sándwich de pollo",
    categoria: "Comida",
    precio: 55,
    detalle: "Individual",
    disponible: true
},

{
    id: 6,
    nombre: "Sincronizadas",
    categoria: "Comida",
    precio: 45,
    detalle: "2 piezas",
    disponible: true
}

];


// FILTER() - PRODUCTOS BARATOS

function productosBaratos() {

    return catalogo.filter(
        producto => producto.precio <= 40
    );
}


// FILTER() - PRODUCTOS CAROS

function productosCaros() {

    return catalogo.filter(
        producto => producto.precio >= 50
    );
}


// FILTER() - BEBIDAS

function buscarBebidas() {

    return catalogo.filter(
        producto => producto.categoria === "Bebida"
    );
}


// FILTER() - POSTRES

function buscarPostres() {

    return catalogo.filter(
        producto => producto.categoria === "Postre"
    );
}


// FIND() - BUSCAR PRODUCTO POR ID

function buscarProductoPorID(idBuscar) {

    return catalogo.find(
        producto => producto.id === idBuscar
    );
}


// PRODUCTOS DISPONIBLES

function productosDisponibles() {

    return catalogo.filter(
        producto => producto.disponible
    );
}


// PRODUCTOS POR CATEGORÍA

function productosPorCategoria(categoria) {

    return catalogo.filter(
        producto => producto.categoria === categoria
    );
}


// EXPORTAR

module.exports = {
    catalogo,
    productosBaratos,
    productosCaros,
    buscarBebidas,
    buscarPostres,
    buscarProductoPorID,
    productosDisponibles,
    productosPorCategoria
};