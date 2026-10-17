import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/companyData';

export interface NoraLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showTagline?: boolean;
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  onClick?: () => void;
}

export const NoraLogo: React.FC<NoraLogoProps> = ({
  size = 'sm',
  showText = false,
  showTagline = false,
  className = '',
  variant = 'light',
  onClick,
}) => {
  const [imageError, setImageError] = useState(false);

  // Size mapping for logo image dimensions
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  const textSizes = {
    xs: { title: 'text-xs', tagline: 'text-[9px]' },
    sm: { title: 'text-sm sm:text-base', tagline: 'text-[10px] sm:text-[11px]' },
    md: { title: 'text-sm sm:text-base font-bold', tagline: 'text-[11px]' },
    lg: { title: 'text-lg sm:text-xl font-bold', tagline: 'text-xs' },
    xl: { title: 'text-xl sm:text-2xl font-bold', tagline: 'text-xs sm:text-sm' },
  };

  // Image source: using the official NORA logo asset saved in public directory
  const logoSrc = '/nora-logo.png';

  const logoGraphic = (
    <div
      className={`relative shrink-0 flex items-center justify-center rounded-lg overflow-hidden bg-white ${sizeClasses[size]} ${
        imageError ? 'border border-dashed border-slate-300 p-1' : ''
      }`}
    >
      {!imageError ? (
        <img
          src={logoSrc}
          alt="NORA Health Tech & Innovation Official Logo"
          onError={() => setImageError(true)}
          className="w-full h-full object-contain select-none"
          loading="eager"
        />
      ) : (
        /* Explicit placeholder slot if file is missing - does not invent a fake logo */
        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-[8px] text-slate-500 text-center font-mono leading-tight p-0.5">
          <span className="font-semibold text-[#0b2545]">LOGO SLOT</span>
          <span className="text-[7px] text-slate-400">/public/nora-logo.png</span>
        </div>
      )}
    </div>
  );

  const textContent = showText && (
    <div className="flex flex-col min-w-0 text-left">
      <span
        className={`font-bold tracking-tight leading-snug truncate ${
          variant === 'dark' ? 'text-white' : 'text-[#0b2545]'
        } ${textSizes[size].title}`}
      >
        {COMPANY_INFO.name}
      </span>
      {showTagline && (
        <span
          className={`font-normal tracking-wide leading-tight truncate ${
            variant === 'dark' ? 'text-slate-300' : 'text-slate-600'
          } ${textSizes[size].tagline}`}
        >
          {COMPANY_INFO.tagline}
        </span>
      )}
    </div>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2545] rounded-md transition-opacity hover:opacity-95 text-left ${className}`}
        aria-label={`${COMPANY_INFO.name} - Home`}
      >
        {logoGraphic}
        {textContent}
      </button>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {logoGraphic}
      {textContent}
    </div>
  );
};
