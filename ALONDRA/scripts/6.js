function camiones() {
    let km = parseFloat(document.getElementById("km").value);
    let costo = parseFloat(document.getElementById("costo").value);
    const result = km * costo; 
    document.getElementById("result").textContent = "El resultado es: " + result;
};