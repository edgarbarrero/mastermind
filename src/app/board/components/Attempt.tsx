"use client";

import { getColorValueByLabel } from './helpers';

interface ItemSelectorProps {
  attempt: { [key: number | string]: number }
}

const Attempt: React.FC<ItemSelectorProps> = ({ attempt }) => {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-4 p-2 sm:p-4 bg-gray-50 rounded-lg">      
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
        {[1, 2, 3, 4].map((position) => (
          <div key={position} className="flex flex-col items-center gap-1 sm:gap-2">
            <div className="grid grid-cols-6 gap-1 p-2 sm:p-6">
                <div
                  key={attempt[position]}
                  className={`w-3 h-6 sm:w-4 sm:h-8 ${getColorValueByLabel(attempt[position])} rounded-lg flex items-center justify-center text-white text-xs font-bold transition-all duration-200 ring-2 ring-blue-300 scale-110`}
                >
                </div>
            </div>
          </div>
        ))}
        <div className="font-bold text-center flex flex-col justify-center items-center bg-gray-200 rounded-lg p-2 sm:p-4 min-w-[80px] sm:min-w-[110px]">      
          <div className="flex gap-1">
            {Array(attempt['itemsInPosition']).fill(null).map((_, index) => (
              <div
                key={`correct-${index}`}
                className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"
              />
            ))}
            {Array(attempt['itemsNotInPosition']).fill(null).map((_, index) => (
              <div
                key={`present-${index}`}
                className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Attempt; 