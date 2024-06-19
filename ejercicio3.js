/**
 3) Crea una clase que represente un libro en una biblioteca. Cada libro
debe tener las propiedades título, autor y año de
publicacion. La clase debe tener un método que imprima la
información del libro en la consola. Además, crea otra clase que
gestione una colección de libros. La clase biblioteca debe tener un
método para añadir libros a la colección y otro método para mostrar
todos los libros en la biblioteca. 
 
 */

class Libro {
  constructor(titulo, autor, añoPublicacion) {
    this.titulo = titulo;
    this.autor = autor;
    this.añoPublicacion = añoPublicacion;
  }

  printInfo() {
    const { titulo, autor, añoPublicacion } = this;

    console.log(`
titulo: ${titulo}
autor: ${autor}
añoPublicacion: ${añoPublicacion}`);
  }
}

class Biblioteca {
  constructor(libros = []) {
    this.libros = libros;
  }
  add(libro) {
    this.libros.push(libro);
  }
  printBookColection() {
    if (this.libros.length > 0) {
      this.libros.forEach((libro) => {
        libro.printInfo();
      });
    } else {
      console.log("no hay libros");
    }
  }
}

const l0 = new Libro("the call of chuthullu", "h.p. lovecraft", 1940);
const l1 = new Libro("libro de cocina 1", "juana hernandez", 1990);
const l2 = new Libro("it", "stephen king", 1995);

const b0 = new Biblioteca();

b0.printBookColection();

b0.add(l0);
b0.add(l1);
b0.add(l2);

b0.printBookColection();
