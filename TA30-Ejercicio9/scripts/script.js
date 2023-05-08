function mayusculasMinusculas(texto) {
  //Vari ables para ir contando las letras mayúsculas y las minúsculas
  let may = 0;
  let min = 0;

  //Recorremos la cadena de texto
  for (let letra of texto) {
    //Depende si la letra es mayúscula o minúscula sumaremos 1 en el contador pertinente
    if (letra === letra.toUpperCase()) {
      may++;
    } else if (letra === letra.toLowerCase()) {
      min++;
    }
  }

  //Si el número de minúsculas es 0 y el de mayúsculas no, significa que toda la cadena está en mayúsculas
  if (may != 0 && min == 0) {
    return "Toda la cadena esta en mayúsculas";
    //Si el número de mayúsculas es 0 y el de minúsculas no, significa que toda la cadena está en minúsculas
  } else if (may == 0 && min != 0) {
    return "Toda la cadena esta en minúsculas";
    //Si ningúno de los dos contadores está a cero, significa que la cadena está tanto en mayúsculas como en minúsculas
  } else {
    return "La cadena está tanto en mayúsculas como en minúsculas";
  }
}

//Le pedimos al usuario una cadena de texto  
let texto = prompt("Introduce cadena de texto");
alert(mayusculasMinusculas(texto));