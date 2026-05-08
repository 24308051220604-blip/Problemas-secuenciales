function pintura(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let presupuesto = parseFloat(document.getElementById("presupuesto").value);
    const result = presupuesto * 70; 
    //El texto que tiene
    document.getElementById("result").textContent = "El resultado es: " + result;
};