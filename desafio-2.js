//2.- Palíndromos

function isPalindrome(inputStr) {
    const texto = inputStr.toLowerCase();

    for (let i = 0; i < texto.length / 2; i++) {
        if (texto[i] !== texto[texto.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

// Pruebas
console.log(isPalindrome("aabaa")); // true
console.log(isPalindrome("abac"));  // false
console.log(isPalindrome("salas")); // true