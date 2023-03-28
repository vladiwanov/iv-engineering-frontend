import s from './ErrorSubmitPage.module.scss';
import CloseButton from 'tools/CloseButton';
import LangContentSelector from 'additional-components/LanguageContentSelector/LanguageContentSelector';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import getSubmitStatusSelector from 'redux/submit/submit-selectors';
import { useSelector } from 'react-redux';
import LanguageButton from 'additional-components/LanguageButton';

export default function SuccessSubmitPage() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const errorContent = useSelector(getSubmitStatusSelector);
  const { alertSubmit } = LangContentSelector(currentLanguage);

  return (
    <div>
      <div>
        <CloseButton />
        <LanguageButton />
      </div>
      <div className={s.success}>
        <h2 className={s.alertMessage}>{alertSubmit.text1}</h2>
        <h2 className={s.alertMessage}>{errorContent}</h2>
        <br />
      </div>
    </div>
  );
}
