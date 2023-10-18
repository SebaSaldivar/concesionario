const autos = []

function creoID() {
    return parseInt(Math.random() * 10000)
}

function agregarAuto() {
    debugger
    let marca = prompt("ingrese la marca")
    let modelo = prompt("Ingrese el modelo")    
    let precio = prompt("Ingrese el precio en $AR")
    let iva = prompt("Ingrese el iva en % (0-100)")
    iva = (iva/100)+1
    autos.push(new Auto(creoID(), marca, modelo, precio, iva))
    generadorAutomatico() // PARA CARGAR MUCHOS VEHICULOS A MODO DE PRUEBA
}

function buscarAuto() {
    debugger
    if(autos.length>0){
   
        let nomModelo = prompt("Ingrese el modelo del auto:")
            if (nomModelo !== "") {
                const existe = autos.some(auto => auto.modelo === nomModelo)
                if(existe){
                    alert("El vehiculo se encuentra en el stock")
                    let resultado = autos.find( auto => auto.modelo === nomModelo)
                    console.table(resultado)
                    alert("Precio $" + resultado.precio)
                }
                else{
                    prompt("Ese modelo de vehiculo no fue ingresado")
                }
                
            } else {
                alert("Ingrese un dato válido.")
            }
    } else{
        alert("No se ha ingresado ningún vehículo")
    }
}

function ContarStock() {
    debugger
    if(autos.length>0){
        let nomMarca = prompt("Ingrese la marca del auto:")
        let existe = autos.some(p => p.marca === nomMarca)
            if (existe) {
                alert("Stock actual de " + nomMarca + " : " + CalcularStockPorMarca(nomMarca))
            } else {
                alert("No se encontraron vehículos de esta marca")
            }
    } else{
        alert("No se ha ingresado ningún vehículo")
    }
}


function CalcularStockPorMarca(marca) {
    debugger
    let i=0
    for (let auto of autos) {
        if(auto.marca === marca){
            i = i + 1
        }
    }
    return i
}

function quitarAuto() {
    if(autos.length>0){
        console.clear() 
        debugger
        let nroId = prompt("Indique el id del auto a eliminar del stock: PENDIENTE")
    } else{
        alert("No se ha ingresado ningún vehículo")
    }
}

function listarAuto() {
    if(autos.length>0){
        console.clear() 
        debugger
         console.table(autos)
    } else{
        alert("No se ha ingresado ningún vehículo")
    }

}

function existeAutoPorId(id) {
    let existe = autos.some(p => p.id === id)
        if (existe) {
            return true
        } else {
            return false
        }

}

/*var mostrado = true;
var usuarioPermiteMensajes = false;
if(!mostrado && usuarioPermiteMensajes) {
alert("Es la primera vez que se muestra el mensaje");
}else{
alert("No es la primera vez que se muestra el mensaje");
}*/

/*
function recorrerArrayAutod() {
    debugger
    for (let auto of autos) {
        console.table(autos)
    }
}*/

/*
function filtrarAuto() {
    debugger
    let modelo = prompt("Ingrese parte del modelo de los vehiculos a filtrar:")
    let resultado = autos.filter(p => p.id >= codigo ) //CODIGO
    let resultado = autos.filter(p => p.modelo.includes(modelo.toUpperCase()))
        console.table(resultado)
}*/

function generadorAutomatico() {
    autos.push(new Auto(1111, "FORD", "FIESTA", 2995000, 21))
    autos.push(new Auto(2222, "FIAT", "SIENA", 2409900, 21))
    autos.push(new Auto(3333, "VW", "AMAROK", 5199949, 21))
    autos.push(new Auto(4444, "TOYOTA", "ETIOS", 2109890, 21))
    autos.push(new Auto(5555, "PEUGEOT", "308", 4009090, 21))
    autos.push(new Auto(6666, "RENAULT", "SANDERO", 4059000, 21))
    autos.push(new Auto(7777, "CITROEN", "C3", 3679800, 21))
    autos.push(new Auto(8888, "FORD", "KA", 2699000, 21))
    autos.push(new Auto(9999, "FIAT", "PALIO", 2609900, 21))
    autos.push(new Auto(1010, "VW", "GOL", 5199949, 21))
    autos.push(new Auto(1232, "TOYOTA", "HILUX", 2109890, 21))
    autos.push(new Auto(5555, "PEUGEOT", "208", 4009590, 21))
    autos.push(new Auto(6677, "RENAULT", "MEGANE", 469000, 21))
    autos.push(new Auto(8989, "CITROEN", "C4", 2679800, 21))
}
