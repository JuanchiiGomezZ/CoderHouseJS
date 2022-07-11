let compraFinal = []
let carrito = []
let subTotalCompra;
let total = 0;

const productos = [
    { id: 101, producto: "Cheese Burger", precio: 650 },
    { id: 102, producto: "Red Peper", precio: 650 },
    { id: 103, producto: "Double Double", precio: 700 },
    { id: 104, producto: "Uncle Sam", precio: 800 },
    { id: 105, producto: "American Burger", precio: 850 },
    { id: 106, producto: "345", precio: 850 },
    { id: 107, producto: "Grandpa Sam", precio: 950 },
];

class ProductoSeleccionado {
    constructor(cantidad, producto, precio, subTotalCompra) {
        this.cantidad = cantidad
        this.producto = producto
        this.precio = precio
        this.subtotal = subTotalCompra
    }

}
let compra = new ProductoSeleccionado()

function buscar(productos, seleccion) {
    return carrito = productos.filter(objeto => objeto.id == parseInt(seleccion));

}


function listaProductos(productos) {
    let lista = "";
    for (const producto of productos) {
        lista += "ID:  " + producto.id + "  |  " + producto.producto + " -> $" + producto.precio + "\n";
    }
    return lista;
}



function subtotal(carrito, cantidad) {
    carrito.forEach(item => {
        return subTotalCompra = item.precio * cantidad;
    });

}


function PagoContadoTransferencia(total) {
    console.log("CBU : 0000007900204437260482 \n" + "ALIAS : PEPE.PIEDRA.TRUENO \n" + "Total: $" + total)
}



function pagoTarjeta(total) {
    return total = (total * 1.1).toFixed();
}

function CarritoF(cantidad,carrito,subTotalCompra) {
    for (let i = 0; i < carrito.length; i++) {
        compra = new ProductoSeleccionado(cantidad, carrito[i].producto, carrito[i].precio, subTotalCompra)
        compraFinal.push(compra)
    }
    return compraFinal
}


for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    let seleccion = prompt("Ingrese el ID del producto\n" + listaProductos(productos) + " 0 - EXIT");
    let error = productos.some((item) => item.id == seleccion)

    buscar(productos, seleccion);
    if (seleccion == 0) {

        if (total == 0) {
            break
        }
        else {
            console.log("El total de su compra es: $" + total);
            let formaPago = prompt("Seleccione forma de pago : \n 1 - Transferencia \n 2 - Tarjeta (+10%)")
            console.log(compraFinal);
            if (formaPago == 1) {
                PagoContadoTransferencia(total);
                break
            } else if (formaPago == 2) {
                console.log(`Total con tarjeta: $${pagoTarjeta(total)}`)
                break
            }
        }
    }

    if (error == false) {
        alert("Error ID NO CORRESPONDE A UN PRODUCTO")
    }
    else {
        let cantidad = parseInt(prompt("Ingresa la cantidad"));
        subtotal(carrito, cantidad);

        CarritoF(cantidad,carrito,subTotalCompra)
      
        total += subTotalCompra;
    }
}


