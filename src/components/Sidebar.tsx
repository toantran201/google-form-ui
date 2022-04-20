import React, { useRef } from 'react'
import googleDocs from '../assets/icons/google/google-docs.svg'
import googleForms from '../assets/icons/google/google-forms.svg'
import googleSheets from '../assets/icons/google/google-sheets.svg'
import googleSlides from '../assets/icons/google/google-slides.svg'
import googleDrive from '../assets/icons/google/google-drive.svg'
import settingIcon from '../assets/icons/settings.svg'
import helpIcon from '../assets/icons/helps.svg'
import {
  TOGGLE_SIDEBAR_ACTION,
  useHomeAction,
} from '../context/HomeActionProvider'
import classNames from 'classnames'
import useOutSideClick from '../hooks/useOutSideClick'

const sidebarMenu = [
  {
    id: 1,
    items: [
      { id: 1, name: 'Docs', icon: googleDocs },
      { id: 2, name: 'Sheets', icon: googleSheets },
      { id: 3, name: 'Slides', icon: googleSlides },
      { id: 4, name: 'Forms', icon: googleForms },
    ],
  },
  {
    id: 2,
    items: [
      { id: 1, name: 'Settings', icon: settingIcon },
      { id: 2, name: 'Help & Feedback', icon: helpIcon },
    ],
  },
  {
    id: 3,
    items: [{ id: 1, name: 'Drive', icon: googleDrive }],
  },
]

const Sidebar: React.FC = () => {
  const { homeAction, dispatch } = useHomeAction()
  const sidebarRef = useRef<HTMLDivElement>(null)

  useOutSideClick(
    sidebarRef,
    () => {
      if (homeAction.isOpenSidebar) {
        dispatch({ type: TOGGLE_SIDEBAR_ACTION, value: false })
      }
    },
    homeAction.isOpenSidebar
  )

  return (
    <div
      ref={sidebarRef}
      className={classNames(
        'absolute top-0 z-50 bg-white h-screen shadow-[0_0_16px_rgba(0,0,0,.28)] transition-all duration-300',
        homeAction.isOpenSidebar ? 'translate-x-0' : '-translate-x-[120%]'
      )}
    >
      <a
        href={'#'}
        className={'pt-4 pl-6 pb-6 flex items-end space-x-2 border-b-[1px]'}
      >
        <img
          src="src/assets/icons/google/google.svg"
          alt="Google icon"
          className={'inline-block'}
        />
        <span className={'text-2xl text-gray-500 font-normal'}>Forms</span>
      </a>
      {sidebarMenu.map((menuItem) => (
        <div className={'py-3 border-b-[1px]'} key={menuItem.id}>
          {menuItem.items.map((item) => (
            <div
              key={item.id}
              className={
                'flex items-center space-x-4 pl-6 py-2 cursor-pointer hover:bg-gray-100 w-[272px] mr-3 rounded-r-full'
              }
            >
              <img
                src={item.icon}
                alt={`icon-${item.name}`}
                className={'h-6 w-6'}
              />
              <span className={'text-sm font-medium text-gray-700'}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      ))}
      <div
        className={
          'absolute w-full bottom-6 flex items-center justify-center text-xs text-gray-400'
        }
      >
        <a href="#" className={'hover:text-gray-700'}>
          Privacy Policy
        </a>
        <span aria-hidden="true">&nbsp;·&nbsp;</span>
        <a href="#" className={'hover:text-gray-700'}>
          Terms of Service
        </a>
      </div>
    </div>
  )
}

export default Sidebar
