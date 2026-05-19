//   MÓDULO COCINA - CATÁLOGO
// ======================================

const prompt = require("prompt-sync")();

// CATÁLOGO DE PRODUCTOS

const catalogo = [

{
    id: 1,
    nombre: "Café Cappuccino",
    categoria: "Bebida",
    precio: 35,
    detalle: "Mediano"
},

{
    id: 2,
    nombre: "Café Americano",
    categoria: "Bebida",
    precio: 40,
    detalle: "Mediano"
},

{
    id: 3,
    nombre: "Pastel de chocolate",
    categoria: "Postre",
    precio: 50,
    detalle: "Rebanada individual"
},

{
    id: 4,
    nombre: "Galletas de mantequilla",
    categoria: "Postre",
    precio: 35,
    detalle: "4 piezas"
},

{
    id: 5,
    nombre: "Sándwich de pollo",
    categoria: "Comida",
    precio: 55,
    detalle: "Individual"
},

{
    id: 6,
    nombre: "Sincronizadas",
    categoria: "Comida",
    precio: 45,
    detalle: "2 piezas"
}

];

let opcion = -1;

// MOSTRAR CATÁLOGO

function mostrarCatalogo(){

    console.log("\n===== CATÁLOGO DE PRODUCTOS =====");

    for(let i = 0; i < catalogo.length; i++){

        console.log(
            "ID: " + catalogo[i].id +
            " | " + catalogo[i].nombre +
            " | " + catalogo[i].categoria +
            " | $" + catalogo[i].precio +
            " | " + catalogo[i].detalle
        );
    }
}

// FILTER - PRODUCTOS BARATOS

function productosBaratos(){

    let baratos = catalogo.filter(
        producto => producto.precio <= 40
    );

    console.log("\n===== PRODUCTOS BARATOS =====");

    baratos.forEach(producto => {

        console.log(
            producto.nombre +
            " - $" + producto.precio
        );
    });
}

// FILTER - PRODUCTOS CAROS

function productosCaros(){

    let caros = catalogo.filter(
        producto => producto.precio >= 50
    );

    console.log("\n===== PRODUCTOS CAROS =====");

    caros.forEach(producto => {

        console.log(
            producto.nombre +
            " - $" + producto.precio
        );
    });
}

// FILTER - BUSCAR BEBIDAS

function buscarBebidas(){

    let bebidas = catalogo.filter(
        producto => producto.categoria === "Bebida"
    );

    console.log("\n===== BEBIDAS =====");

    bebidas.forEach(producto => {

        console.log(
            producto.nombre +
            " - $" + producto.precio
        );
    });
}

// FILTER - BUSCAR POSTRES

function buscarPostres(){

    let postres = catalogo.filter(
        producto => producto.categoria === "Postre"
    );

    console.log("\n===== POSTRES =====");

    postres.forEach(producto => {

        console.log(
            producto.nombre +
            " - $" + producto.precio
        );
    });
}


// FIND - BUSCAR PRODUCTO POR ID

function buscarProductoPorID(){

    let idBuscar = Number(
        prompt("Ingresa ID del producto: ")
    );

    let producto = catalogo.find(
        producto => producto.id === idBuscar
    );

    console.log("\n===== RESULTADO =====");

    if(producto){

        console.log(
            "ID: " + producto.id +
            " | " + producto.nombre +
            " | " + producto.categoria +
            " | $" + producto.precio +
            " | " + producto.detalle
        );
    }

    else{
        console.log("Producto no encontrado.");
    }
}

// MENÚ PRINCIPAL

while(opcion != 0){

    console.log("\n========================");
    console.log("MÓDULO COCINA");
    console.log("========================");
    console.log("1. Mostrar catálogo");
    console.log("2. Productos baratos");
    console.log("3. Productos caros");
    console.log("4. Buscar bebidas");
    console.log("5. Buscar postres");
    console.log("6. Buscar producto por ID");
    console.log("0. Salir");

    opcion = Number(
        prompt("Selecciona opción: ")
    );

    switch(opcion){

        case 1:
            mostrarCatalogo();
            break;

        case 2:
            productosBaratos();
            break;

        case 3:
            productosCaros();
            break;

        case 4:
            buscarBebidas();
            break;

        case 5:
            buscarPostres();
            break;

        case 6:
            buscarProductoPorID();
            break;

        case 0:
            console.log("Sistema cerrado.");
            break;

        default:
            console.log("Opción inválida.");
    }
}
