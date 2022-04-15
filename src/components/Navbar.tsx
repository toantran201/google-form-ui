import React from 'react'
import classNames from 'classnames'

const Navbar: React.FC = () => {
  const [showSearch, setShowSearch] = React.useState(false)
  return (
    <nav>
      <div className={'flex items-center justify-between p-2 sm:space-x-8'}>
        <div className={'flex items-center space-x-1 xl:min-w-[194px]'}>
          <button className={'p-3 hover:bg-gray-100 rounded-full'}>
            <img src="src/assets/icons/menu.svg" alt="hamburger-menu" />
          </button>
          <button className={'hidden sm:inline-block'}>
            <img
              src="src/assets/icons/ggform.png"
              alt="gg-form-icon"
              className={'h-11 w-10'}
            />
          </button>
          <p className={'text-[22px] font-medium text-gray-500'}>Forms</p>
        </div>
        <div
          className={classNames(
            { hidden: !showSearch },
            'absolute sm:static sm:block flex-1 right-[96px] left-2'
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
                'bg-gray-100 py-3 px-14 rounded-xl outline-none focus:bg-white focus:drop-shadow w-full placeholder:text-gray-500 placeholder:text-base transition-all duration-300'
              }
            />
          </div>
        </div>

        <div className={'flex items-center justify-end xl:min-w-[194px]'}>
          <button
            className={'p-2 hover:bg-gray-100 rounded-full sm:hidden'}
            onClick={() => setShowSearch(true)}
          >
            <img src="src/assets/icons/search.svg" alt="search-icon" />
          </button>
          <button className={'p-2 hover:bg-gray-100 rounded-full'}>
            <img src="src/assets/icons/dot-grid.svg" alt="dot-grid-menu" />
          </button>
          <button className={'p-2 rounded-full overflow-hidden'}>
            <img
              src="src/assets/images/avatar.jpg"
              alt="avatar"
              className={'w-8 h-8 rounded-full hover:ring-4 ring-gray-200'}
            />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
