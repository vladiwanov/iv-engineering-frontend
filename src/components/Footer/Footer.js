import s from './Footer.module.scss';
import React from 'react';
import Contacts from '../../content-components/Contacts';
import Communities from '../../content-components/Communities';

export default function Footer() {
  return (
    <footer className={s.footer} id="container">
      <Contacts />
      <Communities />
    </footer>
  );
}
