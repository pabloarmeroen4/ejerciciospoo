import Cargable from "../mixins/cargable.js"

class Tractomula {
    constructor (capcarga) {
        this.capcarga = capcarga
        Object.assign (this , Cargable)
    }
}

export default Tractomula
