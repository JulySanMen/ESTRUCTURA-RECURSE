function hospedaje() {
    let hosp = parseFloat(document.getElementById("hosp").value);
    let cos = parseFloat(document.getElementById("cos").value);

    let resultado = document.getElementById("resultado");
    resultado.textContent = HotelTDA(hosp, cos);
}
function HotelTDA(hosp, cos) {
    let subtotal = hosp * cos;
    let descuento = 0;
    let total = 0;

    if (hosp >= 6 && hosp <= 10) {
        descuento = subtotal * 0.10;
        total = subtotal - descuento;
    } else if (hosp >= 11 && hosp <= 15) {
        descuento = subtotal * 0.15;
        total = subtotal - descuento;
    } else if (hosp >= 16) {
        descuento = subtotal * 0.20;
        total = subtotal - descuento;
    } else if (hosp <= 5) {
        total = subtotal; 
    }

    let mensaje = "Subtotal: $" + subtotal + "\n";

    if (descuento > 0) {
        mensaje += "Su descuento es del " + (descuento / subtotal * 100) + "% ($" + descuento + ")\n";
    } else {
        mensaje += "No hay descuentos\n";
    }
    mensaje += "Total: $" + total;
    return mensaje;
}
