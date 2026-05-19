
// SISTEMA DE CAJA CAFETERÍA

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pedidos = [];

// PREGUNTAR DATOS

function preguntar(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta) => {
            resolve(respuesta);
        });
    });
}


// CREAR PEDIDO 

async function agregarPedido() {

    let nombre = await preguntar("Nombre del producto: ");
    let precio = Number(await preguntar("Precio: $"));

    pedidos.push({
        nombre: nombre,
        precio: precio
    });

    console.log("Producto agregado.");
}


// MUESTRA LOS PEDIDOS 
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

    let iva = subtotal * 0.16;
    let total = subtotal + iva;

    console.log("------------------");
    console.log("SUBTOTAL: $" + subtotal.toFixed(2));
    console.log("IVA : $" + iva.toFixed(2));
    console.log("TOTAL: $" + total.toFixed(2));

    return total;
}


// ACTUALIZAR PEDIDOS 

async function actualizarPedido() {

    mostrarPedidos();

    let posicion = Number(
        await preguntar("Número de pedido a actualizar: ")
    ) - 1;

    if (posicion >= 0 && posicion < pedidos.length) {

        let nuevoNombre = await preguntar("Nuevo nombre: ");
        let nuevoPrecio = Number(
            await preguntar("Nuevo precio: $")
        );

        pedidos[posicion].nombre = nuevoNombre;
        pedidos[posicion].precio = nuevoPrecio;

        console.log("Pedido actualizado.");

    } else {

        console.log("Número no válido.");
    }
}


// ELIMINAR PEDIDOS 

async function eliminarPedido() {

    mostrarPedidos();

    let posicion = Number(
        await preguntar("Número de pedido a eliminar: ")
    ) - 1;

    if (posicion >= 0 && posicion < pedidos.length) {

        pedidos.splice(posicion, 1);

        console.log("Pedido eliminado.");

    } else {

        console.log("Número inválido.");
    }
}


// COBRAR 

async function cobrar() {

    let total = mostrarPedidos();

    if (total > 0) {

        let pago = Number(
            await preguntar("Pago del cliente: $")
        );

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


// MENU PRINCIPAL 
     
async function menu() {

    let opcion = -1;

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

        opcion = Number(
            await preguntar("Selecciona opción: ")
        );

        switch (opcion) {

            case 1:
                await agregarPedido();
                break;

            case 2:
                mostrarPedidos();
                break;

            case 3:
                await actualizarPedido();
                break;

            case 4:
                await eliminarPedido();
                break;

            case 5:
                await cobrar();
                break;

            case 0:
                console.log("Sistema cerrado.");
                rl.close();
                break;

            default:
                console.log("Opción inválida.");
        }
    }
}
menu();
