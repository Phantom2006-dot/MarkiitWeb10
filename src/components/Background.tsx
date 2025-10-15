
import React, { type CSSProperties } from 'react';
import type { ReactNode } from 'react';
import '../styles/Background.css';

interface GradientBackgroundProps {
  children?: ReactNode;
  style?: CSSProperties;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children, style }) => {
  return (
    <div className="gradient-container" style={style}>
      <svg className="gradient-svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="web-gradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0D47A1" />
            <stop offset="50%" stopColor="#1976D2" />
            <stop offset="100%" stopColor="#42A5F5" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#web-gradient)" />
      </svg>
      <div className="gradient-content">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;
