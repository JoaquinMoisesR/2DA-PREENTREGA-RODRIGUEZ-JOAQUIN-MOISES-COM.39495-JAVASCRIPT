//SE CREA CARRO DE PIEZAS VACIO

let carrito = [];

//SE LE INDICA AL USUARIO LOS ITEMS A CARGAR PARA LA COMPRA DE PIEZAS AL CARRO

function cargarUnItem() {

    const nuevoItem = new Item();

    nuevoItem.marcamotor = prompt('INGRESE LA MARCA DEL MOTOR A PREPARAR');
    nuevoItem.modelomotor = prompt('INGRESE EL MODELO DEL MOTOR A PREPARAR');
    nuevoItem.tipopreparacion = prompt('INGRESE LA PREPARACION A EFECTUAR EN SU MOTOR, ASPIRADO O TURBO');
    nuevoItem.tipopieza = prompt('INGRESE EL TIPO DE PIEZA DE COMPETICION SEGUN LA PREPARACION DE MOTOR');
    nuevoItem.nombrepieza = prompt('INGRESE EL NOMBRE DE LA PIEZA DE COMPETICION');
    nuevoItem.preciopieza = Number(prompt('INGRESE EL PRECIO DE LISTA ACORDE A LA WEB SEGUN PIEZA ELEGIDA'));
    nuevoItem.cantidadpieza = Number(prompt('INGRESE CANTIDAD DE PIEZAS DE COMPETICION A ADQUIRIR'));

    carrito.push(nuevoItem);
}

//SE LE PREGUNTA AL USUARIO SI DESEA SEGUIR ADQUIRIENDO PIEZAS PARA SU PROYECTO

const cargarItems = () => {
    let seguir;
    do {
        cargarUnItem();
        seguir = prompt('¿QUERES INGRESAR OTRA PIEZA PARA TU PROYECTO DE PREPARACION? , SI/NO');

    }while (seguir == 'SI');
}

//SE MUESTRAN LAS PIEZAS DEL CARRO DE COMPRAS DE LAS PIEZAS DE COMPETICION
//EL TICKET CON SUB TOTAL Y TOTAL DE LA COMPRA

function mostrarCarrito() {
    let ticket = '';
    let totalTicket = 0;
    
    carrito.forEach((item) => {
        ticket = ticket + ` Marca de motor: ${item.marcamotor} \n Modelo de Motor: ${item.modelomotor} \n Tipo de preparacion: ${item.tipopreparacion} \n Tipo de pieza: ${item.tipopieza} \n Nombre de pieza: ${item.nombrepieza} \n Precio de pieza: ${item.preciopieza} \n Cantidad de piezas: ${item.cantidadpieza} \n Subtotal: ${item.subTotal()} \n\n`;
    });

    totalTicket = carrito.reduce((total,item) => {
        return total + item.subTotal();
    },0);



    alert(ticket + `Total: ${totalTicket}`);

}

cargarItems();
mostrarCarrito();