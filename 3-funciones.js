/**
 * 3 Función [4puntos]
 * 
 * Función que recibe como parámetros dos números y la operación a realizar. 
 * [1pt] Si la operación es 'sumar', muestra por pantalla la suma de ambos
 * [1pt] Si la operación es 'restar', muestra la resta
 * [1pt] Si la operación no  es ninguna de las dos, mostrar 'operación desconocida'
 * [1pt] Hacer que el parámetro de la operación sea siempre 'sumar' por defecto (en caso de que no se especifique)
 * 
 */

console.log('ejercicio 3') //no quitar este console.log, empezar debajo el ejercicio

function calcular(num1, num2, operacion = 'sumar') {
    if (operacion === 'sumar') {
        console.log(num1 + num2);
    } else if (operacion === 'restar') {
        console.log(num1 - num2);
    } else {
        console.log('operacion desconocida');
    }
}

calcular(1, 2, 'sumar')
calcular(6, 4, 'restar')
calcular(4, 2, 'dividir')
calcular(5, 5)