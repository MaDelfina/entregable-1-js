//Proyecto: Bikinis | Bikini.twins

//Teniendo en cuenta que es usuario elige entre 3 productos, sumar iva y hacer dscuento.

const descuento = 500;
const iva = 0.21;
const opcion1 = 3000;
const opcion2 = 1500;
const opcion3 = 1500;

let pregunta = prompt("Selecciona los productos:\n1: enteriza = $3000\n 2: corpiño = $1500\n 3: bombacha = $1500");

let sumaTotal = 0;

switch (pregunta) {
    case "1":
        sumaTotal = opcion1 * iva - descuento;
        alert("Precio final " + sumaTotal);
        break;
    case "2":
        sumaTotal = opcion2 * iva - descuento;
        alert("Precio final " + sumaTotal);
        break;
    case "3":
        sumaTotal = opcion3 * iva - descuento;
        alert("Precio final " + sumaTotal);
        break;
    default:
        alert("error");
        break;
}