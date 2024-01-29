// 2. Transforma la siguiente función a una arrow function de una línea. Este ejercicio
// debe quedar en un archivo llamado `2_arrow.js` (1 Punto)

// let suma = function(a, b){
// return a + b
// }


const suma = (a, b) => a + b;

function mostrarResultado() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    if (!isNaN(numero1) && !isNaN(numero2)) {
        const resultado = suma(numero1, numero2);
        document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
    } else {
        document.getElementById('resultado').textContent = 'Ingrese números válidos';
    }
}
