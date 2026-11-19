import React from 'react';

// Generates high-fidelity medical laboratory equipment graphics
export default function EquipmentGraphic({ type, className = '' }) {
  const primaryGreen = '#00853F';
  const accentYellow = '#FED100';

  const renderGraphic = () => {
    switch (type) {
      case 'chemistry-module':
        // cobas pro modular system: Dual rack, touch screen, sample loader, status light bar
        return (
          <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="400" height="240" rx="12" fill="#0F172A" />
            {/* Grid & Tech lines */}
            <line x1="0" y1="200" x2="400" y2="200" stroke="#1E293B" strokeWidth="2" />
            {/* Modular Chassis */}
            <rect x="30" y="50" width="160" height="150" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
            <rect x="200" y="50" width="170" height="150" rx="8" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            {/* Module Top Status Bar */}
            <rect x="30" y="50" width="160" height="8" rx="4" fill={primaryGreen} />
            <rect x="200" y="50" width="170" height="8" rx="4" fill={primaryGreen} />
            {/* Touch Monitor Display */}
            <rect x="240" y="70" width="90" height="60" rx="4" fill="#0B132B" stroke="#38BDF8" strokeWidth="1.5" />
            <rect x="248" y="78" width="74" height="22" rx="2" fill="#1C2D4A" />
            <path d="M 252 92 L 265 84 L 275 88 L 290 82 L 310 89" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
            <circle cx="310" cy="89" r="2" fill={accentYellow} />
            <rect x="248" y="105" width="40" height="4" rx="2" fill="#22C55E" />
            <rect x="248" y="112" width="60" height="4" rx="2" fill="#64748B" />
            {/* Monitor Arm */}
            <rect x="280" y="130" width="10" height="18" fill="#64748B" />
            {/* Pipetting arm & Reagent Rotor Area */}
            <circle cx="110" cy="120" r="38" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="110" cy="120" r="22" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
            <circle cx="110" cy="120" r="8" fill={primaryGreen} />
            {/* Robotic Arm */}
            <rect x="106" y="75" width="8" height="45" rx="3" fill="#334155" />
            <circle cx="110" cy="75" r="5" fill={accentYellow} />
            {/* Continuous Sample Loading Track */}
            <rect x="45" y="170" width="310" height="20" rx="4" fill="#1E293B" />
            {[60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((x, i) => (
              <g key={i}>
                <rect x={x} y="162" width="6" height="22" rx="2" fill={i % 3 === 0 ? '#38BDF8' : i % 3 === 1 ? '#F59E0B' : '#EF4444'} />
                <rect x={x + 1} y="160" width="4" height="4" rx="1" fill="#FFFFFF" />
              </g>
            ))}
            {/* Branding badge */}
            <rect x="42" y="65" width="55" height="12" rx="3" fill="#00853F" />
            <text x="46" y="74" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">cobas® pro</text>
            <text x="310" y="224" fill="#64748B" fontSize="9" fontFamily="sans-serif">ROCHE MODULAR</text>
          </svg>
        );

      case 'dry-chemistry':
        // VITROS: Dry slide cartridge slot, reflection optics, compact clinical housing
        return (
          <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="400" height="240" rx="12" fill="#0B132B" />
            <rect x="50" y="45" width="300" height="155" rx="10" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
            {/* Top Navy/Green Brand Band */}
            <rect x="50" y="45" width="300" height="20" rx="6" fill="#0F172A" />
            <text x="65" y="59" fill={accentYellow} fontSize="10" fontWeight="bold" fontFamily="sans-serif">VITROS® MICROSLIDE</text>
            {/* Dry Chemistry Cartridge Tower */}
            <rect x="80" y="80" width="100" height="95" rx="6" fill="#E2E8F0" stroke="#94A3B8" />
            <text x="90" y="98" fill="#334155" fontSize="8" fontWeight="600">SLIDE CARTRIDGES</text>
            {[106, 120, 134, 148, 162].map((y, i) => (
              <rect key={i} x="90" y={y} width="80" height="8" rx="2" fill={i === 2 ? primaryGreen : '#94A3B8'} />
            ))}
            {/* MicroSlide Optical Reflectometer Window */}
            <rect x="200" y="80" width="130" height="70" rx="6" fill="#0284C7" fillOpacity="0.1" stroke="#0284C7" strokeWidth="1.5" />
            <circle cx="265" cy="115" r="24" fill="#0284C7" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="2" />
            <line x1="240" y1="115" x2="290" y2="115" stroke={accentYellow} strokeWidth="2" />
            <line x1="265" y1="90" x2="265" y2="140" stroke={accentYellow} strokeWidth="2" />
            {/* Zero-Water Eco Badge */}
            <rect x="200" y="160" width="130" height="22" rx="4" fill="#DCFCE7" stroke="#16A34A" />
            <text x="212" y="175" fill="#15803D" fontSize="8" fontWeight="bold" fontFamily="sans-serif">ECO-DRY: 0% CONSUMO AGUA</text>
          </svg>
        );

      case 'hematology':
        // Sysmex XN-1000: Laser optics, sample rack sampler, blue laser path, 3D scattergram preview
        return (
          <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="400" height="240" rx="12" fill="#0F172A" />
            {/* Main Instrument Cabinet */}
            <rect x="40" y="40" width="220" height="165" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
            {/* Flow Cell Chamber with Blue Laser */}
            <rect x="60" y="65" width="85" height="90" rx="6" fill="#0F172A" />
            <line x1="60" y1="110" x2="145" y2="110" stroke="#38BDF8" strokeWidth="3" />
            <circle cx="102" cy="110" r="14" fill="#0284C7" fillOpacity="0.3" stroke="#60A5FA" strokeWidth="2" />
            <circle cx="102" cy="110" r="4" fill="#FFFFFF" />
            <text x="68" y="80" fill="#38BDF8" fontSize="8" fontWeight="bold">FLUORESCENCE 405nm</text>
            <text x="68" y="145" fill="#94A3B8" fontSize="7">HYDRODYNAMIC FOCUS</text>
            {/* Sampler Loader Rack */}
            <rect x="160" y="70" width="85" height="120" rx="4" fill="#E2E8F0" stroke="#CBD5E1" />
            {[82, 104, 126, 148, 170].map((y, i) => (
              <g key={i}>
                <rect x="170" y={y} width="65" height="14" rx="2" fill="#9333EA" />
                <rect x="166" y={y + 3} width="6" height="8" rx="2" fill="#CBD5E1" />
                <text x="180" y={y + 10} fill="#FFFFFF" fontSize="7" fontWeight="bold">EDTA K2</text>
              </g>
            ))}
            {/* Scattergram Screen (Right Side) */}
            <rect x="275" y="55" width="95" height="135" rx="6" fill="#020617" stroke="#334155" strokeWidth="2" />
            <text x="285" y="72" fill="#22C55E" fontSize="8" fontWeight="bold">DIFF SCATTERGRAM</text>
            <rect x="285" y="80" width="75" height="75" rx="3" fill="#0F172A" />
            {/* Dots representing cell populations */}
            <circle cx="300" cy="135" r="4" fill="#EF4444" />
            <circle cx="305" cy="130" r="5" fill="#EF4444" />
            <circle cx="310" cy="120" r="4" fill="#3B82F6" />
            <circle cx="320" cy="115" r="5" fill="#3B82F6" />
            <circle cx="330" cy="98" r="7" fill="#10B981" />
            <circle cx="335" cy="104" r="6" fill="#10B981" />
            <circle cx="342" cy="90" r="3" fill="#F59E0B" />
            {/* Sysmex logo bar */}
            <rect x="40" y="40" width="220" height="14" rx="4" fill={primaryGreen} />
            <text x="50" y="51" fill="#FFFFFF" fontSize="9" fontWeight="bold">Sysmex XN-1000</text>
          </svg>
        );

      case 'coagulation':
        // cobas t 411: Mechanical & optical clot detection
        return (
          <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="400" height="240" rx="12" fill="#0F172A" />
            <rect x="50" y="45" width="300" height="155" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
            <rect x="50" y="45" width="300" height="16" rx="4" fill="#00853F" />
            <text x="65" y="57" fill="#FFFFFF" fontSize="9" fontWeight="bold">cobas t 411 COAGULATION</text>
            {/* Clotting incubation block */}
            <rect x="75" y="80" width="130" height="90" rx="6" fill="#E2E8F0" stroke="#94A3B8" />
            <text x="85" y="96" fill="#334155" fontSize="8" fontWeight="bold">CUVETTE INCUBATION 37°C</text>
            <circle cx="110" cy="130" r="22" fill="#0284C7" fillOpacity="0.15" stroke="#0284C7" strokeWidth="2" />
            <path d="M 98 130 C 102 120, 118 120, 122 130 C 118 140, 102 140, 98 130 Z" fill="#EF4444" />
            {/* Cap piercing needle illustration */}
            <rect x="230" y="80" width="95" height="90" rx="6" fill="#0F172A" />
            <text x="240" y="96" fill="#38BDF8" fontSize="8" fontWeight="bold">CAP PIERCING</text>
            <rect x="265" y="115" width="24" height="42" rx="3" fill="#0284C7" />
            <rect x="263" y="108" width="28" height="8" rx="2" fill="#81D4FA" />
            <line x1="277" y1="88" x2="277" y2="120" stroke="#F59E0B" strokeWidth="2.5" />
          </svg>
        );

      case 'urinalysis':
        // cobas u 411: Strip feeder, dual wavelength reflectance
        return (
          <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="400" height="240" rx="12" fill="#0F172A" />
            <rect x="55" y="45" width="290" height="150" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
            <rect x="55" y="45" width="290" height="16" rx="4" fill="#00853F" />
            <text x="70" y="57" fill="#FFFFFF" fontSize="9" fontWeight="bold">cobas u 411 URINE ANALYZER</text>
            {/* Continuous strip tray */}
            <rect x="80" y="85" width="240" height="40" rx="4" fill="#E2E8F0" stroke="#94A3B8" />
            {/* Test strip Combur-Test */}
            <rect x="100" y="97" width="200" height="16" rx="2" fill="#FFFFFF" stroke="#CBD5E1" />
            {['#FDE047', '#EA580C', '#84CC16', '#06B6D4', '#6366F1', '#A855F7', '#EC4899', '#10B981', '#EAB308', '#F97316'].map((color, idx) => (
              <rect key={idx} x={110 + idx * 18} y="99" width="12" height="12" rx="1.5" fill={color} />
            ))}
            {/* Optical sensor beam */}
            <polygon points="190,140 210,140 220,115 180,115" fill="#38BDF8" fillOpacity="0.25" />
            <text x="140" y="165" fill="#334155" fontSize="9" fontWeight="600">Lectura LED Doble Longitud de Onda: 555 / 635 nm</text>
          </svg>
        );

      case 'blood-gas':
        // cobas b 221: Blood gas cartridge, syringe port, cooximetry chamber
        return (
          <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="400" height="240" rx="12" fill="#0F172A" />
            <rect x="60" y="40" width="280" height="165" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
            <rect x="60" y="40" width="280" height="16" rx="4" fill="#00853F" />
            <text x="75" y="52" fill="#FFFFFF" fontSize="9" fontWeight="bold">cobas b 221 BLOOD GAS & CO-OXIMETRY</text>
            {/* Sample Ingestion Port */}
            <rect x="80" y="75" width="90" height="110" rx="6" fill="#0F172A" />
            <text x="90" y="92" fill="#38BDF8" fontSize="8" fontWeight="bold">SYRINGE INLET</text>
            <circle cx="125" cy="130" r="18" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
            <rect x="122" y="110" width="6" height="40" rx="3" fill="#EF4444" />
            {/* LCD Screen with Parameters */}
            <rect x="185" y="75" width="135" height="110" rx="6" fill="#020617" stroke="#334155" />
            <text x="195" y="92" fill="#22C55E" fontSize="8" fontWeight="bold">PARAMETROS CRITICOS</text>
            <text x="195" y="108" fill="#94A3B8" fontSize="8">pH: 7.39  |  pO2: 92 mmHg</text>
            <text x="195" y="122" fill="#94A3B8" fontSize="8">pCO2: 38  |  sO2: 98.5%</text>
            <text x="195" y="136" fill="#F59E0B" fontSize="8">Lactato: 1.1 mmol/L</text>
            <text x="195" y="150" fill="#38BDF8" fontSize="8">CO-OX: tHb, COHb, MetHb</text>
            <rect x="195" y="162" width="70" height="12" rx="2" fill="#166534" />
            <text x="200" y="171" fill="#FFFFFF" fontSize="7" fontWeight="bold">AUTO QC 24/7 ACTIVO</text>
          </svg>
        );

      case 'poc-cardio':
        // cobas h 232: Handheld rapid card reader
        return (
          <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="400" height="240" rx="12" fill="#0F172A" />
            {/* Handheld Body */}
            <rect x="120" y="35" width="160" height="175" rx="20" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2.5" />
            {/* Display */}
            <rect x="140" y="55" width="120" height="65" rx="6" fill="#0F172A" stroke="#334155" />
            <text x="150" y="72" fill="#22C55E" fontSize="8" fontWeight="bold">TROPONIN T hs</text>
            <text x="150" y="92" fill="#FFFFFF" fontSize="13" fontWeight="bold">&lt; 14 ng/L</text>
            <text x="150" y="108" fill="#38BDF8" fontSize="8">RESULTADO EN 12 MIN</text>
            {/* Strip insertion slot */}
            <rect x="145" y="150" width="110" height="35" rx="4" fill="#E2E8F0" stroke="#CBD5E1" />
            <rect x="160" y="140" width="80" height="14" rx="2" fill="#EF4444" stroke="#DC2626" />
            <text x="175" y="150" fill="#FFFFFF" fontSize="7" fontWeight="bold">CARDIAC STRIP</text>
            <text x="140" y="200" fill="#64748B" fontSize="8" fontWeight="600">Roche cobas h 232 POCT</text>
          </svg>
        );

      case 'molecular':
        // BIOFIRE FilmArray: Multiplex pouch slot, optical sensor, biohazard seal
        return (
          <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="400" height="240" rx="12" fill="#0F172A" />
            <rect x="50" y="40" width="300" height="165" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
            <rect x="50" y="40" width="300" height="20" rx="6" fill="#00853F" />
            <text x="65" y="54" fill="#FFFFFF" fontSize="10" fontWeight="bold">BIOFIRE® FilmArray® System</text>
            {/* Reagent Pouch Slot */}
            <rect x="75" y="80" width="140" height="105" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
            <path d="M 90 95 L 140 95 L 200 135 L 200 170 L 90 170 Z" fill="#0284C7" fillOpacity="0.2" stroke="#38BDF8" strokeDasharray="3 3" />
            <text x="95" y="110" fill="#38BDF8" fontSize="8" fontWeight="bold">CLOSED PCR POUCH</text>
            <circle cx="110" cy="140" r="10" fill="#EF4444" fillOpacity="0.5" />
            <circle cx="140" cy="140" r="10" fill="#10B981" fillOpacity="0.5" />
            <circle cx="170" cy="140" r="10" fill="#F59E0B" fillOpacity="0.5" />
            {/* Status Panel */}
            <rect x="230" y="80" width="105" height="105" rx="6" fill="#020617" />
            <text x="240" y="98" fill="#22C55E" fontSize="8" fontWeight="bold">PANEL SINDROMICO</text>
            <text x="240" y="115" fill="#FFFFFF" fontSize="8">PCR Anidada x22</text>
            <text x="240" y="130" fill="#94A3B8" fontSize="8">Lisis Ultrasónica</text>
            <text x="240" y="145" fill="#94A3B8" fontSize="8">Curva HRM</text>
            <rect x="240" y="158" width="85" height="16" rx="3" fill="#166534" />
            <text x="246" y="169" fill="#FFFFFF" fontSize="8" fontWeight="bold">TIEMPO: ~65 MIN</text>
          </svg>
        );

      case 'blood-culture':
        // BacT/ALERT: Rotating drum, incubators, bottle slots with colorimetric CO2 sensors
        return (
          <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="400" height="240" rx="12" fill="#0F172A" />
            <rect x="50" y="40" width="300" height="165" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
            <rect x="50" y="40" width="300" height="18" rx="4" fill="#00853F" />
            <text x="65" y="53" fill="#FFFFFF" fontSize="9" fontWeight="bold">BacT/ALERT® 3D / VIRTUO®</text>
            {/* Incubation Drawers with Bottles */}
            <rect x="75" y="75" width="150" height="115" rx="6" fill="#1E293B" />
            <text x="85" y="92" fill="#38BDF8" fontSize="8" fontWeight="bold">INCUBACION CONTINUA 35°C</text>
            {[
              { x: 90, y: 105, col: '#10B981', alert: false },
              { x: 125, y: 105, col: '#F59E0B', alert: false },
              { x: 160, y: 105, col: '#EF4444', alert: true },
              { x: 195, y: 105, col: '#10B981', alert: false },
              { x: 90, y: 145, col: '#10B981', alert: false },
              { x: 125, y: 145, col: '#10B981', alert: false },
              { x: 160, y: 145, col: '#10B981', alert: false },
              { x: 195, y: 145, col: '#10B981', alert: false }
            ].map((bottle, idx) => (
              <g key={idx}>
                <rect x={bottle.x} y={bottle.y} width="22" height="32" rx="4" fill="#0F172A" stroke="#64748B" />
                <rect x={bottle.x + 4} y={bottle.y + 4} width="14" height="10" rx="2" fill={bottle.col} />
                <circle cx={bottle.x + 11} cy={bottle.y + 24} r="3" fill={bottle.alert ? '#EF4444' : '#22C55E'} />
              </g>
            ))}
            {/* Reflectometric Sensor Explanation */}
            <rect x="240" y="75" width="95" height="115" rx="6" fill="#020617" stroke="#334155" />
            <text x="248" y="95" fill="#FED100" fontSize="8" fontWeight="bold">DETECCION CO2</text>
            <text x="248" y="112" fill="#94A3B8" fontSize="7.5">Lectura óptica</text>
            <text x="248" y="124" fill="#94A3B8" fontSize="7.5">cada 10 minutos</text>
            <text x="248" y="142" fill="#22C55E" fontSize="7.5">Alerta temprana</text>
            <text x="248" y="154" fill="#22C55E" fontSize="7.5">en bacteriemia</text>
          </svg>
        );

      default:
        // Compact chemistry / fallback
        return (
          <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="400" height="240" rx="12" fill="#0F172A" />
            <rect x="60" y="45" width="280" height="150" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
            <rect x="60" y="45" width="280" height="16" rx="4" fill="#00853F" />
            <text x="75" y="57" fill="#FFFFFF" fontSize="9" fontWeight="bold">cobas c 111 ANALYZER</text>
            <circle cx="140" cy="125" r="35" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="140" cy="125" r="10" fill={primaryGreen} />
            <rect x="200" y="85" width="110" height="80" rx="6" fill="#0F172A" />
            <text x="210" y="105" fill="#38BDF8" fontSize="8" fontWeight="bold">ISE + FOTOMETRIA</text>
            <text x="210" y="125" fill="#94A3B8" fontSize="8">Na+, K+, Cl-</text>
            <text x="210" y="140" fill="#22C55E" fontSize="8">Urgencias y Rutina</text>
          </svg>
        );
    }
  };

  return (
    <div className={`equipment-graphic-container rounded-xl overflow-hidden shadow-md ${className}`}>
      {renderGraphic()}
    </div>
  );
}

