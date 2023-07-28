fetch('tiposDolar.json')
    .then(response => response.json())
    .then(data => {
        const tiposDolar = data;

        let CantidadPesos = document.getElementById("cantidad");
        let Opciones = document.getElementsByClassName("btn btn-primary");
        let resultadoElement = document.getElementById("resultado");
        let borrarhistorial = document.getElementById("borrarhistorial");
        let historialElement = document.getElementById("historial");
        let historial = [];

        for (let i = 0; i < Opciones.length; i++) {
            Opciones[i].addEventListener("click", function () {
                let opcionSeleccionada = this.id; // Cambio aquí
                let TotalDolar, tipoDolar;
                if (opcionSeleccionada === "DolarOficial") {
                    TotalDolar = (parseInt(CantidadPesos.value) / 239.5).toFixed(2);
                    tipoDolar = tiposDolar.Oficial;
                    resultadoElement.innerHTML = "El total de Pesos a Dólar " + tipoDolar + " sería de " + TotalDolar;
                    historial.push({ resultado: TotalDolar, tipoDolar });
                    guardarHistorialEnLocalStorage();
                } else if (opcionSeleccionada === "DolarBlue") {
                    TotalDolar = (parseInt(CantidadPesos.value) / 482).toFixed(2);
                    tipoDolar = tiposDolar.Blue;
                    resultadoElement.innerHTML = "El total de Pesos a Dólar " + tipoDolar + " sería de " + TotalDolar;
                    historial.push({ resultado: TotalDolar, tipoDolar });
                    guardarHistorialEnLocalStorage();
                } else if (opcionSeleccionada === "DolarTurista") {
                    TotalDolar = (parseInt(CantidadPesos.value) / 503).toFixed(2);
                    tipoDolar = tiposDolar.Turista;
                    resultadoElement.innerHTML = "El total de Pesos a Dólar " + tipoDolar + " sería de " + TotalDolar;
                    historial.push({ resultado: TotalDolar, tipoDolar });
                    guardarHistorialEnLocalStorage();
                }
            });
        }

        function guardarHistorialEnLocalStorage() {
            localStorage.setItem("historial", JSON.stringify(historial));
            mostrarHistorial();
        }

        function mostrarHistorial() {
            historialElement.innerHTML = "";
            if (localStorage.getItem("historial")) {
                let historialGuardado = JSON.parse(localStorage.getItem("historial"));
                historialGuardado.forEach((item) => {
                    let resultado = item.resultado;
                    let tipoDolar = item.tipoDolar;
                    let li = document.createElement("li");
                    li.textContent = "El total de Pesos a Dólar " + tipoDolar + " fue de " + resultado;
                    historialElement.appendChild(li);
                });
            }
        }

        mostrarHistorial();

        borrarhistorial.addEventListener("click", function () {
            localStorage.removeItem("historial");
            historial = [];
            mostrarHistorial();
        });
    })
    .catch(error => console.error('Error al cargar tiposDolar.json:', error));