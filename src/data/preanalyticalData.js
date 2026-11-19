// Catálogo y Guías Preanalíticas Oficiales - Laboratorio Clínico JSM Ecopetrol
// Basado en el documento institucional oficial: "5 Correctos de Toma de Muestras Sanguíneas y Microbiológicas"
// Código de Formato Institucional: Plantilla 033, V. 5

export const CINCO_CORRECTOS = [
  {
    number: '01',
    title: '1. Orden, Paciente Correcto, Condiciones Correctas',
    badge: 'Seguridad y Verificación Activa',
    icon: 'user-check',
    description: 'Verificación activa de identidad y condiciones clínicas previas del usuario.',
    quote: '¡¡¡No existe ningún examen en el Laboratorio que pueda mejorar los resultados de una muestra mal tomada!!!',
    details: [
      'Verificar 2 nombres, 2 apellidos y documento de identidad contra la orden médica y el paciente.',
      'Hospitalización y Observación: Cotejo obligatorio de la manilla de identificación con la ficha de cama.',
      'Horarios Críticos: En Glicemia Post, Insulina Post o Cortisol PM, verificar estrictamente la hora en el tubo y orden.',
      'Condiciones Previas: Ayuno de 10-12 horas, no consumir licor 3 días antes, evitar ejercicio físico vigoroso 3 días antes.',
      'Prolactina (PRL): El paciente debe tener al menos 2 horas de haberse levantado de la cama.',
      'Microbiología: No aplicar cremas, talcos ni ungüentos en la lesión; registrar uso previo de antibióticos.'
    ],
    color: '#007A33'
  },
  {
    number: '02',
    title: '2. Tubos, Cantidad y Muestra Correcta',
    badge: 'Selección y Orden de Llenado',
    icon: 'tubes',
    description: 'Selección estricta de contenedores según catálogo y extracción en el orden secuencial establecido.',
    details: [
      'Respetar el orden secuencial de llenado para evitar contaminación con aditivos de otros tubos.',
      'Llenado estricto hasta la marca de aforo en tubo de Citrato (azul) para relación 9:1 exacta.',
      'Tomar siempre un tubo tapa amarilla con gel adicional exclusivo para HIV y HBsAg.',
      'Tomar tubo exclusivo para muestras congeladas o exámenes especiales de remisión.',
      'En acceso venoso difícil, emplear tubos pediátricos de menor volumen para evitar colapso vascular.'
    ],
    color: '#0056B3'
  },
  {
    number: '03',
    title: '3. Marcaje y Rotulación de Muestras',
    badge: 'Trazabilidad Inequívoca',
    icon: 'tag',
    description: 'Identificación inmediata de los contenedores frente al paciente antes de que abandone el cubículo.',
    details: [
      'Consulta Externa: Marcar con 4 iniciales del paciente + número de identificación + consecutivo de laboratorio.',
      'Hospitalización y Urgencias: Marcar obligatoriamente con dos nombres y dos apellidos completos.',
      'Pruebas Pretransfusionales: Rotulación con nombres completos, número de documento, fecha y servicio.',
      'Muestras no sanguíneas (Orina, Esputo, Materia Fecal): Rotular siempre el CUERPO del frasco, nunca solo la tapa.',
      'Las muestras sin identificación o con datos erróneos NO se devuelven al servicio; se descartan y se toma nueva muestra.'
    ],
    color: '#D97706'
  },
  {
    number: '04',
    title: '4. Venopunción y Procedimiento Correcto',
    badge: 'Técnica Aséptica Protocolizada',
    icon: 'syringe',
    description: 'Ejecución estandarizada de la punción con insumos aprobados y bioseguridad.',
    details: [
      'Regla de Oro del Torniquete: Máximo 1 minuto. Si no se logra la punción, retirar y esperar 3 minutos.',
      'Desinfección: Torunda humedecida en alcohol 70% en círculos del centro a la periferia; dejar secar.',
      'Pacientes Canalizados: NUNCA sangrar del mismo brazo de líquidos IV. Cerrar vía 15 min con aval médico.',
      'Menores de 6 Años: NUNCA realizar la punción solo; solicitar siempre apoyo de un compañero del servicio.',
      'Alcoholemia: Desinfección obligatoria con agua destilada y gasas estériles; NUNCA usar alcohol.'
    ],
    color: '#7C3AED'
  },
  {
    number: '05',
    title: '5. Finalización del Procedimiento',
    badge: 'Cuidado del Usuario y Bioseguridad',
    icon: 'check-circle',
    description: 'Garantía de confort del paciente, hemostasia adecuada y orden del área de trabajo.',
    details: [
      'Verificar tubos, láminas y frascos completamente marcados y homogenizados antes de la salida.',
      'Presión firme con torunda seca de algodón manteniendo el brazo estirado (colocar micropore si se requiere).',
      'Descartar la torunda de algodón en la caneca roja de residuos biológicos peligrosos.',
      'Descarte inmediato de la aguja en el guardián de bioseguridad sin reencapuchar.',
      'Informar al paciente y/o acompañante los tiempos oportunos de entrega de sus resultados.'
    ],
    color: '#059669'
  }
];

