function calFibo() {
    event.preventDefault();
    const numeroIngresado = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(numeroIngresado)) {
        resultado.textContent = "Numero no valido o vacio, ingrese un número válido";
    } else {
        resultado.innerHTML = '';

        function fibonacci(n) {
            if (n <= 0) {
                return [0];
            } else if (n === 1) {
                return [0, 1];
            } else {
                const fiboArray = fibonacci(n - 1);
                fiboArray.push(fiboArray[n - 1] + fiboArray[n - 2]);
                return fiboArray;
            }
        }

        const fibonacciSecuencia = fibonacci(numeroIngresado);
        resultado.innerHTML = "Serie Fibonacci:<br>" + fibonacciSecuencia.join('<br>');
    }
}

const resultado = document.getElementById("resultado");
const cancelar = document.getElementById("cancelar");
cancelar.addEventListener('click', function() {
    resultado.innerHTML = '';
});
