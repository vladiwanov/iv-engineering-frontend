import React from 'react';
import s from './Alert.module.scss'

export default function Alert({arg}) {
  return (
    <div>
      <b className={ s.alert}>
        {arg}
      </b>
    </div>
  )
}
