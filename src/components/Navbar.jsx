import React, { useState } from 'react';
import { Home, FileText, Microscope, Edit3, Mail, Search, Menu, X } from 'lucide-react';

export default function Navbar({ onSearchFocus }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');
  const [query, setQuery] = useState('');

  const handleNavClick = (tabId, hash) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearchFocus) {
      onSearchFocus(query);
    }
    const searchSection = document.getElementById('buscador');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        backgroundColor: '#FFFFFF',
        padding: '12px 24px',
        borderBottom: '1px solid #E2E8F0',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        
        {/* Left: Official Logo */}
        <a
          href="#inicio"
          onClick={() => setActiveTab('inicio')}
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <img
            src="./logo-ecopetrol-header.png"
            alt="Ecopetrol Laboratorio Clínico"
            style={{
              height: '42px',
              maxWidth: '260px',
              objectFit: 'contain',
              display: 'block'
            }}
            onError={(e) => {
              // Fallback if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#00853F' }}>ECOPETROL</span>
            <span style={{ color: '#94A3B8' }}>|</span>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1E293B' }}>Laboratorio Clínico</span>
          </div>
        </a>

        {/* Center: Navigation Menu */}
        <nav
          style={{ display: 'none' }}
          className="hidden md:flex items-center gap-6"
        >
          {/* Inicio */}
          <button
            onClick={() => handleNavClick('inicio', '#inicio')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: activeTab === 'inicio' ? '#00853F' : '#334155',
              fontWeight: 700,
              fontSize: '0.875rem',
              position: 'relative',
              padding: '6px 10px'
            }}
          >
            <Home size={19} color={activeTab === 'inicio' ? '#00853F' : '#475569'} />
            <span>Inicio</span>
            {activeTab === 'inicio' && (
              <span
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '10%',
                  right: '10%',
                  height: '3px',
                  backgroundColor: '#74B816',
                  borderRadius: '2px'
                }}
              />
            )}
          </button>

          {/* Portafolio */}
          <button
            onClick={() => handleNavClick('portafolio', '#portafolio')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: activeTab === 'portafolio' ? '#00853F' : '#475569',
              fontWeight: 600,
              fontSize: '0.875rem',
              padding: '6px 10px'
            }}
          >
            <FileText size={19} color={activeTab === 'portafolio' ? '#00853F' : '#475569'} />
            <span>Portafolio</span>
          </button>

          {/* Tecnología */}
          <button
            onClick={() => handleNavClick('tecnologia', '#tecnologia')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: activeTab === 'tecnologia' ? '#00853F' : '#475569',
              fontWeight: 600,
              fontSize: '0.875rem',
              padding: '6px 10px'
            }}
          >
            <Microscope size={19} color={activeTab === 'tecnologia' ? '#00853F' : '#475569'} />
            <span>Tecnología</span>
          </button>

          {/* Toma de muestra */}
          <button
            onClick={() => handleNavClick('toma-muestra', '#preanalitica')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: activeTab === 'toma-muestra' ? '#00853F' : '#475569',
              fontWeight: 600,
              fontSize: '0.875rem',
              padding: '6px 10px'
            }}
          >
            <Edit3 size={19} color={activeTab === 'toma-muestra' ? '#00853F' : '#475569'} />
            <span>Toma de muestra</span>
          </button>

          {/* Contacto */}
          <button
            onClick={() => handleNavClick('contacto', '#contacto')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: activeTab === 'contacto' ? '#00853F' : '#475569',
              fontWeight: 600,
              fontSize: '0.875rem',
              padding: '6px 10px'
            }}
          >
            <Mail size={19} color={activeTab === 'contacto' ? '#00853F' : '#475569'} />
            <span>Contacto</span>
          </button>
        </nav>

        {/* Right: Pill Search Input matching mockup */}
        <form
          onSubmit={handleSearchSubmit}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '280px',
            width: '100%'
          }}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar examen o información..."
            style={{
              width: '100%',
              padding: '8px 36px 8px 16px',
              borderRadius: '9999px',
              border: '1.5px solid #CBD5E1',
              fontSize: '0.825rem',
              fontFamily: 'inherit',
              outline: 'none',
              backgroundColor: '#FFFFFF',
              color: '#1E293B'
            }}
            onFocus={(e) => (e.target.style.borderColor = '#00853F')}
            onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
          />
          <button
            type="submit"
            style={{
              position: 'absolute',
              right: '10px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#00853F',
              display: 'flex',
              alignItems: 'center',
              padding: 0
            }}
            aria-label="Buscar"
          >
            <Search size={18} />
          </button>
        </form>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            borderRadius: '8px',
            border: '1px solid #CBD5E1',
            backgroundColor: '#F8FAFC',
            cursor: 'pointer'
          }}
          className="md:hidden"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #E2E8F0' }} className="md:hidden">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { id: 'inicio', label: 'Inicio', hash: '#inicio' },
              { id: 'portafolio', label: 'Portafolio', hash: '#portafolio' },
              { id: 'tecnologia', label: 'Tecnología', hash: '#tecnologia' },
              { id: 'toma-muestra', label: 'Toma de muestra', hash: '#preanalitica' },
              { id: 'contacto', label: 'Contacto', hash: '#contacto' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id, link.hash)}
                style={{
                  textAlign: 'left',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  background: activeTab === link.id ? '#F0FDF4' : 'transparent',
                  color: activeTab === link.id ? '#00853F' : '#334155',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
