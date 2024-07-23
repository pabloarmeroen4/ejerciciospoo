import Pasajeros from "../mixins/pasajeros.js"

class Carro {
    constructor (numpasajeros) {
        this.numpasajeros = numpasajeros
        Object.assign (this , Pasajeros)
    }
}

export default Carro