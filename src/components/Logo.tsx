
import React from 'react';
import rabbitLogo from '../assets/IMG_7713.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-28 h-28',
    lg: 'w-40 h-40'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} animate-fade-in relative`}>
      {/* Neon outline effect */}
      <div className="absolute inset-0 rounded-full animate-pulse-slow bg-transparent" 
        style={{
          boxShadow: '0 0 15px 5px rgba(86, 204, 242, 0.7), 0 0 25px 10px rgba(86, 204, 242, 0.5)',
          filter: 'blur(2px)',
          transform: 'scale(1.05)',
        }}
      />
      
      {/* Image */}
      <img 
        src={rabbitLogo} 
        alt="Rabbit Network Logo" 
        className="w-full h-full object-contain relative z-10"
      />
    </div>
  );
};

export default Logo;
