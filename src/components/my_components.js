import React from 'react'

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

const FormField = ({name, value, className, type, placeholder, onChange, onFocus }) =>
  <input
  name={name}
  className={className}
  type={type}
  placeholder={placeholder}
  value={value}
  onChange={onChange}
  />

export {Button, FormField};
