function calcular() {
    const productoSelect = document.getElementById("producto");
    const cantidadInput = document.getElementById("cantidad");
    const precioInput = document.getElementById("precio");
    const tipoPagoSelect = document.getElementById("tipoPago");

    const productoValue = parseInt(productoSelect.value);
    const cantidad = parseInt(cantidadInput.value);
    const precio = parseFloat(precioInput.value);
    const tipoPago = tipoPagoSelect.value;

    let pedido = 0;
    let des = 0;
    let pay = 0;

    switch (productoValue) {
        case 1:
            pedido = cantidad * precio;
            des = pedido * 0.20;
            pay = pedido - des;
            break;
        case 2:
            pedido = cantidad * precio;
            des = pedido * 0.15;
            pay = pedido - des;
            break;
        case 3:
            pedido = cantidad * precio;
            pay = pedido; 
            break;
        default:
            var mensaje = "Por favor, seleccione un producto válido.";
            var resultado = document.getElementById("resultado");
            resultado.innerHTML = mensaje;
            return;
    }

    let suma = pedido; 
    let sum = pay; 

    var mensaje = "Producto seleccionado: " + productoSelect.options[productoSelect.selectedIndex].text
    var mensaje2 = "Cantidad: " + cantidad 
    var mensaje3 = "Precio unitario: $" + precio.toFixed(2)
    var mensaje4 =  "\nSubtotal = $" + suma.toFixed(2)
    var mensaje5 =  "\nDescuento: $" + des.toFixed(2) 

    if (tipoPago === "Contado") {
        let desf = (sum * 0.07);
        let pag = (sum - desf);
        mensaje += "Total a pagar (Contado) : $" + pag.toFixed(2);
    } else if (tipoPago === "Credito") {
        mensaje += "Total a pagar (Crédito): $" + sum.toFixed(2);
    } else {
        mensaje += "Tipo de pago no válido.";
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = mensaje;
    var resultado = document.getElementById("resultado2");
    resultado.innerHTML = mensaje2;
    var resultado = document.getElementById("resultado3");
    resultado.innerHTML = mensaje3;
    var resultado = document.getElementById("resultado4");
    resultado.innerHTML = mensaje4;
    var resultado = document.getElementById("resultado5");
    resultado.innerHTML = mensaje5;
}
