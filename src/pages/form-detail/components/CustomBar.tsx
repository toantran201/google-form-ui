import React from 'react'
import { PhotographIcon, XIcon } from '@heroicons/react/outline'
import ThemeColor from './ThemeColor'
import FontStyle from './FontStyle'
import { useCustomTheme } from '../../../context/CustomThemeProvider/CustomThemeProvider'
import classNames from 'classnames'
import {
  SET_CUSTOM_MENU_BAR_STATE,
  SET_THEME_VALUE,
} from '../../../context/CustomThemeProvider/actions'

const CustomBar: React.FC = () => {
  const { customTheme, dispatch } = useCustomTheme()
  const { isOpen } = customTheme

  React.useEffect(() => {
    return () => {
      dispatch({
        type: SET_CUSTOM_MENU_BAR_STATE,
        value: false,
      })
    }
  }, [])

  return (
    <div
      className={classNames(
        'fixed top-[97px] bg-white max-w-[300px] h-[calc(100vh)] z-20 border-l-[1px] transition-all duration-300',
        isOpen ? 'right-0' : '-right-[300px]'
      )}
    >
      {/*Header*/}
      <div
        className={'flex justify-between items-center px-6 py-2 border-b-[1px]'}
      >
        <div className={'flex space-x-2'}>
          <img
            src="src/assets/icons/artboard.svg"
            alt="Art Board Icon"
            className={'w-6 h-6'}
          />
          <h4 className={'font-medium text-gray-700'}>Theme options</h4>
        </div>
        <button
          className={'p-2 rounded-full hover:bg-gray-50'}
          onClick={() => {
            dispatch({
              type: SET_CUSTOM_MENU_BAR_STATE,
              value: false,
            })
          }}
        >
          <XIcon className={'h-6 w-6 text-gray-700'} />
        </button>
      </div>
      {/*Header section*/}
      <div className={'p-6 border-b-[1px]'}>
        <h4 className={'uppercase text-xs'}>Header</h4>
        <button
          className={
            'flex space-x-2 items-center py-2 px-3 mt-3 border-[1px] rounded-sm'
          }
        >
          <PhotographIcon className={'w-5 h-5 text-gray-700 text-blue-500'} />
          <p className={'text-sm text-blue-500 font-medium'}>Choose image</p>
        </button>
      </div>
      <ThemeColor />
      <FontStyle />
    </div>
  )
}

export default CustomBar
