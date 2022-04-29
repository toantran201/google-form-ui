import { Popover } from '@headlessui/react'
import React from 'react'

import avatar from '../../assets/images/avatar.jpg'
import googleSearch from '../../assets/icons/social/google.svg'
import youtube from '../../assets/icons/social/youtube.svg'
import googlePlay from '../../assets/icons/social/google-play.svg'
import googleNews from '../../assets/icons/social/google-news.svg'
import googleGmail from '../../assets/icons/social/gmail.svg'
import googleMeet from '../../assets/icons/social/google-meet.svg'
import googleChat from '../../assets/icons/social/google-chat.svg'
import googleContacts from '../../assets/icons/social/google-contacts.svg'
import googleDrive from '../../assets/icons/social/google-drive.svg'
import googleCalendar from '../../assets/icons/social/google-calendar.svg'
import googleTranslate from '../../assets/icons/social/google-translate.svg'
import googlePhotos from '../../assets/icons/social/google-photos.svg'
import googleDuo from '../../assets/icons/social/google-duo.svg'
import googleShopping from '../../assets/icons/social/google-shopping.svg'

import googleFinance from '../../assets/icons/social/google-finance.svg'
import googleDocs from '../../assets/icons/social/google-docs.svg'
import googleSheets from '../../assets/icons/social/google-sheets.svg'
import googleSlides from '../../assets/icons/social/google-slides.svg'
import googleBooks from '../../assets/icons/social/google-books.svg'
import googleHangouts from '../../assets/icons/social/hangouts-icon.svg'
import googleKeep from '../../assets/icons/social/google-keep.svg'
import googleJamboard from '../../assets/icons/social/jamboard.svg'
import googleClassroom from '../../assets/icons/social/google-classroom.svg'
import googleEarth from '../../assets/icons/social/google-earth.svg'
import googleCollections from '../../assets/icons/social/google-collections.svg'
import googleAds from '../../assets/icons/social/google-ads.svg'
import googlePodcasts from '../../assets/icons/social/google-podcasts.svg'
import googleTravel from '../../assets/icons/social/google-travel.svg'
import googleForms from '../../assets/icons/social/google-forms.svg'
import classNames from 'classnames'

const menuSection = [
  {
    id: 1,
    menuList: [
      { id: 1, title: 'Account', icon: avatar },
      { id: 2, title: 'Search', icon: googleSearch },
      { id: 3, title: 'Youtube', icon: youtube },
      { id: 4, title: 'Play', icon: googlePlay },
      { id: 5, title: 'News', icon: googleNews },
      { id: 6, title: 'Gmail', icon: googleGmail },
      { id: 7, title: 'Meet', icon: googleMeet },
      { id: 8, title: 'Chat', icon: googleChat },
      { id: 9, title: 'Contacts', icon: googleContacts },
      { id: 10, title: 'Drive', icon: googleDrive },
      { id: 11, title: 'Calendar', icon: googleCalendar },
      { id: 12, title: 'Translate', icon: googleTranslate },
      { id: 13, title: 'Photos', icon: googlePhotos },
      { id: 14, title: 'Duo', icon: googleDuo },
      { id: 15, title: 'Shopping', icon: googleShopping },
    ],
  },
  {
    id: 2,
    menuList: [
      { id: 1, title: 'Finance', icon: googleFinance },
      { id: 2, title: 'Docs', icon: googleDocs },
      { id: 3, title: 'Sheets', icon: googleSheets },
      { id: 4, title: 'Slides', icon: googleSlides },
      { id: 5, title: 'Books', icon: googleBooks },
      { id: 6, title: 'Hangouts', icon: googleHangouts },
      { id: 7, title: 'Keep', icon: googleKeep },
      { id: 8, title: 'Jamboard', icon: googleJamboard },
      { id: 9, title: 'Classroom', icon: googleClassroom },
      { id: 10, title: 'Earth', icon: googleEarth },
      { id: 11, title: 'Collections', icon: googleCollections },
      { id: 12, title: 'Google Ads', icon: googleAds },
      { id: 13, title: 'Podcasts', icon: googlePodcasts },
      { id: 14, title: 'Travel', icon: googleTravel },
      { id: 15, title: 'Forms', icon: googleForms },
    ],
  },
]

const ApplicationMenu: React.FC = () => {
  return (
    <Popover className="relative">
      <Popover.Button
        className={
          'p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full outline-none'
        }
      >
        <img src="src/assets/icons/dot-grid.svg" alt="dot-grid-menu" />
      </Popover.Button>

      <Popover.Panel
        className={classNames(
          'absolute z-10 w-80 top-[120%] -right-12 py-2 bg-white rounded-lg max-h-[460px] overflow-y-scroll menu-shadow'
        )}
      >
        {menuSection.map((section, index) => (
          <div
            key={section.id}
            className={classNames('grid grid-cols-3 p-3', {
              'border-b-[1px]': index + 1 !== menuSection.length,
            })}
          >
            {section.menuList.map((menu) => (
              <div className={'p-2'} key={menu.id}>
                <div
                  className={
                    'pt-2 pb-1 hover:bg-blue-100 rounded-lg cursor-pointer'
                  }
                >
                  <img
                    src={menu.icon}
                    alt=""
                    className={'h-12 h-12 rounded-full m-auto'}
                  />
                  <h1 className={'text-center text-sm mt-1'}>{menu.title}</h1>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className={'pt-4 pb-5 text-center'}>
          <button
            className={
              'text-sm text-blue-700 px-6 py-2.5 border-[1px] rounded-md hover:bg-blue-50'
            }
          >
            More on Google
          </button>
        </div>
      </Popover.Panel>
    </Popover>
  )
}

export default ApplicationMenu
