import FormInput from '../../../../components/base/FormInput'
import { PhotographIcon } from '@heroicons/react/outline'
import QuestionTypeSelect from './QuestionTypeSelect'

const QuestionCreator = () => {
  return (
    <div>
      <div className={'flex items-center space-x-2'}>
        {/* Common question section */}
        <div className={'grow'}>
          <FormInput
            placeHolder="Question"
            inputClassName={'p-4 bg-gray-100 rounded-t-sm text-base'}
            containerClassName={'after:h-[1px]'}
          />
        </div>
        <button
          className={'p-3 hover:bg-gray-50 active:bg-gray-100 rounded-full'}
        >
          <PhotographIcon className={'w-6 h-6 text-gray-700'} />
        </button>
        <div className={'flex-1'}>
          <QuestionTypeSelect />
        </div>
      </div>
      <div>{/* Answer section */}</div>
      <div>{/* Common Question Footer */}</div>
    </div>
  )
}

export default QuestionCreator
