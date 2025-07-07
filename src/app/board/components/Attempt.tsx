"use client";

import { getColorValueByLabel } from './helpers';

interface ItemSelectorProps {
  attempt: { [key: number | string]: number }
}

const Attempt: React.FC<ItemSelectorProps> = ({ attempt }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-50 rounded-lg">      
      <div className="flex gap-3">
        {[1, 2, 3, 4].map((position) => (
          <div key={position} className="flex flex-col items-center gap-2">
            <div className="grid grid-cols-4 gap-1 p-6">
                <div
                  key={attempt[position]}
                  className={`w-4 h-8 ${getColorValueByLabel(attempt[position])} rounded-lg flex items-center justify-center text-white text-xs font-bold transition-all duration-200 ring-2 ring-blue-300 scale-110`}
                >
                </div>
            </div>
          </div>
        ))}
        <div className="font-bold text-center flex flex-col justify-center items-center bg-gray-200 rounded-lg p-4">      
          <h4>
            <div>
              {Array(attempt['itemsInPosition']).fill('🟩').join(' ')}
              {Array(attempt['itemsNotInPosition']).fill('🟨').join(' ')}
            </div>
          </h4>
        </div>

      </div>
    </div>
  );
};

export default Attempt; 