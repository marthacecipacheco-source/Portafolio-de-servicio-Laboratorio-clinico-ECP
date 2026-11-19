import React from 'react';
import { SERVICES_AREAS } from '../data/servicesData';
import {
  FlaskConical,
  Activity,
  Bug,
  Microscope,
  HeartHandshake,
  ShieldAlert,
  Send,
  ArrowRight,
  Check,
  Cpu,
  Layers
} from 'lucide-react';

const iconMap = {
  FlaskConical,
  Activity,
  Bug,
  Microscope,
  HeartHandshake,
  ShieldAlert,
  Send
};

export default function ServicesPortfolio({ onSelectArea }) {
  return (
    <section id="portafolio" style={{ padding: '80px 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
      <div className="eco-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
          <div className="section-badge" style={{ margin: '0 auto 12px auto' }}>
            <Layers size={15} color="#00853F" />
            <span>Portafolio de Servicios Integrales</span>
          </div>
          <h2 className="section-title">
            Especialidades y Áreas Analíticas
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Nuestra estructura técnica abarca 7 secciones especializadas de diagnóstico clínico,
            respaldadas por tecnología de última generación y profesionales altamente capacitados.
          </p>
        </div>

        {/* 7 Services Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}
        >
          {SERVICES_AREAS.map((service) => {
            const IconComponent = iconMap[service.iconName] || FlaskConical;

            return (
              <div
                key={service.id}
                className="eco-card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top Header Card */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: '#EBF8F0',
                      border: '1.5px solid rgba(0, 133, 63, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00853F'
                    }}
                  >
                    <IconComponent size={24} />
                  </div>

                  <span
                    style={{
                      padding: '4px 10px',
                      backgroundColor: '#F1F5F9',
                      color: '#005A2B',
                      borderRadius: '9999px',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      border: '1px solid #E2E8F0'
                    }}
                  >
                    {service.testCount}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  {service.name}
                </h3>

                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, marginBottom: '18px' }}>
                  {service.fullDesc}
                </p>

                {/* Assigned Technologies */}
                <div style={{ marginBottom: '18px' }}>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: '#64748B',
                      marginBottom: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Cpu size={12} color="#00853F" />
                    <span>Equipos Analizadores Asignados</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {service.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          padding: '3px 8px',
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #CBD5E1',
                          borderRadius: '4px',
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          color: '#1E293B'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Tests Preview */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748B', marginBottom: '8px' }}>
                    Pruebas Representativas:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {service.keyTests.slice(0, 3).map((test, kIdx) => (
                      <div key={kIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '0.8rem', color: '#334155' }}>
                        <Check size={14} color="#00853F" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ lineHeight: 1.4 }}>{test}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Filter Exams Button */}
                <button
                  onClick={() => onSelectArea && onSelectArea(service.name)}
                  style={{
                    marginTop: 'auto',
                    width: '100%',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: '1.5px solid #00853F',
                    backgroundColor: 'transparent',
                    color: '#00853F',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#00853F';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#00853F';
                  }}
                >
                  <span>Explorar Exámenes de {service.name}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

