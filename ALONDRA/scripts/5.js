function hipotenusa(){
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    const result = Math.sqrt(a**2 + b**2);
    document.getElementById("result").textContent = "El resultado es: " + result;
};