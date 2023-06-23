//Debes implementar la función countNameRepetitions(names), que tomará como
//parámetro un array de nombres y devolverá un objeto con los nombres y su
//representación de asteriscos correspondiente

// function countNameRepetitions(names){
//     const nameRepetitivo = {};

//     for (let name of names){
//         if(nameRepetitivo[name]){
//             nameRepetitivo[name]++;

//         }else {
//             nameRepetitivo[name] = 1;
//         }
//     }
//    const namesAsterisco = {};

//    for (let name in nameRepetitivo){
//     const asteriscos = '*'.repeat(nameRepetitivo[name]);
//     namesAsterisco[name] = asteriscos;
//    }
//    return namesAsterisco;
// }

// const nombres =  ['Juan', 'María', 'Pedro', 'Juan', 'María', 'María'];
// const resultado = countNameRepetitions(nombres);
//console.log(resultado);





 //Contador de existencias
const countNameRepetitions = (names) => { //toma un parámetro (names). Con funciónre se cuenta las reticiones de nombres en un array
    let nameRepetitions = {}; // inicializa el objeto vacío, y conteo de repeticiones de (countNameRepetitions)

    for (let i = 0; i < names.length; i++) {// Contar la cantidad de repeticiones de cada nombre (names) y realizar las operaciones necesarias en cada iteración.
        let name = names[i];//accede al elemento del arreglo (names) en la posición (i) y luego se asigna ese valor a la variable (name)
        
        if (nameRepetitions[name]) { // asigna el valor del elemento en la posición 'i' del arreglo 'names' a la variable 'name'
            nameRepetitions[name]++; // incrementa el contador asociado al nombre 'name' en el objeto 'nameCounts' en 1.
        } else {// indica el bloque de código que se ejecutará si la condición en el if. anterior es falsa, es decir, si el nombre no existe como propiedad en 'nameCounts'
            nameRepetitions[name] = 1;
        }
    }
    let result = {}; 
    //crea un nuevo objeto vacío llamado result.

    for (let name in nameRepetitions) {  // inicia un bucle 'for...in' que se utiliza para recorrer las propiedades de un objeto. En este caso, se utiliza para iterar sobre las propiedades del objeto 'nameCounts'
        const counter = nameRepetitions[name]; // crea una variable 'count' y asigna el valor del contador asociado al nombre actual (name) en el objeto 'nameCounts'
        result[name] = "*".repeat(counter);//asigna a la propiedad 'name' del objeto 'result' una cadena de asteriscos () repetida 'count' (determinada cantidad de veces9

        console.log(`${name} : ${result[name]}`);// Imprimir el nombre y su representación de asteriscos correspondiente
    }

    return result;//se utiliza para devolver el objeto 'result' como el resultado final de la función 'countNameRepetitions'
};
const names =  ['Juan', 'María', 'Pedro', 'Juan', 'María', 'María'];
//crea un nuevo arreglo llamado 'names' y lo inicializa con una lista de nombres.
countNameRepetitions(names);
// invoca la función countNameRepetitions y pasa el arreglo names como argumento.
//console.log(countNameRepetitions(names))