"use client";

import React, { useState } from 'react';

interface ItemSelectorProps {
  onSelect: (selections: { [key: number]: number }) => void;
}

const AttemptCreator: React.FC<ItemSelectorProps> = ({ onSelect }) => { 
  const [selections, setSelections] = useState<{ [key: number]: number }>({
    1: 1,
    2: 2, 
    3: 3,
    4: 4
  });

  const colors = [
    { name: 'blue', value: 'bg-blue-500', label: 1 },
    { name: 'red', value: 'bg-red-500', label: 2 },
    { name: 'green', value: 'bg-green-500', label: 3 },
    { name: 'yellow', value: 'bg-yellow-500', label: 4 }
  ];

  const handleColorSelect = (position: number, label: number) => {
    setSelections(prev => ({
      ...prev,
      [position]: label
    }));
  };

  const handleSubmit = () => {
    onSelect(selections);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-50 rounded-lg">      
      <div className="flex gap-3">
        {[1, 2, 3, 4].map((position) => (
          <div key={position} className="flex flex-col items-center gap-2">
            <div className="grid grid-cols-4 gap-1 p-6">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleColorSelect(position, color.label)}
                  className={`w-4 h-4 ${color.value} rounded-lg flex items-center justify-center text-white text-xs font-bold transition-all duration-200 ${
                    selections[position] === color.label 
                      ? 'ring-2 ring-blue-300 scale-110' 
                      : 'hover:scale-105'
                  }`}
                >
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
      >
        Play!!
      </button>
    </div>
  );
};

export default AttemptCreator; 