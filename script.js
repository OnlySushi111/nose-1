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
  'ciclo_vital': ['anatomia', 'psicologia_desarrollo', 'fundamentos_enfermeria'],
  'cuidados1': ['anatomia', 'microbiologia', 'prevencion_infecciones'],
  'imc': ['intro_ciencias'],
  'admin': ['intro_ciencias', 'fundamentos_enfermeria'],
  'salud_sociedad': ['antropologia'],
  'fundamentos_enfermeria': ['antropologia'],
  'educacion_salud': ['salud_sociedad', 'fundamentos_enfermeria'],
  'enfermeria_ambiental': ['salud_sociedad', 'fundamentos_enfermeria', 'educacion_salud'],
  'ingles2': ['ingles1'],
  'ingles3': ['ingles2'],
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
