import React, { Dispatch } from 'react'
import { CustomTheme } from '../../types'
import { SET_CUSTOM_MENU_BAR_STATE, SET_THEME_VALUE } from './actions'

interface CustomThemeReducerProps {
  type: string
  value?: any
}

const CustomThemeContext = React.createContext<
  | { customTheme: CustomTheme; dispatch: Dispatch<CustomThemeReducerProps> }
  | undefined
>(undefined)

export const useCustomTheme = () => {
  const customThemeContext = React.useContext(CustomThemeContext)

  if (!customThemeContext) {
    throw new Error('Please use useCustomTheme inside the CustomThemeProvider')
  }

  return customThemeContext
}

const reducerFn = (state: CustomTheme, action: CustomThemeReducerProps) => {
  switch (action.type) {
    case SET_CUSTOM_MENU_BAR_STATE: {
      return { ...state, isOpen: action.value }
    }
    case SET_THEME_VALUE: {
      return { ...state, theme: action.value }
    }
    default:
      return state
  }
}

interface CustomThemeContextProviderProps {
  initThemeValue: CustomTheme
}

export const CustomThemeContextProvider: React.FC<
  CustomThemeContextProviderProps
> = (props) => {
  const [state, dispatch] = React.useReducer(reducerFn, props.initThemeValue)

  React.useEffect(() => {
    document.documentElement.dataset.theme = state.theme
    window.localStorage.setItem('theme', state.theme)
  }, [state.theme])

  return (
    <CustomThemeContext.Provider
      value={{
        customTheme: state,
        dispatch,
      }}
    >
      {props.children}
    </CustomThemeContext.Provider>
  )
}
