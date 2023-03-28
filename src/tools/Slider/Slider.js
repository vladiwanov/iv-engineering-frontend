import s from './Slider.module.scss';
import React, { useState, useEffect, memo, useCallback } from 'react';
import changeSlide from './changeSlide';
import io from '../io';
//======================================

const Slider = ({ images }) => {
  const [slide1, setSlide1] = useState(images[0]);
  const [slide2, setSlide2] = useState(images[1]);

  const timeoutValue = 3100;

  const sliderItem1 = document
    .querySelector('#el1')
    ?.classList.remove(s.activeSlide1);
  const sliderItem2 = document
    .querySelector('#el2')
    ?.classList.remove(s.activeSlide2);

  const getCurrentSlides = useCallback(() => {
    const state = {
      slide1,
      slide2,
    };

    const rez = changeSlide(state, images);
    setSlide1(rez.slide1);
    setSlide2(rez.slide2);
  }, [slide1, slide2, images]);

  useEffect(() => {
    setSlide1(images[0]);
  }, []);

  useEffect(() => {
    setTimeout(getCurrentSlides, timeoutValue - 10);
    io('el1', '', s.activeSlide1);
    io('el2', '', s.activeSlide2);
  }, [getCurrentSlides]);

  return (
    <div className={s.backdrop}>
      <div className={s.slider}>
        <ul>
          <li className={`${s.imageItem} `} id="el1">
            <img className={`${s.img} `} src={slide1} alt="datatransfer" />
          </li>

          <li className={`${s.imageItem} ${s.inactive} `} id="el2">
            <img className={`${s.img}  `} src={slide2} alt="datatransfer" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(Slider);
