function numFact(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * numFact(num - 1);
    }
}

function calFact() {
    event.preventDefault();
    const numero = parseInt(document.getElementById("numero").value);
    if (isNaN(numero) || numero === null) {
        document.getElementById("resultado").textContent = "Ingrese un valor válido";
    } else {
        const resultado = numFact(numero);
        document.getElementById("resultado").textContent = `El factorial de ${numero} es ${resultado}`;
    }
    
}
const resultado = document.getElementById("resultado");
const cancelar = document.getElementById("cancelar");
cancelar.addEventListener('click', function() {
    resultado.textContent = '';
});
