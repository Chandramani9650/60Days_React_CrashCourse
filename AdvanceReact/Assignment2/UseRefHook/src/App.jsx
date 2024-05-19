import React, { useState, useRef, useEffect } from 'react';

const RealTimeInput = () => {
  const UseRefData = useRef(null);
  
  const [inputValue, setInput] = useState('');

  const handleInputChange = () => {
    if (UseRefData.current) {
     
      setInput(UseRefData.current.value);
    }
  };

  useEffect(() => {
    
      const inputElement = UseRefData.current;
      inputElement.addEventListener('input', handleInputChange);
      UseRefData.current.focus();
    
      return () => {
        inputElement.removeEventListener('input', handleInputChange);
      };
    
  }, []);

  return (
    <div>
      <input type="text" ref={UseRefData} placeholder="Type something..." />
      <p>Real-time Input: {inputValue}</p>
    </div>
  );
};

export default RealTimeInput;