export const VENOPUNCION_PROTOCOLO = {
  title: 'Protocolo de Venopunción y Procedimiento Correcto',
  subtitle: 'Pautas técnicas institucionales para garantizar la integridad analítica y la seguridad del paciente',
  insumosAprobados: [
    { name: 'Venoyec Tradicional con aguja 20G / 21G / 22G', desc: 'Para pacientes con accesos venosos estándar de buen calibre.' },
    { name: 'Venoyec con Capucha de Seguridad retráctil', desc: 'Dispositivo estándar de bioseguridad para prevenir accidentes biológicos.' },
    { name: 'Equipo Alado (Mariposa / Scalp calibres 21G / 23G)', desc: 'Indicado en pacientes geriátricos, pediátricos o con acceso venoso difícil.' },
    { name: 'Jeringa estéril de 5 mL o 10 mL', desc: 'Para tomas de muestras en modo abierto; fijar la tapa con micropore al trasvasar.' },
    { name: 'Catéter de 3 Vías', desc: 'Para pacientes en hospitalización, UCI o unidad renal bajo protocolo estricto.' }
  ],
  normasCriticas: [
    {
      titulo: 'Regla del Torniquete (Máximo 1 Minuto)',
      badge: 'Prevención de Hemoconcentración',
      color: '#B91C1C',
      contenido: 'El torniquete no debe dejarse más de 1 minuto. Si en este lapso no se canaliza la vena, retire el torniquete y espere mínimo 3 minutos para que se restablezca la circulación antes de volver a colocarlo. Su uso prolongado altera el potasio, proteínas y hematocrito.'
    },
    {
      titulo: 'Desinfección en Espiral y Evaporación',
      badge: 'Asepsia sin Hemólisis',
      color: '#007A33',
      contenido: 'Realice la desinfección con torunda humedecida en alcohol al 70%, con movimientos circulares desde el centro hacia la periferia sin volver al centro. Deje evaporar el alcohol completamente: si penetra el sistema de extracción genera hemólisis masiva y sensación de quemazón.'
    },
    {
      titulo: 'Pacientes con Líquidos Intravenosos',
      badge: 'Cero Dilución',
      color: '#D97706',
      contenido: 'No se debe extraer sangre del mismo brazo donde se están administrando soluciones o medicamentos endovenosos. Si no existe otra vía, se debe cerrar la llave previa autorización médica, esperar 15 minutos, extraer la muestra y registrar la novedad al laboratorio.'
    },
    {
      titulo: 'Agotamiento Total del Vacío',
      badge: 'Volumen Exacto',
      color: '#1D4ED8',
      contenido: 'La punción debe realizarse agotando todo el vacío del tubo para garantizar la proporción estequiométrica sangre/anticoagulante. Homogenizar inmediatamente por inversión lenta sin agitar bruscamente.'
    },
    {
      titulo: 'Atención Pediátrica (< 6 Años)',
      badge: 'Seguridad del Niño',
      color: '#7C3AED',
      contenido: 'En niños menores de 6 años, NUNCA realice este procedimiento solo. Solicite siempre el acompañamiento de un compañero del servicio de salud para contener y brindar seguridad al paciente pediátrico.'
    },
    {
      titulo: 'Prueba Legal de Alcoholemia',
      badge: 'Cadena de Custodia',
      color: '#0F766E',
      contenido: 'Para la toma de alcoholemia utilice exclusivamente el kit con agua destilada y gasas estériles. NUNCA utilice alcohol ni soluciones con etanol para desinfectar la piel, ya que invalida jurídicamente la prueba.'
    }
  ]
};

