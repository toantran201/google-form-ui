export interface RecentFormItemProps {
  background: string
  itemName: string
}
const RecentFormItem = ({ background, itemName }: RecentFormItemProps) => {
  return (
    <div>
      <figure>
        <div
          className={
            'relative aspect-17/13 border-[1px] border-gray-300 rounded-md overflow-hidden cursor-pointer hover:border-violet-800'
          }
        >
          <img src={background} alt={itemName} className={'w-full h-full'} />
        </div>
        <figcaption className={'mt-2.5'}>
          <h4 className={'text-sm font-medium'}>{itemName}</h4>
        </figcaption>
      </figure>
    </div>
  )
}

export default RecentFormItem
