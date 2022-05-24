// Enum
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

// Interface
export interface FormConfigItem {
  id: number
  background: string
  name: string
  lastOpened?: string
}

export interface FormConfigGroup {
  id: number
  name: string
  forms: FormConfigItem[]
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
  value: string
  backgroundColor: Partial<ThemeItem>[]
}

// Form
export interface Form {
  id: number
  theme: string
  background: string
  isStar: boolean
  name: string
}

export interface FormSection {
  id: number
  index: number
  title: string
  description: string
  questions: Question[]
  isDefault: boolean
}

export interface Question {
  id: number
  index: number
  type: string
  title?: string
  background?: string
  isRequired?: boolean
  description?: string
  answer?: string | undefined
}
