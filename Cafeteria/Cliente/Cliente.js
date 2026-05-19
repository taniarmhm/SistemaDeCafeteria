

const prompt = require("prompt-sync")();

const {
    catalogo,
    productosBaratos,
    productosDisponibles,
    productosPorCategoria
} = require("../cocina/Cocina");

const {
    agregarPedido,
    verPedidos,
    modificarPedido,
    eliminarPedido,
    cobrar,
    calcularTotal
} = require("../caja/Caja");

/*==========================================*/
/* map() - Generar líneas del menú          */
/*==========================================*/

function mostrarCatalogo() {
    console.log("\n====================");
    console.log("     CAFETERIA ");
    console.log("====================");

    const lineas = catalogo.map((producto, index) =>
        `  ${index + 1}. ${producto.disponible ? "✅" : "❌"} ${producto.nombre.padEnd(20)} $${producto.precio}`
    );

    lineas.forEach(linea => console.log(linea));

    console.log("====================");
}

/*==========================================*/
/* forEach() - Mostrar promociones          */
/*==========================================*/

function mostrarPromociones() {
    console.log("\n🎉 ===== PROMOCIONES DEL DÍA ===== 🎉");

    const baratos = productosBaratos();

    if (baratos.length === 0) {
        console.log("  No hay promociones hoy.");
        return;
    }

    // map() genera el mensaje con el precio con descuento
    const promos = baratos.map(p => ({
        nombre:       p.nombre,
        precioNormal: p.precio,
        precioPromo:  Math.round(p.precio * 0.8),  // 20% descuento
        ahorro:       Math.round(p.precio * 0.2)
    }));

    // forEach() muestra cada promoción
    promos.forEach(p => {
        console.log(`  ⭐ ${p.nombre.padEnd(20)} $${p.precioNormal} → $${p.precioPromo}  (ahorras $${p.ahorro})`);
    });

    console.log("=================================\n");
}

/*==========================================*/
/* forEach() - Mostrar por categoría        */
/*==========================================*/

function mostrarPorCategoria() {
    const categorias = ["Bebida", "Postre", "Comida"];

    console.log("\n===== MENÚ POR CATEGORÍA ===== ");

    // forEach() itera sobre cada categoría
    categorias.forEach(cat => {
        const productos = productosPorCategoria(cat);
        console.log(`\n  -- ${cat}s --`);

        // map() genera las líneas y forEach() las imprime
        productos
            .map(p => `    ${p.disponible ? "✅" : "❌"} ${p.nombre.padEnd(20)} $${p.precio}`)
            .forEach(linea => console.log(linea));
    });

    console.log("\n=================================");
}

/*==========================================*/
/* Menú principal                           */
/*==========================================*/

function mostrarMenuPrincipal() {
    console.log("\n==============================");
    console.log("        MENU PRINCIPAL        ");
    console.log("==============================");
    console.log("  --- VER PRODUCTOS ---");
    console.log("  1. Ver menú completo");
    console.log("  2. Ver por categoría");
    console.log("  3. Ver promociones del día");
    console.log("  --- PEDIDOS ---");
    console.log("  4. Agregar pedido   ");
    console.log("  5. Ver mis pedidos    ");
    console.log("  6. Modificar pedido ");
    console.log("  7. Eliminar pedido ");
    console.log("  --- CAJA ---");
    console.log("  8. Cobrar");
    console.log("  0. Salir");
    console.log("==============================");

    // Mostrar total actual si hay pedidos
    const total = calcularTotal();
    if (total > 0) {
        console.log(`  Total actual: $${total}`);
        console.log("==============================");
    }
}



let opcion = -1;

while (opcion != 0) {

    mostrarMenuPrincipal();
    opcion = prompt("Selecciona una opcion: ");

    if (opcion == 1) {
        mostrarCatalogo();

    } else if (opcion == 2) {
        mostrarPorCategoria();

    } else if (opcion == 3) {
        mostrarPromociones();

    } else if (opcion == 4) {
        mostrarCatalogo();
        let producto = prompt("¿Qué producto deseas agregar? (numero): ");
        agregarPedido(producto);

    } else if (opcion == 5) {
        verPedidos();

    } else if (opcion == 6) {
        modificarPedido(mostrarCatalogo);

    } else if (opcion == 7) {
        eliminarPedido();

    } else if (opcion == 8) {
        cobrar();

    } else if (opcion == 0) {
        console.log("\n Hasta luego!\n");

    } else {
        console.log("Opcion invalida, intenta de nuevo.");
    }
}