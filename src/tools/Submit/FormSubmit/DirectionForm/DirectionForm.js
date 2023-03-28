import s from './DirectionForm.module.scss';
import React from 'react';

export default function DirectionForm({ direction, handleChange }) {
  const getDirections = () => {
    // should be check on status isCheked
    return handleChange;
  };

  return (
    <div>
      <h4 className={s.formTitle}> Интересующие направления</h4>
      <ul className={s.checkboxButtons}>
        <li className={s.checkboxItem}>
          <input
            className={s.check}
            type="checkbox"
            name="direction"
            value="Передача данных"
            onChange={getDirections}
            // checked={direction === 'Передача данных'}
          />
          <label className={s.checkboxContent} htmlFor={'Передача данных'}>
            Передача данных
          </label>
        </li>
        <li className={s.checkboxItem}>
          <input
            className={s.check}
            type="checkbox"
            name="direction"
            value="Системы безопасности"
            onChange={getDirections}
            // checked={direction === 'Системы безопасности'}
          />
          <label className={s.checkboxContent} htmlFor={'Системы безопасности'}>
            Системы безопасности
          </label>
        </li>
        <li className={s.checkboxItem}>
          <input
            className={s.check}
            type="checkbox"
            name="direction"
            value="Инженерные технологии"
            onChange={getDirections}
            // checked={direction === 'Геофизика'}
          />
          <label
            className={s.checkboxContent}
            htmlFor={'Инженерные технологии'}
          >
            Инженерные технологии
          </label>
        </li>
      </ul>
    </div>
  );
}
