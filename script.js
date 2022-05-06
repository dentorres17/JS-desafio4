//Se crea carrito de compras de tienda donde se venden productos artesanales en macrame.


//Objeto

class Producto {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}

const producto1 = new Producto("Espejos", 2500, 5)
const producto2 = new Producto("Cubrebidones", 1500, 4)
const producto3 = new Producto("Portamacetas", 1200, 3)


//Array donde se muestra el stock

let productos = [producto1, producto2, producto3]

//Se utiliza "map" para realizar un 10% de descuento en caso de que se abone con transferencia bancaria

console.log(productos.map (productos => productos.precio/1.10))

//Se realiza un nuevo array para que através del método "push" el usuario pueda ingresar lo que desea comprar

let newArray = []
let acumulador = 0;
console.log(productos);

let agregarProductos = newArray.push({nombre:prompt("Ingrese producto: Espejo($2500), Cubrebidones ($1500), Portamacetas($1200)"),precio:prompt("Ingrese precio"),cantidad:prompt("Ingrese cantidad")});

 
for(let productoEnArray of newArray){

    acumulador += productoEnArray.precio * productoEnArray.cantidad

}

//Se pide console.log para poder chequear el producto elegido y el total del precio

console.log(newArray);
console.log(acumulador);