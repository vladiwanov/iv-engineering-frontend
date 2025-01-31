import axios from 'axios';
import * as actions from './submit-actions';
import serverAddr from './serverAddr';

const {
  submitContactRequest,
  submitContactSuccess,
  submitContactError,
  clearSubmitStatusAction,
} = actions;

// submit address:
serverAddr();
axios.defaults.baseURL = `${serverAddr()}/contacts`;

const addContact = contact => async dispatch => {
  const newContact = { ...contact, from: 'iv-engineering' };
  dispatch(submitContactRequest());
  try {
    const { data } = await axios.post('', newContact);

    dispatch(submitContactSuccess(data.status));
  } catch (error) {
    // console.log('ERROR_MESSAGEIN OPERATIONS::🅰️:::', error.message);
    dispatch(submitContactError(error.message));
  }
};

const clearSubmitStatusOperation = value => dispatch => {
  dispatch(clearSubmitStatusAction(value));
};

export default { addContact, clearSubmitStatusOperation };
