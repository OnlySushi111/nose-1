const semesters = [
  {
    name: '1\u00b0 Semestre',
    courses: [
      { id: 'anatomia', name: 'Anatom\u00eda' },
      { id: 'intro_ciencias', name: 'Introducci\u00f3n a ciencias b\u00e1sicas' },
      { id: 'bioquimica', name: 'Bioqu\u00edmica y biolog\u00eda celular' },
      { id: 'antropologia', name: 'Antropolog\u00eda filos\u00f3fica del cuidado' },
      { id: 'psicologia_desarrollo', name: 'Psicolog\u00eda del Desarrollo' },
      { id: 'identidad_personal', name: 'Identidad personal' }
    ]
  },
  {
    name: '2\u00b0 Semestre',
    courses: [
      { id: 'microbiologia', name: 'Microbiolog\u00eda' },
      { id: 'salud_sociedad', name: 'Salud y Sociedad Contempor\u00e1nea' },
      { id: 'prevencion_infecciones', name: 'Prevenci\u00f3n de Infecciones Asociadas a la Atenci\u00f3n en Salud' },
      { id: 'fundamentos_enfermeria', name: 'Fundamentos de Enfermer\u00eda' },
      { id: 'intro_filosofico', name: 'Introducci\u00f3n al pensamiento filos\u00f3fico' },
      { id: 'ingles1', name: 'Ingl\u00e9s I' },
      { id: 'comunicacion', name: 'Comunicaci\u00f3n Efectiva' },
      { id: 'primeros_auxilios', name: 'Primeros Auxilios' }
    ]
  },
  {
    name: '3\u00b0 Semestre',
    courses: [
      { id: 'fisiologia', name: 'Fisiolog\u00eda' },
      { id: 'ciclo_vital', name: 'Ciclo vital' },
      { id: 'cuidados1', name: 'Cuidados de Enfermer\u00eda I' },
      { id: 'imc', name: 'Introducci\u00f3n a la Metodolog\u00eda de la Investigaci\u00f3n Cuantitativa' },
      { id: 'educacion_salud', name: 'Educaci\u00f3n para la Salud' },
      { id: 'lenguajes_artist', name: 'Apreciaci\u00f3n de los Lenguajes Art\u00edsticos' },
      { id: 'ingles2', name: 'Ingl\u00e9s II' }
    ]
  },
  {
    name: '4\u00b0 Semestre',
    courses: [
      { id: 'farmacologia', name: 'Farmacolog\u00eda Cl\u00ednica para Enfermer\u00eda' },
      { id: 'fisiopatologia', name: 'Fisiopatolog\u00eda' },
      { id: 'cuidados2', name: 'Cuidados de Enfermer\u00eda II' },
      { id: 'estadistica', name: 'Estad\u00edstica y Bioestad\u00edstica' },
      { id: 'admin', name: 'Administraci\u00f3n General y en Salud' },
      { id: 'ingles3', name: 'Ingl\u00e9s III' }
    ]
  },
  {
    name: '5\u00b0 Semestre',
    courses: [
      { id: 'enfermeria_ambiental', name: 'Enfermer\u00eda Ambiental' },
      { id: 'cuidados_adulto', name: 'Cuidados de Enfermer\u00eda del Adulto M\u00e9dico Quir\u00fargico' },
      { id: 'cuidados_mujer', name: 'Cuidados de Enfermer\u00eda en la Mujer y Reci\u00e9n Nacido' },
      { id: 'epidemiologia', name: 'Epidemiolog\u00eda y Salud P\u00fablica' },
      { id: 'informatica1', name: 'Inform\u00e1tica para Enfermer\u00eda I' },
      { id: 'etica', name: 'Etica General' }
    ]
  },
  {
    name: '6\u00b0 Semestre',
    courses: [
      { id: 'cuidados_salud_mental', name: 'Cuidados de Enfermer\u00eda en Salud Mental' },
      { id: 'cuidados_persona_mayor', name: 'Cuidados de Enfermer\u00eda en la Persona Mayor' },
      { id: 'imcualitativa', name: 'Introducci\u00f3n a la metodolog\u00eda de la Investigaci\u00f3n Cualitativa' },
      { id: 'informatica2', name: 'Inform\u00e1tica para Enfermer\u00eda II' },
      { id: 'persona', name: 'Persona y Trascendencia' }
    ]
  },
  {
    name: '7\u00b0 Semestre',
    courses: [
      { id: 'bioetica', name: 'Bio\u00e9tica' },
      { id: 'paliativos', name: 'Cuidados Paliativos Universales' },
      { id: 'salud_fam1', name: 'Cuidados de Enfermer\u00eda en Salud Familiar y Comunitaria I' },
      { id: 'cuidados_nino', name: 'Cuidados de Enfermer\u00eda en el Ni\u00f1o y Adolescente' },
      { id: 'gestion_calidad', name: 'Gesti\u00f3n de Calidad y Acreditaci\u00f3n en salud' },
      { id: 'liderazgo', name: 'Liderazgo en Salud' }
    ]
  },
  {
    name: '8\u00b0 Semestre',
    courses: [
      { id: 'urgencia', name: 'Cuidados de Enfermer\u00eda en Situaci\u00f3n de Urgencia' },
      { id: 'salud_fam2', name: 'Cuidados de Enfermer\u00eda en Salud Familiar y Comunitaria II' },
      { id: 'evidencia', name: 'Enfermer\u00eda Basada en Evidencia' }
    ]
  },
  {
    name: '9\u00b0 Semestre',
    courses: [
      { id: 'internado1', name: 'Internado de Enfermer\u00eda I' }
    ]
  },
  {
    name: '10\u00b0 Semestre',
    courses: [
      { id: 'internado2', name: 'Internado de Enfermer\u00eda II' }
    ]
  }
];

