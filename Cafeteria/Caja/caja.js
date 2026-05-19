/*==========================================*/
/*   MÓDULO 01 - CAJA: CRUD de pedidos     */
/*   Nuevo: cálculo automático de total    */
/*==========================================*/

const prompt = require("prompt-sync")();
const { catalogo, productosDisponibles } = require("../cocina/Cocina");

/*==========================================*/
/* Variables                                */
/*==========================================*/

let listaDePedidos = [];

/*==========================================*/
/* Cálculo automático del total             */
/*==========================================*/

function calcularTotal() {
    return listaDePedidos.reduce((acum, p) => acum + p.precio, 0);
}

/*==========================================*/
/* CRUD de pedidos                          */
/*==========================================*/

/* CREATE - Agregar pedido */
function agregarPedido(opcion) {
    const disponibles = productosDisponibles();
    const index = Number(opcion) - 1;

    if (index < 0 || index >= disponibles.length) {
        console.log(" Opcion invalida");
        return;
    }

    const producto = disponibles[index];
    listaDePedidos.push(producto);

    console.log(`Agregado: ${producto.nombre} - $${producto.precio}`);
    console.log(`   Total actual: $${calcularTotal()}`);
}

/* READ - Ver pedidos */
function verPedidos() {
    console.log("\n====================");
    console.log("   TUS PEDIDOS   ");
    console.log("====================");

    if (listaDePedidos.length === 0) {
        console.log("  No hay pedidos aún.");
        console.log("====================");
        return;
    }

    listaDePedidos.forEach((p, i) => {
        console.log(`  ${i + 1}. ${p.nombre.padEnd(20)} $${p.precio}`);
    });

    console.log("--------------------");
    console.log(`  Total: $${calcularTotal()}`);
    console.log("====================");
}

/* UPDATE - Modificar pedido */
function modificarPedido(mostrarCatalogo) {
    verPedidos();
    if (listaDePedidos.length === 0) return;

    let numPedido = Number(prompt("¿Qué número de pedido quieres cambiar? "));
    if (numPedido < 1 || numPedido > listaDePedidos.length) {
        console.log(" Número inválido"); return;
    }

    mostrarCatalogo();
    let nuevaOpcion  = Number(prompt("¿Por qué producto lo cambias? (numero): "));
    const disponibles = productosDisponibles();
    const nuevoIndex  = nuevaOpcion - 1;

    if (nuevoIndex < 0 || nuevoIndex >= disponibles.length) {
        console.log(" Producto inválido"); return;
    }

    const anterior = listaDePedidos[numPedido - 1];
    const nuevo    = disponibles[nuevoIndex];

    listaDePedidos[numPedido - 1] = nuevo;

    console.log(` Cambiado: "${anterior.nombre}" → "${nuevo.nombre}"`);
    console.log(`   Nuevo total: $${calcularTotal()}`);
}

/* DELETE - Eliminar pedido */
function eliminarPedido() {
    verPedidos();
    if (listaDePedidos.length === 0) return;

    let numPedido = Number(prompt("¿Qué número de pedido quieres eliminar? "));
    if (numPedido < 1 || numPedido > listaDePedidos.length) {
        console.log("❌ Número inválido"); return;
    }

    const eliminado = listaDePedidos.splice(numPedido - 1, 1)[0];

    console.log(` Eliminado: "${eliminado.nombre}"`);
    console.log(`   Nuevo total: $${calcularTotal()}`);
}

/* COBRAR */
function cobrar() {
    verPedidos();
    if (listaDePedidos.length === 0) return;

    const total  = calcularTotal();
    let   pago   = Number(prompt("Ingrese pago del cliente: $"));
    let   cambio = pago - total;

    if (cambio < 0) { console.log("❌ Pago insuficiente."); return; }

    console.log("\n====================");
    console.log("       COBRO        ");
    console.log("====================");
    console.log(`  Total:   $${total}`);
    console.log(`  Pago:    $${pago}`);
    console.log(`  Cambio:  $${cambio}`);
    console.log("====================");
    console.log("¡Gracias por su compra! ");

    listaDePedidos = [];
}

/* Exportar                                 */

module.exports = { agregarPedido, verPedidos, modificarPedido, eliminarPedido, cobrar, calcularTotal };