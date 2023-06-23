//Número palíndromo
//next_pal(11) debe devolver 22, ya que 22 es el siguiente número
//palíndromo después de 11.
//next_pal(188) debe devolver 191, ya que 191 es el siguiente número
//palíndromo después de 188.
//next_pal(191) debe devolver 202, ya que 202 es el siguiente número
//palíndromo después de 191.
//next_pal(2541) debe devolver 2552, ya que 2552 es el siguiente número
//palíndromo después de 2541.
//Un número palíndromo es aquel que se lee de la misma manera de izquierda a
//derecha y de derecha a izquierda.
//En otras palabras, es un número que se mantiene igual cuando sus dígitos son
//invertidos.

//Ejemplos: 121, 12321 y 333.
//En este desafío, se te pide que crees una función llamada "next_pal()" que
//reciba como parámetro un número entero positivo, tu objetivo es que la
//función retorné el siguiente número palíndromo a partir del recibido por
//parámetro.

const next_pal = (num) => {
  function isPalindrome(num) {
    const strNum = String(num);
    const reversedStrNum = strNum.split("").reverse().join("");
    return strNum === reversedStrNum;
  }

  let nextNumber = number + 1;
  while (!isPalindrome(nextNumber)) {
    nextNumber++;
  }

  return nextNumber;
}

// Ejemplo de uso
const inputNumber = 191;
const nextPalindrome = next_pal(inputNumber);
console.log(nextPalindrome);
