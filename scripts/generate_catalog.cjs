const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

const wb = xlsx.readFile('pruebas.xlsx');

function getVal(row, candidates) {
  for (const k of Object.keys(row)) {
    const trimmed = k.trim().toUpperCase();
    for (const c of candidates) {
      if (trimmed === c.toUpperCase()) {
        const val = row[k];
        return val === undefined || val === null ? '' : String(val).trim();
      }
    }
  }
  return '';
}

function normalizeToken(t) {
  return t
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .trim();
}

const sheets = [
  { name: 'INMUNOQUIMICA', area: 'Inmunoquímica', expected: 68 },
  { name: 'HEMATOLOGIA', area: 'Hematología', expected: 13 },
  { name: 'PRUEBAS ESPECIALES', area: 'Pruebas Especiales', expected: 4 },
  { name: 'REMISION', area: 'Remisión', expected: 200 }
];

let counter = 0;
const catalog = [];

sheets.forEach(s => {
  const ws = wb.Sheets[s.name];
  const rows = xlsx.utils.sheet_to_json(ws, { defval: '' });
  const validRows = rows.filter(r => Object.values(r).some(v => String(v).trim() !== ''));
  
  if (validRows.length !== s.expected) {
    throw new Error('Sheet ' + s.name + ' expected ' + s.expected + ' rows, got ' + validRows.length);
  }
  
  validRows.forEach((r, idx) => {
    counter++;
    const cups = getVal(r, ['CUPS', 'CODIGO CUPS']);
    const name = getVal(r, ['PRUEBA']);
    const clinicalUtility = getVal(r, ['UTILIDAD CLINICA', 'UTILIDAD CLÍNICA']);
    const sampleType = getVal(r, ['MUESTRA']);
    const referenceValues = getVal(r, ['VALORES DE REFERENCIA', 'V/ REFERENCIA']);
    const units = getVal(r, ['UNIDADES']);
    const logistics = getVal(r, ['LOGÍSTICA', 'LOGISTICA', 'HORARIO DE ATENCION', 'HORARIO DE ATENCIÓN']);
    const methodology = getVal(r, ['TÉCNICA', 'TECNICA']);
    const patientPreparation = getVal(r, ['CONDICIÓN DEL PACIENTE', 'CONDICION DEL PACIENTE']);
    const interferences = getVal(r, ['LIMITES E INTERFERENCIAS', 'LÍMITES E INTERFERENCIAS']);
    const linearity = getVal(r, ['LINEALIDAD DE LA PRUEBA']);
    
    // Generate keywords
    const kwSet = new Set();
    
    // Area keyword
    kwSet.add(normalizeToken(s.area));
    if (s.area === 'Hematología') kwSet.add('hematologia y coagulacion');
    if (s.area === 'Remisión') {
      kwSet.add('referencia');
      kwSet.add('red de remision y referencia');
      kwSet.add('synlab');
    }
    
    // Name tokens
    const nameClean = normalizeToken(name);
    nameClean.split(/\s+/).forEach(tok => {
      if (tok.length > 2) kwSet.add(tok);
    });
    
    // Check for synonyms line
    if (name.toLowerCase().includes('sinónimos:') || name.toLowerCase().includes('sinonimos:')) {
      const parts = name.split(/sin[oó]nimos:/i);
      if (parts[1]) {
        parts[1].split(/[,;\n\r]+/).forEach(syn => {
          const sClean = normalizeToken(syn);
          if (sClean) {
            kwSet.add(sClean);
            sClean.split(/\s+/).forEach(st => {
              if (st.length > 2) kwSet.add(st);
            });
          }
        });
      }
    }
    
    // CUPS tokens (extract all digits or numbers)
    if (cups) {
      kwSet.add(normalizeToken(cups));
      const numbers = cups.match(/\b\d{5,7}\b/g);
      if (numbers) numbers.forEach(n => kwSet.add(n));
    }
    
    catalog.push({
      id: 'exam-' + String(counter).padStart(4, '0'),
      cups,
      name,
      area: s.area,
      sheet: s.name,
      rowNumber: idx + 2,
      clinicalUtility,
      sampleType,
      referenceValues,
      units,
      logistics,
      methodology,
      patientPreparation,
      interferences,
      linearity,
      keywords: Array.from(kwSet)
    });
  });
});

console.log('Successfully generated catalog with ' + catalog.length + ' records.');
fs.writeFileSync('src/data/masterExamsCatalog.json', JSON.stringify(catalog, null, 2), 'utf8');
console.log('Written to src/data/masterExamsCatalog.json');

