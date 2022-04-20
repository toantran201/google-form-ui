import ButtonFormItem from './ButtonFormItem'
import { FormItem } from '../../../../types'
import React from 'react'

const RecentFormItem = (props: FormItem) => {
  const { name, id, lastOpened, background } = props
  return (
    <div
      className={
        'w-52 border-[1px] border-gray-200 rounded-sm cursor-pointer hover:border-violet-800'
      }
    >
      <div className={'border-b-[1px] border-gray-200'}>
        <img src={background} alt={name} className={'h-40'} />
      </div>
      <div className={'relative pt-4 pb-3 pl-4 pr-2'}>
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
        <ButtonFormItem />
      </div>
    </div>
  )
}

export default React.memo(RecentFormItem)
