"use client";

interface ItemSelectorProps {
  attempt: { [key: number | string]: number }
}

const Attempt: React.FC<ItemSelectorProps> = ({ attempt }) => { 
  const colors = [
    { name: 'blue', value: 'bg-blue-500', label: 1 },
    { name: 'red', value: 'bg-red-500', label: 2 },
    { name: 'green', value: 'bg-green-500', label: 3 },
    { name: 'yellow', value: 'bg-yellow-500', label: 4 }
  ];

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-50 rounded-lg">      
      <div className="flex gap-3">
        {[1, 2, 3, 4].map((position) => (
          <div key={position} className="flex flex-col items-center gap-2">
            <div className="grid grid-cols-4 gap-1 p-6">
                <div
                  key={attempt[position]}
                  className={`w-4 h-8 ${colors.find(color => color.label === attempt[position])?.value || 'bg-gray-300'} rounded-lg flex items-center justify-center text-white text-xs font-bold transition-all duration-200 ring-2 ring-blue-300 scale-110`}
                >
                </div>
            </div>
          </div>
        ))}
        <div className="font-bold text-center flex flex-col justify-center items-center bg-gray-200 rounded-lg p-4">      
          <h4>
            <div>
              Correct: {attempt['itemsInPosition']}
            </div>
            <div>
              Present: {attempt['itemsNotInPosition']}
            </div>
          </h4>
        </div>

      </div>
    </div>
  );
};

export default Attempt; 