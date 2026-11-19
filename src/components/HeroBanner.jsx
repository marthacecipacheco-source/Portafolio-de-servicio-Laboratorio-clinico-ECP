import React from 'react';

export default function HeroBanner() {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        padding: '36px 0 0 0'
      }}
    >
      <div className="eco-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '32px'
          }}
        >
          {/* Left: Headline & Subtitle */}
          <div style={{ zIndex: 2, paddingBottom: '32px' }}>
            <h1
              style={{
                fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)',
                fontWeight: 800,
                color: '#0D4721',
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                marginBottom: '14px'
              }}
            >
              Excelencia y precisión <br />
              en el diagnóstico
            </h1>

            {/* Lime green curved accent stroke matching mockup */}
            <div style={{ marginBottom: '16px' }}>
              <svg width="180" height="14" viewBox="0 0 180 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 2 8 C 45 2, 110 2, 178 10" stroke="#74B816" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 120 10 C 145 12, 165 11, 178 10" stroke="#A3E635" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <p
              style={{
                fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                fontWeight: 600,
                color: '#1E293B',
                lineHeight: 1.35,
                marginBottom: '8px'
              }}
            >
              Portafolio de servicios del <br />
              <span style={{ fontWeight: 700 }}>Laboratorio Clínico Ecopetrol</span>
            </p>

            <p style={{ fontSize: '0.88rem', color: '#64748B', maxWidth: '440px', lineHeight: 1.5, marginTop: '8px' }}>
              Catálogo oficial de apoyo diagnóstico e información preanalítica para médicos,
              profesionales de laboratorio y jefes de servicios.
            </p>
          </div>

          {/* Right: Scientist Operating Lab Analyzer */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              overflow: 'hidden'
            }}
          >
            <img
              src="./hero-scientist.png"
              alt="Profesional del Laboratorio Clínico Ecopetrol operando analizador"
              style={{
                width: '100%',
                maxWidth: '520px',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
                borderRadius: '16px'
              }}
            />
          </div>
        </div>
      </div>

      {/* Decorative Wave Divider to Next Section */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, marginTop: '10px' }}>
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '32px', display: 'block' }}
        >
          <path
            d="M0,0 C300,35 700,5 1200,25 L1200,40 L0,40 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
