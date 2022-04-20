import React from 'react'
import DotHorizontalIcon from '../../components/Icons/DotHorizontalIcon'
import classNames from 'classnames'
import { formGroupList, recentOpenForms } from '../../fakeData/forms'
import FormsGroup from './components/FormsGroup'
import ButtonRecentFormFilter from './components/ButtonRecentFormFilter'
import { ViewListIcon } from '@heroicons/react/solid'
import { FolderIcon } from '@heroicons/react/outline'
import ButtonRecentSortFilter from './components/ButtonRecentSortFilter'
import RecentFormItem from './components/items/RecentFormItem'
import {
  TOGGLE_TEMPLATE_ACTION,
  useHomeAction,
} from '../../context/HomeActionProvider'

const Home = () => {
  const { homeAction: homeActionState, dispatch } = useHomeAction()
  return (
    <div>
      {/* New forms */}
      <div className={'bg-gray-100'}>
        <div className={'container'}>
          {/* form nav*/}
          <div className={'flex items-center justify-between pt-3.5'}>
            <h3 className={'text-sm font-normal'}>
              {homeActionState.isTemplateToggle
                ? 'Recently used'
                : 'Start a new form'}
            </h3>
            <div
              className={classNames(
                'flex',
                homeActionState.isTemplateToggle
                  ? 'invisible opacity-0'
                  : 'visible opacity-100'
              )}
            >
              <button
                className={
                  'flex items-center px-3 py-1.5 space-x-3 hover:bg-gray-300 rounded-md'
                }
                onClick={() => dispatch({ type: TOGGLE_TEMPLATE_ACTION })}
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
              'pt-2 pb-6 transition-all duration-700 overflow-hidden',
              homeActionState.isTemplateToggle
                ? 'max-h-[2000px]'
                : 'max-h-48 xl:max-h-56'
            )}
          >
            {formGroupList.map((item) => (
              <FormsGroup key={item.id} formGroup={item} />
            ))}
          </div>
        </div>
      </div>
      {/* Recent forms */}
      <div
        className={classNames(
          'transition-all duration-300 delay-700',
          homeActionState.isTemplateToggle
            ? 'opacity-0 h-0 overflow-hidden'
            : 'opacity-100'
        )}
      >
        {/* React nav bar */}
        <div className={'container'}>
          <div className={'flex py-5 items-center justify-between'}>
            <h3 className={'text-sm font-semibold'}>Recent forms</h3>
            <div className={'flex space-x-20'}>
              <ButtonRecentFormFilter />
              <div className={'flex space-x-4'}>
                <button className={'p-2 rounded-full hover:bg-gray-200'}>
                  <ViewListIcon
                    className={'w-5 h-5 rounded-full text-gray-700'}
                  />
                </button>
                <ButtonRecentSortFilter />
                <button className={'p-2 rounded-full hover:bg-gray-200'}>
                  <FolderIcon
                    className={'w-5 h-5 rounded-full text-gray-700'}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className={'grid grid-cols-3 xl:grid-cols-5 gap-y-5'}>
            {recentOpenForms.map((form) => (
              <RecentFormItem
                key={form.id}
                id={form.id}
                background={form.background}
                name={form.name}
                lastOpened={form.lastOpened}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
