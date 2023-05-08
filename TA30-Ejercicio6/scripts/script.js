var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//Pedimos al usuario que introduzca el dni
let dni = parseInt(prompt("Introduce numero DNI"));

//Comprobamos si el numero es correcto osea no tiene mas de 7 numeros
if (dni.length > 7) {
  window.alert("El numero introducido no es válido");
} else {
  //Le pedimos al usuario la letra de su DNI
  let letraDni = prompt("Introduce letra DNI").toUpperCase();

  //Calculamos el resto del dni, para obtener la letra
  let resto = dni % 23;

  //Comprobamos que la letra que nos ha indicado corresponde con la que es en realidad
  if (letras[resto] == letraDni) {
    window.alert("La letra " + letraDni + " indicada si es la correcta");
  } else {
    window.alert("La letra " + letraDni + " indicada no es la correcta. Su letrsa del DNI es "+ letras[resto]);
  }
}