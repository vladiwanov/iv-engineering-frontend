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
  const { footer, contactUs } = LanguageContentSelector(currentLanguage);

  // console.log('CONTACT_US::::::::::', contactUs);

  useEffect(() => {
    io('contacts', '0px', s.contactsAnimation);
  }, []);

  return (
    <section className={s.footerItems}>
      <p>{footer.contacts}</p>
      {/*<div className={` list ${s.contacts}`}>*/}
      <div>
        <a
          className={s.contacts}
          href={`tel:${contactUs[0].tel}`}
          target="_blank"
          rel="noreferrer"
          id="contacts"
        >
          <svg className={s.footerIcons}>
            <use href={sprite + '#phone'} />
          </svg>
          {/*<MdMail className={s.footerIcons} />*/}
          <p className={s.link}>{contactUs[0].tel}</p>
        </a>
        <div id="contacts" className={`${s.contacts} ${s.addr}`}>
          <p>{contactUs[1].addr}</p>
        </div>
        <a
          className={s.contacts}
          // href="mailto: iv@iv-en.com"
          href={`mailto:${contactUs[2].email}`}
          target="_blank"
          rel="noreferrer"
          id="contacts"
        >
          <MdMail className={s.footerIcons} />
          <p className={s.link}>{contactUs[2].email}</p>
        </a>
      </div>
    </section>
  );
}
