import { Listbox } from '@headlessui/react'
import { CheckIcon, SortAscendingIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import React from 'react'

const recentSortFilters = [
  { id: 1, title: 'Last opened by me' },
  { id: 2, title: 'Last modified by me' },
  { id: 3, title: 'Last modified' },
  { id: 4, title: 'Title' },
]

const RecentSortFilter = () => {
  const [selectedRecentSortFilter, setSelectedRecentSortFilter] =
    React.useState(recentSortFilters[0])
  return (
    <div className={'relative flex'}>
      <Listbox
        value={selectedRecentSortFilter}
        onChange={setSelectedRecentSortFilter}
      >
        <Listbox.Button className={'p-2 rounded-full hover:bg-gray-200'}>
          <SortAscendingIcon className={'w-5 h-5 rounded-full text-gray-700'} />
        </Listbox.Button>
        <Listbox.Options
          className={
            'absolute w-[550%] -left-[250%] top-[100%] shadow-md py-2 rounded-md outline-none'
          }
        >
          {recentSortFilters.map((item) => (
            <Listbox.Option
              key={item.id}
              value={item}
              className={'py-2 px-4 hover:bg-gray-100 cursor-pointer'}
            >
              <div className={classNames('flex items-center space-x-3')}>
                <div>
                  <CheckIcon
                    className={classNames('w-4 h-4', {
                      invisible: item.id !== selectedRecentSortFilter.id,
                    })}
                  />
                </div>
                <p
                  className={classNames('text-sm', {
                    'font-semibold': item.id === selectedRecentSortFilter.id,
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

export default RecentSortFilter
