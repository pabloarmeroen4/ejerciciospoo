import Empresa from "./Empresa.js";
import Departamento from "./Departamento.js";
import Empleado from "./Empleado.js";

// Ejemplo de uso
let miEmpresa = new Empresa("Innovaciones Tech");
let deptoIT = new Departamento("Tecnología");
let deptoHR = new Departamento("Recursos Humanos");

miEmpresa.agregarDepartamento(deptoIT);
miEmpresa.agregarDepartamento(deptoHR);

let empleado1 = new Empleado("Ana", 50000);
let empleado2 = new Empleado("Juan", 60000);

deptoIT.agregarEmpleado(empleado1);
deptoIT.agregarEmpleado(empleado2);

deptoHR.agregarEmpleado(empleado1);
deptoHR.agregarEmpleado(empleado2);

miEmpresa.mostrarDepartamentos();
deptoIT.mostrarEmpleados();
deptoHR.mostrarEmpleados();

empleado1.mostrarInfo();
empleado2.mostrarInfo();