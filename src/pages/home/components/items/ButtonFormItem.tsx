import { DotsVerticalIcon } from '@heroicons/react/outline'
import { Listbox } from '@headlessui/react'
import React from 'react'
import classNames from 'classnames'
import { CheckIcon } from '@heroicons/react/solid'
import googleFormIcon from '../../../../assets/icons/rename.svg'
import remove from '../../../../assets/icons/trash.svg'
import openNewTab from '../../../../assets/icons/open-in-new.svg'

const recentFormItemOptions = [
  { id: 1, title: 'Rename', icon: googleFormIcon },
  { id: 2, title: 'Remove', icon: remove },
  { id: 3, title: 'Open in new tab', icon: openNewTab },
]

const ButtonFormItem = () => {
  const [selectedOption, setSelectedOption] = React.useState(
    recentFormItemOptions[0]
  )
  return (
    <div className={'relative'}>
      <Listbox onChange={setSelectedOption} value={selectedOption}>
        <Listbox.Button
          className={
            'absolute right-0 bottom-0 p-1 rounded-full hover:bg-gray-200'
          }
        >
          <DotsVerticalIcon
            className={'w-6 h-6 text-gray-500'}
            strokeWidth={2}
          />
        </Listbox.Button>
        <Listbox.Options
          className={
            'absolute bg-white w-[120%] left-1/3 top-[100%] shadow-md py-2 rounded-md outline-none z-50'
          }
        >
          {recentFormItemOptions.map((item) => (
            <Listbox.Option
              key={item.id}
              value={item}
              className={'py-2 px-4 hover:bg-gray-100 cursor-pointer'}
            >
              <div className={classNames('flex items-center space-x-4')}>
                <div>
                  <img
                    src={item.icon}
                    alt={`icon-${item.title}`}
                    className={'w-6 h-6'}
                  />
                </div>
                <p className={'text-sm text-gray-700'}>{item.title}</p>
              </div>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}

export default ButtonFormItem