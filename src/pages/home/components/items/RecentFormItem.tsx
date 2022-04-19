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
          src="https://lh3.googleusercontent.com/fife/AAWUweWyJF56JAjkb6CapfAWuwMGg4dALN8Jcvv7UR2t1MueVof_1LbQ9SJAsSql1ZGA4GImPTgCMHDMUeB4oHfZcsRFfZAJto4zUFLh4d6hO_dPw4Zi-5PoolhzJG1T-KgLafBg8fFgWgvyCbE1o8sI0gbYY7GxdXcKEh1f6BU8pqekQtqyKkrZ9QsZUyaOYx_FYM8rkFy81qor0qeQb54FvOcKg6reEti6YRxMBnnxrj8wPkGNOf6gdox-gAF7r-by3Go_7iZo7pVQonxU83ANO664GJe8936ezJzQONgXU_Y0tfCcyee7nOQ1wrmOQXFOj2bQHyF5k6nedYF2LELOqzhSQcwePsC4v7wJ7BcZWWG9E54wlyhFirs_4Aa_upC6s7EnxYMNdRtWE-DFuBZPBcjWXE8A9qIubkX0YbO_kv4eFLiB_oLvfanEAK1Xao9B_MOqicni9OiHojpZLcH5ES_tLxHe5hUgQZGh6L9y1c_fNgBZ1DzbTrgSwyu8nfUUTPDvtoChbQOLbCa5A-55h3ndK1RuICyNyxzGF9g0cl62QoHeQ-tAmfXlzDMfkOh8Lp-r7pkkvOcx87zAtX9TVhJYbkDpec94q1iCBQwgWeN1wJVDVlpksyYL31p86_K19kv6v6LQe6blgGmAq1BQXtGEetXWxGMMtdgnXDWiyJsI165046srDslfuEv7ejmK4fayMkGVQrqe60BStcs1K7AZpqkdVV5CGuFaWkCt0OhFh5DbGu7_r5RTIL0pDzqL-lNuVjpKfu1a1NEjSqDgTQN5kvV-e7ZYlA5tBLHlkwv9r-sIYA2P-WBaHbJuJTEvhXQ=w208-h156-p"
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