export const ORDEN_LLENADO_TUBOS = [
  {
    order: 1,
    tubeName: 'Botellas de Hemocultivo (Aerobio / Anaerobio)',
    capColor: '#C2410C',
    capBorder: '#FDBA74',
    hexBg: '#FFF7ED',
    tagColor: 'orange',
    additive: 'Caldo de cultivo enriquecido con resinas neutralizantes de antimicrobianos',
    purpose: 'Detección de bacteriemias, fungemias y sepsis. Se extrae en primer lugar para garantizar esterilidad estricta y evitar contaminación con aditivos de otros tubos.',
    inversions: 'Invertir suavemente de 4 a 5 veces para mezclar la sangre con el medio.',
    recommendations: 'Tomar de 2 a 3 hemocultivos cambiando sitio de punción. Limpiar el tapón de caucho con alcohol al 70% antes de inocular.',
    volumeNote: 'Adultos: 1 a 5 mL (o 8-10 mL en botellas de alta capacidad). Pediátricos: 0.5 a 1.0 mL.',
    commonExams: ['Hemocultivo Aeróbico', 'Hemocultivo Anaeróbico', 'Hemocultivo Pediátrico']
  },
  {
    order: 2,
    tubeName: 'Tubo Tapa Celeste / Azul (Citrato de Sodio 3.2%)',
    capColor: '#0288D1',
    capBorder: '#81D4FA',
    hexBg: '#E1F5FE',
    tagColor: 'blue',
    additive: 'Citrato de Sodio 3.2% (0.109 M) tamponado - Proporción 9 partes de sangre por 1 de anticoagulante',
    purpose: 'Pruebas de coagulación y hemostasia: Tiempo de Protrombina (TP/INR), Tiempo de Tromboplastina (TTPa), Fibrinógeno y Factores.',
    inversions: 'Invertir muy suavemente de 3 a 4 veces por balanceo completo.',
    recommendations: 'Llenado riguroso hasta la marca de aforo. Si se obtiene un volumen inferior o superior, la muestra no sirve por alteración de la relación sangre/anticoagulante.',
    volumeNote: 'Tubo de 2.7 mL regular o tubo de 1.8 mL para acceso venoso difícil.',
    commonExams: ['Tiempo de Protrombina (TP / INR)', 'Tiempo de Tromboplastina (TTPa)', 'Fibrinógeno', 'Dímero D']
  },
  {
    order: 3,
    tubeName: 'Tubo Tapa Amarilla con Gel (Química e Inmunología)',
    capColor: '#EAB308',
    capBorder: '#FEF08A',
    hexBg: '#FEFCE8',
    tagColor: 'yellow',
    additive: 'Activador de coagulación con sílice micronizada y Gel Separador de polímero inerte',
    purpose: 'Química clínica general, perfiles metabólicos, electrolitos séricos, endocrinología, marcadores tumorales, serología e inmunología.',
    inversions: 'Invertir suavemente 5 veces para activar la coagulación.',
    recommendations: 'Tomar siempre un tubo tapa amarilla ADICIONAL exclusivo para HIV y HBsAg. En acceso difícil usar tubo pediátrico (llenar mínimo hasta la marca de 500 µL).',
    volumeNote: 'Tubo regular de 4.0 - 5.0 mL o microtainer pediátrico (marca 500).',
    commonExams: [
      'Glicemia', 'BUN', 'Creatinina', 'TGO / ASAT', 'TGP / ALAT', 'Perfil Lipídico',
      'Electrolitos (Na, K, Cl, Ca)', 'Troponina T hs', 'TSH', 'T4 Libre', 'PCR',
      'Ácido Úrico', 'Fosfatasa Alcalina', 'Bilirrubinas', 'HIV', 'HBsAg', 'Vitamina D'
    ]
  },
  {
    order: 4,
    tubeName: 'Tubo Tapa Roja (Sin Gel - Banco de Sangre)',
    capColor: '#DC2626',
    capBorder: '#FCA5A5',
    hexBg: '#FEF2F2',
    tagColor: 'red',
    additive: 'Sin anticoagulante / con activador de pared para suero puro',
    purpose: 'Pruebas cruzadas de transfusión, rastreo de anticuerpos irregulares y Coombs Indirecto en banco de sangre.',
    inversions: 'Invertir suavemente de 8 a 10 veces.',
    recommendations: 'Este tubo se acompaña siempre de un tubo tapa morada (lila) para las pruebas cruzadas y banco de sangre.',
    volumeNote: 'Tubo regular de 4.0 mL o 5.0 mL.',
    commonExams: ['Pruebas Cruzadas Transfusionales', 'Rastreo de Anticuerpos Irregulares', 'Coombs Indirecto']
  },
  {
    order: 5,
    tubeName: 'Tubo Tapa Verde (Heparina de Litio - Urgencias)',
    capColor: '#16A34A',
    capBorder: '#86EFAC',
    hexBg: '#F0FDF4',
    tagColor: 'green',
    additive: 'Heparina de Litio liofilizada (anticoagulante de acción inmediata)',
    purpose: 'Pruebas analíticas de urgencia en plasma inmediato sin esperar coagulación, perfil cardíaco y gases venosos.',
    inversions: 'Invertir suavemente de 8 a 10 veces de forma inmediata.',
    recommendations: 'En caso de acceso venoso difícil se puede llenar mínimo hasta la mitad del tubo.',
    volumeNote: 'Tubo de 4.0 mL o tubo pediátrico.',
    commonExams: ['Troponina I Urgente', 'Perfil Cardíaco de Urgencias', 'Gases Venosos']
  },
  {
    order: 6,
    tubeName: 'Tubo Tapa Morada / Lila (K2-EDTA - Hematología)',
    capColor: '#9333EA',
    capBorder: '#D8B4FE',
    hexBg: '#FAF5FF',
    tagColor: 'purple',
    additive: 'EDTA Dipotásico (K2-EDTA) líquido o liofilizado',
    purpose: 'Hematología completa, morfología celular, citometría hemática y hemoclasificación sanguínea.',
    inversions: 'Invertir cuidadosamente de 8 a 10 veces (en tubo pediátrico invertir suavemente 20 veces).',
    recommendations: 'Llenar hasta la marca. En acceso difícil usar tubo pediátrico (marcas 200 o 500). Nunca agitar fuertemente para evitar hemólisis o agregación plaquetaria.',
    volumeNote: 'Tubo regular de 3.0 mL o tubo pediátrico con aforo exacto.',
    commonExams: [
      'Cuadro Hemático / Hemograma', 'Hemoclasificación (Grupo Sanguíneo y Factor Rh)',
      'Hemoglobina Glicosilada (HbA1c)', 'Frotis de Sangre Periférica (FSP)',
      'Reticulocitos', 'VSG / Eritrosedimentación', 'Coombs Directo', 'Gota Gruesa / Hemoparásitos'
    ]
  }
];

