class persona{
    nombre;
    edad;
    sexo;
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    set setNombre(nombre){
        this.nombre = nombre
    }
}