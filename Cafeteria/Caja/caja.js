//   SISTEMA DE CAJA CAFETERÍA

const prompt = require("prompt-sync")();

const pedidos = [];

let opcion = -1;


// Crear pedido
function agregarPedido() {

    let nombre = prompt("Nombre del producto: ");
    let precio = Number(prompt("Precio: $"));

    pedidos.push({
        nombre: nombre,
        precio: precio
    });

    console.log("Producto agregado.");
}


// Mostrar/Leer pedidos
function mostrarPedidos() {

    console.log("\n===== TICKET =====");

    let subtotal = 0;

    if (pedidos.length === 0) {
        console.log("No hay pedidos.");
        return 0;
    }

    for (let i = 0; i < pedidos.length; i++) {

        console.log(
            (i + 1) + ". " +
            pedidos[i].nombre +
            " - $" +
            pedidos[i].precio.toFixed(2)
        );

        subtotal += pedidos[i].precio;
    }

    // Calcular IVA
    let iva = subtotal * 0.16;

    // Calcular total
    let total = subtotal + iva;

    console.log("------------------");
    console.log("SUBTOTAL: $" + subtotal.toFixed(2));
    console.log("IVA (16%): $" + iva.toFixed(2));
    console.log("TOTAL: $" + total.toFixed(2));

    return total;
}


// Actualizar pedido
function actualizarPedido() {

    mostrarPedidos();

    let posicion = Number(prompt("Número de pedido a actualizar: ")) - 1;

    if (posicion >= 0 && posicion < pedidos.length) {

        let nuevoNombre = prompt("Nuevo nombre: ");
        let nuevoPrecio = Number(prompt("Nuevo precio: $"));

        pedidos[posicion].nombre = nuevoNombre;
        pedidos[posicion].precio = nuevoPrecio;

        console.log("Pedido actualizado.");

    } else {

        console.log("Número inválido.");
    }
}


// Eliminar pedido
function eliminarPedido() {

    mostrarPedidos();

    let posicion = Number(prompt("Número de pedido a eliminar: ")) - 1;

    if (posicion >= 0 && posicion < pedidos.length) {

        pedidos.splice(posicion, 1);

        console.log("Pedido eliminado.");

    } else {

        console.log("Número inválido.");
    }
}


// Cobrar
function cobrar() {

    let total = mostrarPedidos();

    if (total > 0) {

        let pago = Number(prompt("Pago del cliente: $"));

        if (pago >= total) {

            let cambio = pago - total;

            console.log("------------------");
            console.log("Pago: $" + pago.toFixed(2));
            console.log("Cambio: $" + cambio.toFixed(2));
            console.log("Gracias por su compra.");

        } else {

            console.log("Pago insuficiente.");
        }
    }
}



// Menú principal

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