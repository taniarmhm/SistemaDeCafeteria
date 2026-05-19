/*==========================================*/
/*   MÓDULO 02 - COCINA: Catálogo          */
/*   Métodos: filter() y find()            */
/*==========================================*/

/* Objetos y propiedades */
const bebida1 = { id: "01", nombre: "Cafe Americano",  categoria: "Bebida",  precio: 30, detalle: "Mediano",    disponible: true  };
const bebida2 = { id: "02", nombre: "Capuccino",        categoria: "Bebida",  precio: 45, detalle: "Mediano",    disponible: true  };
const bebida3 = { id: "03", nombre: "Frappe",           categoria: "Bebida",  precio: 55, detalle: "Grande",     disponible: true  };
const postre1 = { id: "04", nombre: "Dona",             categoria: "Postre",  precio: 20, detalle: "1 pieza",    disponible: true  };
const postre2 = { id: "05", nombre: "Pastel",           categoria: "Postre",  precio: 40, detalle: "Rebanada",   disponible: false };
const comida1 = { id: "06", nombre: "Sandwich",         categoria: "Comida",  precio: 55, detalle: "Individual", disponible: true  };
const comida2 = { id: "07", nombre: "Sincronizadas",    categoria: "Comida",  precio: 45, detalle: "2 piezas",   disponible: true  };

/* Array - Catálogo completo */
const catalogo = [bebida1, bebida2, bebida3, postre1, postre2, comida1, comida2];

/*==========================================*/
/* filter() - Filtrar productos             */
/*==========================================*/

/* Productos baratos (menos de $40) */
function productosBaratos() {
    return catalogo.filter(p => p.precio < 40);
}

/* Productos disponibles */
function productosDisponibles() {
    return catalogo.filter(p => p.disponible === true);
}

/* Productos por categoría */
function productosPorCategoria(categoria) {
    return catalogo.filter(p => p.categoria === categoria);
}

/*==========================================*/
/* find() - Buscar un producto              */
/*==========================================*/

function buscarPorId(id) {
    return catalogo.find(p => p.id === id);
}

function buscarPorNombre(nombre) {
    return catalogo.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
}


/*==========================================*/
/* Exportar para Caja.js y Cliente.js       */
/*==========================================*/
module.exports = {
    catalogo,
    productosBaratos,
    productosDisponibles,
    productosPorCategoria,
    buscarPorId,
    buscarPorNombre
}