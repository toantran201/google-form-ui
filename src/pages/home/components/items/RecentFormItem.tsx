import ButtonFormItem from './ButtonFormItem'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface RecentFormItemProps {
  id: number
  background: string
  name: string
  lastOpened?: string
  onSelectAction: (key: string) => void
}

const RecentFormItem = (props: RecentFormItemProps) => {
  const navigate = useNavigate()
  const { name, lastOpened, background, onSelectAction } = props
  return (
    <div
      className={
        'w-52 border-[1px] border-gray-200 rounded-sm cursor-pointer hover:border-violet-800 relative'
      }
      onClick={() => {
        navigate('detail')
      }}
    >
      <div className={'border-b-[1px] border-gray-200'}>
        <img src={background} alt={name} className={'h-40'} />
      </div>
      <div className={'pt-4 pb-3 pl-4 pr-2'}>
        <h3 className={'text-sm font-semibold'}>{name}</h3>
        <div className={'mt-1 flex items-center space-x-2'}>
          <img
            src="src/assets/icons/favicon_qp2.png"
            alt="Google form icon"
            className={'w-5 h-5 rounded-sm'}
          />
          <p className={'text-xs font-normal text-gray-400'}>
            Opened {lastOpened}
          </p>
        </div>
        <ButtonFormItem onSelectAction={onSelectAction} />
      </div>
    </div>
  )
}

export default React.memo(RecentFormItem)
