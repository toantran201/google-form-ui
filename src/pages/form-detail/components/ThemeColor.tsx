import { CheckIcon } from '@heroicons/react/outline'
import React from 'react'
import Tooltip from '../../../components/base/Tooltip'
import { Theme, ThemeItem } from '../../../types'
import classNames from 'classnames'
import { useCustomTheme } from '../../../context/CustomThemeProvider/CustomThemeProvider'
import { SET_THEME_VALUE } from '../../../context/CustomThemeProvider/actions'
const themes: ThemeItem[] = [
  {
    id: 1,
    color: '#db4437',
    tooltipText: 'Red',
    value: Theme.RED,
    backgroundColor: [
      {
        id: 1,
        color: '#fae3e1',
        tooltipText: 'Light',
      },
      {
        id: 2,
        color: '#f6d0cd',
        tooltipText: 'Medium',
      },
      {
        id: 3,
        color: '#f2beb9',
        tooltipText: 'Dark',
      },
      {
        id: 4,
        color: '#f6f6f6',
        tooltipText: 'Gray',
      },
    ],
  },
  {
    id: 2,
    color: '#673ab7',
    tooltipText: 'Purple',
    value: Theme.PURPLE,
    backgroundColor: [
      {
        id: 1,
        color: '#f0ebf8',
        tooltipText: 'Light',
      },
      {
        id: 2,
        color: '#e1d8f1',
        tooltipText: 'Medium',
      },
      {
        id: 3,
        color: '#d1c4e9',
        tooltipText: 'Dark',
      },
      {
        id: 4,
        color: '#f6f6f6',
        tooltipText: 'Gray',
      },
    ],
  },
  {
    id: 3,
    color: '#3f51b5',
    tooltipText: 'Indigo',
    value: Theme.INDIGO,
    backgroundColor: [
      {
        id: 1,
        color: '#eceef8',
        tooltipText: 'Light',
      },
      {
        id: 2,
        color: '#d9dcf0',
        tooltipText: 'Medium',
      },
      {
        id: 3,
        color: '#c5cbe9',
        tooltipText: 'Dark',
      },
      {
        id: 4,
        color: '#f6f6f6',
        tooltipText: 'Gray',
      },
    ],
  },
  {
    id: 4,
    color: '#4285f4',
    tooltipText: 'Blue',
    value: Theme.BLUE,
    backgroundColor: [
      {
        id: 1,
        color: '#e3edfd',
        tooltipText: 'Light',
      },
      {
        id: 2,
        color: '#d0e1fc',
        tooltipText: 'Medium',
      },
      {
        id: 3,
        color: '#bdd4fb',
        tooltipText: 'Dark',
      },
      {
        id: 4,
        color: '#f6f6f6',
        tooltipText: 'Gray',
      },
    ],
  },
  {
    id: 5,
    color: '#03a9f4',
    tooltipText: 'Light Blue',
    value: Theme.LIGHT_BLUE,
    backgroundColor: [
      {
        id: 1,
        color: '#d9f2fd',
        tooltipText: 'Light',
      },
      {
        id: 2,
        color: '#c0eafc',
        tooltipText: 'Medium',
      },
      {
        id: 3,
        color: '#a7e1fb',
        tooltipText: 'Dark',
      },
      {
        id: 4,
        color: '#f6f6f6',
        tooltipText: 'Gray',
      },
    ],
  },
  {
    id: 6,
    color: '#00bcd4',
    tooltipText: 'Cyan',
    value: Theme.CYAN,
    backgroundColor: [
      {
        id: 1,
        color: '#d9f5f9',
        tooltipText: 'Light',
      },
      {
        id: 2,
        color: '#bfeef4',
        tooltipText: 'Medium',
      },
      {
        id: 3,
        color: '#a6e8f0',
        tooltipText: 'Dark',
      },
      {
        id: 4,
        color: '#f6f6f6',
        tooltipText: 'Gray',
      },
    ],
  },
  {
    id: 7,
    color: '#ff5722',
    tooltipText: 'Red Orange',
    value: Theme.RED_ORANGE,
    backgroundColor: [
      {
        id: 1,
        color: '#ffe6de',
        tooltipText: 'Light',
      },
      {
        id: 2,
        color: '#ffd5c8',
        tooltipText: 'Medium',
      },
      {
        id: 3,
        color: '#ffc4b2',
        tooltipText: 'Dark',
      },
      {
        id: 4,
        color: '#f6f6f6',
        tooltipText: 'Gray',
      },
    ],
  },
  {
    id: 8,
    color: '#ff9800',
    tooltipText: 'Orange',
    value: Theme.ORANGE,
    backgroundColor: [
      {
        id: 1,
        color: '#fff0d9',
        tooltipText: 'Light',
      },
      {
        id: 2,
        color: '#ffe5bf',
        tooltipText: 'Medium',
      },
      {
        id: 3,
        color: '#ffbda6',
        tooltipText: 'Dark',
      },
      {
        id: 4,
        color: '#f6f6f6',
        tooltipText: 'Gray',
      },
    ],
  },
  {
    id: 9,
    color: '#009688',
    tooltipText: 'Teal',
    value: Theme.TEAL,
    backgroundColor: [
      {
        id: 1,
        color: '#d9efed',
        tooltipText: 'Light',
      },
      {
        id: 2,
        color: '#bfe5e1',
        tooltipText: 'Medium',
      },
      {
        id: 3,
        color: '#a6dad5',
        tooltipText: 'Dark',
      },
      {
        id: 4,
        color: '#f6f6f6',
        tooltipText: 'Gray',
      },
    ],
  },
  {
    id: 10,
    color: '#4caf50',
    tooltipText: 'Green',
    value: Theme.GREEN,
    backgroundColor: [
      {
        id: 1,
        color: '#e4f3e5',
        tooltipText: 'Light',
      },
      {
        id: 2,
        color: '#d2ebd3',
        tooltipText: 'Medium',
      },
      {
        id: 3,
        color: '#c0e3c2',
        tooltipText: 'Dark',
      },
      {
        id: 4,
        color: '#f6f6f6',
        tooltipText: 'Gray',
      },
    ],
  },
  {
    id: 11,
    color: '#607d8b',
    tooltipText: 'Blue Gray',
    value: Theme.BLUE_GRAY,
    backgroundColor: [
      {
        id: 1,
        color: '#e7ecee',
        tooltipText: 'Light',
      },
      {
        id: 2,
        color: '#d7dfe2',
        tooltipText: 'Medium',
      },
      {
        id: 3,
        color: '#c7d2d6',
        tooltipText: 'Dark',
      },
      {
        id: 4,
        color: '#f6f6f6',
        tooltipText: 'Gray',
      },
    ],
  },
  {
    id: 12,
    color: '#9e9e9e',
    tooltipText: 'Gray',
    value: Theme.GRAY,
    backgroundColor: [
      {
        id: 1,
        color: '#f0f0f0',
        tooltipText: 'Light',
      },
      {
        id: 2,
        color: '#e7e7e7',
        tooltipText: 'Medium',
      },
      {
        id: 3,
        color: '#dddddd',
        tooltipText: 'Dark',
      },
      {
        id: 4,
        color: '#f6f6f6',
        tooltipText: 'Gray',
      },
    ],
  },
]

