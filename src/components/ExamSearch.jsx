import React, { useState, useMemo } from 'react';
import MASTER_EXAMS from '../data/masterExamsCatalog.json';
import ExamDetailModal from './ExamDetailModal';
import {
  Search,
  Filter,
  X,
  FileText,
  Clock,
  TestTube,
  CheckCircle2,
  ChevronRight,
  Database,
  Sparkles,
  AlertCircle,
  Send,
  Layers
} from 'lucide-react';

export default function ExamSearch({ selectedAreaFilter, onClearAreaFilter, initialQuery }) {
  const [searchTerm, setSearchTerm] = useState(initialQuery || '');
  const [activeArea, setActiveArea] = useState(selectedAreaFilter || 'Todas');
  const [selectedExam, setSelectedExam] = useState(null);
  const [visibleCount, setVisibleCount] = useState(24);

  // Sync external search query from navbar
  React.useEffect(() => {
    if (initialQuery !== undefined && initialQuery !== null) {
      setSearchTerm(initialQuery);
    }
  }, [initialQuery]);

  // Sync external area selection if provided from ServicesPortfolio
  React.useEffect(() => {
    if (selectedAreaFilter) {
      setActiveArea(selectedAreaFilter);
    }
  }, [selectedAreaFilter]);

  // Reset pagination on filter or search change
  React.useEffect(() => {
    setVisibleCount(24);
  }, [searchTerm, activeArea]);

  // Clean string helper for diacritic-insensitive searching
  const normalizeText = (text) => {
    if (!text) return '';
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  // Filtered list from Master Catalog (285 official exams)
  const filteredExams = useMemo(() => {
    const rawTerm = searchTerm.trim();
    const term = normalizeText(rawTerm);
    const tokens = term ? term.split(/\s+/).filter(Boolean) : [];

    return MASTER_EXAMS.filter((exam) => {
      // Area match
      const examAreaNorm = normalizeText(exam.area);
      const activeAreaNorm = normalizeText(activeArea);

      let matchesArea = false;
      if (activeArea === 'Todas') {
        matchesArea = true;
      } else if (examAreaNorm === activeAreaNorm) {
        matchesArea = true;
      } else if (activeAreaNorm.includes('hematolog') && examAreaNorm.includes('hematolog')) {
        matchesArea = true;
      } else if (activeAreaNorm.includes('remisi') && examAreaNorm.includes('remisi')) {
        matchesArea = true;
      } else if (activeAreaNorm.includes('especial') && examAreaNorm.includes('especial')) {
        matchesArea = true;
      } else if (activeAreaNorm.includes('inmuno') && examAreaNorm.includes('inmuno')) {
        matchesArea = true;
      }

      if (!matchesArea) return false;
      if (!term) return true;

      const cupsNorm = normalizeText(exam.cups);
      const nameNorm = normalizeText(exam.name);
      const utilityNorm = normalizeText(exam.clinicalUtility);
      const sampleNorm = normalizeText(exam.sampleType);
      const methodNorm = normalizeText(exam.methodology);
      const logisticsNorm = normalizeText(exam.logistics);
      const keywordsNorm = exam.keywords ? exam.keywords.map((k) => normalizeText(k)) : [];

      // Direct phrase match
      if (
        cupsNorm.includes(term) ||
        nameNorm.includes(term) ||
        utilityNorm.includes(term) ||
        sampleNorm.includes(term) ||
        logisticsNorm.includes(term)
      ) {
        return true;
      }

      // Multi-token match: all typed words must match at least one relevant field
      return tokens.every(
        (tok) =>
          cupsNorm.includes(tok) ||
          nameNorm.includes(tok) ||
          utilityNorm.includes(tok) ||
          sampleNorm.includes(tok) ||
          methodNorm.includes(tok) ||
          logisticsNorm.includes(tok) ||
          keywordsNorm.some((k) => k.includes(tok))
      );
    });
  }, [searchTerm, activeArea]);

  // Area buttons corresponding to Excel sheets
  const areasList = [
    { name: 'Todas', label: 'Todas (285)' },
    { name: 'Inmunoquímica', label: 'Inmunoquímica (68)' },
    { name: 'Hematología', label: 'Hematología (13)' },
    { name: 'Pruebas Especiales', label: 'Pruebas Especiales (4)' },
    { name: 'Remisión', label: 'Remisión (200)' }
  ];

  return (
    <div id="buscador" style={{ padding: '4px 0 20px 0', backgroundColor: 'transparent' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px auto' }}>
          <div className="section-badge" style={{ margin: '0 auto 12px auto' }}>
            <Search size={15} color="#00853F" />
            <span>Directorio y Catálogo Diagnóstico</span>
          </div>
          <h2 className="section-title">
            Buscador de Exámenes de Laboratorio
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Consulte rápidamente por código CUPS, nombre de la prueba o coincidencias parciales.
            Acceda a la ficha técnica oficial con requisitos preanalíticos, tipo de muestra y parámetros diagnósticos.
          </p>
        </div>

        {/* Official Catalog Notice Banner */}
        <div
          style={{
            backgroundColor: '#F0FDF4',
            border: '1px solid #BBF7D0',
            borderRadius: '12px',
            padding: '12px 18px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Database size={18} color="#00853F" />
            <div style={{ fontSize: '0.85rem', color: '#166534' }}>
              <strong>Catálogo Oficial Maestro Ecopetrol:</strong> 285 determinaciones clínicas, pruebas especializadas y exámenes de remisión con información técnica y analítica oficial.
            </div>
          </div>
          <span
            style={{
              padding: '4px 12px',
              backgroundColor: '#00853F',
              color: '#FFFFFF',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 700
            }}
          >
            285 Exámenes Disponibles
          </span>
        </div>

        {/* Search & Filter Controls */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
            border: '1px solid #E2E8F0',
            marginBottom: '32px'
          }}
        >
          {/* Search Input Bar */}
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <div
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#00853F',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Search size={22} />
            </div>

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por código CUPS (ej. 906272, 903872), nombre (ej. Glucosa, Hemograma, Troponina) o términos (ej. folico, embarazo, orina)..."
              style={{
                width: '100%',
                padding: '16px 48px 16px 52px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                borderRadius: '12px',
                border: '2px solid #CBD5E1',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                backgroundColor: '#F8FAFC',
                color: '#0F172A',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => (e.target.style.borderColor = '#00853F')}
              onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
            />

            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: '#94A3B8',
                  cursor: 'pointer',
                  padding: '4px'
                }}
                aria-label="Limpiar búsqueda"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Area Filter Pills */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Filter size={15} color="#00853F" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#475569' }}>
                Filtrar por Área Analítica:
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {areasList.map((areaObj) => {
                const isSelected =
                  activeArea.toLowerCase() === areaObj.name.toLowerCase() ||
                  (activeArea.toLowerCase().includes('hematolog') && areaObj.name === 'Hematología') ||
                  (activeArea.toLowerCase().includes('remisi') && areaObj.name === 'Remisión') ||
                  (activeArea.toLowerCase().includes('inmuno') && areaObj.name === 'Inmunoquímica') ||
                  (activeArea.toLowerCase().includes('especial') && areaObj.name === 'Pruebas Especiales');

                return (
                  <button
                    key={areaObj.name}
                    onClick={() => {
                      setActiveArea(areaObj.name);
                      if (onClearAreaFilter && areaObj.name === 'Todas') onClearAreaFilter();
                    }}
                    style={{
                      padding: '7px 14px',
                      borderRadius: '8px',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: isSelected ? '1.5px solid #00853F' : '1px solid #E2E8F0',
                      backgroundColor: isSelected ? '#00853F' : '#FFFFFF',
                      color: isSelected ? '#FFFFFF' : '#334155',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {areaObj.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result Count and Active Filters */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '18px',
              paddingTop: '16px',
              borderTop: '1px solid #F1F5F9',
              fontSize: '0.825rem',
              color: '#64748B',
              flexWrap: 'wrap',
              gap: '8px'
            }}
          >
            <div>
              Mostrando <strong style={{ color: '#0F172A' }}>{filteredExams.length}</strong> de 285 examen(es)
              {activeArea !== 'Todas' && (
                <span> en el área de <strong style={{ color: '#00853F' }}>{activeArea}</strong></span>
              )}
              {searchTerm && (
                <span> para <strong style={{ color: '#00853F' }}>"{searchTerm}"</strong></span>
              )}
            </div>

            {(searchTerm || activeArea !== 'Todas') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveArea('Todas');
                  if (onClearAreaFilter) onClearAreaFilter();
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#DC2626',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <X size={14} />
                <span>Restablecer Filtros</span>
              </button>
            )}
          </div>
        </div>

        {/* Exam Cards Grid */}
        {filteredExams.length > 0 ? (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {filteredExams.slice(0, visibleCount).map((exam) => {
                const nameLines = (exam.name || '').split(/[\r\n]+/).map((s) => s.trim()).filter(Boolean);
                const mainTitle = nameLines[0] || 'Examen';
                const subTitle = nameLines.slice(1).join(' • ');

                return (
                  <div
                    key={exam.id}
                    className="eco-card"
                    onClick={() => setSelectedExam(exam)}
                    style={{
                      padding: '22px',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      borderTop: '4px solid #00853F',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                  >
                    {/* Card Top: CUPS and Area */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '6px' }}>
                      <span
                        style={{
                          padding: '3px 8px',
                          backgroundColor: exam.cups ? '#FED100' : '#F1F5F9',
                          color: exam.cups ? '#0F172A' : '#64748B',
                          borderRadius: '6px',
                          fontSize: '0.74rem',
                          fontWeight: 800,
                          letterSpacing: '0.04em'
                        }}
                      >
                        {exam.cups ? `CUPS: ${exam.cups}` : 'CUPS: Sin asignar'}
                      </span>

                      <span
                        style={{
                          padding: '3px 8px',
                          backgroundColor: '#EBF8F0',
                          color: '#005A2B',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          fontWeight: 700
                        }}
                      >
                        {exam.area}
                      </span>
                    </div>

                    {/* Exam Name */}
                    <div style={{ marginBottom: '8px' }}>
                      <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0F172A', marginBottom: subTitle ? '4px' : '0', lineHeight: 1.3 }}>
                        {mainTitle}
                      </h3>
                      {subTitle && (
                        <div style={{ fontSize: '0.75rem', color: '#64748B', fontStyle: 'italic', lineHeight: 1.35 }}>
                          {subTitle}
                        </div>
                      )}
                    </div>

                    {/* Clinical Utility Summary */}
                    <p
                      style={{
                        fontSize: '0.825rem',
                        color: '#475569',
                        lineHeight: 1.5,
                        marginBottom: '14px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {exam.clinicalUtility || (exam.area === 'Remisión' ? 'Prueba remitida a laboratorio de referencia especializado (SYNLAB).' : 'Determinación analítica diagnóstica institucional del Laboratorio Clínico JSM.')}
                    </p>

                    {/* Sample and Logistics Preview */}
                    <div
                      style={{
                        backgroundColor: '#F8FAFC',
                        borderRadius: '8px',
                        padding: '10px 12px',
                        marginBottom: '16px',
                        fontSize: '0.76rem',
                        border: '1px solid #E2E8F0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                      }}
                    >
                      {exam.sampleType ? (
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', color: '#1E293B' }}>
                          <TestTube size={13} color="#00853F" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            <span style={{ fontWeight: 600 }}>Muestra: </span>
                            <span style={{ color: '#475569' }}>
                              {exam.sampleType.split(/[\r\n]+/)[0].replace(/^tipo de muestra:?\s*/i, '')}
                            </span>
                          </div>
                        </div>
                      ) : null}

                      {exam.logistics ? (
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', color: '#1E293B' }}>
                          <Clock size={13} color="#00853F" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            <span style={{ fontWeight: 600 }}>Logística: </span>
                            <span style={{ color: '#005A2B', fontWeight: 600 }}>
                              {exam.logistics.split(/[\r\n]+/)[0]}
                            </span>
                          </div>
                        </div>
                      ) : exam.methodology ? (
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', color: '#1E293B' }}>
                          <CheckCircle2 size={13} color="#00853F" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            <span style={{ fontWeight: 600 }}>Técnica: </span>
                            <span style={{ color: '#475569' }}>
                              {exam.methodology.split(/[\r\n]+/)[0]}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748B' }}>
                          <CheckCircle2 size={13} color="#00853F" />
                          <span>Protocolo analítico de la sección de {exam.area}</span>
                        </div>
                      )}
                    </div>

                    {/* Card CTA Footer */}
                    <div
                      style={{
                        marginTop: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '12px',
                        borderTop: '1px solid #F1F5F9',
                        color: '#00853F',
                        fontSize: '0.825rem',
                        fontWeight: 700
                      }}
                    >
                      <span>Ver Ficha Técnica Completa</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Load More Button */}
            {filteredExams.length > visibleCount && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '36px' }}>
                <button
                  onClick={() => setVisibleCount((prev) => prev + 24)}
                  className="btn-eco-primary"
                  style={{
                    padding: '12px 28px',
                    fontSize: '0.925rem',
                    fontWeight: 700,
                    borderRadius: '10px',
                    cursor: 'pointer'
                  }}
                >
                  Cargar más exámenes (Mostrando {Math.min(visibleCount, filteredExams.length)} de {filteredExams.length})
                </button>
              </div>
            )}
          </div>
        ) : (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '60px 24px',
              textAlign: 'center',
              border: '1px solid #E2E8F0'
            }}
          >
            <AlertCircle size={48} color="#94A3B8" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
              No se encontraron exámenes
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748B', maxWidth: '460px', margin: '0 auto 20px auto' }}>
              No encontramos coincidencias para "{searchTerm}" en el área seleccionada.
              Verifique el código CUPS o intente con términos como "glucosa", "hemograma", "chikungunya" o "troponina".
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveArea('Todas');
              }}
              className="btn-eco-outline"
            >
              Ver Todos los 285 Exámenes Disponibles
            </button>
          </div>
        )}

        {/* Modal Window */}
        {selectedExam && (
          <ExamDetailModal exam={selectedExam} onClose={() => setSelectedExam(null)} />
        )}

      </div>
    </div>
  );
}
