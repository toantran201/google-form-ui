import React from 'react'

interface FormInputProps {
  size?: 'small' | 'large'
  className?: string
}

const FormInput: React.FC<FormInputProps> = (props) => {
  return (
    <div className={`form-input-block ${props.size || 'small'}`}>
      <input
        type="text"
        className={`form-input ${props.size || 'small'} ${props.className}`}
      />
    </div>
  )
}

export default FormInput
