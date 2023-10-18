
class Auto{

constructor (id, marca, modelo, precio, iva) {
    this.id = id
    this.marca = marca
    this.modelo = modelo
    this.precio = precio
    this.iva = iva
}
    PrecioFinal = function () {
        return this.precio * this.iva
    }

    CalcularImpuesto  = function()
    {
        return  (this.precioFinal()*0.2)
    }
}
