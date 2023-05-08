function esPalindromo(texto) {
  //Pasamos todas las letras a minusculas y quitamos los puntos y las comas si tuviera alguna
  let textoMin = texto.toLowerCase().replace('.', '').replace(',', '');

  //Pasamos el string a array, despues lo invertimos y lo volvemos a pasar a string
  let textoInvertido = textoMin.split('').reverse().join('');

  //Comparamos si el string invertido y el original son iguales. Si es así sera palindormo
  if (textoMin === textoInvertido){
    return "La cadena de texto introducida NO es un palindormo "
  } else{
    return "La cadena de texto introducida SI es un palindromo"
  }
}

//Pedimos a el usuario que introduzca una cadena de texto
let texto = prompt("Introduce una cadena de texto");
alert(esPalindromo(texto));