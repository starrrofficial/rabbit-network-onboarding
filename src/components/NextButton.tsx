
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface NextButtonProps {
  onClick?: () => void;
  className?: string;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`
        next-button
        bg-glass
        p-4
        rounded-full
        flex
        items-center
        justify-center
        text-white
        transition-all
        duration-300
        hover:bg-opacity-20
        focus:outline-none
        focus:ring-2
        focus:ring-white
        focus:ring-opacity-20
        ${className}
      `}
      aria-label="Next"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
};

export default NextButton;
