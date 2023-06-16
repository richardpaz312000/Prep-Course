// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aqui
  var arregloNuevo = []
  for (var prop in objeto) {
    arregloNuevo.push([prop, objeto[prop]])
  }
  return arregloNuevo
} 


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var sorted = string.split("").sort(function (a, b) {
    return a.localeCompare(b)
  }).join("")
  var objeto = {}
  for (var i = 0; i<string.length; i++){
    if (string[i] in objeto) {
      objeto[string[i]]++
    } else {
      objeto[string[i]]=1
    }
  }
  return objeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var respuesta = ""
  var mayusculas = ""
  var minusculas = ""
  for (var i = 0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()) {
      mayusculas += s[i];
    } else  {
        minusculas += s[i];
      }   
  }
  
  return mayusculas + minusculas
}
function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arrayfrase = str.split(" ")
  let farseEspejo = [];
  for (let i = 0; i < arrayfrase.length; i++) {
    let espejo = arrayfrase[i].split("").reverse().join("")
    farseEspejo.push(espejo)
  }
  return farseEspejo.join(" ")
  }



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let str = numero.toString()
  for (let i = 0; i < str.length; i++){
    if (str[i] !== str[str.length - 1 - i]) {
      return "No es capicua"
    }
  }
  return "Es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  let nuevoString = cadena.split("")
  let sinAbc = []
  for (let i = 0; i < nuevoString.length; i++){
    if (nuevoString[i] !== "a" && nuevoString[i] !== "b" && nuevoString[i] !== "c") {
      sinAbc.push(nuevoString[i])
    }
  }
  return sinAbc.join("")
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let arrOrdenado = []
  for (let i = 0; i < arr.length; i++){
    let min = Infinity
    let aux = 0
    for (let j = 0; j < arr.length; j++){
      if (arr[j].length < min && !arrOrdenado.includes(arr[j])) {
        min = arr[j].length;
        aux = j;
      }
    }
    arrOrdenado.push(arr[aux])
  }
return arrOrdenado
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let newArreglo = []
  for (let i = 0; i < arreglo1.length; i++){
    for (let z = 0; z < arreglo2.length; z++){
      if (arreglo1[i] === arreglo2[z]) {
        newArreglo.push(arreglo1[i])
      }
        }
    }
  
  return newArreglo;
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

