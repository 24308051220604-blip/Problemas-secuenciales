function trabajo(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let an = parseFloat(document.getElementById("an").value);
    let aa = parseFloat(document.getElementById("aa").value);
    const result = aa - an; 
    //El texto que tiene
    document.getElementById("result").textContent = "El resultado es: " + result;
};