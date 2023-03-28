import React from 'react';

export default function arrayMaping(
  array,
  classNameList,
  classNameItems,
  textItem,
) {
  // console.log(array);
  // console.log('CLASSNAME:::::::');

  return (
    <ul className={classNameList}>
      {array.map((item, i) => (
        <li key={i} className={classNameItems}>
          {/* <p className={textItem}>{item.toLowerCase()}</p> */}
          <p className={textItem}>{item}</p>
        </li>
      ))}
    </ul>
  );
}
