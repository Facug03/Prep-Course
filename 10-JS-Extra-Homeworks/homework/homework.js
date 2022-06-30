// No cambies los nombres de las funciones.

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let newArray = [];
  for (let algo in objeto) {
    newArray.push([algo, objeto[algo]])
  }
  return newArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var stringMayu = '';
  var stringMin = '';
  var dadoVuelta = '';
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) stringMayu = stringMayu + s[i];
    else stringMin = stringMin + s[i];
  } 
  dadoVuelta = stringMayu + stringMin;
  return dadoVuelta;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let invertido = str.split("").reverse().join("");
  invertido = invertido.split(' ');
  let arrayInvertido = [];

  for (let i = invertido.length - 1; i >= 0; i--) {
    arrayInvertido.push(invertido[i]);
  }
  arrayInvertido = arrayInvertido.join(' ');
 return arrayInvertido;
}



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero = numero.toString();
  if (numero === numero.split("").reverse().join("")) return 'Es capicua';
  else return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.split('a').join('');
  cadena = cadena.split('b').join('');
  cadena = cadena.split('c').join('');
  return cadena;
  }


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a, b){
    return a.length - b.length;
  });
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let igualArray = [];
  for (var i = 0; i < 6; i++) {
    if (arreglo1[0] === arreglo2[i]) igualArray.push(arreglo2[i]);
    else if (arreglo1[1] === arreglo2[i]) igualArray.push(arreglo2[i]);
    else if (arreglo1[2] === arreglo2[i]) igualArray.push(arreglo2[i]);
    else if (arreglo1[3] === arreglo2[i]) igualArray.push(arreglo2[i]);
    else if (arreglo1[4] === arreglo2[i]) igualArray.push(arreglo2[i]);
  }
  let arrayFinal = []
  for (var b = 0; b < igualArray.length; b++) {
    if (igualArray[b] !== undefined) arrayFinal.push(igualArray[b]) 
  }
  return arrayFinal;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

