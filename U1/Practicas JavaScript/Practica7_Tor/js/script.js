const tornillosTDA = (tipotor, costoCompra, fecha, nombreCliente ) => {
    const tornillos = {
        '0': '--Tipo de Tornillos--',
        '1': 'Acero Inoxidable',
        '2': 'Acero Bicromatico',
        '3': 'Laton',
    };

    let cantidadTornillos = costoCompra; 
    let cantidadTornillosExcedentes = 0;
    let costoFinal = 0;
    
    switch (tornillos[tipotor]) {
        case "Acero Inoxidable":
            if (cantidadTornillos <= 100) {
                costoFinal = cantidadTornillos * 1.50;
            } else if (cantidadTornillos >= 101 && cantidadTornillos <= 250) {
                cantidadTornillosExcedentes = cantidadTornillos - 100;
                costoFinal = 100 * 1.50 + cantidadTornillosExcedentes * 1.20;
            } else if (cantidadTornillos > 250) {
                cantidadTornillosExcedentes = cantidadTornillos - 250;
                costoFinal = 100 * 1.50 + 150 * 1.20 + cantidadTornillosExcedentes * 0.80;
            }
            break;
        case "Acero Bicromantado":
            if (cantidadTornillos <= 100) {
                costoFinal = cantidadTornillos * 2.00;
            } else if (cantidadTornillos >= 101 && cantidadTornillos <= 250) {
                cantidadTornillosExcedentes = cantidadTornillos - 100;
                costoFinal = 100 * 2.00 + cantidadTornillosExcedentes * 1.50;
            } else if (cantidadTornillos > 250) {
                cantidadTornillosExcedentes = cantidadTornillos - 250;
                costoFinal = 100 * 2.00 + 150 * 1.50 + cantidadTornillosExcedentes * 1.00;
            }
            break;
        case "Laton":
            if (cantidadTornillos <= 100) {
                costoFinal = cantidadTornillos * 3.00;
            } else if (cantidadTornillos >= 101 && cantidadTornillos <= 250) {
                cantidadTornillosExcedentes = cantidadTornillos - 100;
                costoFinal = 100 * 3.00 + cantidadTornillosExcedentes * 2.50;
            } else if (cantidadTornillos > 250) {
                cantidadTornillosExcedentes = cantidadTornillos - 250;
                costoFinal = 100 * 3.00 + 150 * 2.50 + cantidadTornillosExcedentes * 2.00;
            }
            break;
    }
    
    return `<p>Piezas compradas: ${cantidadTornillos}</p>
            <p>Total a pagar: ${costoFinal.toFixed(2)}</p>`;
};

function calcularPrecioVenta() {
    const nombreCliente = document.querySelector('input[placeholder="Nombre del Cliente"]').value;
    const fecha = document.querySelector('input[placeholder="Fecha"]').value;
    const tipotor = document.getElementById('origen').value;
    const costoCompra = parseFloat(document.querySelector('input[placeholder="Costo de Compra"]').value);

    if (!nombreCliente || !fecha || tipotor === '0' || isNaN(costoCompra)) {
        alert("Ingrese valores válidos en todos los campos del formulario de la factura.");
        return; 
    }

    const facturaDiv = document.getElementById('facturaDiv');
    facturaDiv.innerHTML = tornillosTDA(tipotor, costoCompra);
    
    facturaDiv.style.display = 'block';
    const formulario2 = document.getElementById('formulario2');
    formulario2.style.display = 'block';
}


    
