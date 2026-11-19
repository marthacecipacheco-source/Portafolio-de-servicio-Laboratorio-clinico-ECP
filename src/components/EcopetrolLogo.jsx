import React from 'react';

export default function EcopetrolLogo({ variant = 'default', size = 'medium', className = '' }) {
  // Variations: default (green/yellow), white (for dark backgrounds), minimal
  const isWhite = variant === 'white';
  const primaryColor = isWhite ? '#FFFFFF' : '#00853F';
  const yellowColor = '#FED100';
  const darkColor = isWhite ? '#E2E8F0' : '#1A3323';

  const sizeStyles = {
    small: { height: '36px', iconSize: 32, fontSize: '15px', subFontSize: '9px' },
    medium: { height: '48px', iconSize: 42, fontSize: '18px', subFontSize: '10.5px' },
    large: { height: '62px', iconSize: 54, fontSize: '22px', subFontSize: '12px' }
  }[size] || { height: '48px', iconSize: 42, fontSize: '18px', subFontSize: '10.5px' };

  return (
    <div className={`ecopetrol-brand flex items-center gap-3 select-none ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
      {/* Iguana Emblem SVG */}
      <svg
        width={sizeStyles.iconSize}
        height={sizeStyles.iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id={`ecoGreenGrad-${variant}`} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={isWhite ? '#FFFFFF' : '#009A49'} />
            <stop offset="100%" stopColor={isWhite ? '#D8E2DC' : '#006B33'} />
          </linearGradient>
          <linearGradient id={`ecoYellowGrad-${variant}`} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFE033" />
            <stop offset="100%" stopColor="#E6B800" />
          </linearGradient>
        </defs>

        {/* Circular Emblem Frame */}
        <circle cx="50" cy="50" r="48" fill={isWhite ? 'rgba(255,255,255,0.12)' : '#F0FDF4'} stroke={primaryColor} strokeWidth="3" />

        {/* Sun / Energy Arc (Yellow Accent) */}
        <path
          d="M 28 22 C 35 15, 65 15, 78 28"
          stroke={yellowColor}
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Stylized Ecopetrol Iguana Silhouette */}
        {/* Back crest / spines */}
        <path
          d="M 40 33 L 43 27 L 46 33 L 51 26 L 54 34 L 59 28 L 62 36 L 67 31 L 69 40"
          fill="none"
          stroke={yellowColor}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Iguana Body & Head */}
        <path
          d="M 24 58 C 22 48, 28 38, 38 36 C 48 34, 60 38, 68 41 C 76 44, 82 43, 85 40 C 86 42, 85 47, 81 50 C 76 54, 72 52, 65 52 C 58 52, 54 57, 50 63 C 44 71, 33 73, 26 66 C 24 64, 24 61, 24 58 Z"
          fill={`url(#ecoGreenGrad-${variant})`}
        />

        {/* Eye dot */}
        <circle cx="78" cy="44" r="2.2" fill={yellowColor} />

        {/* Iguana Foreleg */}
        <path
          d="M 64 53 C 65 59, 68 64, 73 66 C 75 66.5, 76 68, 73 69 C 69 69, 64 66, 61 60 Z"
          fill={`url(#ecoGreenGrad-${variant})`}
        />

        {/* Iguana Hindleg */}
        <path
          d="M 37 60 C 37 66, 36 71, 34 76 C 33 78, 30 78, 31 75 C 33 70, 34 65, 35 59 Z"
          fill={`url(#ecoGreenGrad-${variant})`}
        />

        {/* Long tail curling downward and forward */}
        <path
          d="M 25 64 C 18 69, 17 77, 24 82 C 32 86, 46 84, 56 79 C 61 76, 60 74, 55 75 C 47 78, 35 79, 29 76 C 24 73, 25 68, 28 65 Z"
          fill={`url(#ecoGreenGrad-${variant})`}
        />

        {/* Bottom medical cross subtle micro-emblem */}
        <rect x="47.5" y="84" width="5" height="11" rx="1.5" fill={primaryColor} />
        <rect x="44.5" y="87" width="11" height="5" rx="1.5" fill={primaryColor} />
      </svg>

      {/* Typography */}
      <div className="flex flex-col" style={{ lineHeight: 1.15 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span
            style={{
              fontSize: sizeStyles.fontSize,
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: primaryColor,
              fontFamily: "'Montserrat', sans-serif"
            }}
          >
            ECOPETROL
          </span>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: yellowColor,
              display: 'inline-block',
              marginBottom: '2px'
            }}
          />
        </div>
        <span
          style={{
            fontSize: sizeStyles.subFontSize,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: isWhite ? '#CBD5E1' : '#4A6B53',
            fontFamily: "'Open Sans', sans-serif"
          }}
        >
          Laboratorio Clínico
        </span>
      </div>
    </div>
  );
}

