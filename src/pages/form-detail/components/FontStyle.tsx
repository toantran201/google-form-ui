import React, { Fragment } from 'react'
import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

const fonts = [
  {
    id: 1,
    title: 'Basic',
  },
  {
    id: 2,
    title: 'Decorative',
  },
  {
    id: 3,
    title: 'Formal',
  },
  {
    id: 4,
    title: 'Playful',
  },
]

const FontStyle: React.FC = () => {
  const [selectedFont, setSelectedFont] = React.useState(fonts[0])
  return (
    <div className={'p-6 border-b-[1px] w-[300px]'}>
      <h4 className={'uppercase text-xs'}>Font Style</h4>
      <Listbox
        value={selectedFont}
        onChange={setSelectedFont}
        as={'div'}
        className={'mt-3 relative'}
      >
        <Listbox.Button
          className={
            'flex items-center justify-between text-left border-[1px] w-full py-2 px-3 rounded-sm text-sm font-gray-700'
          }
        >
          {selectedFont.title}
          <ChevronDownIcon className={'w-5 h-4 text-gray-700'} />
        </Listbox.Button>
        <Listbox.Options
          as={'div'}
          className={'absolute top-0 w-full menu-shadow'}
        >
          {fonts.map((font) => (
            <Listbox.Option key={font.id} value={font} as={Fragment}>
              {({ selected }) => (
                <li
                  className={classNames(
                    'list-none px-4 py-4 text-sm text-gray-700',
                    selected
                      ? 'bg-blue-50 hover:bg-gray-50'
                      : 'bg-white hover:bg-gray-100'
                  )}
                >
                  {font.title}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}

export default FontStyle
