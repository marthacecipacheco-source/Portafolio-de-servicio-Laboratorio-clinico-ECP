import React, { useEffect } from 'react';
import {
  X,
  FileText,
  Clock,
  TestTube,
  ShieldCheck,
  Calendar,
  AlertCircle,
  FlaskConical,
  Printer,
  CheckCircle2,
  Activity,
  Send,
  Layers,
  Info
} from 'lucide-react';

export default function ExamDetailModal({ exam, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Lock background scroll
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!exam) return null;

  // Split name into primary title and secondary subtitle / synonyms if multiline
  const nameLines = (exam.name || '').split(/[\r\n]+/).map(s => s.trim()).filter(Boolean);
  const mainTitle = nameLines[0] || 'Examen sin nombre';
  const subtitleLines = nameLines.slice(1);

  // Check if any clinical detail exists
  const hasDetails = Boolean(
    exam.clinicalUtility ||
    exam.sampleType ||
    exam.referenceValues ||
    exam.units ||
    exam.logistics ||
    exam.methodology ||
    exam.patientPreparation ||
    exam.interferences ||
    exam.linearity
  );

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          maxWidth: '820px',
          width: '100%',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          border: '1px solid #E2E8F0',
          animation: 'fadeInUp 0.25s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: '#005A2B',
            color: '#FFFFFF',
            padding: '24px 28px',
            borderBottom: '3px solid #FED100',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span
                style={{
                  backgroundColor: exam.cups ? '#FED100' : 'rgba(255, 255, 255, 0.2)',
                  color: exam.cups ? '#0F172A' : '#FFFFFF',
                  padding: '3px 10px',
                  borderRadius: '6px',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  letterSpacing: '0.04em'
                }}
              >
                {exam.cups ? `CUPS: ${exam.cups}` : 'CUPS: Sin código en portafolio'}
              </span>

              <span
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.18)',
                  color: '#FFFFFF',
                  padding: '3px 10px',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 700
                }}
              >
                {exam.area}
              </span>

              {exam.area === 'Remisión' && (
                <span
                  style={{
                    backgroundColor: '#0284C7',
                    color: '#FFFFFF',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Send size={12} />
                  <span>Laboratorio Referencia (SYNLAB)</span>
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                borderRadius: '8px',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              aria-label="Cerrar ficha técnica"
            >
              <X size={20} />
            </button>
          </div>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25, margin: '0 0 4px 0' }}>
            {mainTitle}
          </h2>

          {subtitleLines.length > 0 && (
            <div style={{ fontSize: '0.86rem', color: '#FEF08A', marginTop: '4px', lineHeight: 1.4, fontStyle: 'italic' }}>
              {subtitleLines.join(' • ')}
            </div>
          )}

          <div style={{ fontSize: '0.82rem', color: '#CBD5E1', marginTop: '6px' }}>
            Ficha Técnica Oficial del Portafolio Institucional • Laboratorio Clínico JSM Ecopetrol
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div
          style={{
            padding: '24px 28px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}
        >
          {/* Clinical Utility Banner */}
          {exam.clinicalUtility ? (
            <div
              style={{
                backgroundColor: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '12px',
                padding: '16px 20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00853F', fontWeight: 800, fontSize: '0.85rem', marginBottom: '6px' }}>
                <ShieldCheck size={18} />
                <span>UTILIDAD CLÍNICA</span>
              </div>
              <p style={{ fontSize: '0.92rem', color: '#166534', lineHeight: 1.6, margin: 0, whiteSpace: 'pre-line' }}>
                {exam.clinicalUtility}
              </p>
            </div>
          ) : null}

          {/* Patient Preparation (Crucial Section) */}
          {exam.patientPreparation ? (
            <div
              style={{
                backgroundColor: '#FFFBEB',
                border: '1px solid #FDE68A',
                borderRadius: '12px',
                padding: '16px 20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#B45309', fontWeight: 800, fontSize: '0.85rem', marginBottom: '6px' }}>
                <AlertCircle size={18} />
                <span>CONDICIÓN DEL PACIENTE Y PREPARACIÓN PREVIA</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#92400E', lineHeight: 1.55, margin: 0, whiteSpace: 'pre-line' }}>
                {exam.patientPreparation}
              </p>
            </div>
          ) : null}

          {/* Sample and Logistics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            
            {/* Sample Type & Stability */}
            {exam.sampleType ? (
              <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', fontWeight: 700, fontSize: '0.825rem', textTransform: 'uppercase', marginBottom: '6px' }}>
                  <FlaskConical size={16} color="#00853F" />
                  <span>Tipo de Muestra y Estabilidad</span>
                </div>
                <div style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.55, whiteSpace: 'pre-line' }}>
                  {exam.sampleType}
                </div>
              </div>
            ) : null}

            {/* Logistics & Schedule */}
            {exam.logistics ? (
              <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', fontWeight: 700, fontSize: '0.825rem', textTransform: 'uppercase', marginBottom: '6px' }}>
                  <Clock size={16} color="#00853F" />
                  <span>Logística y Horario de Atención</span>
                </div>
                <div style={{ fontSize: '0.88rem', color: '#005A2B', fontWeight: 600, lineHeight: 1.55, whiteSpace: 'pre-line' }}>
                  {exam.logistics}
                </div>
              </div>
            ) : null}

            {/* Methodology */}
            {exam.methodology ? (
              <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', fontWeight: 700, fontSize: '0.825rem', textTransform: 'uppercase', marginBottom: '6px' }}>
                  <CheckCircle2 size={16} color="#00853F" />
                  <span>Técnica / Metodología Analítica</span>
                </div>
                <div style={{ fontSize: '0.88rem', color: '#334155', fontWeight: 500, lineHeight: 1.55, whiteSpace: 'pre-line' }}>
                  {exam.methodology}
                </div>
              </div>
            ) : null}

            {/* Reference Values and Units */}
            {(exam.referenceValues || exam.units) ? (
              <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', fontWeight: 700, fontSize: '0.825rem', textTransform: 'uppercase', marginBottom: '6px' }}>
                  <FileText size={16} color="#00853F" />
                  <span>Valores de Referencia y Unidades</span>
                </div>
                {exam.referenceValues && (
                  <div style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 600, marginBottom: exam.units ? '4px' : '0', whiteSpace: 'pre-line' }}>
                    {exam.referenceValues}
                  </div>
                )}
                {exam.units && (
                  <div style={{ fontSize: '0.82rem', color: '#64748B' }}>
                    <strong>Unidades:</strong> {exam.units}
                  </div>
                )}
              </div>
            ) : null}

            {/* Linearity */}
            {exam.linearity ? (
              <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', fontWeight: 700, fontSize: '0.825rem', textTransform: 'uppercase', marginBottom: '6px' }}>
                  <Activity size={16} color="#00853F" />
                  <span>Linealidad de la Prueba</span>
                </div>
                <div style={{ fontSize: '0.88rem', color: '#334155', fontWeight: 500, lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                  {exam.linearity}
                </div>
              </div>
            ) : null}

          </div>

          {/* Interferences & Limitations */}
          {exam.interferences ? (
            <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '12px', padding: '16px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#DC2626', fontWeight: 700, fontSize: '0.825rem', textTransform: 'uppercase', marginBottom: '6px' }}>
                <AlertCircle size={16} color="#DC2626" />
                <span>Límites e Interferencias Analíticas</span>
              </div>
              <div style={{ fontSize: '0.86rem', color: '#991B1B', lineHeight: 1.55, whiteSpace: 'pre-line' }}>
                {exam.interferences}
              </div>
            </div>
          ) : null}

          {/* Referral Notice if Area is Remisión */}
          {exam.area === 'Remisión' && (
            <div
              style={{
                backgroundColor: '#F0F9FF',
                border: '1px solid #BAE6FD',
                borderRadius: '12px',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <Send size={20} color="#0284C7" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.825rem', color: '#0369A1', lineHeight: 1.5 }}>
                <strong>Red de Remisión y Referencia (SYNLAB):</strong> Esta determinación requiere cadena de frío y custodia especializada. Los tiempos de entrega, puntos de corte específicos y metodologías detalladas deben verificarse con el laboratorio de referencia.
              </div>
            </div>
          )}

          {/* Institutional note if test has only name in Excel (e.g. Hematology tests 2-13) */}
          {!hasDetails && (
            <div
              style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center'
              }}
            >
              <Info size={36} color="#00853F" style={{ margin: '0 auto 12px auto' }} />
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', margin: '0 0 6px 0' }}>
                Determinación de {exam.area}
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#64748B', maxWidth: '520px', margin: '0 auto', lineHeight: 1.55 }}>
                Esta prueba forma parte del portafolio del área de <strong>{exam.area}</strong> del Laboratorio Clínico JSM. Sus especificaciones técnicas, preparación y procesamiento se ejecutan bajo los protocolos estándar de la sección.
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '16px 28px',
            backgroundColor: '#F8FAFC',
            borderTop: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ fontSize: '0.78rem', color: '#64748B' }}>
            Notificación obligatoria de valores críticos vía telefónica e HIS en menos de 15 minutos.
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => window.print()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                backgroundColor: '#FFFFFF',
                color: '#334155',
                fontSize: '0.825rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <Printer size={15} />
              <span>Imprimir Ficha</span>
            </button>

            <button
              onClick={onClose}
              className="btn-eco-primary"
              style={{ padding: '8px 20px', fontSize: '0.85rem' }}
            >
              Entendido
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
