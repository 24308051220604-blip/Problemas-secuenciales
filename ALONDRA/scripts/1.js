function convertir(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let pesos = parseFloat(document.getElementById("pesos").value);
    const result = pesos*0.058; 
    document.getElementById("result").textContent = "El resultado es: " + result;
};