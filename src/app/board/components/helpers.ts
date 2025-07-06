export const colors = [
  { name: 'blue', value: 'bg-blue-500', label: 1 },
  { name: 'red', value: 'bg-red-500', label: 2 },
  { name: 'green', value: 'bg-green-500', label: 3 },
  { name: 'yellow', value: 'bg-yellow-500', label: 4 },
  { name: 'purple', value: 'bg-purple-500', label: 5 },
  { name: 'brown', value: 'bg-amber-700', label: 6 }
];

export const getColorByLabel = (label: number) => {
  return colors.find(color => color.label === label);
};

export const getColorValueByLabel = (label: number) => {
  const color = getColorByLabel(label);
  return color?.value || 'bg-gray-300';
}; 