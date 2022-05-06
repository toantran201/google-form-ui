import FormInput from '../../../components/base/FormInput'

const QuestionHeader = () => {
  return (
    <div className={'bg-white pt-10 pb-6 relative rounded-2xl menu-shadow'}>
      <div
        className={
          'absolute top-0 left-0 h-3 w-full rounded-t-2xl bg-form-primary'
        }
      />
      <div className={'px-6'}>
        <FormInput size={'large'} />
        <FormInput size={'small'} className={'mt-2'} />
      </div>
    </div>
  )
}

export default QuestionHeader
