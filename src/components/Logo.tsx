
import React from 'react';

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
    <div className={`${sizeClasses[size]} ${className} animate-fade-in animate-pulse-slow`}>
      {/* This is a placeholder SVG which you will replace with your actual logo */}
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" />
        <path 
          d="M30 55C30 45 40 35 50 35C60 35 70 45 70 55C70 65 60 75 50 75" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
        />
        <circle cx="35" cy="45" r="5" fill="white" />
        <circle cx="65" cy="45" r="5" fill="white" />
        <path 
          d="M40 65C40 65 45 70 50 65C55 70 60 65 60 65" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
        />
      </svg>
    </div>
  );
};

export default Logo;
