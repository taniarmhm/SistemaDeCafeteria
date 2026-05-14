/*==========================================*/
/*   MÓDULO 03 - CLIENTE: Menú en consola  */
/*==========================================*/

const prompt = require("prompt-sync")();

/* Importar catálogo desde Cocina.js */
const { catalogo } = require("../cocina/Cocina");

/* Importar funciones de Caja.js */
const { agregarPedido, verPedidos, modificarPedido, eliminarPedido, cobrar } = require("../caja/Caja");

/*==========================================*/
/* Funciones - Mostrar menús en consola     */
/* Usando console.log y template strings    */
/*==========================================*/

function mostrarCatalogo() {
    console.log("\n====================");
    console.log("    CAFETERIA");
    console.log("====================");

    catalogo.forEach((producto, index) => {
        console.log(`  ${index + 1}. ${producto.nombre.padEnd(20)} $${producto.precio}`);
    });

    console.log("====================");
}

function mostrarMenuPrincipal() {
    console.log("\n==============================");
    console.log("        MENU PRINCIPAL        ");
    console.log("==============================");
    console.log("  1. Agregar pedido   (CREATE)");
    console.log("  2. Ver pedidos      (READ)  ");
    console.log("  3. Modificar pedido (UPDATE)");
    console.log("  4. Eliminar pedido  (DELETE)");
    console.log("  5. Cobrar                   ");
    console.log("  0. Salir                    ");
    console.log("==============================");
}

/*==========================================*/
/* Ejecución principal - Ciclo while        */
/*==========================================*/

let opcion = -1;

while (opcion != 0) {

    mostrarMenuPrincipal();
    opcion = prompt("Selecciona una opcion: ");

    if (opcion == 1) {
        mostrarCatalogo();
        let producto = prompt("¿Qué producto deseas agregar? (numero): ");
        agregarPedido(producto);

    } else if (opcion == 2) {
        verPedidos();

    } else if (opcion == 3) {
        modificarPedido(mostrarCatalogo);

    } else if (opcion == 4) {
        eliminarPedido();

    } else if (opcion == 5) {
        cobrar();

    } else if (opcion == 0) {
        console.log("\nGracias, hasta luego!\n");

    } else {
        console.log(" Opcion invalida, intenta de nuevo.");
    }
}