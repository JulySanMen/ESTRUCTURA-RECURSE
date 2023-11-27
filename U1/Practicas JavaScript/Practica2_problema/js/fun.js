function ospedaje(){
    let osp = parseFloat(prompt("Ingrese dias que se quedo:" ))
    let cos = parseFloat(prompt("Ingrese costo por dia :" ))

    if(osp >= 6 && osp <= 10){
        let pay = (cos)*(osp)
        let des=(pay)*(.10)
        let tot=(pay)-(des)
        alert("Subtotal: $" + pay+"\n"+"Su descuento del 10% es: $" + des
        +"\n"+"Total: $" + tot)

    }else if(osp >= 11 && osp <= 15){
        let pay = (cos*osp)
        let des=(pay*.15)
        let tot=(pay-des)
        alert("Subtotal: $" + pay+"\n"+"Su descuento del 15% es: $" + des
        +"\n"+"Total: $" + tot)

    }else if(osp >= 16){
        let pay = (cos*osp)
        let des=(pay*.20)
        let tot=(pay-des)
        alert("Subtotal: $" + pay+"\n"+"Su descuento del 20% es: $" + des
        +"\n"+"Total: $" + tot)
    }else if(osp <= 5){
        let pay =(cos)*(osp);
        alert("Subtotal:"+pay+"\n"+"No hay descuentos"+"\n"+"Total: $"+pay)
    }else{
        alert("Intruduzca valores validos ")
    }
}