function estacionamiento(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let tiempo= parseFloat(document.getElementById("tiempo").value);
    const result = tiempo*20; 
    //El texto que tiene
    document.getElementById("result").textContent = "El resultado es: " + result;
};