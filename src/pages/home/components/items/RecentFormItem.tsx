import { DotsVerticalIcon } from '@heroicons/react/outline'
import ButtonFormItem from './ButtonFormItem'

const RecentFormItem = () => {
  return (
    <div
      className={
        'w-52 border-[1px] border-gray-200 rounded-sm cursor-pointer hover:border-violet-800'
      }
    >
      <div className={'border-b-[1px] border-gray-200'}>
        <img
          src="https://ssl.gstatic.com/docs/templates/thumbnails/1xQF3s6EP0d58H-XJ7R440OpREKo4KqEapa0mkw43RPE_400.png"
          alt=""
          className={'h-40'}
        />
      </div>
      <div className={'relative pt-4 pb-3 pl-4 pr-2'}>
        <h3 className={'text-sm font-semibold'}>T-Shirt Sign Up</h3>
        <div className={'mt-1 flex items-center space-x-2'}>
          <img
            src="src/assets/icons/favicon_qp2.png"
            alt="Google form icon"
            className={'w-5 h-5 rounded-sm'}
          />
          <p className={'text-xs font-normal text-gray-400'}>Opened 2:45 AM</p>
        </div>
        <ButtonFormItem />
      </div>
    </div>
  )
}

export default RecentFormItem
