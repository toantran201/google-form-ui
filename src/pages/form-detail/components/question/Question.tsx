import { Draggable } from 'react-beautiful-dnd'
import { DotsHorizontalIcon } from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import useInsideClick from '../../../../hooks/useInsideClick'
import QuestionCreator from './QuestionCreator'

const Question = ({ index }: { index: number }) => {
  const questionBlockRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(true)

  useInsideClick(
    questionBlockRef,
    () => {
      setIsActive(true)
    },
    isActive
  )

  return (
    <div ref={questionBlockRef}>
      <Draggable draggableId={index + ''} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            className={'group bg-white mt-4 rounded-xl px-6 pb-6'}
          >
            <div {...provided.dragHandleProps}>
              {/* Drag indicator section here */}
              <DotsHorizontalIcon
                className={
                  'group-hover:visible invisible w-6 h-6 text-gray-300 mx-auto'
                }
              />
            </div>
            <div>{isActive ? <QuestionCreator /> : 'In Active'}</div>
          </div>
        )}
      </Draggable>
    </div>
  )
}

export default Question
