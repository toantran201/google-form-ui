import { createContext, useContext, useState } from 'react'
import { Theme } from 'types'

const ThemeContext = createContext<
  | {
      theme: Theme
      setNewTheme: (newTheme: Theme) => void
    }
  | undefined
>(undefined)

export const useTheme = () => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('Please use useTheme inside the ThemeProvider')
  }

  return themeContext
}

export interface ThemeContextProviderProps {
  initTheme: Theme
  children: any
}

export const ThemeContextProvider = ({
  initTheme,
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initTheme)

  const setNewTheme = (newTheme: Theme) => {
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setNewTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
