import Departamento from "./Departamento.js";

class Empresa {
    constructor(nombre) {
        this.nombre = nombre;
        this.departamentos = [];
    }

    agregarDepartamento(departamento) {
        this.departamentos.push(departamento);
    }

    mostrarDepartamentos() {
        console.log("Departamentos en la empresa " + this.nombre + ":");
        this.departamentos.forEach(depto => console.log(depto.nombre));
    }
}

export default Empresa;


