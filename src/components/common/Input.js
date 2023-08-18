import React from 'react'

export default function Input ({
    required = false,
    type = 'text',
    value,
    onChange,
    placeholder,
    name,
}) {
  return <input
    required={required}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    name={name}
    />
}
