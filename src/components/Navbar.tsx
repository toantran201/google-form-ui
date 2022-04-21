import React from 'react'
import classNames from 'classnames'
import {
  TOGGLE_SIDEBAR_ACTION,
  TOGGLE_TEMPLATE_ACTION,
  useHomeAction,
} from '../context/HomeActionProvider'
import ApplicationMenu from './ApplicationMenu'
import ProfileMenu from './ProfileMenu'

const Navbar: React.FC = () => {
  const [showSearch, setShowSearch] = React.useState(false)
  const { homeAction: homeActionState, dispatch } = useHomeAction()
  const templateMenuClass = homeActionState.isTemplateToggle
    ? 'opacity-0 invisible'
    : 'visible opacity-100'

  const navBarIconClick = () => {
    if (homeActionState.isTemplateToggle) {
      dispatch({ type: TOGGLE_TEMPLATE_ACTION })
    } else {
      dispatch({ type: TOGGLE_SIDEBAR_ACTION, value: true })
    }
  }

  return (
    <nav className={'sticky top-0 left- bg-white z-40'}>
      <div className={'flex items-center justify-between p-2 sm:space-x-8'}>
        <div className={'flex items-center space-x-1 xl:min-w-[194px]'}>
          <button
            className={'p-3 hover:bg-gray-100 rounded-full outline-none'}
            onClick={navBarIconClick}
          >
            <img
              src={
                homeActionState.isTemplateToggle
                  ? 'src/assets/icons/back.svg'
                  : 'src/assets/icons/menu.svg'
              }
              alt="hamburger-menu"
            />
          </button>
          <h1
            className={classNames(
              'text-lg transition-all duration-300 absolute',
              homeActionState.isTemplateToggle
                ? 'visible opacity-100 left-[80px]'
                : 'opacity-0 invisible left-0'
            )}
          >
            Template gallery
          </h1>
          <button
            className={`hidden sm:inline-block transition-all duration-300 ${templateMenuClass}`}
          >
            <img
              src="src/assets/icons/ggform.png"
              alt="gg-form-icon"
              className={'h-11 w-10'}
            />
          </button>
          <p
            className={`text-[22px] font-medium text-gray-500 transition-all duration-300 ${templateMenuClass}`}
          >
            Forms
          </p>
        </div>

        <div
          className={classNames(
            { hidden: !showSearch },
            templateMenuClass,
            'transition-all duration-300 absolute sm:static sm:block flex-1 right-[96px] left-2'
          )}
        >
          <div className={'relative w-full max-w-[720px] m-auto'}>
            <button
              onClick={() => setShowSearch(false)}
              className={
                'absolute top-1/2 -translate-y-1/2 left-2 z-10 hover:bg-gray-200 rounded-full p-2'
              }
            >
              <img
                src="src/assets/icons/search.svg"
                alt="search-icon"
                className={'hidden sm:block'}
              />
              <img
                src="src/assets/icons/back.svg"
                alt="search-icon"
                className={'sm:hidden'}
              />
            </button>
            <input
              type="text"
              placeholder={'Search'}
              className={
                'bg-gray-100 py-3 px-14 rounded-xl outline-none focus:bg-white focus:drop-shadow w-full placeholder:text-gray-500 placeholder:text-base transition-all'
              }
            />
          </div>
        </div>

        <div
          className={`transition-all duration-300 flex items-center justify-end xl:min-w-[194px] ${templateMenuClass}`}
        >
          <button
            className={'p-2 hover:bg-gray-100 rounded-full sm:hidden'}
            onClick={() => setShowSearch(true)}
          >
            <img src="src/assets/icons/search.svg" alt="search-icon" />
          </button>
          <ApplicationMenu />
          <ProfileMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
