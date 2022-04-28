import React from 'react'
import {
  DotsVerticalIcon,
  EyeIcon,
  FolderIcon,
  StarIcon,
} from '@heroicons/react/outline'
import ProfileMenu from './ProfileMenu'

const FormNavbar: React.FC = () => {
  const iconRightClass = 'p-3 hover:bg-gray-100 rounded-full'
  const iconLeftClass = 'p-1 hover:bg-gray-50 rounded-full'
  return (
    <div className={'flex items-center justify-between p-2 sm:space-x-8'}>
      <div className={'flex items-center space-x-2'}>
        <button
          className={`hidden sm:inline-block transition-all duration-300`}
        >
          <img
            src="src/assets/icons/ggform.png"
            alt="gg-form-icon"
            className={'h-11 w-10'}
          />
        </button>
        <p className={`text-lg transition-all duration-300`}>Form name</p>
        <button className={iconLeftClass}>
          <FolderIcon className={'w-6 h-6 text-gray-700 '} strokeWidth={2} />
        </button>
        <button className={iconLeftClass}>
          <StarIcon className={'w-6 h-6 text-gray-700'} strokeWidth={2} />
        </button>
      </div>
      <div className={'flex items-center'}>
        <button className={iconRightClass}>
          <img
            src="src/assets/icons/artboard.svg"
            alt="Artboard icon"
            className={'w-6 h-6'}
          />
        </button>
        <button className={iconRightClass}>
          <EyeIcon className={'w-6 h-6 text-gray-700'} strokeWidth={2} />
        </button>
        <button className={'p-3 hover:bg-gray-100 rounded-full'}>
          <img
            src="src/assets/icons/undo.svg"
            alt="Undo icon"
            className={'w-6 h-6'}
          />
        </button>
        <button className={`${iconRightClass} mr-2`}>
          <img
            src="src/assets/icons/redo.svg"
            alt="Redo icon"
            className={'w-6 h-6'}
          />
        </button>
        <button
          className={
            'bg-violet-800 hover:bg-violet-600 py-2 px-6 text-base text-white font-medium rounded-md mr-2'
          }
        >
          Send
        </button>
        <button className={iconRightClass}>
          <DotsVerticalIcon
            className={'w-6 h-6 text-gray-700'}
            strokeWidth={2}
          />
        </button>
        <ProfileMenu />
      </div>
    </div>
  )
}
export default FormNavbar
