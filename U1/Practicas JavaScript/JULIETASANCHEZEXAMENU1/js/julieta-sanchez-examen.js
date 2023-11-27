function diaSiguiente() {
    let dia = parseFloat(document.getElementById("dia").value);
    let mes = parseFloat(document.getElementById("mes").value);
    let anio = parseFloat(document.getElementById("anio").value);

    if ( isNaN(dia), isNaN(mes), isNaN(anio)) {
        alert("Ingrese valores válidos en todos los campos");
        return; 
    }
    const facturaDiv = document.getElementById('facturaDiv');
    facturaDiv.innerHTML = diaSiguienteTDA(dia, mes, anio);
    
    facturaDiv.style.display = 'block';
    const formulario2 = document.getElementById('formulario2');
    formulario2.style.display = 'block';

    function diaSiguienteTDA(dia, mes, anio) {
        let bandera = false;
        switch(mes){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8: 
            case 10:   
            case 12:
            if(dia<=30){
                dia ++
            }if(dia == 31 && mes == 12){
                dia = 1
                mes = 1
                anio++
            }if(dia == 31 && mes!= 12){
                dia = 1
                mes ++
            }
            break;
            case 4:
            case 6:
            case 9:
            case 11:
            if(dia<=29){
                dia ++
            }else if(dia == 30){
                dia = 1
                mes ++
            }
            break;
            case 2:
            if(anio%4 == 0){
                if(dia<=28){
                    dia ++
                }else if (dia == 29){
                    dia = 1
                    mes ++
                }else{
                    bandera = true;
                }
            }else {
                if(dia<=27){
                    dia ++
                }else if(dia == 28){
                    dia = 1
                    mes ++
                }else{
                    bandera = true;
                }
            }
        }if(mes >12){
            bandera = true;
        }
        //validando la bandera para retornar resultados 
        if(bandera){
            return "Fecha incorrecta"
        }else{
            return `<h3>Fecha Siguiente</h3>
            <p>Fecha Siguiente: ${dia}/${mes}/${anio}</p>`
        }
       
     }
}
