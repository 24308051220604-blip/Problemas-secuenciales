function conagua(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let agua= parseFloat(document.getElementById("agua").value);
    const result = agua * 14; 
    //El texto que tiene
    document.getElementById("result").textContent = "El resultado es: " + result;
};