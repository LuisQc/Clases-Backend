class Usuario {
    constructor(nombre, apellido,libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = [];
    }

getFullName() {
   console.log(`Hola ${this.nombre} como estas`);
   
}
addMascota(mascota) {
    this.mascotas.push(mascota);
}

countMascota() {
    console.log(this.mascotas.length);

}
// addBook(nombre,autor) {

// }
// getBookNames() {
}
