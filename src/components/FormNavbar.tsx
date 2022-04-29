import React from 'react'
import {
  DotsVerticalIcon,
  EyeIcon,
  FolderIcon,
  StarIcon,
} from '@heroicons/react/outline'
import ProfileMenu from './menu/ProfileMenu'
import { useNavigate } from 'react-router-dom'
import Tooltip from './base/Tooltip'
import MoreFormMenu from './menu/MoreFormMenu'

const FormNavbar: React.FC = () => {
  const navigate = useNavigate()
  const iconRightClass = 'p-3 hover:bg-gray-100 active:bg-gray-300 rounded-full'
  const iconLeftClass = 'p-1 hover:bg-gray-50 active:bg-gray-300 rounded-full'
  return (
    <div className={'flex items-center justify-between p-2 sm:space-x-8'}>
      <div className={'flex items-center space-x-2'}>
        <button
          className={`hidden sm:inline-block transition-all duration-300`}
          onClick={() => navigate('/')}
        >
          <img
            src="src/assets/icons/ggform.png"
            alt="gg-form-icon"
            className={'h-11 w-10'}
          />
        </button>
        <p className={`text-lg transition-all duration-300`}>Form name</p>
        <Tooltip label={'Move to folder'}>
          <button className={iconLeftClass}>
            <FolderIcon className={'w-5 h-5 text-gray-700 '} strokeWidth={2} />
          </button>
        </Tooltip>
        <Tooltip label={'Star'}>
          <button className={iconLeftClass}>
            <StarIcon className={'w-5 h-5 text-gray-700'} strokeWidth={2} />
          </button>
        </Tooltip>
      </div>
      <div className={'flex items-center'}>
        <Tooltip label={'Customize Theme'}>
          <button className={iconRightClass}>
            <img
              src="src/assets/icons/artboard.svg"
              alt="Artboard icon"
              className={'w-5 h-5'}
            />
          </button>
        </Tooltip>
        <Tooltip label={'Preview'}>
          <button className={iconRightClass}>
            <EyeIcon className={'w-5 h-5 text-gray-700'} strokeWidth={2} />
          </button>
        </Tooltip>
        <Tooltip label={'Undo'}>
          <button className={iconRightClass}>
            <img
              src="src/assets/icons/undo.svg"
              alt="Undo icon"
              className={'w-5 h-5'}
            />
          </button>
        </Tooltip>
        <Tooltip label={'Redo'}>
          <button className={`${iconRightClass} mr-2`}>
            <img
              src="src/assets/icons/redo.svg"
              alt="Redo icon"
              className={'w-5 h-5'}
            />
          </button>
        </Tooltip>
        <button
          className={
            'bg-violet-800 hover:bg-violet-600 py-2 px-6 text-base text-white font-medium rounded-md mr-2'
          }
        >
          Send
        </button>
        <MoreFormMenu />
        <ProfileMenu />
      </div>
    </div>
  )
}
export default FormNavbar
