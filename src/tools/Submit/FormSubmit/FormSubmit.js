import React, { useState } from 'react';
import s from './FormSubmit.module.scss';
// import Validation from '../Validation';
import { useSelector } from 'react-redux';
import Alert from '../Alert';
import InputForm from './InputForm';
import CommentsForm from './CommentsForm';
import SubmitForm from './SubmitForm/SubmitForm';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import LangContentSelector from '../../../additional-components/LanguageContentSelector';

// export default class FormSubmit extends Component {

const FormSubmit = ({ onSubmit }) => {
  const [name, setName] = useState(''); // name - название свойства (ключ свойства) , setName - метод для изменения свойства обхекта , useState ("") - начальное значение объекта  (стейта)ж
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  // const [direction, setDirection] = useState([]);
  const [licence, setLicence] = useState(false);
  const [error, setError] = useState('');
  const [comment, setComment] = useState('');

  const currentLanguage = useSelector(getLanguageMemoised);

  const { submitForm } = LangContentSelector(currentLanguage);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    // ! сделать валидацию *** (см.вконце кода)

    // this.setState({ [name]: value });
    // // console.log('DIRECTION', this.state.direction);
    switch (name) {
      case 'name':
        return setName(value);
      // break;
      // case 'tel':
      // return value;
      // break;
      case 'email':
        return setEmail(value);
      // break;
      // case 'direction':
      // return value; // попробовать рыспылить массив с проверкой на существующие элементы
      // break;
      case 'licence':
        return setLicence(value);
      // break;
      case 'error':
        return setError(value);
      // break;
      case 'comment':
        return setComment(value);
      // break;
      // default: return null // должно быть что-то другое
      default:
        console.log(`Тип поля ${name} не обрабатывается`);
    }
  };
  const statusLicenceChange = e => {
    setLicence(e.currentTarget.checked);
    // this.setState({ licence: e.currentTarget.checked });
  };

  const resetForm = () => {
    setName('');
    setTel('');
    setEmail('');
    // setDirection([]);
    setLicence(false);
    setComment('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      name,
      // tel,
      email,
      // direction,
      licence,
      // error,
      comment,
    });
    resetForm();
  };

  return (
    <>
      <b className={s.formTitle}>{submitForm.title}</b>
      <form className={s.main} onSubmit={handleSubmit}>
        <InputForm
          name={name}
          email={email}
          tel={tel}
          handleChange={handleChange}
        />
        <CommentsForm comment={comment} handleChange={handleChange} />
        <SubmitForm
          licence={licence}
          email={email}
          statusLicenceChange={statusLicenceChange}
        />
      </form>
      {error && <Alert arg={error} />}
    </>
  );
};

export default FormSubmit;
