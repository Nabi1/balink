import React, { useContext } from 'react';
import { DEFAULT_STATE, FormContext } from '../Form/FormStateContext';
import { Styles } from '../shared/TextField/TextField.style';

export function Address() {
  const { formState, setFormState } = useContext(FormContext);

  return (
    <>
      <Styles.TextField
        required
        id="outlined-required"
        variant="outlined"
        label="Country"
        error={
          formState.submittedStep.address &&
          formState.country === DEFAULT_STATE.country
        }
        onChange={(e) =>
          setFormState({
            method: 'setCountry',
            country: e.target.value,
          })}
        value={formState.country}
      />
      <Styles.TextField
        required
        id="outlined-required"
        variant="outlined"
        label="City"
        error={
          formState.submittedStep.address &&
          formState.city === DEFAULT_STATE.city
        }
        onChange={(e) =>
          setFormState({
            method: 'setCity',
            city: e.target.value,
          })}
        value={formState.city}
      />
      <Styles.TextField
        required
        id="outlined-required"
        variant="outlined"
        label="Street"
        error={
          formState.submittedStep.address &&
          formState.street === DEFAULT_STATE.street
        }
        onChange={(e) =>
          setFormState({
            method: 'setStreet',
            street: e.target.value,
          })}
        value={formState.street}
      />
    </>
  );
}
