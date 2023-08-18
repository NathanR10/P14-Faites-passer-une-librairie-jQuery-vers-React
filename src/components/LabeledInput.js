import React from 'react'
import Label from './common/Label'
import Input from './common/Input'
import Select from './common/Select'

export default function LabeledInput ({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    required = false,
    name,
    data = []
}) {
  return (
    <div className='labeledInput'>
        {label ? <Label label={label} /> : null}
        {type === 'select'
        ? <Select
            required={required}
            name={name}
            value={value}
            onChange={onChange}
            data={data}
          />
        : <Input
          required={required}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
        />}
    </div>
  )
}
