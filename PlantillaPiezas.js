// PLANTILLA CONSTRUCTORA DE OBJETOS : PIEZAS DE COMPETICION

class Item {

// ATRIBUTOS DE LOS OBJETOS EN ESTE CASO LAS PIEZAS DE COMPETICION

    marcamotor;
    modelomotor;
    tipopreparacion;
    tipopieza
    nombrepieza;
    preciopieza;
    cantidadpieza;
       
    // //CONSTRUCTOR 
    
      constructor(marcamotor,modelomotor,tipopreparacion,tipopieza,nombrepieza,preciopieza,cantidadpieza)
      {
        this.marca = marcamotor;
        this.modelo = modelomotor;
        this.tipo = tipopreparacion;
        this.tipo = tipopieza;
        this.nombre = nombrepieza;
        this.precio = preciopieza;
        this.cantidad = cantidadpieza;
      }
// ACCIONES // METODOS
      subTotal = () => {
        return this.preciopieza*this.cantidadpieza;
      }
 
}