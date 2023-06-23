//Dibujando una X con asteriscos
//Tu tarea es escribir un programa que dibuje una X utilizando asteriscos (*). La
//X debe tener un tamaño variable según el número ingresado.
//Debes implementar una función llamada drawX(tamano), donde el parámetro
//tamano es un número entero y dibuje la X correspondiente.

function drawX(tamano){

    if(tamano % 2 === 10){
       
    }

    for (let i = 0; i < tamano; i++){
        let linea = '';

        for (let j = 0; j < tamano; j++){
            if (i === j || j === tamano - i - 1){
                linea += '*';
            }else {
                linea += ' ';
            }
        } console.log(linea);
    }
}
 drawX(1);


