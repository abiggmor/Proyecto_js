//Declaro variables globales
let articulo;
let opcion;
let respuesta;
let ciclo = 1;
let precioFinal = 0;
const precioUno = 800;
const precioDos = 1000;
const precioTres = 500;
const precioCuatro = 300;

// **FUNCIONES**
//Calcular precio final
function sumar(precioNuevo, precioActual) {
  precioFinal = precioNuevo + precioActual;

  return precioFinal;
}
//Llenar el carrito
function llenarCarrito(arti) {
  switch (arti) {
    case 1:
      return sumar(precioUno, precioFinal);
    case 2:
      return sumar(precioDos, precioFinal);
    case 3:
      return sumar(precioTres, precioFinal);
    case 4:
      return sumar(precioCuatro, precioFinal);
    default:
      return menu();
  }
}
//Agregar mas al carrito
function agregarMas(res) {
  switch (res) {
    case "s":
      return (respuesta = 1);
    case "n":
      return (respuesta = 0);
    default:
      return 0;
  }
}
//Mailing
function mailing() {
  //Muestro lista de precios al usuario
  console.log("Lista de precios:");
  console.log("1- Primer articulo | UYU 800");
  console.log("2- Segundo articulo | UYU 1000");
  console.log("3- Tercer articulo | UYU 500");
  console.log("4- Cuarto articulo | UYU 300");
  console.log("5- Volver al menu principal");
  //Solicito articulo al usuario
  articulo = Number(
    prompt("Selecione el nro de articulo que desea agregar al carrito:")
  );
  //Si es un numero entra en el if
  if (!isNaN(articulo)) {
    //Agrego primer articulo al carrito
    llenarCarrito(articulo);
    //Consulto al usuario si quiere seguir comprando
    respuesta = prompt(
      "¿Desea agregar otro articulo al carrito? (presione s para SI | presione n para NO): "
    ).toLowerCase(); //con .toLowerCase() paso a minusculas
    agregarMas(respuesta);
    //Si el usuario decide seguir comprando entra el if
    if (respuesta == 1) {
      for (let i = 0; i <= ciclo; i++) {
        articulo = Number(
          prompt("Selecione el nro de articulo que desea agregar al carrito:")
        );
        //Si es un numero entra en el if
        if (!isNaN(articulo)) {
          llenarCarrito(articulo);
          respuesta = prompt(
            "¿Desea agregar otro articulo al carrito? (presione s para SI | presione n para NO): "
          ).toLowerCase();
          agregarMas(respuesta);
          //Si el usuario decide seguir comprando entra el if
          if (respuesta == 1) {
            ciclo = i + 2;
          } //Si el usuario no quiere comprar mas entra al else
          else {
            ciclo = i - 1;
            menu();
          }
        } //Si el articulo no es valido entra al else
        else {
          console.log("El valor ingresado no es valido.");
          ciclo = i - 1;
          menu();
        }
      }
    } //Si el usuario no quiere comprar mas entra al else
    else {
      menu();
    }
  } //Si el articulo no es valido entra al else
  else {
    console.log("El valor ingresado no es un valido.");
    menu();
  }
}
//Listar Carrito
function listaCarrito() {
  console.log("FUNCION AUN NO PROGRAMADA");
  menu();
}
//Pagar
function pagar() {
  console.log("Monto Total: " + precioFinal + " UYU");
}
//Eliminar Articulo de la lista
function eliminarArt() {
  console.log("FUNCION AUN NO PROGRAMADA");
  menu();
}
//Salir de programa
function salir() {
  console.log("FUNCION AUN NO PROGRAMADA");
}
//Menu principal
function menu() {
  console.log("Menu principal:");
  console.log("1- Mailing");
  console.log("2- Mi carrito");
  console.log("3- Pagar");
  console.log("4- Eliminar articulo de mi carrito");
  console.log("5- Salir");
  //Solicito opcion al usuario
  opcion = Number(prompt("Ingrese el nro de opcion que desea realizar:"));
  if (!isNaN(opcion)) {
    switch (opcion) {
      case 1:
        return mailing();
      case 2:
        return listaCarrito();
      case 3:
        return pagar();
      case 4:
        return eliminarArt();
      default:
        return salir();
    }
  } else {
    console.log("El valor ingresado no es un valido.");
    menu();
  }
}

// **COMIENZA EL PROGRAMA **
//Muestro el menu principal
menu();
