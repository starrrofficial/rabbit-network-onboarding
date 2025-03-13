
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
    <div className={`${sizeClasses[size]} ${className} animate-fade-in`}>
      <img 
        src={rabbitLogo} 
        alt="Rabbit Network Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
