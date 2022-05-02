import React from 'react'
import { PhotographIcon, XIcon } from '@heroicons/react/outline'
import ThemeColor from './ThemeColor'
import FontStyle from './FontStyle'

const CustomBar: React.FC = () => {
  return (
    <div
      className={
        'fixed right-0 top-[97px] bg-white max-w-[300px] h-[calc(100vh)] z-20 border-l-[1px]'
      }
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
        <button className={'p-2 rounded-full hover:bg-gray-50'}>
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
