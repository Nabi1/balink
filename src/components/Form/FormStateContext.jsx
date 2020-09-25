import React from 'react';

export const DEFAULT_STATE = {
  country: '',
  firstname: '',
  showModal: false,
  surname: '',
  title: '',
  email: {
    error: false,
    value: '',
  },
  phone: {
    error: false,
    value: '',
  },
  submittedStep: {
    address: false,
    contactability: false,
    personal: false,
  },
  activeStep: 0,
};

export const FormContext = React.createContext({
  formState: DEFAULT_STATE,
  setFormState: null,
});
