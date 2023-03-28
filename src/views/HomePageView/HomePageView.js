import React from 'react';
import Hero from '../../global-components/Hero';
import s from './HomePageView.module.scss';
import Lang from '../../additional-components/LanguageButton';
import Footer from 'components/Footer';
import Slider from 'tools/Slider';
import heroImages from '../../utils/db/images-db/hero-images.js';

export default function HomePageView() {
  return (
    <>
      <div className={s.homepage}>
        <Slider images={heroImages} />
        <Lang />
        <Hero />
      </div>
      <Footer />
    </>
  );
}
