import React from "react";

const MySelect = ({ option, defaultValue, value, onChange }) => {
  return (
    <select 
        value={value}
        onChange ={event => onChange(event.target.value)}

    >
      <option disabled value="">{defaultValue}</option>
      {option.map(option => 
        <option value={option.value}>
            {option.name}
        </option>
      )}
    </select>
  );
};

export default MySelect;
