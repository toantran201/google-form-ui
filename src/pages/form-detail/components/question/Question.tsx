import { Draggable } from 'react-beautiful-dnd'
import { DotsHorizontalIcon } from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import useInsideClick from '../../../../hooks/useInsideClick'
import QuestionCreator from './QuestionCreator'
import useOutSideClick from '../../../../hooks/useOutSideClick'
import classNames from 'classnames'

const Question = ({ index }: { index: number }) => {
  const questionBlockRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useInsideClick(
    questionBlockRef,
    () => {
      setIsActive(true)
    },
    isActive
  )

  useOutSideClick(
    questionBlockRef,
    () => {
      setIsActive(false)
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
            className={classNames(
              `relative group bg-white mt-4 rounded-lg px-6 pb-6 overflow-hidden`,
              {
                'after:absolute after:h-full after:w-[6px] after:bg-[#4285f4] after:top-0 after:left-0':
                  isActive,
              }
            )}
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
