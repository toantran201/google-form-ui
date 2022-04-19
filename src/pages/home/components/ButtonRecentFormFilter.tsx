import { Listbox } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import React from 'react'

const recentFormFilters = [
  { id: 1, title: 'Owned by anyone' },
  { id: 2, title: 'Owned by me' },
  { id: 3, title: 'Not owned by me' },
]

const ButtonRecentFormFilter = () => {
  const [selectedRecentFilter, setSelectedRecentFilter] = React.useState(
    recentFormFilters[0]
  )
  return (
    <div className={'relative flex'}>
      <Listbox value={selectedRecentFilter} onChange={setSelectedRecentFilter}>
        <Listbox.Button
          className={
            'flex items-center px-4 hover:bg-gray-100 rounded-md text-sm font-normal active:bg-violet-300 outline-none'
          }
        >
          {selectedRecentFilter.title}
          <ChevronDownIcon className={'h-5 w-5 text-gray-700'} />
        </Listbox.Button>
        <Listbox.Options
          className={
            'absolute bg-white w-[150%] -left-1/4 top-[100%] shadow-md py-2 rounded-md outline-none'
          }
        >
          {recentFormFilters.map((item) => (
            <Listbox.Option
              key={item.id}
              value={item}
              className={'py-2 px-4 hover:bg-gray-100 cursor-pointer'}
            >
              <div className={classNames('flex items-center space-x-3')}>
                <div>
                  <CheckIcon
                    className={classNames('w-4 h-4', {
                      invisible: item.id !== selectedRecentFilter.id,
                    })}
                  />
                </div>
                <p
                  className={classNames('text-sm', {
                    'font-semibold': item.id === selectedRecentFilter.id,
                  })}
                >
                  {item.title}
                </p>
              </div>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}

export default ButtonRecentFormFilter
