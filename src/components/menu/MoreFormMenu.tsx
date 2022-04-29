import { Popover } from '@headlessui/react'
import React from 'react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import Tooltip from '../base/Tooltip'
import classNames from 'classnames'

import copy from '../../assets/icons/copy.svg'
import trash from '../../assets/icons/trash.svg'
import link from '../../assets/icons/link.svg'
import print from '../../assets/icons/print.svg'
import userplus from '../../assets/icons/user-plus.svg'
import code from '../../assets/icons/code.svg'
import addons from '../../assets/icons/addons.svg'

const sections = [
  {
    id: 1,
    items: [
      {
        id: 1,
        title: 'Make a copy',
        icon: copy,
      },
      {
        id: 2,
        title: 'Move to trash',
        icon: trash,
      },
      {
        id: 3,
        title: 'Get pre-filled link',
        icon: link,
      },
      {
        id: 4,
        title: 'Print',
        icon: print,
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        id: 1,
        title: 'Add Collaborators',
        icon: userplus,
      },
    ],
  },
  {
    id: 3,
    items: [
      {
        id: 1,
        title: 'Script editor',
        icon: code,
      },
      {
        id: 2,
        title: 'Add-ons',
        icon: addons,
      },
    ],
  },
]

const MoreFormMenu = () => {
  return (
    <Popover>
      <Tooltip label={'More'}>
        <Popover.Button
          className={'p-3 hover:bg-gray-100 active:bg-gray-300 rounded-full'}
        >
          <DotsVerticalIcon
            className={'w-5 h-5 text-gray-700'}
            strokeWidth={2}
          />
        </Popover.Button>

        <Popover.Panel
          className={classNames(
            'absolute z-10 w-52 top-[100%] -right-10 py-2 bg-white rounded-lg menu-shadow'
          )}
        >
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={classNames('py-2', {
                'border-b-[1px]': index < sections.length - 1,
              })}
            >
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className={
                    'w-full h-12 flex items-center cursor-pointer hover:bg-gray-100 px-4 space-x-4'
                  }
                >
                  <img src={item.icon} alt={item.title} className={'w-5 h-5'} />
                  <p className={'text-base text-gray-700'}>{item.title}</p>
                </div>
              ))}
            </div>
          ))}
        </Popover.Panel>
      </Tooltip>
    </Popover>
  )
}

export default MoreFormMenu
