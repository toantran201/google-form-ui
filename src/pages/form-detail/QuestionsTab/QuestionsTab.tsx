import FormHeader from '../components/FormHeader'
import FormContent from '../components/FormContent'
import { FormSectionProvider } from '../context/FormSectionProvider/FormSectionProvider'
import { FormSection } from '../../../types'

const formInitialValue: FormSection = {
  id: 1,
  index: 1,
  title: 'Hello world',
  description: 'Description',
  questions: [],
  isDefault: true,
}

const QuestionsTab = () => {
  return (
    <div className={'pt-4 outline-none'}>
      <FormSectionProvider initialValue={formInitialValue}>
        <FormHeader />
        <FormContent />
      </FormSectionProvider>
    </div>
  )
}

export default QuestionsTab
