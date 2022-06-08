//Proyecto: Bikinis | Bikini.twins

//Teniendo en cuenta que es usuario elige entre 3 productos, sumar iva y hacer dscuento.

prompt("Los productos son: Enteriza: $3000, corpiño: $1500 y bombacha: $1500")

function producto(enteriza, corpiño, bombacha) {

    switch (operacion) {
        case "enteriza":
            alert("El total del producto es " + precioIva)
            break;
        case "corpiño" || "bombacha":
            alert("El total del producto es " + precioIva2)
            break;
        default:
            "otro";
            break;
    }
}

const suma = (n1, n2) => n1 + n2
const resta = (n1, n2) => n1 - n2
const iva = valor => valor * 0.21

let precioProducto = 3000
let precioProducto2 = 1500
let descuento = 500

let precioIva = resta(suma(precioProducto, iva(precioProducto)), descuento);
let precioIva2 = resta(suma(precioProducto, iva(precioProducto2)), descuento);

let alerta = alert("El total del producto es " + operacion + precioIva)