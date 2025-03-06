import { useEffect } from 'react';
import s from './Contacts.module.scss';
import { MdMail } from 'react-icons/md';
import { useSelector } from 'react-redux';
import LanguageContentSelector from 'additional-components/LanguageContentSelector';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import io from 'tools/io';
import sprite from '../../utils/db/img/sprite.svg';

export default function Contacts() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { footer } = LanguageContentSelector(currentLanguage);

  useEffect(() => {
    io('contacts', '0px', s.contactsAnimation);
  }, []);

  return (
    <section className={s.footerItems}>
      <p>{footer.contacts}</p>
      {/*<div className={` list ${s.contacts}`}>*/}
        <div >
        <a
          className={s.contacts}
          href="mailto: iv@iv-en.com"
          target="_blank"
          rel="noreferrer"
          id="contacts"
        >
          <MdMail className={s.footerIcons} />
          <p className={s.link}>iv@iv-en.com</p>
        </a>
        <a
          className={s.contacts}
          href="tel:380 66 383 27 47"
          target="_blank"
          rel="noreferrer"
          id="contacts"
        >
          <svg className={s.footerIcons}>
            <use href={sprite + '#phone'} />
          </svg>
          {/*<MdMail className={s.footerIcons} />*/}
          <p className={s.link}>380 66 383 27 47</p>
        </a>
      </div>
    </section>
  );
}
