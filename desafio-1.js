//1.- Suma de dígitos

function digitsSum(inputInt) {
    let numero = Math.abs(inputInt);
    let suma = 0;

    while (numero > 0) {
        suma += numero % 10;
        numero = Math.floor(numero / 10);
    }

    return suma;
}

// Pruebas
console.log(digitsSum(999));      // 27
console.log(digitsSum(9184501));  // 28
console.log(digitsSum(12345));    // 15