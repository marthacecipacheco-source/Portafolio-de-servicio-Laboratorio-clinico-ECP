import React, { useState, useEffect } from 'react';
import {
  Home,
  FileText,
  Microscope,
  Edit3,
  Mail,
  Search,
  ChevronLeft,
  ChevronRight,
  Check,
  ClipboardList,
  X,
  PhoneCall,
  Clock,
  MapPin,
  ShieldCheck,
  Building2,
  Syringe,
  Tag,
  AlertTriangle,
  Info,
  CheckCircle2
} from 'lucide-react';
import { EQUIPMENT_LIST } from './data/equipmentData';
import {
  CINCO_CORRECTOS,
  ORDEN_LLENADO_TUBOS,
  CRITERIOS_RECHAZO,
  VENOPUNCION_PROTOCOLO,
  MARCAJE_ROTULACION
} from './data/preanalyticalData';
import ExamSearch from './components/ExamSearch';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [techIndex, setTechIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [activeDetailModal, setActiveDetailModal] = useState(null); // 'correctos' | 'tubos' | 'rechazo' | null

  const currentEquip = EQUIPMENT_LIST[techIndex % EQUIPMENT_LIST.length];

  const modalSections = ['correctos', 'venopuncion', 'tubos', 'marcaje', 'rechazo'];
  const currentModalIndex = modalSections.indexOf(activeDetailModal);

  const handlePrevModalSection = () => {
    if (currentModalIndex > 0) {
      setActiveDetailModal(modalSections[currentModalIndex - 1]);
    } else {
      setActiveDetailModal(modalSections[modalSections.length - 1]);
    }
  };

  const handleNextModalSection = () => {
    if (currentModalIndex < modalSections.length - 1 && currentModalIndex !== -1) {
      setActiveDetailModal(modalSections[currentModalIndex + 1]);
    } else {
      setActiveDetailModal(modalSections[0]);
    }
  };

  // Auto-rotación del carrusel de tecnología cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % EQUIPMENT_LIST.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevTech = () => {
    setTechIndex((prev) => (prev - 1 + EQUIPMENT_LIST.length) % EQUIPMENT_LIST.length);
  };

  const handleNextTech = () => {
    setTechIndex((prev) => (prev + 1) % EQUIPMENT_LIST.length);
  };

  // Procedimientos y Recomendaciones (Preanalítica)
  const [recoIndex, setRecoIndex] = useState(0);
  const [venoStep, setVenoStep] = useState(0);

  const VENOPUNCION_STEPS = [
    {
      step: 1,
      title: '1. Insumos y Dispositivos',
      desc: 'Holder bioseguro, aguja 21G/22G o scalp con aleteo.',
      image: './preanalytical/insumos-venopuncion.png',
      tip: 'Verificar esterilidad y agotamiento de vacío.'
    },
    {
      step: 2,
      title: '2. Regla del Torniquete',
      desc: 'Colocar a 4 dedos sobre el pliegue. Máximo 1 minuto; esperar 3 min si se retira.',
      image: './preanalytical/torniquete.png',
      tip: 'Evita hemoconcentración y alteración de potasio.'
    },
    {
      step: 3,
      title: '3. Asepsia en Espiral',
      desc: 'Alcohol al 70% del centro a la periferia. Dejar secar totalmente al aire.',
      image: './preanalytical/desinfeccion.png',
      tip: 'En alcoholemia usar solo agua destilada.'
    },
    {
      step: 4,
      title: '4. Punción y Agotar Vacío',
      desc: 'Bisel hacia arriba (ángulo 15°-30°). Agotar vacío del tubo e invertir suavemente.',
      image: './preanalytical/precauciones-puncion.png',
      tip: 'Inversión lenta sin agitar bruscamente.'
    }
  ];

  const handlePrevReco = () => {
    setRecoIndex((prev) => (prev - 1 + 5) % 5);
  };

  const handleNextReco = () => {
    setRecoIndex((prev) => (prev + 1) % 5);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowSearchModal(true);
  };

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'portafolio') {
      setShowSearchModal(true);
    } else if (tabId === 'contacto') {
      setShowContactModal(true);
    } else if (tabId === 'tecnologia') {
      const techEl = document.getElementById('tecnologia-anchor');
      if (techEl) techEl.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'toma-muestra') {
      const preEl = document.getElementById('preanalitica-anchor');
      if (preEl) preEl.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="mockup-page-canvas">
      
      {/* 1. Header Navbar (100% Matching Reference) */}
      <header className="mockup-header">
        
        {/* Left: Official Ecopetrol Logo + Laboratorio Clínico JSM (sin el beker) */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }}
          onClick={() => handleNavClick('inicio')}
        >
          <img
            src="./logo-ecopetrol-brand.png"
            alt="Ecopetrol"
            style={{
              height: '42px',
              maxWidth: '180px',
              objectFit: 'contain',
              display: 'block'
            }}
          />
          <div
            style={{
              width: '1.5px',
              height: '32px',
              backgroundColor: '#94A3B8',
              opacity: 0.8
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.98rem',
                fontWeight: 800,
                color: '#0D4721',
                letterSpacing: '-0.01em'
              }}
            >
              Laboratorio
            </span>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.98rem',
                fontWeight: 800,
                color: '#007A33',
                letterSpacing: '-0.01em'
              }}
            >
              Clínico JSM
            </span>
          </div>
        </div>

        {/* Center: Menu Items */}
        <nav className="mockup-nav-links">
          <button
            onClick={() => handleNavClick('inicio')}
            className={`mockup-nav-item ${activeTab === 'inicio' ? 'active' : ''}`}
          >
            <Home size={18} color={activeTab === 'inicio' ? '#007A33' : '#334155'} />
            <span>Inicio</span>
          </button>

          <button
            onClick={() => handleNavClick('portafolio')}
            className={`mockup-nav-item ${activeTab === 'portafolio' ? 'active' : ''}`}
          >
            <FileText size={18} color={activeTab === 'portafolio' ? '#007A33' : '#334155'} />
            <span>Portafolio</span>
          </button>

          <button
            onClick={() => handleNavClick('tecnologia')}
            className={`mockup-nav-item ${activeTab === 'tecnologia' ? 'active' : ''}`}
          >
            <Microscope size={18} color={activeTab === 'tecnologia' ? '#007A33' : '#334155'} />
            <span>Tecnología</span>
          </button>

          <button
            onClick={() => handleNavClick('toma-muestra')}
            className={`mockup-nav-item ${activeTab === 'toma-muestra' ? 'active' : ''}`}
          >
            <Edit3 size={18} color={activeTab === 'toma-muestra' ? '#007A33' : '#334155'} />
            <span>Toma de muestra</span>
          </button>

          <button
            onClick={() => handleNavClick('contacto')}
            className={`mockup-nav-item ${activeTab === 'contacto' ? 'active' : ''}`}
          >
            <Mail size={18} color={activeTab === 'contacto' ? '#007A33' : '#334155'} />
            <span>Contacto</span>
          </button>
        </nav>

        {/* Right: Pill Search Box */}
        <form onSubmit={handleSearchSubmit} className="mockup-search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar examen o información..."
            className="mockup-search-input"
            onClick={() => setShowSearchModal(true)}
          />
          <button type="submit" className="mockup-search-btn" aria-label="Buscar">
            <Search size={16} />
          </button>
        </form>

      </header>

      {/* 2. Main Rounded Card with Green Border (Grosor Aumentado) */}
      <main className="mockup-main-card">
        
        {/* Top: Hero Banner con bacterióloga en desvanecido continuo invisible sin división */}
        <section className="mockup-hero-section">
          {/* Imagen de la bacterióloga con desvanecido gradual suave sin corte */}
          <img
            src="./hero-bacteriologa-feathered.png"
            alt="Bacterióloga en Laboratorio Clínico JSM"
            className="mockup-hero-bacteriologa"
            onError={(e) => {
              e.target.src = './foto-excelencia-bacteriologa.png';
            }}
          />

          {/* Text Content sobre fondo blanco limpio */}
          <div className="mockup-hero-content">
            <h1 className="mockup-hero-title">
              Excelencia y precisión <br />
              en el diagnóstico
            </h1>

            {/* Green curved accent swoosh con grosor aumentado */}
            <div style={{ margin: '4px 0 10px 0' }}>
              <svg width="170" height="16" viewBox="0 0 170 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 2 10 C 50 3, 110 3, 168 12" stroke="#74B816" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M 120 12 C 145 13, 160 13, 168 12" stroke="#A3E635" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <p className="mockup-hero-subtitle">
              Portafolio de servicios del <br />
              Laboratorio Clínico JSM Ecopetrol
            </p>
          </div>
        </section>

        {/* Línea curva verde divisoria entre Hero y Tecnología (Grosor aumentado para marcar la división) */}
        <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, backgroundColor: '#FFFFFF' }}>
          <svg viewBox="0 0 1100 24" preserveAspectRatio="none" style={{ width: '100%', height: '22px', display: 'block' }}>
            <path d="M0,4 C380,24 720,2 1100,18" fill="none" stroke="#74B816" strokeWidth="4" strokeLinecap="round" />
            <path d="M0,8 C380,28 720,6 1100,22" fill="none" stroke="#007A33" strokeWidth="2" opacity="0.4" />
          </svg>
        </div>

        {/* Middle: Nuestra Tecnología */}
        <section id="tecnologia-anchor" style={{ position: 'relative' }}>
          
          {/* Pill Badge Title */}
          <div className="mockup-pill-wrapper">
            <div className="mockup-pill-line" />
            <div className="mockup-pill-badge">
              <div className="mockup-pill-icon-circle">
                <Microscope size={15} color="#007A33" />
              </div>
              <span>Nuestra Tecnología</span>
            </div>
            <div className="mockup-pill-line right" />
          </div>

          <p className="mockup-pill-subtitle">
            Equipos de última generación para un diagnóstico confiable, oportuno y seguro.
          </p>

          {/* Carousel Slide */}
          <div className="mockup-tech-container">
            {/* Left Circular Arrow Button */}
            <button
              onClick={handlePrevTech}
              className="mockup-circle-arrow-btn"
              aria-label="Equipo anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Slide Content */}
            <div className="mockup-tech-content">
              {/* Equipment Photo desde la carpeta dist */}
              <div className="mockup-tech-img-box">
                <img
                  src={currentEquip.image || './Cobas-PRO.jpg'}
                  alt={currentEquip.name}
                  className="mockup-tech-img"
                  onError={(e) => {
                    // Fallback a cobas pro si la imagen específica no cargara
                    e.target.src = './Cobas-PRO.jpg';
                  }}
                />
              </div>

              {/* Equipment Details */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '6px' }}>
                  <h3 className="mockup-tech-title">
                    {currentEquip.name}
                  </h3>
                  <span className="mockup-roche-badge">
                    {currentEquip.manufacturer}
                  </span>
                </div>

                <div className="mockup-tech-subtitle">
                  {currentEquip.subtitle}
                </div>

                {/* Checklist with Green Left Vertical Line (Grosor aumentado) */}
                <div className="mockup-tech-checklist">
                  {currentEquip.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="mockup-check-item">
                      <div className="mockup-green-check-dot">
                        <Check size={12} strokeWidth={3.5} />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Circular Arrow Button */}
            <button
              onClick={handleNextTech}
              className="mockup-circle-arrow-btn"
              aria-label="Equipo siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="mockup-dots-row">
            {EQUIPMENT_LIST.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setTechIndex(dotIdx)}
                className={`mockup-dot ${(techIndex % EQUIPMENT_LIST.length) === dotIdx ? 'active' : ''}`}
                aria-label={`Equipo ${dotIdx + 1}: ${EQUIPMENT_LIST[dotIdx]?.name}`}
                title={EQUIPMENT_LIST[dotIdx]?.name}
              />
            ))}
          </div>

        </section>

        {/* Línea curva verde de onda divisoria entre Tecnología y Recomendaciones (Grosor aumentado) */}
        <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, marginTop: '12px', marginBottom: '4px' }}>
          <svg
            viewBox="0 0 1100 56"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '52px', display: 'block' }}
          >
            <defs>
              <linearGradient id="photoWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#007A33" />
                <stop offset="40%" stopColor="#74B816" />
                <stop offset="80%" stopColor="#84CC16" />
                <stop offset="100%" stopColor="#A3E635" />
              </linearGradient>
            </defs>
            <path
              d="M0,22 C180,48 380,4 600,32 C820,58 980,14 1100,28 L1100,56 L0,56 Z"
              fill="url(#photoWaveGrad)"
              opacity="0.9"
            />
            {/* Trazo superior grueso para marcar la división */}
            <path
              d="M0,22 C180,48 380,4 600,32 C820,58 980,14 1100,28"
              fill="none"
              stroke="#005A2B"
              strokeWidth="4.5"
            />
            <path
              d="M0,32 C200,56 420,14 650,40 C880,62 1000,22 1100,36 L1100,56 L0,56 Z"
              fill="#FFFFFF"
            />
            {/* Trazo inferior grueso para marcar la división */}
            <path
              d="M0,32 C200,56 420,14 650,40 C880,62 1000,22 1100,36"
              fill="none"
              stroke="#74B816"
              strokeWidth="4.5"
            />
          </svg>
        </div>

        {/* Bottom: Procedimientos y Recomendaciones (Navegable paso a paso, sin sub-menús) */}
        <section id="preanalitica-anchor" className="mockup-recommendations-section">
          
          {/* Pill Badge Title */}
          <div className="mockup-pill-wrapper" style={{ marginTop: '4px', marginBottom: '16px' }}>
            <div className="mockup-pill-line" />
            <div className="mockup-pill-badge">
              <div className="mockup-pill-icon-circle">
                <ClipboardList size={15} color="#007A33" />
              </div>
              <span>Procedimientos y Recomendaciones</span>
            </div>
            <div className="mockup-pill-line right" />
          </div>

          {/* Carrusel compacto con flechas de avance (Sin sub-menú) */}
          <div className="mockup-reco-container">
            {/* Flecha Izquierda */}
            <button
              onClick={handlePrevReco}
              className="mockup-circle-arrow-btn"
              aria-label="Procedimiento anterior"
              title="Procedimiento anterior"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Fila de 3 tarjetas visibles */}
            <div className="mockup-cards-grid">
              {[0, 1, 2].map((offset) => {
                const cardIdx = (recoIndex + offset) % 5;

                // 1. LOS 5 CORRECTOS
                if (cardIdx === 0) {
                  return (
                    <div
                      key="card-correctos"
                      className="mockup-card-item mockup-card-flexible"
                      onClick={() => setActiveDetailModal('correctos')}
                      style={{ cursor: 'pointer' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flex: 1 }}>
                        <img
                          src="./tube-hand.png"
                          alt="Mano con tubo"
                          style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            flexShrink: 0,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                          }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h4 className="mockup-card-title" style={{ marginBottom: '6px' }}>
                            Los 5 correctos <br />
                            de la toma de muestra
                          </h4>
                          <div className="mockup-card-bullets">
                            {[
                              '1. Paciente correcto (identificación activa)',
                              '2. Examen correcto (orden médica vs tubo)',
                              '3. Tubo / contenedor correcto',
                              '4. Momento correcto (ayuno 10-12h)',
                              '5. Condición correcta (bioseguridad)'
                            ].map((bullet, idx) => (
                              <div key={idx} className="mockup-card-bullet" style={{ fontSize: '0.74rem' }}>
                                <Check size={12} color="#74B816" strokeWidth={3.5} />
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: '6px', borderTop: '1px solid #F1F5F9' }}>
                        <span style={{ fontSize: '0.7rem', color: '#007A33', fontWeight: 700 }}>
                          Seguridad del paciente
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextReco();
                          }}
                          className="mockup-circle-arrow-btn"
                          style={{ width: '30px', height: '30px' }}
                          aria-label="Siguiente procedimiento"
                          title="Siguiente"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  );
                }

                // 2. TÉCNICA DE VENOPUNCIÓN (CON IMAGEN EXPLICANDO Y MINI-PASOS)
                if (cardIdx === 1) {
                  return (
                    <div
                      key="card-venopuncion"
                      className="mockup-card-item mockup-card-flexible"
                      onClick={() => setActiveDetailModal('venopuncion')}
                      style={{ cursor: 'pointer' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '4px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Syringe size={15} color="#7C3AED" />
                          </div>
                          <h4 className="mockup-card-title" style={{ margin: 0 }}>
                            Técnica de Venopunción
                          </h4>
                        </div>
                        <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#7C3AED', backgroundColor: '#F3E8FF', padding: '2px 8px', borderRadius: '999px' }}>
                          Paso {venoStep + 1} de {VENOPUNCION_STEPS.length}
                        </span>
                      </div>

                      {/* Imagen explicando y contenido interactivo */}
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', margin: '4px 0', flex: 1 }}>
                        <div style={{
                          width: '84px',
                          height: '72px',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          border: '1.5px solid #E9D5FF',
                          backgroundColor: '#FAF5FF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <img
                            src={VENOPUNCION_STEPS[venoStep].image}
                            alt={VENOPUNCION_STEPS[venoStep].title}
                            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '2px' }}
                          />
                        </div>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1E293B', marginBottom: '2px' }}>
                            {VENOPUNCION_STEPS[venoStep].title}
                          </div>
                          <div style={{ fontSize: '0.73rem', color: '#475569', lineHeight: 1.25, marginBottom: '3px' }}>
                            {VENOPUNCION_STEPS[venoStep].desc}
                          </div>
                          <div style={{ fontSize: '0.69rem', fontWeight: 700, color: '#7C3AED' }}>
                            💡 {VENOPUNCION_STEPS[venoStep].tip}
                          </div>
                        </div>
                      </div>

                      {/* Controles para pasar los pasos de la venopunción */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: '6px', borderTop: '1px solid #F1F5F9' }}>
                        <div style={{ display: 'flex', gap: '4px' }}>
                          {VENOPUNCION_STEPS.map((_, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setVenoStep(sIdx);
                              }}
                              style={{
                                width: venoStep === sIdx ? '16px' : '6px',
                                height: '6px',
                                borderRadius: '999px',
                                backgroundColor: venoStep === sIdx ? '#7C3AED' : '#CBD5E1',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                              }}
                              aria-label={`Paso ${sIdx + 1}`}
                            />
                          ))}
                        </div>

                        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setVenoStep((prev) => (prev - 1 + VENOPUNCION_STEPS.length) % VENOPUNCION_STEPS.length);
                            }}
                            className="mockup-mini-step-btn"
                            title="Paso anterior de venopunción"
                          >
                            <ChevronLeft size={14} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setVenoStep((prev) => (prev + 1) % VENOPUNCION_STEPS.length);
                            }}
                            className="mockup-mini-step-btn"
                            title="Paso siguiente de venopunción"
                          >
                            <ChevronRight size={14} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNextReco();
                            }}
                            className="mockup-circle-arrow-btn"
                            style={{ width: '30px', height: '30px', marginLeft: '4px' }}
                            aria-label="Siguiente procedimiento"
                            title="Siguiente procedimiento"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }

                // 3. ORDEN DE LLENADO DE TUBOS (CON LA FOTO BONITA: dist/Orden de llenado.png)
                if (cardIdx === 2) {
                  return (
                    <div
                      key="card-tubos"
                      className="mockup-card-item mockup-card-flexible"
                      onClick={() => setActiveDetailModal('tubos')}
                      style={{ cursor: 'pointer' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '2px' }}>
                        <h4 className="mockup-card-title" style={{ margin: 0 }}>
                          Orden de llenado de tubos
                        </h4>
                        <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#0369A1', backgroundColor: '#E0F2FE', padding: '2px 8px', borderRadius: '999px' }}>
                          Secuencia CLSI
                        </span>
                      </div>

                      {/* Foto bonita subida por el usuario: ./orden-de-llenado.png */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '2px 0',
                          width: '100%',
                          flex: 1
                        }}
                      >
                        <img
                          src="./orden-de-llenado.png"
                          alt="Orden de llenado oficial de tubos: Botella de Hemocultivo, Celeste, Amarillo, Rojo, Verde, Lila"
                          style={{ maxHeight: '92px', width: '100%', objectFit: 'contain' }}
                          onError={(e) => {
                            e.target.src = './tubes-order.png';
                          }}
                        />
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: '6px', borderTop: '1px solid #F1F5F9' }}>
                        <span style={{ fontSize: '0.69rem', color: '#64748B', fontWeight: 600 }}>
                          1° Hemocultivo ➜ 2° Citrato ➜ 3° Gel ...
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextReco();
                          }}
                          className="mockup-circle-arrow-btn"
                          style={{ width: '30px', height: '30px' }}
                          aria-label="Siguiente procedimiento"
                          title="Siguiente"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  );
                }

                // 4. MARCAJE Y ROTULACIÓN DE MUESTRAS
                if (cardIdx === 3) {
                  return (
                    <div
                      key="card-marcaje"
                      className="mockup-card-item mockup-card-flexible"
                      onClick={() => setActiveDetailModal('marcaje')}
                      style={{ cursor: 'pointer' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flex: 1 }}>
                        <div style={{
                          width: '54px',
                          height: '54px',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          backgroundColor: '#FFFBEB',
                          border: '1.5px solid #FDE68A',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <img
                            src="./preanalytical/marcaje-tubos.png"
                            alt="Marcaje y rotulación de tubos"
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                          />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h4 className="mockup-card-title" style={{ marginBottom: '6px' }}>
                            Marcaje y Rotulación <br />
                            de Muestras
                          </h4>
                          <div className="mockup-card-bullets">
                            {[
                              'Consulta Externa: 4 iniciales + ID + # lab',
                              'Hospitalización: 2 nombres + 2 apellidos',
                              'Pretransfusionales: Sin enmiendas',
                              'Orinas: Rotular el cuerpo (nunca tapa)'
                            ].map((bullet, idx) => (
                              <div key={idx} className="mockup-card-bullet" style={{ fontSize: '0.74rem' }}>
                                <Check size={12} color="#D97706" strokeWidth={3.5} />
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: '6px', borderTop: '1px solid #F1F5F9' }}>
                        <span style={{ fontSize: '0.7rem', color: '#D97706', fontWeight: 700 }}>
                          Trazabilidad unívoca
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextReco();
                          }}
                          className="mockup-circle-arrow-btn"
                          style={{ width: '30px', height: '30px' }}
                          aria-label="Siguiente procedimiento"
                          title="Siguiente"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  );
                }

                // 5. CRITERIOS DE RECHAZO DE MUESTRAS
                return (
                  <div
                    key="card-rechazo"
                    className="mockup-card-item mockup-card-flexible"
                    onClick={() => setActiveDetailModal('rechazo')}
                    style={{ cursor: 'pointer' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flex: 1 }}>
                      <img
                        src="./warning-rejection.png"
                        alt="Advertencia criterios de rechazo"
                        style={{
                          width: '50px',
                          height: '50px',
                          objectFit: 'contain',
                          flexShrink: 0
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4 className="mockup-card-title" style={{ marginBottom: '6px' }}>
                          Criterios de rechazo <br />
                          de muestras
                        </h4>
                        <div className="mockup-card-bullets">
                          {[
                            'Muestra hemolizada (K+, LDH, AST)',
                            'Microcoágulos en EDTA o Citrato',
                            'Volumen insuficiente (desvío de aforo)',
                            'Identificación dudosa o incompleta',
                            'Alcoholemia con asepsia de alcohol'
                          ].map((bullet, idx) => (
                            <div key={idx} className="mockup-card-bullet" style={{ fontSize: '0.74rem' }}>
                              <Check size={12} color="#DC2626" strokeWidth={3.5} />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: '6px', borderTop: '1px solid #F1F5F9' }}>
                      <span style={{ fontSize: '0.7rem', color: '#DC2626', fontWeight: 700 }}>
                        Control preanalítico
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextReco();
                        }}
                        className="mockup-circle-arrow-btn"
                        style={{ width: '30px', height: '30px' }}
                        aria-label="Siguiente procedimiento"
                        title="Siguiente"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Flecha Derecha */}
            <button
              onClick={handleNextReco}
              className="mockup-circle-arrow-btn"
              aria-label="Procedimiento siguiente"
              title="Procedimiento siguiente"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="mockup-dots-row" style={{ marginTop: '14px' }}>
            {[
              'Los 5 Correctos',
              'Técnica de Venopunción',
              'Orden de Tubos',
              'Marcaje y Rotulación',
              'Criterios de Rechazo'
            ].map((name, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setRecoIndex(dotIdx)}
                className={`mockup-dot ${(recoIndex % 5) === dotIdx ? 'active' : ''}`}
                aria-label={`Procedimiento ${dotIdx + 1}: ${name}`}
                title={name}
              />
            ))}
          </div>

        </section>

      </main>

      {/* =====================================================================
          INTERACTIVE MODALS
          Mantienen la página principal 100% limpia e idéntica a la foto,
          pero brindan acceso instantáneo a toda la información médica y técnica
          ===================================================================== */}

      {/* 1. Modal: Buscador de Exámenes y Portafolio */}
      {showSearchModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.7)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '20px'
          }}
          onClick={() => setShowSearchModal(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '1080px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                position: 'sticky',
                top: 0,
                zIndex: 10,
                backgroundColor: '#FFFFFF',
                padding: '16px 24px',
                borderBottom: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#007A33' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0D4721', margin: 0 }}>
                  Catálogo y Buscador de Exámenes de Laboratorio
                </h3>
              </div>
              <button
                onClick={() => setShowSearchModal(false)}
                style={{
                  background: '#F1F5F9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '24px' }}>
              <ExamSearch
                initialQuery={searchQuery}
                selectedAreaFilter="Todas"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. Modal: Contacto y Líneas Médicas */}
      {showContactModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.7)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '20px'
          }}
          onClick={() => setShowContactModal(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '640px',
              width: '100%',
              padding: '32px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0D4721', margin: 0 }}>
                Contacto y Canales Institucionales
              </h3>
              <button
                onClick={() => setShowContactModal(false)}
                style={{
                  background: '#F1F5F9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              {/* Celular y Conmutador */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                {/* Celular */}
                <div style={{ padding: '16px', borderRadius: '14px', backgroundColor: '#F0FDF4', border: '1.5px solid #86EFAC' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#007A33', fontWeight: 700, marginBottom: '6px', fontSize: '0.85rem' }}>
                    <PhoneCall size={17} />
                    <span>Celular de Contacto</span>
                  </div>
                  <a
                    href="tel:3102122463"
                    style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0D4721', textDecoration: 'none', display: 'block' }}
                  >
                    310 212 2463
                  </a>
                  <div style={{ fontSize: '0.75rem', color: '#166534', marginTop: '4px' }}>
                    Línea directa Laboratorio Clínico JSM
                  </div>
                </div>

                {/* Conmutador y Extensión */}
                <div style={{ padding: '16px', borderRadius: '14px', backgroundColor: '#F8FAFC', border: '1.5px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E293B', fontWeight: 700, marginBottom: '6px', fontSize: '0.85rem' }}>
                    <Building2 size={17} color="#007A33" />
                    <span>Conmutador</span>
                  </div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A' }}>
                    310 315 8600
                  </div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#007A33', marginTop: '3px' }}>
                    Extensión: 48367
                  </div>
                </div>
              </div>

              {/* Horario de Toma de Muestra Ambulatoria */}
              <div style={{ padding: '16px', borderRadius: '14px', backgroundColor: '#FFFBEB', border: '1.5px solid #FDE68A' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#B45309', fontWeight: 700, marginBottom: '6px', fontSize: '0.88rem' }}>
                  <Clock size={18} color="#D97706" />
                  <span>Horario de Toma de Muestra Ambulatoria</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#92400E' }}>
                    6:00 a.m. a 7:30 a.m.
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#78350F', lineHeight: 1.45 }}>
                  • Horario de atención ambulatoria: de 6:00 a.m. a 7:30 a.m.<br />
                  • Pacientes de urgencias y hospitalización: atención continua las 24 horas, los 365 días del año.
                </div>
              </div>

              {/* Correo Electrónico Institucional */}
              <div style={{ padding: '16px', borderRadius: '14px', backgroundColor: '#F8FAFC', border: '1.5px solid #E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E293B', fontWeight: 700, marginBottom: '6px', fontSize: '0.85rem' }}>
                  <Mail size={17} color="#007A33" />
                  <span>Correo Electrónico</span>
                </div>
                <a
                  href="mailto:PSMLaboratorio@ecopetrol.com.co"
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#007A33',
                    textDecoration: 'none',
                    wordBreak: 'break-all'
                  }}
                >
                  PSMLaboratorio@ecopetrol.com.co
                </a>
                <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>
                  Canal oficial para solicitudes médicas, requerimientos y coordinación de muestras
                </div>
              </div>
            </div>

            <div style={{ marginTop: '24px', textAlign: 'right' }}>
              <button
                onClick={() => setShowContactModal(false)}
                style={{
                  padding: '9px 24px',
                  backgroundColor: '#007A33',
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Modal: Visor Interactivo de Procedimientos y Recomendaciones */}
      {activeDetailModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.72)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '16px'
          }}
          onClick={() => setActiveDetailModal(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              padding: '26px 30px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              position: 'relative',
              border: '1.5px solid #CBD5E1'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal con Selector de Secciones */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #E2E8F0', paddingBottom: '14px' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0D4721', margin: 0 }}>
                  {activeDetailModal === 'correctos' && 'Los 5 Correctos de la Toma de Muestra'}
                  {activeDetailModal === 'venopuncion' && 'Protocolo de Venopunción y Procedimiento Correcto'}
                  {activeDetailModal === 'tubos' && 'Orden de Llenado de Tubos y Exámenes Asociados'}
                  {activeDetailModal === 'marcaje' && 'Protocolo de Marcaje y Rotulación de Muestras'}
                  {activeDetailModal === 'rechazo' && 'Criterios de Rechazo y Casos Especiales'}
                </h3>
              </div>
              <button
                onClick={() => setActiveDetailModal(null)}
                style={{
                  background: '#F1F5F9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  transition: 'background 0.2s'
                }}
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Barra de navegación secuencial (sin sub-menú) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
                padding: '10px 16px',
                backgroundColor: '#F8FAFC',
                borderRadius: '12px',
                border: '1px solid #E2E8F0'
              }}
            >
              <button
                onClick={handlePrevModalSection}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  backgroundColor: '#FFFFFF',
                  color: '#334155',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  transition: 'background 0.15s'
                }}
              >
                <ChevronLeft size={16} />
                <span>Anterior</span>
              </button>

              <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0F172A' }}>
                Protocolo {currentModalIndex + 1} de {modalSections.length}: {
                  activeDetailModal === 'correctos' ? 'Los 5 Correctos' :
                  activeDetailModal === 'venopuncion' ? 'Técnica de Venopunción' :
                  activeDetailModal === 'tubos' ? 'Orden de Llenado de Tubos' :
                  activeDetailModal === 'marcaje' ? 'Marcaje y Rotulación' :
                  'Criterios de Rechazo'
                }
              </span>

              <button
                onClick={handleNextModalSection}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  backgroundColor: '#FFFFFF',
                  color: '#334155',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  transition: 'background 0.15s'
                }}
              >
                <span>Siguiente</span>
                <ChevronRight size={16} />
              </button>
            </div>

            {/* 1. SECCIÓN: 5 CORRECTOS */}
            {activeDetailModal === 'correctos' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ padding: '12px 18px', backgroundColor: '#FEF2F2', borderRadius: '10px', borderLeft: '4px solid #DC2626', fontSize: '0.85rem', color: '#991B1B', fontWeight: 600 }}>
                  «¡¡¡No existe ningún examen en el Laboratorio que pueda mejorar los resultados de una muestra mal tomada!!!»
                </div>
                {CINCO_CORRECTOS.map((item) => (
                  <div key={item.number} style={{ padding: '16px', borderRadius: '14px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <strong style={{ color: '#0F172A', fontSize: '1rem' }}>{item.title}</strong>
                      <span style={{ fontSize: '0.74rem', fontWeight: 800, padding: '3px 10px', borderRadius: '6px', backgroundColor: '#E2E8F0', color: '#334155' }}>
                        {item.badge}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '8px' }}>{item.description}</p>
                    <ul style={{ paddingLeft: '20px', fontSize: '0.82rem', color: '#1E293B', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {item.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* 2. SECCIÓN: PROTOCOLO DE VENOPUNCIÓN (CON IMÁGENES EXPLICANDO) */}
            {activeDetailModal === 'venopuncion' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ padding: '12px 18px', backgroundColor: '#F5F3FF', borderRadius: '10px', borderLeft: '4px solid #7C3AED', fontSize: '0.85rem', color: '#5B21B6' }}>
                  <strong>Calidad de la Punción:</strong> Recuerde que de la calidad de la punción depende la calidad de la muestra, el analito a medir, el reporte del resultado y finalmente la conducta médica.
                </div>

                {/* Galería Visual de Pasos de Venopunción con Imágenes Explicativas */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                  <div style={{ padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
                    <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '6px' }}>
                      <img src="./preanalytical/insumos-venopuncion.png" alt="Insumos" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#0F172A', marginBottom: '2px' }}>1. Insumos Aprobados</div>
                    <div style={{ fontSize: '0.74rem', color: '#64748B' }}>Aguja 21G/22G o scalp con holder bioseguro</div>
                  </div>

                  <div style={{ padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
                    <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '6px' }}>
                      <img src="./preanalytical/torniquete.png" alt="Torniquete" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#B91C1C', marginBottom: '2px' }}>2. Torniquete &lt; 1 min</div>
                    <div style={{ fontSize: '0.74rem', color: '#64748B' }}>Si excede 1 min, soltar y esperar 3 minutos</div>
                  </div>

                  <div style={{ padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
                    <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '6px' }}>
                      <img src="./preanalytical/desinfeccion.png" alt="Desinfección" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#007A33', marginBottom: '2px' }}>3. Asepsia en Espiral</div>
                    <div style={{ fontSize: '0.74rem', color: '#64748B' }}>Alcohol al 70% seco. En alcoholemia: agua destilada</div>
                  </div>

                  <div style={{ padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
                    <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '6px' }}>
                      <img src="./preanalytical/precauciones-puncion.png" alt="Punción" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#1D4ED8', marginBottom: '2px' }}>4. Punción y Vacío</div>
                    <div style={{ fontSize: '0.74rem', color: '#64748B' }}>Bisel hacia arriba a 15°-30° y agotar vacío</div>
                  </div>
                </div>

                {/* Insumos Aprobados */}
                <div style={{ padding: '16px', borderRadius: '14px', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
                  <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0D4721', marginBottom: '10px' }}>
                    Insumos y Dispositivos Aprobados para Venopunción en PSM:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                    {VENOPUNCION_PROTOCOLO.insumosAprobados.map((ins, idx) => (
                      <div key={idx} style={{ padding: '10px 12px', borderRadius: '8px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '0.8rem' }}>
                        <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>{ins.name}</div>
                        <div style={{ color: '#64748B' }}>{ins.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Normas Críticas y Precauciones */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {VENOPUNCION_PROTOCOLO.normasCriticas.map((norma, idx) => (
                    <div key={idx} style={{ padding: '14px 16px', borderRadius: '12px', borderLeft: `5px solid ${norma.color}`, backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <strong style={{ color: '#0F172A', fontSize: '0.94rem' }}>{norma.titulo}</strong>
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', backgroundColor: '#FFFFFF', color: norma.color, border: `1px solid ${norma.color}` }}>
                          {norma.badge}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: 1.45, margin: 0 }}>
                        {norma.contenido}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. SECCIÓN: ORDEN DE LLENADO DE TUBOS */}
            {activeDetailModal === 'tubos' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '12px 16px', backgroundColor: '#EFF6FF', borderRadius: '10px', borderLeft: '4px solid #1D4ED8', fontSize: '0.85rem', color: '#1E40AF' }}>
                  <strong>Estándar Internacional CLSI GP41-A6 & Ecopetrol:</strong> Llenar en este orden estricto para evitar la contaminación cruzada de aditivos entre tubos y asegurar la precisión diagnóstica.
                </div>

                {/* Imagen del orden de tubos con la foto bonita dist/Orden de llenado.png */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', backgroundColor: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <img
                    src="./orden-de-llenado.png"
                    alt="Orden de tubos oficial: Botella de Hemocultivo, Celeste, Amarillo, Rojo, Verde, Lila"
                    style={{ maxHeight: '180px', width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
                    onError={(e) => {
                      e.target.src = './tubes-order.png';
                    }}
                  />
                </div>

                {ORDEN_LLENADO_TUBOS.map((tube) => (
                  <div key={tube.order} style={{ padding: '14px 16px', borderRadius: '12px', borderLeft: `5px solid ${tube.capColor}`, border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '8px' }}>
                      <strong style={{ color: '#0F172A', fontSize: '0.98rem' }}>{tube.order}°. {tube.tubeName}</strong>
                      <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#007A33', backgroundColor: '#DCFCE7', padding: '2px 8px', borderRadius: '6px' }}>
                        Mezcla: {tube.inversions}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#475569', marginBottom: '4px' }}>
                      <strong>Aditivo:</strong> {tube.additive}
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#1E293B', marginBottom: '6px' }}>
                      {tube.purpose}
                    </div>
                    {tube.recommendations && (
                      <div style={{ fontSize: '0.8rem', color: '#0369A1', backgroundColor: '#F0F9FF', padding: '6px 10px', borderRadius: '6px', marginBottom: '6px' }}>
                        <strong>Recomendación:</strong> {tube.recommendations}
                      </div>
                    )}
                    {tube.commonExams && (
                      <div style={{ fontSize: '0.78rem', color: '#475569' }}>
                        <strong>Exámenes frecuentes:</strong> {tube.commonExams.join(' • ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* 4. SECCIÓN: MARCAJE Y ROTULACIÓN */}
            {activeDetailModal === 'marcaje' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '12px 16px', backgroundColor: '#FFFBEB', borderRadius: '10px', borderLeft: '4px solid #D97706', fontSize: '0.85rem', color: '#92400E' }}>
                  <strong>Trazabilidad y Seguridad del Paciente:</strong> Las muestras sin identificación o con identificación errónea no se devolverán al servicio; se descartarán inmediatamente y se tomarán nuevamente.
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {MARCAJE_ROTULACION.reglas.map((regla, idx) => (
                    <div key={idx} style={{ padding: '14px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <strong style={{ color: '#0F172A', fontSize: '0.96rem' }}>{regla.area}</strong>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706' }}>
                          {regla.requisito}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.84rem', color: '#334155', margin: 0 }}>
                        {regla.descripcion}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. SECCIÓN: CRITERIOS DE RECHAZO */}
            {activeDetailModal === 'rechazo' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ padding: '12px 16px', backgroundColor: '#FEF2F2', borderRadius: '10px', borderLeft: '4px solid #DC2626', fontSize: '0.85rem', color: '#991B1B' }}>
                  <strong>Criterios de Rechazo Institucionales:</strong> Muestras no conformes que comprometen la exactitud analítica y requieren notificación inmediata al servicio solicitante.
                </div>
                {CRITERIOS_RECHAZO.map((crit) => (
                  <div key={crit.id} style={{ padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <strong style={{ color: '#0F172A', fontSize: '0.96rem' }}>{crit.title}</strong>
                      <span style={{ padding: '2px 8px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 800, backgroundColor: '#FEE2E2', color: '#DC2626' }}>
                        {crit.severity}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#475569', marginBottom: '4px' }}>
                      <strong>Causa:</strong> {crit.reason}
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#B91C1C', marginBottom: '4px' }}>
                      <strong>Impacto Clínico:</strong> {crit.impact}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#007A33', fontWeight: 600 }}>
                      Acción: {crit.action}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Footer con Navegación tipo "Pasar y Revisar" */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
              <button
                onClick={handlePrevModalSection}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  backgroundColor: '#F1F5F9',
                  color: '#334155',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <ChevronLeft size={16} />
                <span>Anterior</span>
              </button>

              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748B' }}>
                Sección {currentModalIndex !== -1 ? currentModalIndex + 1 : 1} de 5
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={handleNextModalSection}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    backgroundColor: '#007A33',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span>Siguiente</span>
                  <ChevronRight size={16} />
                </button>

                <button
                  onClick={() => setActiveDetailModal(null)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#E2E8F0',
                    color: '#475569',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Cerrar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
