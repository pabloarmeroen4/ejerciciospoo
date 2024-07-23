import Tractomula from "./tractomula.js"
import Carro from "./carro.js"


class Utilidadvehiculo {
    constructor () {
        this.carro = new Carro (5)
        this.tractomula = new Tractomula (50)
    }
    
    usarCarro () {
        this.carro.transportarpasajeros()
    }
    usarTractomula () {
        this.tractomula.cargarMercancia ()
        this.tractomula.descargarMercancia ()
    }
}

export default Utilidadvehiculo