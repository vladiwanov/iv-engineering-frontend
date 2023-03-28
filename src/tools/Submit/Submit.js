import React, { useState, useCallback } from 'react';
import Modals from './Modal';
import SubmitButton from './SubmitButton';
import FormSubmit from './FormSubmit';
import s from './Submit.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/submit/submit-operations';
const { Modal } = Modals;

export default function Submit() {
  const { addContact } = operations;
  const dispatch = useDispatch();
  const addSubmit = value => dispatch(addContact(value));
  const [showModal, setShowModal] = useState(false);
  const submitHandler = data => {
    addSubmit(data);
    toggleModal();
  };
  const toggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);
  return (
    <>
      <section className={s.submit}>
        <SubmitButton onToggle={toggleModal} />
        {showModal && (
          <Modal onToggle={toggleModal}>
            <FormSubmit onSubmit={submitHandler} />
          </Modal>
        )}
      </section>
    </>
  );
}
