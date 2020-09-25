import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';

import { DEFAULT_STATE, FormContext } from '../../Form/FormStateContext';
import { Styles } from './Navigation.style';

export function Navigation() {
  const { formState, setFormState } = useContext(FormContext);
  const STEPS = ['Personal', 'Address', 'Contactability'];

  function handleGoToPersonalStep() {
    const { activeStep, firstname, submittedStep, surname, title } = formState;
    setFormState({
      method: 'setSubmittedStep',
      submittedStep: { ...submittedStep, personal: true },
    });
    if (
      firstname !== DEFAULT_STATE.firstname &&
      surname !== DEFAULT_STATE.surname &&
      title !== DEFAULT_STATE.title
    ) {
      setFormState({
        method: 'setActiveStep',
        activeStep: activeStep + 1,
      });
    }
  }
  function handleGoToContactabilityStep() {
    const { activeStep, city, country, street, submittedStep } = formState;

    setFormState({
      method: 'setSubmittedStep',
      submittedStep: { ...submittedStep, address: true },
    });
    if (
      country !== DEFAULT_STATE.country &&
      city !== DEFAULT_STATE.city &&
      street !== DEFAULT_STATE.street
    ) {
      setFormState({
        method: 'setActiveStep',
        activeStep: activeStep + 1,
      });
    }
  }
  const handleNext = () => {
    const { activeStep } = formState;
    if (activeStep === DEFAULT_STATE.activeStep) {
      handleGoToPersonalStep();
    }
    if (activeStep === 1) {
      handleGoToContactabilityStep();
    }
    if (activeStep === STEPS.length - 1) {
      setFormState({
        method: 'setShowModal',
        showModal: true,
      });
    }
  };

  const handleBack = () => {
    setFormState({
      method: 'setActiveStep',
      activeStep: formState.activeStep - 1,
    });
  };

  return (
    <Styles.Buttons>
      <Button disabled={formState.activeStep === 0} onClick={handleBack}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={handleNext}>
        {formState.activeStep === STEPS.length - 1 ? 'Submit' : 'Next'}
      </Button>
    </Styles.Buttons>
  );
}
