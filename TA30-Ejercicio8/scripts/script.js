//Funcion que comprueba si el número es par o impar
function esPar(num) {
  if (num % 2 == 0) {
    return "El número " + num + " es par";
  } else {
    return "El número " + num + " es impar";
  }
}

//Pedimos un número al usuario
let num = parseInt(prompt("Introduce un numero"));
alert(esPar(num));