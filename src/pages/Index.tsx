
import React from 'react';
import Logo from '@/components/Logo';
import NextButton from '@/components/NextButton';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  const handleNext = () => {
    // This will be connected to your next page when you create it
    console.log('Next button clicked');
    // navigate('/next-page');
  };

  return (
    <div className="w-full h-full bg-rabbit-black flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-rabbit-gray to-rabbit-black opacity-60 z-0"></div>
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-lg w-full animate-fade-up">
        {/* Logo */}
        <div className="mb-12 animate-float">
          <Logo size="lg" />
        </div>
        
        {/* Text */}
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 mb-3 bg-glass rounded-full text-xs tracking-wider">
            RABBIT NETWORK
          </div>
          <h1 className="text-2xl md:text-3xl font-light tracking-wide text-white">
            LAUNCHING SOON<span className="loading-text">.</span>
          </h1>
        </div>
      </div>
      
      {/* Next button */}
      <div className="absolute bottom-8 right-8 z-10">
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
};

export default Index;