export const MARCAJE_ROTULACION = {
  title: 'Protocolo de Marcaje y Rotulación de Muestras',
  subtitle: 'Estándar unívoco para asegurar la trazabilidad absoluta desde la punción hasta el reporte',
  reglas: [
    {
      area: 'Consulta Externa',
      requisito: '4 Iniciales + Número de Documento + Consecutivo de Laboratorio',
      descripcion: 'Marcar los tubos y láminas con el número de identificación y las iniciales del paciente (mínimo 3 o 4 cuando es posible). Cotejar verbalmente en voz alta con el paciente o acompañante.'
    },
    {
      area: 'Hospitalización, Urgencias, PAD y Unidad Renal',
      requisito: '2 Nombres Completos + 2 Apellidos Completos + Cédula',
      descripcion: 'Obligatorio rotular con dos nombres y dos apellidos completos. Verificar siempre con la manilla institucional del paciente y la ficha de cama.'
    },
    {
      area: 'Pruebas Pretransfusionales (Banco de Sangre)',
      requisito: 'Nombres y Apellidos Completos + Documento + Fecha + Servicio',
      descripcion: 'Marcaje especial y riguroso. Cualquier inconsistencia en el nombre o documento es causal de rechazo inmediato y obligatorio.'
    },
    {
      area: 'Orinas y Muestras Biológicas (Coprológico, Esputo)',
      requisito: 'Marcaje en el CUERPO del frasco',
      descripcion: 'Rotular siempre sobre la superficie plástica del cuerpo del frasco, NUNCA sobre la tapa (las tapas se intercambian en el procesamiento). Para parcial de orina + urocultivo, rotular con sticker oficial o la sigla URO.'
    }
  ]
};

