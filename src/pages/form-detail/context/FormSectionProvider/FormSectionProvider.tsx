import React, { createContext, Dispatch, useContext, useReducer } from 'react'
import { FormSection } from '../../../../types'
import { SET_FORM_SECTION_DESCRIPTION, SET_FORM_SECTION_TITLE } from './actions'

const FormSectionContext = createContext<
  | {
      formSection: FormSection
      dispatch: Dispatch<FormSectionReducerProps>
    }
  | undefined
>(undefined)

export const useFormSection = () => {
  const formSectionContext = useContext(FormSectionContext)

  if (!formSectionContext)
    throw new Error(
      'Please use useFormSection inside the FormSectionContextProvider'
    )

  return formSectionContext
}

interface FormSectionProviderProps {
  initialValue: FormSection
}

interface FormSectionReducerProps {
  type: string
  value?: any
}

const formSectionReducerFn = (
  state: FormSection,
  action: FormSectionReducerProps
) => {
  switch (action.type) {
    case SET_FORM_SECTION_TITLE: {
      return { ...state, title: action.value }
    }
    case SET_FORM_SECTION_DESCRIPTION: {
      return { ...state, description: action.value }
    }
    default:
      return state
  }
}

export const FormSectionProvider: React.FC<FormSectionProviderProps> = (
  props
) => {
  const [state, dispatch] = useReducer(formSectionReducerFn, props.initialValue)

  return (
    <FormSectionContext.Provider
      value={{
        formSection: state,
        dispatch,
      }}
    >
      {props.children}
    </FormSectionContext.Provider>
  )
}
