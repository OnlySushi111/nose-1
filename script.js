// script.js

const ramos = [
  { id: 'anatomia', nombre: 'Anatomía', desbloquea: ['fisiologia', 'ciclo_vital', 'cuidados1'] },
  { id: 'intro_basicas', nombre: 'Intro Ciencias Básicas', desbloquea: ['fisiologia', 'microbiologia', 'investigacion_cuantitativa', 'admin_salud'] },
  { id: 'bioquimica', nombre: 'Bioquímica y Biología Celular', desbloquea: ['microbiologia', 'fisiologia'] },
  { id: 'antropologia', nombre: 'Antropología Filosófica', desbloquea: ['salud_sociedad', 'fundamentos'] },
  { id: 'psico_desarrollo', nombre: 'Psicología del Desarrollo', desbloquea: ['ciclo_vital'] },
  { id: 'identidad', nombre: 'Identidad Personal', desbloquea: [] },

  { id: 'microbiologia', nombre: 'Microbiología', desbloquea: ['fisiologia', 'cuidados1', 'farmacologia', 'fisiopatologia'] },
  { id: 'salud_sociedad', nombre: 'Salud y Sociedad Contemporánea', desbloquea: ['educacion_salud', 'enfermeria_ambiental'] },
  { id: 'prevencion_infecciones', nombre: 'Prevención de Infecciones', desbloquea: ['cuidados1'] },
  { id: 'fundamentos', nombre: 'Fundamentos de Enfermería', desbloquea: ['educacion_salud', 'admin_salud', 'enfermeria_ambiental'] },
  { id: 'intro_filosofico', nombre: 'Intro Pensamiento Filosófico', desbloquea: [] },
  { id: 'ingles1', nombre: 'Inglés I', desbloquea: ['ingles2'] },
  { id: 'comunicacion', nombre: 'Comunicación Efectiva', desbloquea: [] },
  { id: 'primeros_auxilios', nombre: 'Primeros Auxilios', desbloquea: [] },

  { id: 'fisiologia', nombre: 'Fisiología', desbloquea: ['farmacologia', 'fisiopatologia', 'cuidados2'] },
  { id: 'ciclo_vital', nombre: 'Ciclo Vital', desbloquea: ['cuidados_mujer'] },
  { id: 'cuidados1', nombre: 'Cuidados de Enfermería I', desbloquea: ['cuidados2'] },
  { id: 'investigacion_cuantitativa', nombre: 'Investigación Cuantitativa', desbloquea: ['estadistica'] },
  { id: 'educacion_salud', nombre: 'Educación para la Salud', desbloquea: ['enfermeria_ambiental'] },
  { id: 'lenguaje_artistico', nombre: 'Lenguajes Artísticos', desbloquea: [] },
  { id: 'ingles2', nombre: 'Inglés II', desbloquea: ['ingles3'] },

  { id: 'farmacologia', nombre: 'Farmacología Clínica', desbloquea: ['adulto_quirurgico', 'cuidados_mujer'] },
  { id: 'fisiopatologia', nombre: 'Fisiopatología', desbloquea: ['adulto_quirurgico', 'cuidados_mujer'] },
  { id: 'cuidados2', nombre: 'Cuidados de Enfermería II', desbloquea: ['adulto_quirurgico', 'cuidados_mujer'] },
  { id: 'estadistica', nombre: 'Estadística y Bioestadística', desbloquea: ['epidemiologia'] },
  { id: 'admin_salud', nombre: 'Administración en Salud', desbloquea: ['epidemiologia', 'informatica1'] },
  { id: 'ingles3', nombre: 'Inglés III', desbloquea: [] },

  { id: 'enfermeria_ambiental', nombre: 'Enfermería Ambiental', desbloquea: ['investigacion_cualitativa'] },
  { id: 'adulto_quirurgico', nombre: 'Cuidados Adulto Médico Quirúrgico', desbloquea: ['salud_mental', 'persona_mayor'] },
  { id: 'cuidados_mujer', nombre: 'Cuidados Mujer y RN', desbloquea: ['cuidados_nino'] },
  { id: 'epidemiologia', nombre: 'Epidemiología y Salud Pública', desbloquea: ['salud_familiar1', 'gestion_calidad', 'evidencia'] },
  { id: 'informatica1', nombre: 'Informática I', desbloquea: ['informatica2'] },
  { id: 'etica', nombre: 'Ética General', desbloquea: [] },

  { id: 'salud_mental', nombre: 'Salud Mental', desbloquea: ['bioetica', 'paliativos', 'salud_familiar1', 'urgencia'] },
  { id: 'persona_mayor', nombre: 'Persona Mayor', desbloquea: ['bioetica', 'paliativos', 'salud_familiar1', 'urgencia'] },
  { id: 'investigacion_cualitativa', nombre: 'Investigación Cualitativa', desbloquea: ['evidencia'] },
  { id: 'informatica2', nombre: 'Informática II', desbloquea: ['gestion_calidad'] },
  { id: 'trascendencia', nombre: 'Persona y Trascendencia', desbloquea: [] },

  { id: 'bioetica', nombre: 'Bioética', desbloquea: ['internado1', 'internado2'] },
  { id: 'paliativos', nombre: 'Paliativos Universales', desbloquea: ['salud_familiar2'] },
  { id: 'salud_familiar1', nombre: 'Salud Familiar I', desbloquea: ['salud_familiar2'] },
  { id: 'cuidados_nino', nombre: 'Cuidados Niño y Adolescente', desbloquea: ['salud_familiar2'] },
  { id: 'gestion_calidad', nombre: 'Gestión Calidad', desbloquea: ['internado1', 'internado2'] },
  { id: 'liderazgo', nombre: 'Liderazgo en Salud', desbloquea: [] },

  { id: 'urgencia', nombre: 'Urgencia', desbloquea: ['internado1', 'internado2'] },
  { id: 'salud_familiar2', nombre: 'Salud Familiar II', desbloquea: ['internado1', 'internado2'] },
  { id: 'evidencia', nombre: 'Enfermería Basada en Evidencia', desbloquea: ['internado1', 'internado2'] },

  { id: 'internado1', nombre: 'Internado I', desbloquea: [] },
  { id: 'internado2', nombre: 'Internado II', desbloquea: [] },
];

