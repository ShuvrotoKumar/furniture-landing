import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
