import s from './SuccessSubmitPage.module.scss';
import CloseButton from 'tools/CloseButton';
import Slider from 'tools/Slider';
import LangContentSelector from 'additional-components/LanguageContentSelector/LanguageContentSelector';
import { getLanguageMemoised } from 'redux/languages/languages-selector';

import { useSelector } from 'react-redux';
import LanguageButton from 'additional-components/LanguageButton';

export default function SuccessSubmitPage() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { gratefulLetter } = LangContentSelector(currentLanguage);

  return (
    <div>
      <div>
        <CloseButton />
        <LanguageButton />
      </div>
      <div className={s.success}>
        <h2 className={s.successMessage}>{gratefulLetter.item1}</h2>
        {/* <br />
        <h2 className={s.successMessage}>{gratefulLetter.item2}</h2> */}
        <br />
        <h2 className={s.successMessage}>{gratefulLetter.item3}</h2>
      </div>
    </div>
  );
}
