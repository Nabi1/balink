import React, { useContext } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { DEFAULT_STATE, FormContext } from '../Form/FormStateContext';

const STEPS = ['Personal', 'Address', 'Contactability'];

export function HorizontalStepper() {
  const { formState, setFormState } = useContext(FormContext);

  const handleReset = () => {
    setFormState({
      method: 'setActiveStep',
      activeStep: DEFAULT_STATE.activeStep,
    });
  };

  return (
    <>
      <Stepper activeStep={formState.activeStep} alternativeLabel>
        {STEPS.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {formState.activeStep === STEPS.length && (
          <div>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        )}
      </div>
    </>
  );
}
