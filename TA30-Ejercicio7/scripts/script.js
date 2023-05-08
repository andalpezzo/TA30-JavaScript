//Calculamos el numero factioral del numero que nos paso el usuario
function factorial(num) {
  let numFactorial = 1;

  if (num > 1) {
    for (var i = num; i >= 1; i--) {
      numFactorial = numFactorial * i;
    }
    return numFactorial;
  } else if (num == 0 || num == 1) {
    return numFactorial;
  } else {
    return "El numero introducido debe ser positivo"
  }
}

//Pedimos un numero al usuario para calcular el factorial
let num = parseInt(prompt("Introduce un numero para calcular factorial:"));
alert("El numero factorial de " + num + " es: " + factorial(num));