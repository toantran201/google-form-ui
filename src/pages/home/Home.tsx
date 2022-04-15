import React from 'react'
import DotHorizontalIcon from '../../components/Icons/DotHorizontalIcon'
import RecentFormItem from './components/RecentFormItem'
import classNames from 'classnames'
import { formGroupList } from '../../fakeData/form'
import FormGroupItem from './components/FormGroupItem'

const Home = () => {
  const [expandRecentForm, setExpandRecentForm] = React.useState(false)
  return (
    <div>
      {/* New forms */}
      <div className={'bg-gray-100'}>
        <div className={'container'}>
          {/* form nav*/}
          <div className={'flex items-center justify-between pt-3.5'}>
            <h3 className={'text-base font-normal'}>Start a new form</h3>
            <div className={'flex'}>
              <button
                className={
                  'flex items-center px-3 py-1.5 space-x-3 hover:bg-gray-300 rounded-md'
                }
                onClick={() => setExpandRecentForm((prevState) => !prevState)}
              >
                <h3 className={'text-base font-semibold'}>Template gallery</h3>
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
              'pt-2 transition-height duration-300 overflow-hidden',
              expandRecentForm ? 'h-[1780px]' : 'h-48 xl:h-56'
            )}
          >
            {formGroupList.map((item) => (
              <FormGroupItem key={item.id} formGroup={item} />
            ))}
          </div>
        </div>
      </div>
      {/* Recent forms */}
    </div>
  )
}

export default Home
