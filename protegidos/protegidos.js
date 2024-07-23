let protegido = new WeakMap();

class Continente {
    constructor (nombre,poblacion) {
        protegido.set(this,{nombre})
        this.poblacion = poblacion
    }
    informacioncontinente () {
        let data = protegido .get(this)
        console.log("la informacion del continente es" + 
            data.nombre + "la poblacion es: " + this.poblacion
        )
    }
}

class Pais extends Continente {
    constructor(nombrepais , poblacion , nombre) {
        super(nombre , poblacion)
        this.nombrepais = nombrepais
    }

    informacionpais () {
        let datos = protegido .get(this)
        console.log("la informacion del pais es:" + 
            this.nombrepais+ "su poblacion es: "+ this.poblacion+ "su contienente es: " +datos.nombre
        )
    }
}

let america = new Continente("SurAmerica" , 1000000);
america.informacioncontinente()

let colombia = new Pais("Colombia" , 54000000 , "SurAmerica")
colombia.informacionpais()