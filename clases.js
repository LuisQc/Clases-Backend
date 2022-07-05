class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.LibroNombre = LibroNombre;
    this.LibroAutor = LibroAutor;
    this.mascotas = [];
  }

// APLICANDO METODO DE NOMBRE COMPLETO
  getFullName() {
    console.log(`Hola ${this.nombre} ${this.apellido} como estas`);
  }

  addMascota(mascota) {
    this.mascotas.push(mascota)
  }
  countMascotas() {
    console.log(this.mascotas.length)
  }
  addBook(){
    console.log(JSON.parse(this.LibroNombre,this.LibroAutor));
  }


}
const a = new Usuario("Homer" , "Odisea");
    a.addBook();
const p = new Usuario("jorge", "Smith");
    p.getFullName();