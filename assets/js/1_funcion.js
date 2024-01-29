// 1. Transforma esta declaración de función a una función de expresión. El ejercicio debe
// quedar en un archivo nombrado `1_funcion.js` (1 Punto)


// function example(a, b, c){
// return a+b+c
// }



document.addEventListener('DOMContentLoaded', function() {
    const ejemplo = function(a, b, c) {
        return a + b + c;
    };

    
    const resultContainer = document.getElementById('result-container');
    const resultado = ejemplo (1, 2, 3);
    resultContainer.textContent = `El resultado del ejemplo (1, 2, 3) es: ${resultado}`;
});
