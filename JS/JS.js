console.log("Estas conectado")

let Continuar = true

while (Continuar === true){

    let CantidadPesos = parseInt(prompt("Ingrese la cantidad de pesos"))
    let Opcion = parseInt(prompt("Ingrese segun el numero el dolar a calcular: 1-Dolar oficial 2-Dolar Blue 3-Dolar turista"))
    
    if (!isNaN(CantidadPesos) && !isNaN(Opcion)) {
        if (Opcion === 1) {
            let TotalDolar = (CantidadPesos / 239.50).toFixed(2)
            alert("El total de Pesos a Dolar Oficial seria de " + TotalDolar)
        } else if (Opcion === 2) {
            let TotalDolar = (CantidadPesos / 482).toFixed(2)
            alert("El total de Pesos a Dolar Blue es de " + TotalDolar)
        } else if (Opcion === 3) {
            let TotalDolar = (CantidadPesos / 503).toFixed(2)
            alert("El total de Pesos a Dolar Turista es de " + TotalDolar)
        }
    } else {
        alert("Ingrese un Numero valido")
    }
    Continuar =confirm("¿Desea realizar otro calculo")
}
