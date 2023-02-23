import React from 'react';

const Input = ({value, onChange}) => {
  const handleFilterChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <input value={value} onChange={handleFilterChange}/>
  );
};

export default Input;