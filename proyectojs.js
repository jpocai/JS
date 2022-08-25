
//ARRAYS PRODUCTOS Y SHOP.
const carrito = [];
const productos = [{
    id: 1,
    imagen: "./Fotosproductos/Producto 1.png",
    nombre: "Café molido",
    descripcion: "Café en granos molido 1kg",
    precio: 1500
},
{
    id: 2,
    imagen: "./Fotosproductos/Producto 2.png",
    nombre: "Café tostado",
    descripcion: "Café en granos tostado 1kg",
    precio: 1500
},
{
    id: 3,
    imagen: "./Fotosproductos/Producto 3.png",
    nombre: "Café torrado",
    descripcion: "Café en granos torrado 1kg",
    precio: 1500
},
{
    id: 4,
    imagen: "./Fotosproductos/Producto 4.png",
    nombre: "Pack Café molido",
    descripcion: "Pack Café molido",
    precio: 1500
},
{
    id: 5,
    imagen: "./Fotosproductos/Producto 5.png",
    nombre: "Sapu Edición Limitada",
    descripcion: "Sapu Edición Limitada",
    precio: 1500
},
{
    id: 6,
    imagen: "./Fotosproductos/Producto 6.png",
    nombre: "Pack Café Promo",
    descripcion: "Pack Café Promo",
    precio: 1500
}];


//VARIABLES.
let modalContainer = document.getElementById("modalContainter");
let containerProductos = document.getElementById("containerProductos");
const dolarAmericano = Intl.NumberFormat("en-US");
//ACTIVO FUNCIONES.

renderizar();
agregarCarrito();
cargarCarrito();
//FUNCIONES.

// function sumaIva (precio, iva){
//     precio = precio;
//     iva = 1.21;
//     let precioConIva = precio * iva;
//     return precioConIva;
// }


function renderizar() {
    
    for (const producto of productos) {
    containerProductos.innerHTML += `
        <div class="card m-3 p-3" style="width: 16rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.descripcion}">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
        <a href="#" class="btn btn-success" id="btn ${producto.id}">COMPRAR</a>
        </div>`;
    }
    productos.forEach(producto => {
        document.getElementById(`btn ${producto.id}`).addEventListener("click", function(){agregarCarrito(producto)});
    })
}
    
function agregarCarrito(producto){
    carrito.push(producto);
    console.table(carrito);
    alert("Producto: " + `${producto.nombre}` + " agregado al carrito");

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

if (localStorage.getItem ("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

function cargarCarrito(){
    modalContainer.innerHTML= "";
    carrito.forEach(
        (elemento) => {
            let renglonCarrito = document.createElement("tr");

            renglonCarrito.innerHTML = `
            <td>${elemento.producto.id}</td>
            <td>${elemento.producto.nombre}</td>
            <td></td>
            <td>${elemento.producto.descripcion}</td>
            <td>${elemento.producto.precio}</td>
            `;
        }
    )
}

// let tipoBuscado = prompt ("Ingrese el tipo de café que desea buscar\nNuestros estilos de cafe son:\n- Torrado.\n- Molido.\n- Tostado.");
// for (const Cafe of productos){
//     if(Cafe.tipo == tipoBuscado){
//         console.log(Cafe);
//     }
// }


// function calcularInteres (precioConIva, interes) {
//     // let precioConIva = precio * 1.21;
//     let int = (precioConIva * interes); 
//     return int;
// }
// function capturarEsc(e){
//     if(e.keycode==27 || e.which==27){
//         alert("presionaste la tecla Esc");
//     }
// }
// let precioConIva = sumaIva();
// let precioConInt = calcularInteres();
// // let precioFinal = calcularInteres();
// let cuotas = parseInt ( prompt ("Ingresa la cantidad de cuotas deseada.\n(3, 6, 9, 12, 18)\n(Presiona Esc para salir o presiona c para abonar de contado.)"));

// while ((cuotas != capturarEsc(27) || (cuotas === "c"))) {
//     switch (cuotas) {
//         case "3":
//             precioConIva = sumaIva(800, 1.21);
//             interes = 1.15;
//             console.log ("En 3 cuotas tenes un 15% de interes adicional. Total: $" + calcularInteres(precioConIva, interes));
//             break;
//         case "6":
//             precioConIva = sumaIva(800, 1.21);
//             interes = 1.30;
//             console.log ("En 6 cuotas tenes un 30% de interes adicional. Total: $" +  calcularInteres(precioConIva, interes));
//             break;
//         case "9":
//             precioConIva = sumaIva(800, 1.21);
//             interes = 1.45;
//             console.log ("En 9 cuotas tenes un 45% de interes adicional. Total: $" +  calcularInteres(precioConIva, interes));
//             break;
//         case "12":
//             precioConIva = sumaIva(800, 1.21);
//             interes = 1.60;
//             console.log ("En 12 cuotas tenes un 60% de interes adicional. Total: $" +  calcularInteres(precioConIva, interes));
//             break;
//         case "18":
//             precioConIva = sumaIva(800, 1.21);
//             interes = 1.75;
//             console.log ("En 18 cuotas tenes un 75% de interes adicional. Total: $" +  calcularInteres(precioConIva, interes));
//             break;
//         case "c":
//             precioConIva = sumaIva(800);
//             console.log ("Abonando de contado el total es: $" + precioConIva);
//             break;
//         default:
//             alert ("No ofrecemos esa cantidad de cuotas");
//             break;
//         }
//             cuotas = prompt ("Ingresa la cantidad de cuotas deseada.\n(3, 6, 9, 12, 18)\n(Presiona Esc para salir o presiona c para abonar de contado.)");
//     }


// let desc = precioConIva * 0.90;
// let promo = prompt ("Ingresá tu código promocional o presiona Esc para salir.");
// if ((promo === "sapucafe10") || (promo === "SAPUCAFE10")){
//     console.log("Felicidades, accediste a un decuento adicional de un 10%!");
//     console.log("El total a pagar es: " + desc);
// } else if (promo == capturarEsc(27)){
//     alert("No has ingresado ningún código. El precio total es de: $" + precioConIva);
// } else if ((promo !== "sapucafe10") || (promo !== "SAPUCAFE10")){
//     console.log("Lo siento, no pudimos validar ese código de descuento.");
// }


