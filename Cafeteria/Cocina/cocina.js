//   SISTEMA DE CAJA CAFETERÍA
// ==============================

const prompt = require("prompt-sync")();

const pedidos = [];

let opcion = -1;
let contadorID = 1;


// ==============================
// CREATE - CREAR PEDIDO
// ==============================
function agregarPedido() {

    let nombre = prompt("Nombre del producto: ");
    let precio = Number(prompt("Precio: $"));

    pedidos.push({
        id: contadorID,
        nombre: nombre,
        precio: precio
    });

    contadorID++;

    console.log("Producto agregado.");
}


// ==============================
// READ - MOSTRAR PEDIDOS
// ==============================
function mostrarPedidos() {

    console.log("\n===== TICKET =====");

    let total = 0;

    if (pedidos.length === 0) {
        console.log("No hay pedidos.");
        return 0;
    }

    for (let i = 0; i < pedidos.length; i++) {

        console.log(
            "ID: " + pedidos[i].id +
            " | " + pedidos[i].nombre +
            " - $" + pedidos[i].precio
        );

        total += pedidos[i].precio;
    }

    console.log("------------------");
    console.log("TOTAL: $" + total);

    return total;
}


// ==============================
// UPDATE - ACTUALIZAR PEDIDO
// ==============================
function actualizarPedido() {

    mostrarPedidos();

    let idBuscar = Number(prompt("ID del pedido a actualizar: "));

    let pedido = pedidos.find(p => p.id === idBuscar);

    if (pedido) {

        pedido.nombre = prompt("Nuevo nombre: ");
        pedido.precio = Number(prompt("Nuevo precio: $"));

        console.log("Pedido actualizado.");
    } 
    else {
        console.log("ID no encontrado.");
    }
}


// ==============================
// DELETE - ELIMINAR PEDIDO
// ==============================
function eliminarPedido() {

    mostrarPedidos();

    let idBuscar = Number(prompt("ID del pedido a eliminar: "));

    let posicion = pedidos.findIndex(p => p.id === idBuscar);

    if (posicion !== -1) {

        pedidos.splice(posicion, 1);

        console.log("Pedido eliminado.");
    } 
    else {
        console.log("ID no encontrado.");
    }
}


// ==============================
// COBRAR
// ==============================
function cobrar() {

    let total = mostrarPedidos();

    if (total > 0) {

        let pago = Number(prompt("Pago del cliente: $"));

        let cambio = pago - total;

        console.log("Cambio: $" + cambio);
        console.log("Gracias por su compra.");
    }
}


// ==============================
// MENÚ PRINCIPAL
// ==============================
while (opcion != 0) {

    console.log("\n====================");
    console.log("CAJA CAFETERÍA");
    console.log("====================");
    console.log("1. Agregar pedido");
    console.log("2. Mostrar pedidos");
    console.log("3. Actualizar pedido");
    console.log("4. Eliminar pedido");
    console.log("5. Cobrar");
    console.log("0. Salir");

    opcion = Number(prompt("Selecciona opción: "));

    switch (opcion) {

        case 1:
            agregarPedido();
            break;

        case 2:
            mostrarPedidos();
            break;

        case 3:
            actualizarPedido();
            break;

        case 4:
            eliminarPedido();
            break;

        case 5:
            cobrar();
            break;

        case 0:
            console.log("Sistema cerrado.");
            break;

        default:
            console.log("Opción inválida.");
    }
}
