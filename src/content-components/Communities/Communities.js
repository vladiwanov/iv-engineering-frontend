import { useEffect } from 'react';
import s from './Communities.module.scss';
import sprite from 'utils/db/img/sprite.svg';
import { useSelector } from 'react-redux';
import LanguageContentSelector from 'additional-components/LanguageContentSelector';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import io from 'tools/io';

export default function Communities() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { footer } = LanguageContentSelector(currentLanguage);

  useEffect(() => {
    io('contacts', '0px', s.contactsAnimation);
  }, []);

  return (
    <section className={s.footerItems}>
      {/* <p className={s.community}>{footer.sociality}</p> */}
      <p>{footer.sociality}</p>
      <ul className={` list ${s.socialnetworks}`}>
        <li>
          <a
            id="contacts"
            href="https://www.facebook.com/iv.engineering.iv.engineering"
            target="_blank"
            rel="noreferrer"
            className={s.contacts}
          >
            <svg className={s.footerIcons}>
              <use href={sprite + '#icon-facebook'} />
            </svg>
          </a>
        </li>
        <li>
          <a
            id="contacts"
            href="https://twitter.com/iv_engineering_"
            target="_blank"
            rel="noreferrer"
            className={s.contacts}
          >
            <svg className={s.footerIcons}>
              <use href={sprite + '#icon-twitter'} />
            </svg>
          </a>
        </li>
        <li>
          <a
            id="contacts"
            href="https://www.linkedin.com/company/iv-engineering"
            target="_blank"
            rel="noreferrer"
            className={s.contacts}
          >
            <svg className={s.footerIcons}>
              <use href={sprite + '#icon-linkedin'} />;
            </svg>
          </a>
        </li>
        <li>
          <a
            id="contacts"
            href="https://www.instagram.com/_iv_engineering/"
            target="_blank"
            rel="noreferrer"
            className={s.contacts}
          >
            <svg className={s.footerIcons}>
              <use href={sprite + '#icon-instagram'} />;
            </svg>
          </a>
        </li>
      </ul>
    </section>
  );
}
