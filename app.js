let descuento1 = parseInt(document.getElementById("descuento1").innerHTML.split("%")[0]);
let descuento2 = parseInt(document.getElementById("descuento2").innerHTML.split("%")[0]);
let descuento3 = parseInt(document.getElementById("descuento3").innerHTML.split("%")[0]);





function calcularPrecio() {

    let precioBase = document.getElementById("precio_base").innerHTML.split("$")[1];
    let categoria = document.getElementById("categoria").value;
    let cantidad = document.getElementById("inputCantidad").value;
    console.log(cantidad);
    let precioFinal = 0;

    if (categoria == "1") {
        precioFinal = parseInt(precioBase) - (parseInt(precioBase) * descuento1 / 100);
    } else if (categoria == "2") {
        precioFinal = parseInt(precioBase) - (parseInt(precioBase) * descuento2 / 100);
    } else if (categoria == "3") {
        precioFinal = parseInt(precioBase) - (parseInt(precioBase) * descuento3 / 100);
    } else {
        precioFinal = parseInt(precioBase);
    }
    document.getElementById("precio_final").value = precioFinal * cantidad;
    
   

   


}



document.getElementById("myBtn").onclick = calcularPrecio;









   


