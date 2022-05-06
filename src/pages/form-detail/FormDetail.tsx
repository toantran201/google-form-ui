import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import classNames from 'classnames'
import CustomBar from './components/CustomBar'
import {
  CustomThemeContextProvider,
  useCustomTheme,
} from '../../context/CustomThemeProvider/CustomThemeProvider'
import QuestionsTab from './QuestionsTab/QuestionsTab'

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
                      'py-2 px-3 text-sm font-medium outline-none',
                      selected ? 'text-form-primary' : 'text-gray-700'
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
            <QuestionsTab />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  )
}

export default FormDetail
