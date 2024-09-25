import './styles.scss';

const materias = [
  // Nivel I
  {
    nombre: 'Análisis Matemático I',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: [],
    correlativa_cursada: ['Análisis Matemático II', 'Física II', 'Probabilidad y Estadística'],
    correlativa_aprobada: ['Economía', 'Análisis Numérico']
  },
  {
    nombre: 'Álgebra y Geometría Analítica',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: [],
    correlativa_cursada: ['Análisis Matemático II', 'Probabilidad y Estadística'],
    correlativa_aprobada: ['Economía', 'Análisis Numérico']
  },
  {
    nombre: 'Física I',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: [],
    correlativa_cursada: ['Física II', 'Comunicación de Datos'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Inglés I',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: [],
    correlativa_cursada: ['Inglés II'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Lógica y Estructuras Discretas',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: [],
    correlativa_cursada: ['Sintaxis y Semántica de los Lenguajes', 'Paradigmas de Programación'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Algoritmos y Estructuras de Datos',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: [],
    correlativa_cursada: ['Sintaxis y Semántica de los Lenguajes', 'Paradigmas de Programación', 'Análisis de Sistemas de Información'],
    correlativa_aprobada: ['Bases de Datos', 'Desarrollo de Software']
  },
  {
    nombre: 'Arquitectura de Computadoras',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: [],
    correlativa_cursada: ['Sistemas Operativos', 'Comunicación de Datos'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Sistemas y Procesos de Negocio',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: [],
    correlativa_cursada: ['Análisis de Sistemas de Información'],
    correlativa_aprobada: []
  },
  // Nivel II
  {
    nombre: 'Análisis Matemático II',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: ['Análisis Matemático I', 'Álgebra y Geometría Analítica'],
    correlativa_cursada: ['Simulación', 'Análisis Numérico'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Física II',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: ['Análisis Matemático I', 'Física I'],
    correlativa_cursada: ['Tecnologías para la Automatización'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Ingeniería y Sociedad',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: [],
    correlativa_cursada: ['Legislación'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Inglés II',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: ['Inglés I'],
    correlativa_cursada: ['Proyecto Final'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Sintaxis y Semántica de los Lenguajes',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: ['Lógica y Estructuras Discretas', 'Algoritmos y Estructuras de Datos'],
    correlativa_cursada: ['Bases de Datos', 'Desarrollo de Software'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Paradigmas de Programación',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: ['Lógica y Estructuras Discretas', 'Algoritmos y Estructuras de Datos'],
    correlativa_cursada: ['Desarrollo de Software', 'Diseño de Sistemas de Información'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Sistemas Operativos',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: ['Arquitectura de Computadoras'],
    correlativa_cursada: ['Redes de Datos'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Análisis de Sistemas de Información',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: ['Algoritmos y Estructuras de Datos', 'Sistemas y Procesos de Negocio'],
    correlativa_cursada: ['Bases de Datos', 'Desarrollo de Software'],
    correlativa_aprobada: ['Administración de Sistemas de Información']
  },
  // Nivel III
  {
    nombre: 'Probabilidad y Estadística',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: ['Análisis Matemático I', 'Álgebra y Geometría Analítica'],
    correlativa_cursada: ['Investigación Operativa', 'Simulación'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Economía',
    tipo: 'obligatoria',
    para_cursar_aprobada: ['Análisis Matemático I', 'Álgebra y Geometría Analítica'],
    para_cursar_cursada: [],
    correlativa_cursada: ['Administración de Sistemas de Información'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Bases de Datos',
    tipo: 'obligatoria',
    para_cursar_aprobada: ['Algoritmos y Estructuras de Datos', 'Análisis de Sistemas de Información'],
    para_cursar_cursada: ['Sintaxis y Semántica de los Lenguajes'],
    correlativa_cursada: ['Ingeniería y Calidad de Software'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Desarrollo de Software',
    tipo: 'obligatoria',
    para_cursar_aprobada: ['Algoritmos y Estructuras de Datos', 'Análisis de Sistemas de Información'],
    para_cursar_cursada: ['Sintaxis y Semántica de los Lenguajes'],
    correlativa_cursada: ['Ingeniería y Calidad de Software'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Comunicación de Datos',
    tipo: 'obligatoria',
    para_cursar_aprobada: ['Física I', 'Arquitectura de Computadoras'],
    para_cursar_cursada: [],
    correlativa_cursada: ['Redes de Datos', 'Seguridad en los Sistemas de Información'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Análisis Numérico',
    tipo: 'obligatoria',
    para_cursar_aprobada: ['Análisis Matemático I', 'Álgebra y Geometría Analítica'],
    para_cursar_cursada: ['Análisis Matemático II'],
    correlativa_cursada: ['Investigación Operativa'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Diseño de Sistemas de Información',
    tipo: 'obligatoria',
    para_cursar_aprobada: ['Lógica y Estructuras Discretas', 'Sistemas y Procesos de Negocio', 'Inglés I'],
    para_cursar_cursada: ['Paradigmas de Programación', 'Análisis de Sistemas de Información'],
    correlativa_cursada: ['Ingeniería y Calidad de Software', 'Sistemas de Gestión'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Legislación',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: ['Ingeniería y Sociedad'],
    correlativa_cursada: ['Gestión Gerencial'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Ingeniería y Calidad de Software',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: ['Bases de Datos', 'Desarrollo de Software', 'Diseño de Sistemas de Información'],
    correlativa_cursada: ['Proyecto Final'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Redes de Datos',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: ['Sistemas Operativos', 'Comunicación de Datos'],
    correlativa_cursada: ['Seguridad en los Sistemas de Información'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Investigación Operativa',
    tipo: 'obligatoria',
    para_cursar_aprobada: [],
    para_cursar_cursada: ['Probabilidad y Estadística', 'Análisis Numérico'],
    correlativa_cursada: [],
    correlativa_aprobada: []
  },
  {
    nombre: 'Simulación',
    tipo: 'obligatoria',
    para_cursar_aprobada: ['Análisis Matemático II'],
    para_cursar_cursada: ['Probabilidad y Estadística'],
    correlativa_cursada: ['Inteligencia Artificial', 'Ciencia de Datos'],
    correlativa_aprobada: []
  },
  {
    nombre: 'Tecnologías para la Automatización',
    tipo: 'obligatoria',
    para_cursar_aprobada: ['Análisis Matemático II'],
    para_cursar_cursada: ['Física II', 'Análisis Numérico'],
    correlativa_cursada: [],
    correlativa_aprobada: []
  },
  {
    nombre: 'Administración de Sistemas de Información',
    tipo: 'obligatoria',
    para_cursar_aprobada: ['Economía', 'Diseño de Sistemas de Información'],
    para_cursar_cursada: ['Análisis de Sistemas de Información'],
    correlativa_cursada: ['Sistemas de Gestión', 'Seguridad en los Sistemas de Información'],
    correlativa_aprobada: ['Gestión Gerencial']
  },

  // Nivel V
  {
    nombre: 'Inteligencia Artificial',
    tipo: 'obligatoria',
    para_cursar_aprobada: ['Probabilidad y Estadística', 'Análisis Numérico'],
    para_cursar_cursada: ['Simulación'],
    correlativa_cursada: [],
    correlativa_aprobada: []
  },
  {
    nombre: 'Ciencia de Datos',
    tipo: 'obligatoria',
    para_cursar_aprobada: ['Probabilidad y Estadística', 'Bases de Datos'],
    para_cursar_cursada: ['Simulación'],
    correlativa_cursada: [],
    correlativa_aprobada: []
  },
  {
    nombre: 'Sistemas de Gestión',
    tipo: 'obligatoria',
    para_cursar_aprobada: ['Diseño de Sistemas de Información'],
    para_cursar_cursada: ['Administración de Sistemas de Información'],
    correlativa_cursada: [],
    correlativa_aprobada: []
  },
  {
    nombre: 'Gestión Gerencial',
    tipo: 'obligatoria',
    para_cursar_aprobada: ['Legislación', 'Administración de Sistemas de Información'],
    para_cursar_cursada: [],
    correlativa_cursada: [],
    correlativa_aprobada: []
  },
  {
    nombre: 'Seguridad en los Sistemas de Información',
    tipo: 'obligatoria',
    para_cursar_aprobada: ['Desarrollo de Software', 'Comunicación de Datos'],
    para_cursar_cursada: ['Redes de Datos', 'Administración de Sistemas de Información'],
    correlativa_cursada: [],
    correlativa_aprobada: []
  },
  {
    nombre: 'Proyecto Final',
    tipo: 'obligatoria',
    para_cursar_aprobada: ['Inglés II', 'Desarrollo de Software', 'Bases de Datos'],
    para_cursar_cursada: ['Ingeniería y Calidad de Software', 'Redes de Datos', 'Administración de Sistemas de Información'],
    correlativa_cursada: [],
    correlativa_aprobada: []
  }
];


let cajas = document.getElementsByClassName('caja');

for (let i = 0; i < cajas.length; i++) {
  cajas[i].onclick = function () {
    // Elimina la clase 'seleccionada' de todas las cajas
    for (let j = 0; j < cajas.length; j++) {
      cajas[j].classList = 'caja col mt-3';
    }
    // Agrega la clase 'seleccionada' a la caja clickeada
    this.classList.add('seleccionada');

    // Recupera y muestra el id de la caja seleccionada
    let idCajaSeleccionada = this.id;
    let materiaSeleccionada = materias.find(
      (materia) => materia.nombre === idCajaSeleccionada
    );
    for (let i = 0; i < materiaSeleccionada.para_cursar_aprobada.length; i++) {
      console.log(materiaSeleccionada.para_cursar_aprobada[i]);
      document
        .getElementById(materiaSeleccionada.para_cursar_aprobada[i])
        .classList.add('para_cursar_aprobada');
    }
    for (let i = 0; i < materiaSeleccionada.para_cursar_cursada.length; i++) {
      console.log(materiaSeleccionada.para_cursar_cursada[i]);
      document
        .getElementById(materiaSeleccionada.para_cursar_cursada[i])
        .classList.add('para_cursar_cursada');
    }
    for (let i = 0; i < materiaSeleccionada.correlativa_cursada.length; i++) {
      console.log(materiaSeleccionada.correlativa_cursada[i]);
      document
        .getElementById(materiaSeleccionada.correlativa_cursada[i])
        .classList.add('correlativa_cursada');
    }
    for (let i = 0; i < materiaSeleccionada.correlativa_aprobada.length; i++) {
      console.log(materiaSeleccionada.correlativa_aprobada[i]);
      document
        .getElementById(materiaSeleccionada.correlativa_aprobada[i])
        .classList.add('correlativa_aprobada');
    }
  };
}
