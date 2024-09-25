import './styles.scss';

const materias = [
  {
    nombre: 'Análisis Matemático I',
    tipo: 'obligatoria',
    para_rendir: [],
    para_cursar_aprobadas: [],
    cursada: [],
  },
  {
    nombre: 'Álgebra y Geometría Analítica',
    tipo: 'obligatoria',
    para_rendir: [],
    para_cursar_aprobadas: [],
    cursada: [],
  },
  {
    nombre: 'Matemática Discreta',
    tipo: 'obligatoria',
    para_rendir: [],
    para_cursar_aprobadas: [],
    cursada: [],
  },
  {
    nombre: 'Sistemas y Organizaciones',
    tipo: 'obligatoria',
    para_rendir: [],
    para_cursar_aprobadas: [],
    cursada: [],
  },
  {
    nombre: 'Algoritmos y Estructuras de Datos',
    tipo: 'obligatoria',
    para_rendir: [],
    para_cursar_aprobadas: [],
    cursada: [],
  },
  {
    nombre: 'Arquitectura de Computadoras',
    tipo: 'obligatoria',
    para_rendir: [],
    para_cursar_aprobadas: [],
    cursada: [],
  },
  {
    nombre: 'Física I',
    tipo: 'obligatoria',
    para_rendir: [],
    para_cursar_aprobadas: [],
    cursada: [],
  },
  {
    nombre: 'Inglés I',
    tipo: 'obligatoria',
    para_rendir: [],
    para_cursar_aprobadas: [],
    cursada: [],
  },
  {
    nombre: 'Química',
    tipo: 'obligatoria',
    para_rendir: [],
    para_cursar_aprobadas: [],
    cursada: [],
  },
  {
    nombre: 'Análisis Matemático II',
    tipo: 'obligatoria',
    para_rendir: ['Análisis Matemático I', 'Álgebra y Geometría Analítica'],
    para_cursar_aprobadas: ['Análisis Matemático I', 'Álgebra y Geometría Analítica'],
    cursada: [],
  },
  {
    nombre: 'Física II',
    tipo: 'obligatoria',
    para_rendir: ['Física I', 'Análisis Matemático I'],
    para_cursar_aprobadas: ['Física I', 'Análisis Matemático I'],
    cursada: [],
  },
  {
    nombre: 'Análisis de Sistemas',
    tipo: 'obligatoria',
    para_rendir: ['Sistemas y Organizaciones', 'Algoritmos y Estructuras de Datos'],
    para_cursar_aprobadas: ['Sistemas y Organizaciones', 'Algoritmos y Estructuras de Datos'],
    cursada: [],
  },
  {
    nombre: 'Sintaxis y Semántica del Lenguaje',
    tipo: 'obligatoria',
    para_rendir: ['Inglés I', 'Algoritmos y Estructuras de Datos', 'Matemática Discreta'],
    para_cursar_aprobadas: ['Inglés I', 'Algoritmos y Estructuras de Datos', 'Matemática Discreta'],
    cursada: [],
  },
  {
    nombre: 'Paradigmas de Programación',
    tipo: 'obligatoria',
    para_rendir: ['Inglés I', 'Algoritmos y Estructuras de Datos', 'Matemática Discreta'],
    para_cursar_aprobadas: ['Inglés I', 'Algoritmos y Estructuras de Datos', 'Matemática Discreta'],
    cursada: [],
  },
  {
    nombre: 'Sistemas Operativos',
    tipo: 'obligatoria',
    para_rendir: ['Algoritmos y Estructuras de Datos', 'Matemática Discreta', 'Arquitectura de Computadoras'],
    para_cursar_aprobadas: ['Algoritmos y Estructuras de Datos', 'Matemática Discreta', 'Arquitectura de Computadoras'],
    cursada: [],
  },
  {
    nombre: 'Sistemas de Representación',
    tipo: 'obligatoria',
    para_rendir: [],
    para_cursar_aprobadas: [],
    cursada: [],
  },
  {
    nombre: 'Probabilidades y Estadística',
    tipo: 'obligatoria',
    para_rendir: ['Análisis Matemático I', 'Álgebra y Geometría Analítica'],
    para_cursar_aprobadas: ['Análisis Matemático I', 'Álgebra y Geometría Analítica'],
    cursada: [],
  },
  {
    nombre: 'Diseño de Sistemas',
    tipo: 'obligatoria',
    para_rendir: ['Análisis de Sistemas', 'Sistemas Operativos', 'Sintaxis y Semántica del Lenguaje'],
    para_cursar_aprobadas: ['Análisis de Sistemas', 'Sistemas Operativos', 'Sintaxis y Semántica del Lenguaje'],
    cursada: [],
  },
  {
    nombre: 'Comunicaciones',
    tipo: 'obligatoria',
    para_rendir: ['Inglés I', 'Física II', 'Análisis Matemático II'],
    para_cursar_aprobadas: ['Inglés I', 'Física II', 'Análisis Matemático II'],
    cursada: [],
  },
  {
    nombre: 'Matemática Superior',
    tipo: 'obligatoria',
    para_rendir: ['Análisis Matemático II'],
    para_cursar_aprobadas: ['Análisis Matemático II'],
    cursada: [],
  },
  {
    nombre: 'Gestión de Datos',
    tipo: 'obligatoria',
    para_rendir: ['Análisis de Sistemas', 'Sintaxis y Semántica del Lenguaje', 'Paradigmas de Programación'],
    para_cursar_aprobadas: ['Análisis de Sistemas', 'Sintaxis y Semántica del Lenguaje', 'Paradigmas de Programación'],
    cursada: [],
  },
  {
    nombre: 'Ingeniería y Sociedad',
    tipo: 'obligatoria',
    para_rendir: [],
    para_cursar_aprobadas: [],
    cursada: [],
  },
  {
    nombre: 'Economía',
    tipo: 'obligatoria',
    para_rendir: ['Análisis de Sistemas'],
    para_cursar_aprobadas: ['Análisis de Sistemas'],
    cursada: [],
  },
  {
    nombre: 'Inglés II',
    tipo: 'obligatoria',
    para_rendir: ['Inglés I'],
    para_cursar_aprobadas: ['Inglés I'],
    cursada: [],
  },
  {
    nombre: 'Seguridad en Sistemas de Información',
    tipo: 'electiva',
    para_rendir: ['Análisis de Sistemas', 'Sintaxis y Semántica del Lenguaje', 'Sistemas Operativos'],
    para_cursar_aprobadas: ['Análisis de Sistemas', 'Sintaxis y Semántica del Lenguaje', 'Sistemas Operativos'],
    cursada: [],
  },
  {
    nombre: 'Sistemas de Transmisión y Redes Inalámbricas',
    tipo: 'electiva',
    para_rendir: ['Análisis Matemático II', 'Comunicaciones', 'Física II'],
    para_cursar_aprobadas: ['Análisis Matemático II', 'Comunicaciones', 'Física II'],
    cursada: [],
  },
  {
    nombre: 'Comunicación Profesional',
    tipo: 'electiva',
    para_rendir: ['Sistemas y Organizaciones'],
    para_cursar_aprobadas: ['Sistemas y Organizaciones'],
    cursada: [],
  },
  {
    nombre: 'Tecnología y Gestión Web',
    tipo: 'electiva',
    para_rendir: ['Sistemas Operativos', 'Sintaxis y Semántica del Lenguaje'],
    para_cursar_aprobadas: ['Sistemas Operativos', 'Sintaxis y Semántica del Lenguaje'],
    cursada: [],
  },
  {
    nombre: 'Emprendedorismo',
    tipo: 'electiva',
    para_rendir: ['Sistemas y Organizaciones'],
    para_cursar_aprobadas: ['Sistemas y Organizaciones'],
    cursada: [],
  },
  {
    nombre: 'Redes de Información',
    tipo: 'obligatoria',
    para_rendir: ['Sistemas Operativos', 'Comunicaciones', 'Análisis Matemático II'],
    para_cursar_aprobadas: ['Sistemas Operativos', 'Comunicaciones', 'Análisis Matemático II'],
    cursada: [],
  },
  {
    nombre: 'Administración de Recursos',
    tipo: 'obligatoria',
    para_rendir: ['Sistemas Operativos', 'Diseño de Sistemas', 'Economía'],
    para_cursar_aprobadas: ['Sistemas Operativos', 'Diseño de Sistemas', 'Economía'],
    cursada: [],
  },
  {
    nombre: 'Investigación Operativa',
    tipo: 'obligatoria',
    para_rendir: ['Análisis Matemático II', 'Matemática Superior'],
    para_cursar_aprobadas: ['Análisis Matemático II', 'Matemática Superior'],
    cursada: [],
  },
  {
    nombre: 'Simulación',
    tipo: 'obligatoria',
    para_rendir: ['Análisis Matemático II', 'Matemática Superior'],
    para_cursar_aprobadas: ['Análisis Matemático II', 'Matemática Superior'],
    cursada: [],
  },
  {
    nombre: 'Ingeniería del Software',
    tipo: 'obligatoria',
    para_rendir: ['Probabilidades y Estadística', 'Diseño de Sistemas', 'Gestión de Datos'],
    para_cursar_aprobadas: ['Probabilidades y Estadística', 'Diseño de Sistemas', 'Gestión de Datos'],
    cursada: [],
  },
  {
    nombre: 'Teoría de Control',
    tipo: 'obligatoria',
    para_rendir: ['Química', 'Matemática Superior'],
    para_cursar_aprobadas: ['Química', 'Matemática Superior'],
    cursada: [],
  },
  {
    nombre: 'Legislación',
    tipo: 'obligatoria',
    para_rendir: ['Análisis de Sistemas', 'Ingeniería y Sociedad'],
    para_cursar_aprobadas: ['Análisis de Sistemas', 'Ingeniería y Sociedad'],
    cursada: [],
  },
  {
    nombre: 'Metodología de la Investigación',
    tipo: 'electiva',
    para_rendir: ['Diseño de Sistemas'],
    para_cursar_aprobadas: ['Diseño de Sistemas'],
    cursada: [],
  },
  {
    nombre: 'Tecnología para la Explotación de Información',
    tipo: 'electiva',
    para_rendir: ['Diseño de Sistemas'],
    para_cursar_aprobadas: ['Sintaxis y Semántica del Lenguaje'],
    cursada: [],
  },
  {
    nombre: 'Auditoría de Sistemas de Información',
    tipo: 'electiva',
    para_rendir: ['Seguridad en Sistemas de Información'],
    para_cursar_aprobadas: ['Seguridad en Sistemas de Información'],
    cursada: [],
  },
  {
    nombre: 'Proyecto Final',
    tipo: 'obligatoria',
    para_rendir: ['Redes de Información', 'Administración de Recursos', 'Ingeniería del Software', 'Legislación'],
    para_cursar_aprobadas: ['Redes de Información', 'Administración de Recursos', 'Ingeniería del Software', 'Legislación'],
    cursada: [],
  },
  {
    nombre: 'Inteligencia Artificial',
    tipo: 'obligatoria',
    para_rendir: ['Investigación Operativa', 'Simulación'],
    para_cursar_aprobadas: ['Investigación Operativa', 'Simulación'],
    cursada: [],
  },
  {
    nombre: 'Administración Gerencial',
    tipo: 'obligatoria',
    para_rendir: ['Administración de Recursos', 'Investigación Operativa'],
    para_cursar_aprobadas: ['Administración de Recursos', 'Investigación Operativa'],
    cursada: [],
  },
  {
    nombre: 'Sistemas de Gestión',
    tipo: 'obligatoria',
    para_rendir: ['Administración de Recursos', 'Investigación Operativa', 'Simulación'],
    para_cursar_aprobadas: ['Administración de Recursos', 'Investigación Operativa', 'Simulación'],
    cursada: [],
  },
  {
    nombre: 'Internetworking',
    tipo: 'electiva',
    para_rendir: ['Administración de Recursos'],
    para_cursar_aprobadas: ['Redes de Información'],
    cursada: [],
  },
  {
    nombre: 'Ingeniería en Calidad',
    tipo: 'electiva',
    para_rendir: ['Administración de Recursos'],
    para_cursar_aprobadas: ['Diseño de Sistemas'],
    cursada: [],
  },
  {
    nombre: 'Aplicaciones en Tiempo Real',
    tipo: 'electiva',
    para_rendir: ['Comunicaciones', 'Redes de Información', 'Teoría de Control'],
    para_cursar_aprobadas: ['Comunicaciones', 'Redes de Información', 'Teoría de Control'],
    cursada: [],
  },
  {
    nombre: 'Reingeniería',
    tipo: 'electiva',
    para_rendir: ['Gestión de Datos', 'Legislación'],
    para_cursar_aprobadas: ['Economía', 'Diseño de Sistemas'],
    cursada: [],
  },
  {
    nombre: 'Tecnología de Información para la Gestión Empresarial',
    tipo: 'electiva',
    para_rendir: ['Administración de Recursos'],
    para_cursar_aprobadas: ['Gestión de Datos'],
    cursada: [],
  },
  {
    nombre: 'Sistemas Avanzados de Bases de Datos',
    tipo: 'electiva',
    para_rendir: ['Gestión de Datos', 'Redes de Información'],
    para_cursar_aprobadas: ['Sistemas Operativos'],
    cursada: [],
  }
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
    for (let i = 0; i < materiaSeleccionada.para_cursar_aprobadas.length; i++) {
      console.log(materiaSeleccionada.para_cursar_aprobadas[i]);
      document
        .getElementById(materiaSeleccionada.para_cursar_aprobadas[i])
        .classList.add('aprobada');
    }
    for (let i = 0; i < materiaSeleccionada.para_rendir.length; i++) {
      console.log(materiaSeleccionada.para_rendir[i]);
      document
        .getElementById(materiaSeleccionada.para_rendir[i])
        .classList.add('correlativa');
    }
    for (let i = 0; i < materiaSeleccionada.cursada.length; i++) {
      console.log(materiaSeleccionada.cursada[i]);
      document
        .getElementById(materiaSeleccionada.cursada[i])
        .classList.add('cursada');
    }
  };
}