const malla = document.getElementById('malla');

function crearRamo(ramo) {
  const div = document.createElement('div');
  div.className = 'ramo';
  div.id = ramo.id;
  div.innerHTML = `<strong>${ramo.nombre}</strong>`;
  div.addEventListener('click', () => toggleRamo(div, ramo));
  malla.appendChild(div);
}

function toggleRamo(div, ramo) {
  div.classList.toggle('aprobado');
  actualizarHabilitados();
}

function actualizarHabilitados() {
  const aprobados = new Set(
    Array.from(document.querySelectorAll('.ramo.aprobado')).map(r => r.id)
  );

  ramos.forEach(r => {
    const div = document.getElementById(r.id);
    const requisitos = ramos.filter(pr => pr.desbloquea.includes(r.id));
    const habilitado = requisitos.every(req => aprobados.has(req.id));

    if (!div.classList.contains('aprobado')) {
      div.classList.toggle('habilitado', habilitado);
    }
  });
}

function reiniciarMalla() {
  document.querySelectorAll('.ramo').forEach(div => {
    div.classList.remove('aprobado');
    div.classList.remove('habilitado');
  });
  iniciarMalla();
}

document.getElementById('resetBtn').addEventListener('click', reiniciarMalla);

function iniciarMalla() {
  malla.innerHTML = '';
  ramos.forEach(r => crearRamo(r));
  actualizarHabilitados();
}

iniciarMalla();
