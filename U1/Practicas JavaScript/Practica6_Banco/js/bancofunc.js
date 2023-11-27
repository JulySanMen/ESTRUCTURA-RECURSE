class Banco {
    static tiposTarjeta = {
        1: 1.25,
        2: 1.35,
        3: 1.40,
    };

    static calcularLimiteCredito(tipoTarjeta, credito) {
        if (tipoTarjeta in Banco.tiposTarjeta) {
            switch (tipoTarjeta) {
                case 1:
                    return credito * Banco.tiposTarjeta[1];
                case 2:
                    return credito * Banco.tiposTarjeta[2];
                case 3:
                    return credito * Banco.tiposTarjeta[3];
                default:
                    return null;
            }
        } else {
            return null;
        }
    }
}

function banco() {
    const tipotarjetaSelect = document.getElementById("tipotarjeta");
    const creditoInput = document.getElementById("credito");
    const resultado = document.getElementById("resultado");

    const tipotarjetaValue = parseInt(tipotarjetaSelect.value);
    const creditoValue = parseInt(creditoInput.value);

    const limiteCredito = Banco.calcularLimiteCredito(tipotarjetaValue, creditoValue);

    if (limiteCredito !== null) {
        resultado.innerHTML = "Su límite de crédito es de: $" + limiteCredito.toString();
    } else {
        resultado.innerHTML = "Por favor, seleccione un campo válido.";
    }
}
