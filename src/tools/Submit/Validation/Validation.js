// import { symbol } from 'prop-types';

export default function Validation(name, value) {
  console.log(name, value);
  let checkRezult = '';
  switch (name) {
    case 'name':
      checkRezult = checkName(value);
      console.log('NAME:::', checkRezult);

      break;
    case 'tel':
      console.log('TEL');
      checkRezult = checkTel(value);
      break;
    case 'email':
      console.log('EMAIL');
      // checkEmail(value);
      break;
    case 'direction':
      console.log('DIRECTION');
      // checkEmail(value);
      break;
    default:
      console.log('DEFAULT');
      break;
      // console.log('Результат проверки :::', checkRezult);
      return checkRezult;
  }

  function checkName(name) {
    name.trim();
    console.log('ARG::', name.trim());

    //   return rez;
    // }

    // getSearchName = name => {

    if (name === '') {
      alert('поле не должно быть пустым');
      return;
      // }
      // this.setState({ searchName: name });
    }
  }

  function checkTel(tel) {
    tel
      .trim()
      .split()
      .map(symbol =>
        symbol !==
        /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
          ? `${tel} - ошибка валидации`
          : '',
      );
  }

  // function checkEmail(email) {
  //   email.trim();
  // }
}
