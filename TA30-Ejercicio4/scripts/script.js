const valores = [true, 5, false, "hola", "adios", 2];
const textos = [];
let stringMasLargo;

//Recorremos el array buscando los strings y los añadimos a un nuevo array
for (valor of valores){
    if (typeof valor === "string"){
        textos.push(valor);
    }
}

//Comparamos los string del array entre si para ver cual es el más largo
let masLargo = textos[0];

for (let i = 1; i < textos.length; i++) {
    if (textos[i].length > masLargo.length) {
        masLargo = textos[i];
    }
}
console.log(masLargo);

//Obtenemos los valores booleanos del array y los printamos
const booleanos = [];

for (valor of valores){
    if (typeof valor === "boolean"){
        booleanos.push(valor);
    }
}

for (let i = 1; i < booleanos.length; i++) {
    console.log(booleanos[i]);
}

//Obtenemos los numeros del array para hacer las operaciones
let numeros = [];

for (valor of valores){
    if(typeof valor === "number"){
        numeros.push(valor);
    }
}

//Hacemos 5 operaciones con los numeros del array
console.log(numeros[0] + " + " + numeros[1] + " = " + (valoresNum[0] + valoresNum[1]));
console.log(numeros[0] + " - " + numeros[1] + " = " + (valoresNum[0] - valoresNum[1]));
console.log(numeros[0] + " * " + numeros[1] + " = " + (valoresNum[0] * valoresNum[1]));
console.log(numeros[0] + " / " + numeros[1] + " = " + (valoresNum[0] / valoresNum[1]));
console.log(numeros[0] + " % " + numeros[1] + " = " + (valoresNum[0] % valoresNum[1]));