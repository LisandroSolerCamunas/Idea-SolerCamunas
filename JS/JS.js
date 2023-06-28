let registros = [];

let Continuar = true;
while (Continuar === true) {
    let datos = {};

    let CantidadPesos = parseInt(prompt("Ingrese la cantidad de pesos"));
    let Opcion = parseInt(
        prompt("Ingrese según el número el dolar a calcular: 1-Dolar oficial 2-Dolar Blue 3-Dolar turista")
    );

    if (!isNaN(CantidadPesos) && !isNaN(Opcion)) {
        if (Opcion === 1) {
            let TotalDolar = (CantidadPesos / 239.5).toFixed(2);
            datos.tipoDolar = "Oficial";
            datos.totalDolar = TotalDolar;
            registros.push(datos);
            alert("El total de Pesos a Dolar Oficial sería de " + TotalDolar);
        } else if (Opcion === 2) {
            let TotalDolar = (CantidadPesos / 482).toFixed(2);
            datos.tipoDolar = "Blue";
            datos.totalDolar = TotalDolar;
            registros.push(datos);
            alert("El total de Pesos a Dolar Blue es de " + TotalDolar);
        } else if (Opcion === 3) {
            let TotalDolar = (CantidadPesos / 503).toFixed(2);
            datos.tipoDolar = "Turista";
            datos.totalDolar = TotalDolar;
            registros.push(datos);
            alert("El total de Pesos a Dolar Turista es de " + TotalDolar);
        }
    } else {
        alert("Ingrese un número válido");
    }
    Continuar = confirm("¿Desea realizar otro cálculo?");
}


let buscarRegistro = function (tipo) {
    return registros.filter(function (registro) {
        return registro.tipoDolar.toLowerCase() === tipo.toLowerCase();
    });
};


let tipoBusqueda = prompt("Ingrese el tipo de Dólar a buscar (Oficial, Blue, Turista):")
let resultadosFiltrados = buscarRegistro(tipoBusqueda)

let resultados = "";
if (resultadosFiltrados.length > 0) {
    for (let i = 0; i < resultadosFiltrados.length; i++) {
        resultados += "Registro " + (i + 1) + ":\n"
        resultados += "Tipo de Dólar: " + resultadosFiltrados[i].tipoDolar + "\n"
        resultados += "Total en Dólar: " + resultadosFiltrados[i].totalDolar + "\n\n"
    }
} else {
    resultados = "No se encontraron registros para el tipo de Dólar especificado."
}
alert(resultados)
