// Catálogo oficial de Equipos Analíticos - Laboratorio Clínico Ecopetrol
// Con fotografías oficiales aportadas por el usuario

export const EQUIPMENT_LIST = [
  {
    id: 'cobas-pro',
    name: 'cobas® pro',
    fullName: 'cobas® pro integrated solutions',
    manufacturer: 'Roche',
    badgeShape: 'hexagon',
    subtitle: 'Plataforma preanalítica y analítica de alto rendimiento',
    image: './Cobas-PRO.jpg',
    fallbackType: 'chemistry-module',
    bullets: [
      'Alta capacidad de procesamiento (hasta 2.200 pruebas/h)',
      'Química clínica e inmunoquímica consolidada',
      'Integración, carga continua y automatización total',
      'Resultados confiables y tiempos de respuesta oportunos'
    ],
    details: {
      category: 'Química Clínica e Inmunoquímica',
      methodology: 'Fotometría por absorción óptica y Electroquimioluminiscencia (ECLIA)',
      applications: 'Perfiles metabólicos, renal, hepático, marcadores tumorales, hormonas y troponina ultrasensible'
    }
  },
  {
    id: 'vitros-2-compact',
    name: 'VITROS® 2 Compact / VITEK®',
    fullName: 'VITROS® System / VITEK® 2 Compact',
    manufacturer: 'Ortho Clinical / bioMérieux',
    badgeShape: 'pill',
    subtitle: 'Bioquímica clínica avanzada e identificación microbiológica automatizada',
    image: './Vitek-Compact-2.jpg',
    fallbackType: 'dry-chemistry',
    bullets: [
      'Identificación microbiana y susceptibilidad antimicrobiana (AST/CMI)',
      'Tarjetas selladas de plástico con 64 pocillos para bioseguridad',
      'Monitoreo colorimétrico y turbidimétrico continuo',
      'Resultados rápidos y reproducibles para orientación terapéutica'
    ],
    details: {
      category: 'Microbiología Automatizada / Química Seca',
      methodology: 'Monitoreo óptico continuo de perfiles bioquímicos',
      applications: 'Antibiogramas automatizados, susceptibilidad microbiana, perfiles de urgencia'
    }
  },
  {
    id: 'cobas-c111',
    name: 'cobas c 111',
    fullName: 'cobas c 111 analyzer',
    manufacturer: 'Roche',
    badgeShape: 'hexagon',
    subtitle: 'Analizador fotométrico compacto para bioquímica y urgencias',
    image: './Cobas-C111.jpg',
    fallbackType: 'compact-chemistry',
    bullets: [
      'Respuesta analítica rápida para pacientes de urgencias',
      'Módulo ISE integrado para electrolitos (Na+, K+, Cl-)',
      'Microvolúmenes reducidos de muestra para perfiles pediátricos',
      'Rotor de reactivos refrigerados con código bidimensional'
    ],
    details: {
      category: 'Química Clínica Esencial y Urgencias',
      methodology: 'Fotometría de absorción con 12 longitudes de onda e ISE indirecto',
      applications: 'Perfil bioquímico esencial, cinética de amilasa/lipasa, urea, creatinina'
    }
  },
  {
    id: 'sysmex-xn-1000',
    name: 'Sysmex XN-1000™',
    fullName: 'Sysmex XN-Series Automated Hematology Analyzer',
    manufacturer: 'Sysmex',
    badgeShape: 'rect',
    subtitle: 'Citometría de flujo fluorescente para hematología de alta precisión',
    image: './Sysmex-xn1000.jpg',
    fallbackType: 'hematology',
    bullets: [
      'Diferencial leucocitario completo de 6 poblaciones',
      'Recuento de eritroblastos (NRBC) en cada hemograma',
      'Canal fluorescente especializado para plaquetas (PLT-F) y reticulocitos',
      'Perforación automática de tapón con bioseguridad cerrada'
    ],
    details: {
      category: 'Hematología Automatizada',
      methodology: 'Citometría de flujo fluorescente con láser semiconductor azul (405 nm)',
      applications: 'Cuadro hemático sistematizado, anemias complejas, sepsis y frotis reflejo'
    }
  },
  {
    id: 'cobas-t-411',
    name: 'cobas t 411',
    fullName: 'cobas t 411 coagulation analyzer',
    manufacturer: 'Roche',
    badgeShape: 'hexagon',
    subtitle: 'Analizador automatizado integral de hemostasia y coagulación',
    image: './Cobas-T411.jpg',
    fallbackType: 'coagulation',
    bullets: [
      'Métodos coagulométricos, cromogénicos e inmunoturbidimétricos',
      'Lector de código de barras y perforación de tapones (cap piercing)',
      'Medición sensible de Dímero D y Fibrinógeno',
      'Monitoreo estandarizado de anticoagulación oral (TP / INR)'
    ],
    details: {
      category: 'Hemostasia y Coagulación',
      methodology: 'Detección foto-óptica y coagulométrica con doble longitud de onda',
      applications: 'Tiempo de Protrombina (TP/INR), TTPa, Dímero D, Fibrinógeno, Factores'
    }
  },
  {
    id: 'cobas-u-411',
    name: 'cobas u 411',
    fullName: 'cobas u 411 urine analyzer',
    manufacturer: 'Roche',
    badgeShape: 'hexagon',
    subtitle: 'Lector automatizado de uroanálisis con tira reactiva y reflectometría',
    image: './Cobas-U411.jpg',
    fallbackType: 'urinalysis',
    bullets: [
      'Procesamiento estandarizado de hasta 600 tiras/hora',
      'Lectura LED de doble longitud de onda (555 nm y 635 nm)',
      'Refractómetro integrado para medición de gravedad específica',
      'Compensación automática del color propio de la orina'
    ],
    details: {
      category: 'Uroanálisis y Microscopía',
      methodology: 'Reflectometría óptica de tiras Combur-Test® M con refractometría física',
      applications: 'Parcial de orina automatizado, proteinuria, hematuria, cetonuria, infección urinaria'
    }
  },
  {
    id: 'cobas-b-221',
    name: 'cobas b 221',
    fullName: 'cobas b 221 POC / Blood Gas System',
    manufacturer: 'Roche',
    badgeShape: 'hexagon',
    subtitle: 'Gases sanguíneos, electrolitos, metabolitos y cooximetría completa',
    image: './Cobas-B221.jpg',
    fallbackType: 'blood-gas',
    bullets: [
      'Resultados críticos completos en menos de 120 segundos',
      'Módulo de cooximetría espectrofotométrica óptica (tHb, SO2, COHb, MetHb)',
      'Monitoreo cuantitativo de Lactato para estratificación de choque',
      'Control de calidad automático continuo AutoQC 24/7'
    ],
    details: {
      category: 'Gases Arteriales y Cuidado Crítico',
      methodology: 'Electrodos selectivos ISE, amperometría y cooximetría espectral completa',
      applications: 'Equilibrio ácido-base, pH, pO2, pCO2, Lactato, electrolitos en UCI y Urgencias'
    }
  },
  {
    id: 'cobas-h-232',
    name: 'cobas h 232',
    fullName: 'cobas h 232 POC system',
    manufacturer: 'Roche',
    badgeShape: 'hexagon',
    subtitle: 'Diagnóstico rápido POCT para biomarcadores cardiovasculares',
    image: './Cobas-H232.jpg',
    fallbackType: 'poc-cardio',
    bullets: [
      'Análisis cuantitativo de biomarcadores cardíacos en 8 a 12 minutos',
      'Procesamiento directo de sangre total con heparina sin centrifugar',
      'Troponina T hs, NT-proBNP, Dímero D y CK-MB masa al pie de cama',
      'Conectividad inmediata al sistema de información hospitalaria'
    ],
    details: {
      category: 'Punto de Atención (POCT) Cardiovascular',
      methodology: 'Inmunocromatografía cuantitativa por reflectancia fluorescente (CARDIAC)',
      applications: 'Sospecha de infarto agudo (SCA), tromboembolismo pulmonar, insuficiencia cardíaca'
    }
  },
  {
    id: 'biofire-filmarray',
    name: 'BIOFIRE® FilmArray®',
    fullName: 'BIOFIRE® FilmArray® 2.0 / Torch System',
    manufacturer: 'bioMérieux',
    badgeShape: 'pill',
    subtitle: 'Biología molecular sindrómica por PCR múltiple anidada en 1 hora',
    image: './Film-array.jpg',
    fallbackType: 'molecular',
    bullets: [
      'Paneles sindrómicos multiplex simultáneos (Respiratorio, Meningitis, Sepsis, GI)',
      'PCR anidada con cartucho pouch hermético cerrado libre de contaminación',
      'Extracción, retrotranscripción y amplificación en ~65 minutos',
      'Detección combinada de patógenos bacterianos, virales y genes de resistencia'
    ],
    details: {
      category: 'Biología Molecular Sindrómica',
      methodology: 'PCR múltiple anidada automatizada con análisis de curva de fusión (HRM)',
      applications: 'Panel Respiratorio (22 patógenos), Panel Hemocultivo BCID2, Panel Meningitis LCR'
    }
  },
  {
    id: 'bact-alert',
    name: 'BacT/ALERT®',
    fullName: 'BacT/ALERT® 3D / VIRTUO® Microbial Detection System',
    manufacturer: 'bioMérieux',
    badgeShape: 'pill',
    subtitle: 'Incubación y detección colorimétrica continua de hemocultivos',
    image: './Bact-alert.png',
    fallbackType: 'blood-culture',
    bullets: [
      'Lectura reflectométrica continua de CO2 cada 10 minutos las 24 horas',
      'Algoritmo matemático de aceleración para alerta precoz de bacteriemia',
      'Botellas FAN Plus irrompibles con resinas adsorbentes de antibióticos',
      'Procesamiento seguro de sangre y líquidos corporales estériles'
    ],
    details: {
      category: 'Microbiología Automatizada',
      methodology: 'Monitorización colorimétrica continua y no invasiva de CO2 por sensores químicos',
      applications: 'Hemocultivos seriados para sepsis, fungemia, bacteriemia y líquidos estériles'
    }
  }
];
