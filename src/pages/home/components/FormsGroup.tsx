import { FormGroup } from '../../../types'
import NewFormItem from './items/NewFormItem'
import React from 'react'
import classNames from 'classnames'

export interface FormGroupProps {
  formGroup: FormGroup
}

const FormsGroup = ({ formGroup }: FormGroupProps) => {
  return (
    <div className={formGroup.id === 1 ? 'mt-4' : 'mt-8'}>
      {formGroup.id !== 1 && <h3>{formGroup.name}</h3>}
      <div
        className={classNames(
          'grid mt-4',
          formGroup.id === 1
            ? 'grid-cols-3 md:grid-cols-4 md:max-h-44 lg:max-h-fit xl:grid-cols-6 xl:max-h-full gap-4 overflow-hidden'
            : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'
        )}
      >
        {formGroup.forms.map((item) => (
          <NewFormItem
            key={item.id}
            background={item.background}
            itemName={item.name}
          />
        ))}
      </div>
    </div>
  )
}

export default FormsGroup
