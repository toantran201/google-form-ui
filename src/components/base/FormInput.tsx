import React from 'react'

interface FormInputProps {
  containerClassName?: string
  inputClassName?: string
  placeHolder?: string
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const { containerClassName, placeHolder, inputClassName } = props
  return (
    <div className={`form-input-block w-full ${containerClassName}`}>
      <input
        type="text"
        placeholder={placeHolder}
        className={`form-input ${inputClassName}`}
      />
    </div>
  )
}

export default FormInput
