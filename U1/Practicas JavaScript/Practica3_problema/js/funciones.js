function pedidos(){
    let canthojas = parseInt(prompt("Ingrese la cantidad de hojas de hielo seco pedido: "))
    let precio = parseFloat(prompt("Ingrese el precio unitario: $"))
    let cantviguetas = parseInt(prompt("Ingrese la cantidad de viguetas pedidas: "))
    let precio2 = parseFloat(prompt("Ingrese el precio unitario: $"))
    let cantarmazones = parseInt(prompt("Ingrese la cantidad de armazones pdidos "))
    let precio3 = parseFloat(prompt("Ingrese el precio unitario: $"))
    
    let pedido = (canthojas * precio)
    let des = (pedido * .20)
    let pay =(pedido - des)
    let pedido2 = (cantviguetas * precio2)
    let des2 = (pedido2 * .15)
    let pay2 =(pedido2 - des2)
    let pedido3 = (cantarmazones * precio3)
    let suma = (pedido+pedido2+pedido3)
    let sum = (pay+pay2+pedido3)
    
    alert("Pedido: \n" +"Hojas de hielo seco .....$"+ pedido +"\n"
     + "Vigetas...............................$"+pedido2 +"\n"
     +"Armazones.......................$"+pedido3+"\n"
     +"Subtotal = $" + suma+"\n"
     + "Descuentos: \n"+"Hojas de hielo seco .....$"+ pay +"\n"
     + "Vigetas...............................$"+pay2 +"\n"
     +"Armazones.......................$"+0+"\n"
     +"Total Pagar : $" + sum)
     let TPago = (prompt("Ingrese su tipo de pago: \n Contado o Credito"))
    if(TPago === "Contado"){
        let desf = (sum*.07)
        let pag = (sum-desf)
        alert("Pedido: \n" +"Hojas de hielo seco .....$"+ pedido +"\n"
        + "Vigetas...............................$"+pedido2 +"\n"
        +"Armazones.......................$"+pedido3+"\n"
        +"Subtotal = $" + suma+"\n"
        + "Descuentos: \n"+"Hojas de hielo seco .....$"+ pay +"\n"
        + "Vigetas...............................$"+pay2 +"\n"
        +"Armazones.......................$"+0+"\n"
        +"Total Pagar sin descuento de compra: $" + sum+"\n"
        +"Total Pagar con descuento de compra (7%): $"+pag)
    }else if(TPago === "Credito"){
        alert("Pedido: \n" +"Hojas de hielo seco .....$"+ pedido +"\n"
        + "Vigetas...............................$"+pedido2 +"\n"
        +"Armazones.......................$"+pedido3+"\n"
        +"Subtotal = $" + suma+"\n"
        + "Descuentos: \n"+"Hojas de hielo seco .....$"+ pay +"\n"
        + "Vigetas...............................$"+pay2 +"\n"
        +"Armazones.......................$"+0+"\n"
        +"Total Pagar sin descuento de compra: $" + sum+"\n"
)
    }
}