interface ColorItemProps {
  item: Partial<ThemeItem>
  isChecked?: boolean
  border?: boolean
  onClick?: (selectedTheme: Partial<ThemeItem>) => void
}

const ColorItem: React.FC<ColorItemProps> = (props) => {
  return (
    <Tooltip
      label={`${props.item.tooltipText} ${props.item.color}`}
      position={'top'}
    >
      <button
        className={classNames(
          `h-6 w-6 rounded-full hover:scale-110 flex items-center justify-center`,
          { 'border-[1px]': props.border }
        )}
        style={{ backgroundColor: props.item.color }}
        onClick={() => {
          if (props.onClick) {
            props.onClick(props.item)
          }
        }}
      >
        {props.isChecked ? (
          <CheckIcon className={'h-4 w-4 text-white'} strokeWidth={4} />
        ) : (
          ''
        )}
      </button>
    </Tooltip>
  )
}

const ThemeColor: React.FC = () => {
  const { customTheme, dispatch } = useCustomTheme()
  const { theme } = customTheme

  const [selectedTheme, setSelectedTheme] = React.useState<ThemeItem>()
  const [selectedBackground, setSelectedBackground] =
    React.useState<Partial<ThemeItem>>()

  React.useEffect(() => {
    const choiceTheme = themes.find((item) => item.value === theme)
    setSelectedTheme(choiceTheme)
    setSelectedBackground(choiceTheme?.backgroundColor[0])
  }, [theme])

  React.useEffect(() => {
    if (selectedBackground?.color) {
      window.document.body.style.backgroundColor = selectedBackground.color
    }

    return () => {
      window.document.body.style.backgroundColor = 'inherit'
    }
  }, [selectedBackground])

  const changeTheme = (selectedTheme: Partial<ThemeItem>) => {
    dispatch({
      type: SET_THEME_VALUE,
      value: selectedTheme.value,
    })
  }

  const changeBackground = (selectedBackground: Partial<ThemeItem>) => {
    setSelectedBackground(selectedBackground)
  }

  return (
    <div>
      <div className={'p-6 border-b-[1px]'}>
        <h4 className={'uppercase text-xs'}>Theme color</h4>
        <div className={'flex flex-wrap mt-3 mr-16 gap-1.5'}>
          {themes.map((item) => (
            <ColorItem
              key={item.id}
              item={item}
              isChecked={item.value === theme}
              onClick={changeTheme}
            />
          ))}
        </div>
      </div>

      <div className={'p-6 border-b-[1px]'}>
        <h4 className={'uppercase text-xs'}>Background Color</h4>
        <div className={'flex flex-wrap mt-3 mr-16 gap-1.5'}>
          {selectedTheme?.backgroundColor?.map((item) => (
            <ColorItem
              key={item.id}
              item={item}
              isChecked={item.id === selectedBackground?.id}
              border={true}
              onClick={changeBackground}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThemeColor
