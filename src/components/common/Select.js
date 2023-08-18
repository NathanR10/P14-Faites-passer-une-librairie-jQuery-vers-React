import React from 'react'

export default function Select ({
    required = false,
    type = 'text',
    value,
    onChange,
    data = [],
    name,
}) {
  return <select
    required={required}
    name={name}
    value={value}
    onChange={onChange}>
    {data.map((state, index) => (
        <option key={index} value={state.name}>
        {state.name}
        </option>
        ))}
    </select>
}
