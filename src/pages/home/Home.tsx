import React from 'react'
import DotHorizontalIcon from '../../components/Icons/DotHorizontalIcon'
import classNames from 'classnames'
import { formGroupList } from '../../fakeData/form'
import FormGroupItem from './components/FormGroupItem'
import RecentFormFilter from './components/RecentFormFilter'
import { SortAscendingIcon, ViewListIcon } from '@heroicons/react/solid'
import { FolderIcon } from '@heroicons/react/outline'
import RecentSortFilter from './components/RecentSortFilter'

const Home = () => {
  const [expandRecentForm, setExpandRecentForm] = React.useState(false)
  return (
    <div>
      {/* New forms */}
      <div className={'bg-gray-100'}>
        <div className={'container'}>
          {/* form nav*/}
          <div className={'flex items-center justify-between pt-3.5'}>
            <h3 className={'text-sm font-normal'}>Start a new form</h3>
            <div className={'flex'}>
              <button
                className={
                  'flex items-center px-3 py-1.5 space-x-3 hover:bg-gray-300 rounded-md'
                }
                onClick={() => setExpandRecentForm((prevState) => !prevState)}
              >
                <h3 className={'text-sm font-semibold'}>Template gallery</h3>
                <img
                  src="src/assets/icons/selector.svg"
                  alt="selector-icon"
                  className={'h-6 w-6'}
                />
              </button>
              <div className={'w-[1px] bg-gray-200 mr-1'}>&nbsp;</div>
              <button
                className={
                  'rounded-full hover:bg-gray-300 focus:bg-purple-300 w-9'
                }
              >
                <DotHorizontalIcon />
              </button>
            </div>
          </div>
          {/* Form items */}
          <div
            className={classNames(
              'pt-2 pb-6 transition-all duration-300 overflow-hidden',
              expandRecentForm ? 'max-h-[2000px]' : 'max-h-48 xl:max-h-56'
            )}
          >
            {formGroupList.map((item) => (
              <FormGroupItem key={item.id} formGroup={item} />
            ))}
          </div>
        </div>
      </div>
      {/* Recent forms */}
      <div>
        {/* React nav bar */}
        <div className={'container flex py-5 items-center justify-between'}>
          <h3 className={'text-sm font-semibold'}>Recent forms</h3>
          <div className={'flex space-x-20'}>
            <RecentFormFilter />
            <div className={'flex space-x-4'}>
              <button className={'p-2 rounded-full hover:bg-gray-200'}>
                <ViewListIcon
                  className={'w-5 h-5 rounded-full text-gray-700'}
                />
              </button>
              <RecentSortFilter />
              <button className={'p-2 rounded-full hover:bg-gray-200'}>
                <FolderIcon className={'w-5 h-5 rounded-full text-gray-700'} />
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
