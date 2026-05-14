// ==============================
// SISTEMA DE CAJA CAFETERIA
// ==============================

const prompt = require("prompt-sync")();

let total = 0;
let opcion = -1;

while(opcion != 0){

    console.log("\n====================");
    console.log("CAJA CAFETERIA");
    console.log("====================");
    console.log("1. Cafe Americano - $30");
    console.log("2. Capuccino - $45");
    console.log("3. Frappe - $55");
    console.log("4. Dona - $20");
    console.log("5. Pastel - $40");
    console.log("6. Sandwich - $55");
    console.log("7. Sincronizadas - $45");
    console.log("0. Cobrar");

    opcion = prompt("Selecciona producto: ");

    if(opcion == 1){
        total += 30;
        console.log("Cafe Americano agregado");
    }

    else if(opcion == 2){
        total += 45;
        console.log("Capuccino agregado");
    }

    else if(opcion == 3){
        total += 55;
        console.log("Frappe agregado");
    }

    else if(opcion == 4){
        total += 20;
        console.log("Dona agregada");
    }

    else if(opcion == 5){
        total += 40;
        console.log("Pastel agregado");
    }

    else if(opcion == 6){
        total += 55;
        console.log("Sandwich agregado");
    }

    else if(opcion == 7){
        total += 45;
        console.log("Sincronizadas agregadas");
    }

    else if(opcion == 0){

        console.log("\n====================");
        console.log("TOTAL A PAGAR");
        console.log("====================");
        console.log("Total: $" + total);

        let pago = prompt("Ingrese pago del cliente: ");

        let cambio = pago - total;

        console.log("Cambio: $" + cambio);
        console.log("Gracias por su compra");
    }

    else{
        console.log("Opcion invalida");
    }
}