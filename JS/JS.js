let CantidadPesos = document.getElementById("cantidad");
let Opciones = document.getElementsByClassName("btn btn-primary");
let resultadoElement = document.getElementById("resultado");
let borrarhistorial = document.getElementById("borrarhistorial")
let historial = [];

for (let i = 0; i < Opciones.length; i++) {
    Opciones[i].addEventListener("click", function () {
        let opcionSeleccionada = Opciones[i].id;
        let TotalDolar, tipoDolar;
        if (opcionSeleccionada === "Dolar oficial") {
            TotalDolar = (parseInt(CantidadPesos.value) / 239.5).toFixed(2);
            tipoDolar = "Oficial";
            localStorage.setItem("resultado", TotalDolar);
            localStorage.setItem("tipoDolar", tipoDolar);
            historial.push({ resultado: TotalDolar, tipoDolar });
            resultadoElement.innerHTML = "El total de Pesos a Dolar " + tipoDolar + " sería de " + TotalDolar;
        } else if (opcionSeleccionada === "Dolar Blue") {
            TotalDolar = (parseInt(CantidadPesos.value) / 482).toFixed(2);
            tipoDolar = "Blue";
            localStorage.setItem("resultado", TotalDolar);
            localStorage.setItem("tipoDolar", tipoDolar);
            historial.push({ resultado: TotalDolar, tipoDolar });
            resultadoElement.innerHTML = "El total de Pesos a Dolar " + tipoDolar + " sería de " + TotalDolar;
        } else if (opcionSeleccionada === "Dolar turista") {
            TotalDolar = (parseInt(CantidadPesos.value) / 503).toFixed(2);
            tipoDolar = "Turista";
            localStorage.setItem("resultado", TotalDolar);
            localStorage.setItem("tipoDolar", tipoDolar);
            historial.push({ resultado: TotalDolar, tipoDolar });
            resultadoElement.innerHTML = "El total de Pesos a Dolar " + tipoDolar + " sería de " + TotalDolar;
        }
        localStorage.setItem("historial", JSON.stringify(historial));
    });
}


if (localStorage.getItem("historial")) {
    let historialGuardado = JSON.parse(localStorage.getItem("historial"));
    let historialElement = document.getElementById("historial");
    historialGuardado.forEach((item) => {
        let resultado = item.resultado;
        let tipoDolar = item.tipoDolar;
        let li = document.createElement("li");
        li.textContent = "El total de Pesos a Dolar " + tipoDolar + " fue de " + resultado;
        historialElement.appendChild(li);
    });
}

borrarhistorial.addEventListener("click", function () {
    localStorage.removeItem("historial");
    let historialElement = document.getElementById("historial");
    historialElement.innerHTML = "";
});