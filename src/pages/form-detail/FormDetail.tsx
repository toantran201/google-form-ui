import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import classNames from 'classnames'
import CustomBar from './components/CustomBar'
import {
  CustomThemeContextProvider,
  useCustomTheme,
} from '../../context/CustomThemeProvider/CustomThemeProvider'

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
    <Tab.Group as={'div'}>
      <Tab.List
        as={'div'}
        className={'fixed w-full z-10 bg-white border-b-[1px]'}
      >
        <div className={'form-container flex justify-center'}>
          {tabsHeader.map((item) => {
            return (
              <Tab key={item.id} as={Fragment}>
                {({ selected }) => (
                  <button
                    className={classNames(
                      'py-1.5 px-3 text-sm font-medium outline-none',
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
      <div className={'relative'}>
        <CustomBar />
        <Tab.Panels as={'div'} className={'form-container pt-8'}>
          <Tab.Panel>
            <h1 className={'text-tab'}>Hello</h1>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  )
}

export default FormDetail
