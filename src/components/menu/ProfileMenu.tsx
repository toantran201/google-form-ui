import React from 'react'
import { Popover } from '@headlessui/react'
import { CameraIcon, UserAddIcon } from '@heroicons/react/outline'

const ProfileMenu: React.FC = () => {
  return (
    <Popover className={'relative'}>
      <Popover.Button className={'p-2 rounded-full overflow-hidden'}>
        <img
          src="src/assets/images/avatar.jpg"
          alt="avatar"
          className={'w-8 h-8 rounded-full hover:ring-4 ring-gray-200'}
        />
      </Popover.Button>
      <Popover.Panel
        className={
          'absolute z-[100] w-[360px] top-[110%] right-0 py-2 bg-white rounded-lg menu-shadow'
        }
      >
        <div className={'py-6 border-b-[1px]'}>
          <div className={'flex justify-center'}>
            <div className={'relative'}>
              <button
                className={
                  'absolute bg-white right-0 bottom-0 p-1 rounded-full menu-shadow'
                }
              >
                <CameraIcon className={'h-5 w-5'} strokeWidth={1} />
              </button>
              <img
                src="src/assets/images/avatar-sm.jpg"
                alt="avatar"
                className={
                  'w-20 h-20 rounded-full border-[1px] border-gray-300'
                }
              />
            </div>
          </div>
          <div className={'mt-4 text-center'}>
            <h3 className={'text-base font-medium text-gray-800'}>Toan Tran</h3>
            <h4 className={'text-sm text-gray-500'}>toantran201.w@gmail.com</h4>
            <button
              className={
                'mt-4 px-4 py-1.5 hover:bg-gray-100 rounded-full border-[1px] text-sm font-medium text-gray-700'
              }
            >
              Manage your Google Account
            </button>
          </div>
        </div>
        <div className={'border-b-[1px]'}>
          <div
            className={
              'flex items-center space-x-3 px-8 py-3.5 hover:bg-gray-100 cursor-pointer'
            }
          >
            <img
              src="src/assets/images/avatar-sm.jpg"
              alt="avatar"
              className={'w-9 h-9 rounded-full border-[1px] border-gray-300'}
            />
            <div>
              <h3 className={'text-sm font-medium'}>Duc Toan Tran</h3>
              <h4 className={'text-sm text-gray-500'}>
                toantran200199@gmail.com
              </h4>
            </div>
          </div>
          <div
            className={
              'flex items-center space-x-3 px-8 py-3.5 hover:bg-gray-100 cursor-pointer'
            }
          >
            <div className={'w-9'}>
              <UserAddIcon className={'mx-auto w-5 h-5'} strokeWidth={1.5} />
            </div>
            <h3 className={'text-sm font-medium'}>Add another account</h3>
          </div>
        </div>
        <div className={'py-4 text-center border-b-[1px]'}>
          <button
            className={
              'border-[1px] hover:bg-gray-100 py-2 px-6 rounded-md text-gray-700 text-sm font-medium'
            }
          >
            Sign out of all accounts
          </button>
        </div>
        <div className={'pt-4 pb-2 text-sm text-center text-gray-500'}>
          <a href="#" className={'rounded-md py-1 px-2.5 hover:bg-gray-100'}>
            Privacy Policy
          </a>
          <span aria-hidden="true" className={'font-bold'}>
            &nbsp;·&nbsp;
          </span>
          <a href="#" className={'rounded-md py-1 px-2.5 hover:bg-gray-100'}>
            Terms of Service
          </a>
        </div>
      </Popover.Panel>
    </Popover>
  )
}

export default ProfileMenu