const prerequisites = {
  // 1st semester doesn't require anything
  // 2nd semester prerequisites defined from 1st
  'microbiologia': ['intro_ciencias', 'bioquimica'],
  'fisiologia': ['anatomia', 'intro_ciencias', 'bioquimica', 'microbiologia'],
  'ciclo_vital': ['anatomia', 'psicologia_desarrollo'],
  'cuidados1': ['anatomia', 'microbiologia', 'prevencion_infecciones'],
  'imc': ['intro_ciencias'],
  'admin': ['intro_ciencias', 'fundamentos_enfermeria'],
  'salud_sociedad': ['antropologia'],
  'fundamentos_enfermeria': ['antropologia'],
  'educacion_salud': ['salud_sociedad', 'fundamentos_enfermeria'],
  'enfermeria_ambiental': ['salud_sociedad', 'fundamentos_enfermeria', 'educacion_salud'],
  'ingles2': ['ingles1'],
  'estadistica': ['imc'],
  'farmacologia': ['microbiologia', 'fisiologia'],
  'fisiopatologia': ['microbiologia', 'fisiologia'],
  'cuidados2': ['fisiologia', 'cuidados1'],
  'cuidados_mujer': ['ciclo_vital', 'farmacologia', 'fisiopatologia', 'cuidados2'],
  'cuidados_adulto': ['farmacologia', 'fisiopatologia', 'cuidados2'],
  'epidemiologia': ['estadistica', 'admin'],
  'informatica1': ['admin'],
  'imcualitativa': ['enfermeria_ambiental'],
  'cuidados_salud_mental': ['cuidados_adulto'],
  'cuidados_persona_mayor': ['cuidados_adulto'],
  'cuidados_nino': ['cuidados_mujer'],
  'salud_fam1': ['epidemiologia', 'cuidados_salud_mental', 'cuidados_persona_mayor'],
  'paliativos': ['cuidados_salud_mental', 'cuidados_persona_mayor'],
  'urgencia': ['cuidados_salud_mental', 'cuidados_persona_mayor'],
  'bioetica': ['cuidados_salud_mental', 'cuidados_persona_mayor'],
  'gestion_calidad': ['epidemiologia', 'informatica2'],
  'informatica2': ['informatica1'],
  'evidencia': ['epidemiologia', 'imcualitativa'],
  'salud_fam2': ['paliativos', 'salud_fam1', 'cuidados_nino'],
  'internado1': ['bioetica', 'gestion_calidad', 'urgencia', 'salud_fam2', 'evidencia'],
  'internado2': ['bioetica', 'gestion_calidad', 'urgencia', 'salud_fam2', 'evidencia']
};

const container = document.getElementById('malla');
const courseElements = {};

function render() {
  semesters.forEach(sem => {
    const semDiv = document.createElement('div');
    semDiv.className = 'semestre';
    const h2 = document.createElement('h2');
    h2.textContent = sem.name;
    semDiv.appendChild(h2);
    const cursosDiv = document.createElement('div');
    cursosDiv.className = 'cursos';
    sem.courses.forEach(c => {
      const div = document.createElement('div');
      div.className = 'curso';
      div.textContent = c.name;
      div.dataset.id = c.id;
      if (prerequisites[c.id]) {
        div.dataset.req = prerequisites[c.id].join(',');
      } else {
        div.dataset.req = '';
      }
      div.addEventListener('click', () => toggleCourse(div));
      cursosDiv.appendChild(div);
      courseElements[c.id] = div;
    });
    semDiv.appendChild(cursosDiv);
    container.appendChild(semDiv);
  });
}

function toggleCourse(el) {
  if (el.classList.contains('locked')) return;
  el.classList.toggle('completed');
  updateLocks();
}

function updateLocks() {
  Object.values(courseElements).forEach(el => {
    if (el.classList.contains('completed')) {
      el.classList.remove('locked');
      return;
    }
    const reqs = el.dataset.req ? el.dataset.req.split(',') : [];
    const fulfilled = reqs.every(r => {
      const reqEl = courseElements[r];
      return reqEl && reqEl.classList.contains('completed');
    });
    if (!fulfilled && reqs.length > 0) {
      el.classList.add('locked');
    } else {
      el.classList.remove('locked');
    }
  });
}

render();
updateLocks();
