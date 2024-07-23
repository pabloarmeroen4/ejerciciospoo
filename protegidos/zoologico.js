let protegido = new WeakMap();

class Zoologico {
    constructor (nombrezoo,zonas) {
        protegido.set(this,{nombrezoo})
        this.zonas = zonas
    }
    informacionzoo () {
        let data = protegido.get(this)
        console.log("la informacion del zoo es: "+" nombre : " + 
            data.nombrezoo + " las zonas son: " + this.zonas
        )
    }
}

class Animales extends Zoologico {
    constructor(nombrezoo , zonas , nombre , especie) {
        super(nombrezoo , zonas)
        this.nombre = nombre
        this.especie = especie
    }

    informacion () {
        let datos = protegido.get(this)
        console.log("la informacion del animal es:" + "su nombre es: " + this.nombre+ " su especie es: " + this.especie+" es del zoo:"+
            datos.nombrezoo+ "su zonas es: "+ this.zonas
        )
    }
}

let cali = new Zoologico("Surro" , 10);
cali.informacionzoo()

let animal = new Animales("surro" , 10 , "foca" , "acuatica")
animal.informacion()