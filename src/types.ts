export enum Theme {
  RED = 'red',
  PURPLE = 'purple',
  INDIGO = 'indigo',
  BLUE = 'blue',
  LIGHT_BLUE = 'light-blue',
  CYAN = 'cyan',
  RED_ORANGE = 'red-orange',
  ORANGE = 'orange',
  TEAL = 'teal',
  GREEN = 'green',
  BLUE_GRAY = 'blue-gray',
  GRAY = 'gray',
}

export interface FormItem {
  id: number
  background: string
  name: string
  lastOpened?: string
}

export interface FormGroup {
  id: number
  name: string
  forms: FormItem[]
}

export interface HomeAction {
  isTemplateToggle: boolean
  isOpenSidebar: boolean
}

export interface CustomTheme {
  isOpen: boolean
  theme: string
}

export interface ThemeItem {
  id: number
  color: string
  tooltipText: string
  backgroundColor: Partial<ThemeItem>[]
}
