import FormInput from '../../../components/base/FormInput'
import { useFormSection } from '../context/FormSectionProvider/FormSectionProvider'
import {
  SET_FORM_SECTION_DESCRIPTION,
  SET_FORM_SECTION_TITLE,
} from '../context/FormSectionProvider/actions'

const FormHeader = () => {
  const { formSection, dispatch } = useFormSection()
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
          value={formSection.title}
          onChange={(value) =>
            dispatch({
              type: SET_FORM_SECTION_TITLE,
              value,
            })
          }
        />
        <FormInput
          inputClassName={'text-base h-6'}
          containerClassName={'after:h-[1px] mt-2 pb-1'}
          value={formSection.description}
          onChange={(value) =>
            dispatch({
              type: SET_FORM_SECTION_DESCRIPTION,
              value,
            })
          }
        />
      </div>
    </div>
  )
}

export default FormHeader
