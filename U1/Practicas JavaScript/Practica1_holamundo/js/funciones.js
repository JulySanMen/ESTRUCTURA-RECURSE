function calcularSueldo(horasTrabajadas, sueldoHora){
    alert("Tu sueldo es : $"+(horasTrabajadas*sueldoHora));
}
function saludar (nombre){
    alert("Hola Mundo desde JavaScript \n Bienvenute "+ nombre)
}
function tiposVariables(){
    //comentario de una linea
    /*
    multiples lineas 
    */
    /*En javaScript tres formas de hacer una declaracion 
    1) var:Declara una variable y se puede redeclarar*/
   var sueldo = 15000;
   var sueldo = 10000;
   console.log("var sueldo = " + sueldo);//impresion pantalla , no para usuario, testear resultados en consola(inspeccioinar)
  /*2) let: Declarar una variable pero no se puede reedeclarar en un mismo 
               Scope (bloque de instrucciones)*/
    let nombre = "Pepito";
    if(true){
        let nombre = "Maria";
        console.log("let nombre = " + nombre);
    }
    console.log("let nombre = " + nombre);
    // 3) const: Declara constantes en el que su valor no cambia
    const IVA = 16;
    const PI = 3.1416;
    console.log("const IVA = " + IVA);
    console.log("conct PI = " + PI);
}
function entradaSalidaDatos(){
        //Entrada para teclado
        let cal1 = parseInt(prompt("Ingrese calificacion 1:" ,70));
        let cal2 = parseInt(prompt("Ingrese calificacion 2:" ,"NA"));
        let promedio = (cal1 + cal2) /2
        //Salida por pantalla
        alert ("Tu promedio es: " + promedio);

        let conformidad = confirm("Estas de acuerdo con tu promedio");
        if(conformidad){
            alert("Estas de acuerdo con tu promedio EXITO!!");
        }else{
            alert("Esfuerzate mas, Tu puedes :3");
        }
}
