import React, { useState, useEffect } from 'react';
import { EQUIPMENT_LIST } from '../data/equipmentData';
import EquipmentGraphic from './EquipmentGraphic';
import { Microscope, ChevronLeft, ChevronRight, Check } from 'lucide-react';

export default function TechnologyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = EQUIPMENT_LIST.length;
  const currentItem = EQUIPMENT_LIST[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto rotation
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="tecnologia" style={{ padding: '30px 0 20px 0', backgroundColor: '#FFFFFF', position: 'relative' }}>
      <div className="eco-container">
        
        {/* Centered Pill Badge Header matching mockup */}
        <div className="section-pill-wrapper">
          <div className="section-pill-line" />
          <div className="section-pill-badge">
            <Microscope size={22} color="#A3E635" />
            <span>Nuestra Tecnología</span>
          </div>
          <div className="section-pill-line right" />
        </div>

        <p className="section-pill-subtitle">
          Equipos de última generación para un diagnóstico confiable, oportuno y seguro.
        </p>

        {/* Carousel Container */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            position: 'relative',
            maxWidth: '1080px',
            margin: '0 auto',
            minHeight: '260px'
          }}
        >
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="circular-nav-btn"
            aria-label="Equipo anterior"
            style={{ flexShrink: 0 }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slide Content Grid */}
          <div
            style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              alignItems: 'center',
              gap: '36px',
              padding: '10px 16px'
            }}
          >
            {/* Left: Equipment Image */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '200px'
              }}
            >
              {currentItem.image ? (
                <img
                  src={currentItem.image}
                  alt={currentItem.name}
                  style={{
                    maxHeight: '250px',
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 14px rgba(0, 0, 0, 0.08))'
                  }}
                  onError={(e) => {
                    // fallback if image not found
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
              ) : null}

              {/* Vector Fallback if image not present or for other equipments */}
              <div
                style={{
                  display: currentItem.image ? 'none' : 'block',
                  width: '100%',
                  maxWidth: '360px'
                }}
              >
                <EquipmentGraphic type={currentItem.fallbackType} />
              </div>
            </div>

            {/* Right: Equipment Specifications matching mockup */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              
              {/* Name & Manufacturer Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <h3
                  style={{
                    fontSize: '1.95rem',
                    fontWeight: 800,
                    color: '#0056B3',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.15
                  }}
                >
                  {currentItem.name}
                </h3>

                {/* Hexagon / Pill Manufacturer badge */}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '3px 14px',
                    borderRadius: '8px',
                    border: '2px solid #0056B3',
                    color: '#0056B3',
                    fontWeight: 800,
                    fontSize: '0.825rem',
                    letterSpacing: '0.04em',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  {currentItem.manufacturer}
                </span>
              </div>

              {/* Sub-headline */}
              <div
                style={{
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  color: '#1E293B',
                  marginBottom: '16px'
                }}
              >
                {currentItem.subtitle}
              </div>

              {/* Checklist with Green Vertical Left Bar */}
              <div
                style={{
                  borderLeft: '3px solid #74B816',
                  paddingLeft: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                {currentItem.bullets.map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div className="eco-check-circle">
                      <Check size={12} strokeWidth={3.5} />
                    </div>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155' }}>
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Carousel Index info */}
              <div style={{ marginTop: '14px', fontSize: '0.75rem', color: '#94A3B8' }}>
                Equipo {currentIndex + 1} de {total} • {currentItem.fullName}
              </div>

            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="circular-nav-btn"
            aria-label="Equipo siguiente"
            style={{ flexShrink: 0 }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Dots Indicator */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            marginTop: '20px',
            marginBottom: '10px'
          }}
        >
          {EQUIPMENT_LIST.slice(0, 4).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: (currentIndex % 4) === dotIdx ? '#00853F' : '#CBD5E1',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              aria-label={`Ir a diapositiva ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Flowing Green / Lime Gradient Wave Divider */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, marginTop: '20px' }}>
        <svg
          viewBox="0 0 1200 70"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '55px', display: 'block' }}
        >
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#007A33" />
              <stop offset="50%" stopColor="#74B816" />
              <stop offset="100%" stopColor="#A3E635" />
            </linearGradient>
          </defs>
          <path
            d="M0,35 C200,60 450,10 700,45 C950,75 1100,20 1200,30 L1200,70 L0,70 Z"
            fill="url(#waveGrad)"
            opacity="0.25"
          />
          <path
            d="M0,45 C250,75 500,25 750,55 C1000,80 1120,35 1200,45 L1200,70 L0,70 Z"
            fill="url(#waveGrad)"
            opacity="0.4"
          />
        </svg>
      </div>

    </section>
  );
}
