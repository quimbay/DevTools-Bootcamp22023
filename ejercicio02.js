//Escribe una función que acepte un array con 10 números enteros positivos
//(entre 0 y 9) y devuelva una cadena de texto con esos números en forma d


function  createPhoneNumber (numbers){
    if ( numbers.length !== 10){
    return console.log ('Deben de ser 10 numeros')
    }
    const areaCode = numbers.slice(0, 3).join("");
  const firstPart = numbers.slice(3, 6).join("");
  const secondPart = numbers.slice(6).join("");

return `(${areaCode}) ${firstPart}-${secondPart}`;
}
console.log(createPhoneNumber([3,0,0,5,1,9,0,1,5,5]));


