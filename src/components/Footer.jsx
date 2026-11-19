import React from 'react';
import EcopetrolLogo from './EcopetrolLogo';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  FileText,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" style={{ backgroundColor: '#062C17', color: '#E2E8F0', borderTop: '4px solid #FED100' }}>
      
      {/* Top Value Banner */}
      <div style={{ backgroundColor: '#004D25', padding: '24px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="eco-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', alignItems: 'center' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(254, 209, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FED100', flexShrink: 0 }}>
                <PhoneCall size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>Línea Directa para Médicos y Jefes de Servicio</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FED100' }}>+57 (607) 601 2000 Ext. 4450</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(254, 209, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FED100', flexShrink: 0 }}>
                <AlertTriangle size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>Notificación Inmediata de Valores Críticos</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>Monitoreo Activo 24 Horas / 7 Días</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(254, 209, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FED100', flexShrink: 0 }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>Control de Calidad Analítico</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>Programas Interlaboratorio RIQAS / CAP</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div style={{ padding: '60px 0 40px 0' }}>
        <div className="eco-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px' }}>
            
            {/* Col 1: Brand & Institutional Overview */}
            <div>
              <div style={{ marginBottom: '18px' }}>
                <EcopetrolLogo variant="white" size="medium" />
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '20px' }}>
                El Laboratorio Clínico Ecopetrol es el centro diagnóstico integral de los Servicios Médicos
                de Ecopetrol S.A., comprometido con la excelencia técnica, la seguridad del paciente
                y la oportunidad en el diagnóstico para trabajadores y beneficiarios.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#CBD5E1' }}>
                <Building2 size={16} color="#FED100" />
                <span>Policlínica Ecopetrol • Barrancabermeja / Red Integral</span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FED100', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Navegación Institucional
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'Inicio del Portafolio', href: '#inicio' },
                  { name: 'Especialidades y Áreas', href: '#portafolio' },
                  { name: 'Tecnología Analítica', href: '#tecnologia' },
                  { name: 'Fase Preanalítica y Tubos', href: '#preanalitica' },
                  { name: 'Buscador de Exámenes CUPS', href: '#buscador' }
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      style={{
                        color: '#CBD5E1',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => (e.target.style.color = '#FED100')}
                      onMouseLeave={(e) => (e.target.style.color = '#CBD5E1')}
                    >
                      <ChevronRight size={14} color="#00853F" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Service Areas */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FED100', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Áreas Diagnósticas
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.83rem', color: '#CBD5E1' }}>
                <span>• Inmunoquímica y Metabolismo</span>
                <span>• Hematología y Hemostasia</span>
                <span>• Microbiología y Hemocultivos</span>
                <span>• Uroanálisis y Microscopía</span>
                <span>• Gestión Pretransfusional</span>
                <span>• Biología Molecular y Pruebas Especiales</span>
                <span>• Red de Remisión y Referencia</span>
              </div>
            </div>

            {/* Col 4: Horarios y Ubicación */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FED100', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Horarios y Canales
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.83rem', color: '#CBD5E1' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Clock size={16} color="#FED100" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#FFFFFF' }}>Toma de Muestra Ambulatoria:</strong>
                    <div>De 6:00 a.m. a 7:30 a.m.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <PhoneCall size={16} color="#FED100" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#FFFFFF' }}>Celular:</strong> 310 212 2463<br />
                    <strong style={{ color: '#FFFFFF' }}>Conmutador:</strong> 310 315 8600 Ext. 48367
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={16} color="#FED100" style={{ flexShrink: 0 }} />
                  <a href="mailto:PSMLaboratorio@ecopetrol.com.co" style={{ color: '#FED100', textDecoration: 'none' }}>
                    PSMLaboratorio@ecopetrol.com.co
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.78rem', color: '#94A3B8', marginTop: '2px' }}>
                  <div>Urgencias y Hospitalización: Atención continua las 24 horas.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '20px 0', fontSize: '0.78rem', color: '#64748B' }}>
        <div className="eco-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <div>
            © {new Date().getFullYear()} Ecopetrol S.A. • Todos los derechos reservados. Portafolio Laboratorio Clínico Ecopetrol.
          </div>
          <div>
            Documento de consulta técnica institucional para uso exclusivo de profesionales de la salud autorizados.
          </div>
        </div>
      </div>

    </footer>
  );
}

