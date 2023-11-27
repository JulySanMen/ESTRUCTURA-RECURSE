function Imprimir(x, acumulador = '') {
    event.preventDefault();
    if (x > 0) {
        acumulador += `${x}, `;
        Imprimir(x - 1, acumulador);
    } else {
        document.getElementById("resultado").textContent = acumulador;
    }
}
