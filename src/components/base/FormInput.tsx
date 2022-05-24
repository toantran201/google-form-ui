import React from 'react'

interface FormInputProps {
  containerClassName?: string
  inputClassName?: string
  placeHolder?: string
  value?: string
  onChange?: (value: string) => void
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const { containerClassName, placeHolder, inputClassName, value, onChange } =
    props
  return (
    <div className={`form-input-block w-full ${containerClassName}`}>
      <input
        type="text"
        placeholder={placeHolder}
        className={`form-input ${inputClassName}`}
        value={value}
        onChange={(e) => {
          if (onChange) onChange(e.target.value)
        }}
      />
    </div>
  )
}

export default React.memo(FormInput)