export const CRITERIOS_RECHAZO = [
  {
    id: 'hemolisis',
    title: 'Hemólisis Severa (Índice H > Límites)',
    severity: 'Crítico',
    reason: 'Ruptura de eritrocitos con liberación masiva de componentes intracelulares al plasma o suero.',
    impact: 'Elevación falsa de Potasio, LDH, AST (TGO), Fósforo y Magnesio; interferencia óptica en Troponina T e interferencia directa en cascada de coagulación.',
    action: 'Notificación inmediata al servicio solicitante y toma obligatoria de nueva muestra.'
  },
  {
    id: 'coagulos',
    title: 'Presencia de Microcoágulos o Coágulos',
    severity: 'Crítico',
    reason: 'Homogenización insuficiente tras la venopunción en tubos con anticoagulante (EDTA o Citrato).',
    impact: 'Invalida el recuento plaquetario (falsa trombocitopenia), altera el hematocrito y obstruye agujas de aspiración de los analizadores Sysmex y cobas t 411.',
    action: 'Rechazo automático en hematología y coagulación. Requiere nueva punción con homogenización correcta.'
  },
  {
    id: 'volumen-incorrecto',
    title: 'Volumen Insuficiente o Inadecuado (QNS)',
    severity: 'Alto',
    reason: 'Incumplimiento de la línea de aforo del fabricante, especialmente en tubos de citrato de sodio.',
    impact: 'Altera la relación estequiométrica 9:1 entre sangre y anticoagulante, produciendo prolongaciones falsas del TP y TTPa.',
    action: 'Rechazo obligatorio en coagulación si la desviación excede ±10% de la marca de llenado.'
  },
  {
    id: 'identificacion-erronea',
    title: 'Muestra sin Identificación o Mal Rotulada',
    severity: 'Crítico',
    reason: 'Falta de rotulado frente al paciente, ausencia de nombres completos o discrepancia con la orden médica.',
    impact: 'Riesgo inaceptable de error en la asignación de resultados a otro paciente.',
    action: 'Las muestras sin identificación o con datos erróneos NO se devuelven al servicio; se descartan y se toma nueva muestra por seguridad del paciente.'
  },
  {
    id: 'tubo-inadecuado',
    title: 'Tubo o Contenedor Inadecuado',
    severity: 'Alto',
    reason: 'Uso de tubo con aditivo no compatible con la metodología del examen solicitado.',
    impact: 'Incompatibilidad química o interferencia con el principio analítico del equipo.',
    action: 'No procesamiento. Solicitud inmediata de toma en el contenedor correcto.'
  },
  {
    id: 'alcoholemia-alcohol',
    title: 'Toma de Alcoholemia con Asepsia de Alcohol',
    severity: 'Crítico Legal',
    reason: 'Uso de torunda con alcohol en lugar de agua destilada y gasas estériles.',
    impact: 'Falso positivo legalmente inadmisible en pruebas toxicológicas y forenses.',
    action: 'Anulación de la muestra y requerimiento de nueva toma con el kit de agua destilada estéril.'
  }
];
