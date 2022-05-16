import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import shortParagraphIcon from '../../../../assets/icons/question/short-paragraph.svg'
import paragraphIcon from '../../../../assets/icons/question/paragraph.svg'
import multipleChoicesIcon from '../../../../assets/icons/question/radio-button.svg'
import checkboxesIcon from '../../../../assets/icons/question/check.svg'
import dropdownIcon from '../../../../assets/icons/question/dropdown-arrow.svg'
import fileUploadIcon from '../../../../assets/icons/question/cloud-upload.svg'
import linearScaleIcon from '../../../../assets/icons/question/linear-scale.svg'
import checkBoxGridIcon from '../../../../assets/icons/question/checkbox-grid.svg'
import dateIcon from '../../../../assets/icons/question/date.svg'
import timeIcon from '../../../../assets/icons/question/time.svg'

const questionTypeOptions = [
  {
    id: 1,
    options: [
      {
        id: 1,
        title: 'Short answer',
        icon: shortParagraphIcon,
      },
      {
        id: 2,
        title: 'Paragraph',
        icon: paragraphIcon,
      },
    ],
  },
  {
    id: 2,
    options: [
      {
        id: 3,
        title: 'Multiple choices',
        icon: multipleChoicesIcon,
      },
      {
        id: 4,
        title: 'Checkboxes',
        icon: checkboxesIcon,
      },
      {
        id: 5,
        title: 'Dropdown',
        icon: dropdownIcon,
      },
    ],
  },
  {
    id: 3,
    options: [
      {
        id: 6,
        title: 'File Upload',
        icon: fileUploadIcon,
      },
    ],
  },
  {
    id: 4,
    options: [
      {
        id: 7,
        title: 'Linear Scale',
        icon: linearScaleIcon,
      },
      {
        id: 8,
        title: 'Multiple choice grid',
        icon: checkBoxGridIcon,
      },
      {
        id: 9,
        title: 'Checkbox Grid',
        icon: checkBoxGridIcon,
      },
    ],
  },
  {
    id: 5,
    options: [
      {
        id: 10,
        title: 'Date',
        icon: dateIcon,
      },
      {
        id: 11,
        title: 'Time',
        icon: timeIcon,
      },
    ],
  },
]

const QuestionTypeSelect = () => {
  const [selected, setSelected] = useState('')
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className={'relative w-full'}>
        <Listbox.Button
          className={
            'w-full rounded-md bg-white py-3 px-10 text-left border-[1px] border-gray-200 z-10 outline-none'
          }
        >
          <div>
            <span className={'text-sm font-semibold'}>Selected</span>
          </div>
          <img
            src={dropdownIcon}
            alt=""
            className={'absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6'}
          />
          <div className={'absolute right-2 top-1/2 -translate-y-1/2'}>
            <ChevronDownIcon className={'w-6 h-6 text-gray-500'} />
          </div>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className={
              'fixed top-[100px] bg-white min-w-[245px] z-40 rounded-lg menu-shadow'
            }
          >
            {questionTypeOptions.map((quesGroup) => (
              <div
                key={quesGroup.id}
                className={'py-2 border-b-[1px] border-gray-200'}
              >
                {quesGroup.options.map((question) => (
                  <Listbox.Option
                    key={question.id}
                    value={question}
                    className={
                      'relative py-3 pl-10 hover:bg-gray-100 cursor-pointer'
                    }
                  >
                    <div>
                      <span className={'text-sm font-semibold text-gray-700'}>
                        {question.title}
                      </span>
                    </div>
                    <img
                      src={question.icon}
                      alt=""
                      className={
                        'absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6'
                      }
                    />
                  </Listbox.Option>
                ))}
              </div>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default QuestionTypeSelect
