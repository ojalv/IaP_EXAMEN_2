/*
Crea una función que reciba un array de objetos, donde cada objeto
representa a un estudiante con las propiedades nombre y nota. La
función debe devolver un nuevo array con los nombres de los
estudiantes que tienen una nota mayor o igual a 7.
*/

function estudiantesPromocionados(estudiantes) {
  let estudiantesPromocionados = [];
  estudiantes.forEach((estudiante) => {
    if (estudiante.nota >= 7) {
      estudiantesPromocionados.push(estudiante.nombre);
    }
  });
  return estudiantesPromocionados;
}

class Estudiante {
  constructor(nombre, nota) {
    this.nombre = nombre;
    this.nota = nota;
  }
}

const e0 = new Estudiante("sub-zero", 10);
const e1 = new Estudiante("scorpion", 7);
const e2 = new Estudiante("kitana", 6);
const e3 = new Estudiante("sonya", 9);
const e4 = new Estudiante("goro", 1);
const e5 = new Estudiante("shao khan", 8);
const e6 = new Estudiante("jhony cage", 1);

const estudiantesMK = [e0, e1, e2, e3, e4, e5, e6];

console.log(estudiantesPromocionados(estudiantesMK));