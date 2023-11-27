function calcularPrecioVenta() {
    const nombreCliente = document.querySelector('input[placeholder="Nombre del Cliente"]').value;
    const fecha = document.querySelector('input[placeholder="Fecha"]').value;
    const origen = document.getElementById('origen').value;
    const marca = document.querySelector('input[placeholder="Marca"]').value;
    const costoCompra = parseFloat(document.querySelector('input[placeholder="Costo de Compra"]').value);

    if (!nombreCliente || !fecha || origen === '0' || !marca || isNaN(costoCompra)) {
        alert("Ingrese valores válidos en todos los campos del formulario de la factura.");
        return; 
    }

    const facturaDiv = document.getElementById('facturaDiv');
    facturaDiv.innerHTML = autoTDA(origen, costoCompra,fecha, marca, nombreCliente);
    
    facturaDiv.style.display = 'block';
    const formulario2 = document.getElementById('formulario2');
    formulario2.style.display = 'block';
}
  //funciones de flecha => frameworks
/*function autoTDA(){
    Scope
}*/
const autoTDA =(origen, costoCompra,fecha, marca, nombreCliente )=>{
     const paises = {
        '0': '--Origen del auto--',
        '1': 'Alemania',
        '2': 'Japón',
        '3': 'Italia',
        '4': 'Estados Unidos'
    };

    const nombreOrigen = paises[origen];
   
    let aumentoPorOrigen = 0;
    if (origen === '1') {
        aumentoPorOrigen = 0.20;
    } else if (origen === '2') {
        aumentoPorOrigen = 0.30;
    } else if (origen === '3') {
        aumentoPorOrigen = 0.15;
    } else if (origen === '4') {
        aumentoPorOrigen = 0.08;
    }
    const aumentoCosto = costoCompra * 1.45;
    const aumentoPorOrigenCosto = aumentoCosto * aumentoPorOrigen;
    const subtotal = aumentoCosto + aumentoPorOrigenCosto;
    const iva =  0.16 * subtotal ;
    const precioVenta = subtotal * 1.16;
    return `<h3>Factura</h3>
    <p>Nombre del Cliente: ${nombreCliente}</p>
    <p>Fecha: ${fecha}</p>
    <p>Marca: ${marca}</p>
    <p>Origen: ${nombreOrigen}</p> <!-- Usar el nombre del país en lugar del número -->
    <p>Costo de Compra: $${costoCompra.toFixed(2)}</p>
    <p>Aumento por Origen: $${aumentoPorOrigenCosto.toFixed(2)}</p>
    <p>Aumento 45%: $${aumentoCosto.toFixed(2)}</p>
    <p>Precio iva 16%: $${iva.toFixed(2)}</p>
    <p>Precio Venta: $${precioVenta.toFixed(2)}</p>`;

}
  