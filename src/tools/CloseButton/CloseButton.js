import s from './CloseButton.module.scss';
import React, { useCallback } from 'react';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { getSavedPrevPath } from 'redux/content/content-selectors';
import { NavLink } from 'react-router-dom';
import { savedPrevPath, detailsAction } from 'redux/content/content-actions';
import operations from 'redux/submit/submit-operations';
import removeContentStorage from 'tools/removeLocalStorageContent';

export default function CloseButton(children) {
  const { clearSubmitStatusOperation } = operations;

  const dispatch = useDispatch();
  const closeShowDetails = useCallback(
    value => dispatch(detailsAction(value)),
    [dispatch],
  );
  const clearSubmitStatus = value =>
    dispatch(clearSubmitStatusOperation(value));
  const savePath = useCallback(
    value => dispatch(savedPrevPath(value)),
    [dispatch],
  );
  const savedPath = useSelector(getSavedPrevPath);
  const combineActionsCloseButon = value => {
    closeShowDetails(value);
    savePath(value);
    removeContentStorage();
    clearSubmitStatus('idle');
  };
  return (
    <>
      <NavLink to={savedPath}>
        <button
          onClick={() => combineActionsCloseButon('')}
          className={s.buttonClose}
        >
          <IoClose className={s.iconClose} />
        </button>
      </NavLink>
    </>
  );
}
