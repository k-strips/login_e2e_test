import React from 'react';

const FormField = ({name, value, className, type, placeholder, onChange }) =>
  <input
  name={name}
  className={className}
  type={type}
  placeholder={placeholder}
  value={value}
  onChange={onChange}
  />

const Button = ({onClick, className, children,}) => {
  return(
    <button
      onClick={onClick}
      className={className}
      type="submit"
    >
      {children}
    </button>
  );
}

export { FormField, Button };
