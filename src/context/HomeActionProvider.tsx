import React, { createContext, Dispatch, useContext, useReducer } from 'react'
import { HomeAction } from '../types'

export const TOGGLE_TEMPLATE_ACTION = 'TOGGLE_TEMPLATE'
export const TOGGLE_SIDEBAR_ACTION = 'TOGGLE_SIDEBAR_ACTION'

const HomeActionContext = createContext<
  | { homeAction: HomeAction; dispatch: Dispatch<HomeActionReducerProps> }
  | undefined
>(undefined)

export const useHomeAction = () => {
  const homeActionContext = useContext(HomeActionContext)

  if (!homeActionContext) {
    throw new Error('Please use useHomeAction inside the HomeActionProvider')
  }

  return homeActionContext
}

interface HomeActionContextProviderProps {
  initHomeAction: HomeAction
}

interface HomeActionReducerProps {
  type: string
  value?: any
}

const reducerFn = (state: HomeAction, action: HomeActionReducerProps) => {
  switch (action.type) {
    case TOGGLE_TEMPLATE_ACTION: {
      return { ...state, isTemplateToggle: !state.isTemplateToggle }
    }
    case TOGGLE_SIDEBAR_ACTION: {
      return { ...state, isOpenSidebar: action.value }
    }
    default:
      return state
  }
}

export const HomeActionContextProvider: React.FC<
  HomeActionContextProviderProps
> = (props) => {
  const [state, dispatch] = useReducer(reducerFn, props.initHomeAction)
  return (
    <HomeActionContext.Provider value={{ homeAction: state, dispatch }}>
      {props.children}
    </HomeActionContext.Provider>
  )
}
