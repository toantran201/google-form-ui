import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Question from './question/Question'

const FormContent = () => {
  const onDragEnd = () => {
    //
  }
  const arr = [1, 2]
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId={'form-id'}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {arr.map((item, index) => (
                <Question key={index} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
}

export default FormContent
