// Áreas analíticas del Portafolio de Servicios - Laboratorio Clínico Ecopetrol

export const SERVICES_AREAS = [
  {
    id: 'inmunoquimica',
    name: 'Inmunoquímica',
    iconName: 'FlaskConical',
    shortDesc: 'Evaluación integral de metabolismo, función orgánica, hormonas, marcadores tumorales y monitoreo terapéutico.',
    fullDesc: 'Área de alta consolidación analítica equipada con tecnología de quimioluminiscencia y fotometría automatizada. Proporciona perfiles bioquímicos de alta precisión con tiempos de respuesta reducidos para el paciente ambulatorio, hospitalizado y de urgencias.',
    technologies: ['cobas® pro', 'VITROS® 2 Compact', 'cobas c 111'],
    testCount: '180+ determinaciones',
    keyTests: [
      'Perfil Metabólico y Glicémico (Glucosa, HbA1c, Insulina)',
      'Perfil Lipídico Integral (Colesterol Total, HDL, LDL directo, Triglicéridos)',
      'Perfil Hepático y Renal (Bilirrubinas, Transaminasas, Creatinina, BUN, Ácido Úrico)',
      'Endocrinología y Fertilidad (TSH ultrasensible, T3L, T4L, Cortisol, Prolactina, FSH, LH)',
      'Marcadores Tumorales (PSA Total y Libre, CEA, CA-125, CA 19-9, Alfa-fetoproteína)',
      'Biomarcadores Cardíacos de Alta Sensibilidad (Troponina T hs, NT-proBNP)'
    ]
  },
  {
    id: 'hematologia',
    name: 'Hematología y Coagulación',
    iconName: 'Activity',
    shortDesc: 'Citometría hemática avanzada, morfología celular computarizada y evaluación completa de la cascada de la hemostasia.',
    fullDesc: 'Diagnóstico diferencial de anemias, trastornos plaquetarios, leucemias y coagulopatías mediante citometría de flujo fluorescente láser y coagulometría mecánica-óptica automatizada con perforador de tapones.',
    technologies: ['Sysmex XN-1000', 'cobas t 411'],
    testCount: '45+ parámetros',
    keyTests: [
      'Cuadro Hemático de 6 poblaciones con recuento de eritroblastos (NRBC)',
      'Recuento de Reticulocitos e Índice de Producción Reticulocitaria (IPR / IRF)',
      'Fracción de Plaquetas Inmaduras (IPF) para diagnóstico de trombocitopenias',
      'Frotis de Sangre Periférica con revisión morfológica por especialista',
      'Tiempo de Protrombina (TP) con cálculo de INR estandarizado',
      'Tiempo de Tromboplastina Parcial activada (TTPa)',
      'Fibrinógeno derivado y cuantificación de Dímero D ultrasensible'
    ]
  },
  {
    id: 'microbiologia',
    name: 'Microbiología',
    iconName: 'Bug',
    shortDesc: 'Aislamiento, identificación fenotípica y molecular de bacterias y hongos, con perfiles de susceptibilidad antimicrobiana.',
    fullDesc: 'Diagnóstico etiológico oportuno de procesos infecciosos bacterianos y fúngicos utilizando incubación automatizada continua para hemocultivos y paneles sindrómicos de biología molecular ultrarrápida.',
    technologies: ['BacT/ALERT®', 'BIOFIRE® FilmArray®'],
    testCount: '60+ análisis microbiológicos',
    keyTests: [
      'Hemocultivos automatizados seriados en botellas FAN Plus (aerobio/anaerobio)',
      'Cultivo y antibiograma automatizado con Concentración Mínima Inhibitoria (CMI)',
      'Urocultivo cuantitativo con recuento de colonias y tipificación',
      'Cultivo de secreciones, heridas, esputo y líquidos corporales estériles',
      'Detección de mecanismos de resistencia bacteriana (BLEE, AmpC, Carbapenemasas)',
      'Panel molecular sindrómico BIOFIRE de hemocultivos y sepsis (BCID2)'
    ]
  },
  {
    id: 'microscopia',
    name: 'Microscopía y Uroanálisis',
    iconName: 'Microscope',
    shortDesc: 'Análisis físico, químico y microscópico estandarizado de fluidos biológicos, orina y materia fecal.',
    fullDesc: 'Evaluación protocolizada de sedimento urinario, coprológico, coproscópico y líquidos corporales (pleural, peritoneal, sinovial, LCR) mediante tiras reactivas automatizadas de doble longitud de onda y microscopía óptica de campo claro y contraste.',
    technologies: ['cobas u 411', 'Microscopía Óptica de Alta Resolución'],
    testCount: '35+ análisis',
    keyTests: [
      'Uroanálisis completo sistematizado con refractometría para densidad urinaria',
      'Sedimento urinario valorado: cilindros, cristales, células epiteliales y bacterias',
      'Coprológico directo y por concentración para parásitos intestinales',
      'Coproscópico con pH, azúcares reductores y recuento de polimorfonucleares',
      'Sangre oculta en materia fecal (método inmunológico específico para hemoglobina humana)',
      'Estudio citológico y recuento celular en líquidos corporales'
    ]
  },
  {
    id: 'pretransfusional',
    name: 'Gestión Pretransfusional',
    iconName: 'HeartHandshake',
    shortDesc: 'Seguridad inmunohematológica rigurosa para transfusiones seguras de componentes sanguíneos.',
    fullDesc: 'Determinación de grupos sanguíneos ABO/Rh, rastreo e identificación de anticuerpos irregulares y pruebas de compatibilidad mayor y menor bajo estrictos estándares de hemovigilancia y calidad.',
    technologies: ['Tecnología de Aglutinación en Columna de Gel (Gel Cards)'],
    testCount: '20+ protocolos de seguridad',
    keyTests: [
      'Clasificación de Grupo Sanguíneo ABO y Factor Rh (D) directo e inverso',
      'Fenotipificación ampliada del sistema Rh (C, c, E, e) y sistema Kell (K)',
      'Prueba de Coombs Directo poliespecífico y monoespecífico (IgG y C3d)',
      'Prueba de Coombs Indirecto / Rastreo de Anticuerpos Irregulares (RAI)',
      'Pruebas cruzadas de compatibilidad pretransfusional en medio enzimático y gel',
      'Investigación y manejo de discrepancias globulares y séricas'
    ]
  },
  {
    id: 'pruebas-especiales',
    name: 'Pruebas Especiales',
    iconName: 'ShieldAlert',
    shortDesc: 'Determinaciones de alta complejidad: biología molecular, gases en sangre y monitoreo rápido en punto de atención.',
    fullDesc: 'Línea diagnóstica de alta especificidad que engloba biología molecular multiplex para infecciones críticas, equilibrio ácido-base y gases sanguíneos con cooximetría completa, y marcadores de cuidados intensivos.',
    technologies: ['BIOFIRE® FilmArray®', 'cobas b 221', 'cobas h 232'],
    testCount: '50+ pruebas especializadas',
    keyTests: [
      'Gases Arteriales y Venosos con Cooximetría completa (tHb, SO2, COHb, MetHb)',
      'Lactato en sangre total para monitoreo hemodinámico y perfusión tisular',
      'Panel molecular de patógenos respiratorios multiplex (22 dianas)',
      'Panel molecular de meningitis y encefalitis en líquido cefalorraquídeo',
      'Panel molecular gastrointestinal para diarreas infecciosas complejas',
      'Determinación cuantitativa rápida de Troponina T y NT-proBNP al pie de cama'
    ]
  },
  {
    id: 'remision',
    name: 'Red de Remisión y Referencia',
    iconName: 'Send',
    shortDesc: 'Alianzas con centros de referencia nacionales e internacionales para pruebas genéticas y de alta subespecialidad.',
    fullDesc: 'Gestión integral y trazabilidad de muestras para analitos de tercer y cuarto nivel de complejidad no procesados in situ (genética molecular, paneles onco-hematológicos por NGS, inmunohistoquímica y toxicología avanzada) garantizando cadena de custodia.',
    technologies: ['Cadena de Custodia con Monitoreo de Temperatura Digital'],
    testCount: '400+ pruebas de referencia',
    keyTests: [
      'Paneles Genéticos por Secuenciación de Siguiente Generación (NGS)',
      'Cariotipo de alta resolución y pruebas citogenéticas por FISH',
      'Carga viral para VIH-1, Hepatitis B y Hepatitis C por RT-PCR cuantitativa',
      'Niveles séricos de fármacos inmunosupresores (Tacrolimus, Ciclosporina, Sirolimus)',
      'Autoanticuerpos específicos (ANA por IFI, Anti-DNA, ANCA, Anti-CCP, ENA 6)',
      'Tamizaje neonatal ampliado metabólico'
    ]
  }
];

