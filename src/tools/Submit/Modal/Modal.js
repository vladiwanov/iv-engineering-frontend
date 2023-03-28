import React, { useEffect } from 'react';
import s from './Modal.module.scss';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
const modalRootSubmit = document.querySelector('#modal-root-submit');

const Modal = ({ onToggle, children }) => {
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onToggle();
    }
  };

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onToggle();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [onToggle]);

  return createPortal(
    <div className={s.modalBackdrop} onClick={handleBackdropClick}>
      <div className={s.modalContent}>{children}</div>
    </div>,
    modalRoot,
  );
};

const SubmitResponseModal = ({ onToggle, children }) => {
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onToggle();
    }
  };
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onToggle();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [onToggle]);

  return createPortal(
    <div className={s.modalBackdrop} onClick={handleBackdropClick}>
      <div className={s.modalContent}>{children}</div>
    </div>,
    modalRootSubmit,
  );
};

export default { Modal, SubmitResponseModal };
