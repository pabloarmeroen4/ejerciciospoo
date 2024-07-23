import Profesor from "./profesor.js";
import Programador from "./programador.js"

class Instructor {
    constructor () {
        this.profesor = new Profesor(5)
        this.programador = new Programador ("javascript")
    }
    usarProgramador () {
        this.programador.informacionProgramador()
    }
    usarProfesor () {
        this.profesor.informacionProfesor()
    }
}

export default Instructor