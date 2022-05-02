import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import classNames from 'classnames'

const tabsHeader = [
  {
    id: 1,
    title: 'Questions',
  },
  {
    id: 2,
    title: 'Responses',
  },
  {
    id: 3,
    title: 'Settings',
  },
]

const FormDetail = () => {
  return (
    <Tab.Group>
      <Tab.List as={'div'}>
        <div className={'form-container flex justify-center'}>
          {tabsHeader.map((item) => {
            return (
              <Tab key={item.id} as={Fragment}>
                {({ selected }) => (
                  <button
                    className={classNames(
                      'py-1.5 px-3 text-sm font-medium',
                      selected
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-800'
                    )}
                  >
                    {item.title}
                  </button>
                )}
              </Tab>
            )
          })}
        </div>
      </Tab.List>
      <div className={'bg-red-300'}>
        <Tab.Panels as={'div'} className={'form-container'}>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  )
}

export default FormDetail
