import React, { createContext, Dispatch, useContext, useReducer } from 'react'
import { Question } from '../../../../types'

const QuestionsContext = createContext<
  | {
      questions: Question[]
      dispatch: Dispatch<QuestionsReducerProps>
    }
  | undefined
>(undefined)

export const useQuestions = () => {
  const questionsContext = useContext(QuestionsContext)

  if (!questionsContext)
    throw new Error(
      'Please use useQuestions inside the QuestionsContextProvider'
    )

  return questionsContext
}

interface QuestionsContextProviderProps {
  initialValue: Question[]
}

interface QuestionsReducerProps {
  type: string
  value?: any
}

const questionsReducerFn = (
  state: Question[],
  action: QuestionsReducerProps
) => {
  switch (action.type) {
    default:
      return state
  }
}

export const QuestionsContextProvider: React.FC<
  QuestionsContextProviderProps
> = (props) => {
  const [state, dispatch] = useReducer(questionsReducerFn, props.initialValue)

  return (
    <QuestionsContext.Provider
      value={{
        questions: state,
        dispatch,
      }}
    >
      {props.children}
    </QuestionsContext.Provider>
  )
}
