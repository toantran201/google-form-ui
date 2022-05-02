export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
  GREEN = 'green',
  BLUE = 'blue',
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

export interface ThemeItem {
  id: number
  color: string
  tooltipText: string
  backgroundColor: Partial<ThemeItem>[]
}
