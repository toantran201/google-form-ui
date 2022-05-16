import FormInput from '../../../components/base/FormInput'

const QuestionHeader = () => {
  return (
    <div className={'bg-white pt-10 pb-6 relative rounded-xl menu-shadow'}>
      <div
        className={
          'absolute top-0 left-0 h-3 w-full rounded-t-xl bg-form-primary'
        }
      />
      <div className={'px-6'}>
        <FormInput
          inputClassName={'text-[32px] h-12'}
          containerClassName={'after:h-[2px] before:h-[2.5px] pb-2'}
        />
        <FormInput
          inputClassName={'text-base h-6'}
          containerClassName={'after:h-[1px] mt-2 pb-1'}
        />
      </div>
    </div>
  )
}

export default QuestionHeader
