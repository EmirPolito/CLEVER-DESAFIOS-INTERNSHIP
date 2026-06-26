//3.- Ordenamiento

function integerSort(inputArray) {
    const resultado = [...inputArray];

    for (let i = 0; i < resultado.length - 1; i++) {
        for (let j = 0; j < resultado.length - 1 - i; j++) {
            if (resultado[j] > resultado[j + 1]) {
                const temporal = resultado[j];
                resultado[j] = resultado[j + 1];
                resultado[j + 1] = temporal;
            }
        }
    }

    return resultado;
}

// Prueba
console.log(integerSort([5, -2, 10, 0, 3, -7]));
// [-7, -2, 0, 3, 5, 10]