import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { FormContext, DEFAULT_STATE } from './FormStateContext';

function formStateReducer(previousFormState, action) {
  const formState = { ...previousFormState };

  switch (action.method) {
    case 'setActiveStep':
      formState.activeStep = action.activeStep;
      break;
    case 'setRecruiter':
      formState.recruiter = action.recruiter;
      break;
    case 'setSurname':
      formState.surname = action.surname;
      break;
    case 'setFirstname':
      formState.firstname = action.firstname;
      break;
    case 'setEmail':
      formState.email = action.email;
      break;
    case 'setTitle':
      formState.title = action.title;
      break;
    case 'setCountry':
      formState.country = action.country;
      break;
    case 'setCity':
      formState.city = action.city;
      break;
    case 'setStreet':
      formState.street = action.street;
      break;
    case 'setShowModal':
      formState.showModal = action.showModal;
      break;
    case 'setOptions':
      formState.options = action.options;
      break;
    case 'setSubmittedStep':
      formState.submittedStep = action.submittedStep;
      break;
    case 'setPhone':
      formState.phone = action.phone;
      break;
    default:
  }
  return formState;
}

export const FormProvider = ({ children }) => {
  const [formState, setFormState] = useReducer(formStateReducer, DEFAULT_STATE);

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
