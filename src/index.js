import './styles.scss';

const materias = [
  {
    nombre: 'materia1',
    tipo: 'obligatoria',
    correlativas: ['materia2'],
    aprobadas: [],
    cursada: [],
  },
  {
    nombre: 'materia2',
    tipo: 'obligatoria',
    correlativas: ['materia3'],
    aprobadas: [], // Inicialmente vacía, se llenará con el tiempo
    cursada: ['materia1'], // Suponemos que esta materia ya ha sido cursada
  },
  {
    nombre: 'materia3',
    tipo: 'optativa',
    correlativas: ['materia4', 'materia5'],
    aprobadas: ['materia1'], // Inicialmente vacía, se llenará con el tiempo
    cursada: ['materia2'], // Suponemos que esta materia ya ha sido cursada
  },
  {
    nombre: 'materia4',
    tipo: 'obligatoria',
    correlativas: ['materia5'],
    aprobadas: ['materia2'], // Suponemos que esta materia ya ha sido aprobada
    cursada: ['materia3'], // Suponemos que esta materia ya ha sido cursada
  },
  {
    nombre: 'materia5',
    tipo: 'optativa',
    correlativas: ['materia6'],
    aprobadas: ['materia4'], // Suponemos que esta materia ya ha sido aprobada
    cursada: ['materia3'], // Suponemos que estas materias ya han sido cursadas
  },
  {
    nombre: 'materia6',
    tipo: 'obligatoria',
    correlativas: [],
    aprobadas: ['materia4', 'materia5'], // Suponemos que estas materias ya han sido aprobadas
    cursada: [], // Suponemos que estas materias ya han sido cursadas
  },
];

let cajas = document.getElementsByClassName('caja');

for (let i = 0; i < cajas.length; i++) {
  cajas[i].onclick = function () {
    // Elimina la clase 'seleccionada' de todas las cajas
    for (let j = 0; j < cajas.length; j++) {
      cajas[j].classList = 'caja';
    }
    // Agrega la clase 'seleccionada' a la caja clickeada
    this.classList.add('seleccionada');

    // Recupera y muestra el id de la caja seleccionada
    let idCajaSeleccionada = this.id;
    let materiaSeleccionada = materias.find(
      (materia) => materia.nombre === idCajaSeleccionada
    );
    for (let i = 0; i < materiaSeleccionada.aprobadas.length; i++) {
      console.log(materiaSeleccionada.aprobadas[i]);
      document
        .getElementById(materiaSeleccionada.aprobadas[i])
        .classList.add('aprobada');
    }
  };
}
