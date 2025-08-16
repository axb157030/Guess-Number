// src/components/NumberInput.tsx
import React from 'react';
import './NumberInput.css'; // styling

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const NumberInput: React.FC<Props> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Allow only digits
    if (/^\d*$/.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <input
      className="number-input"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter a number"
    />
  );
};

export default NumberInput;
