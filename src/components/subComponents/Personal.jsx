import React, { useContext } from 'react';
import { DEFAULT_STATE, FormContext } from '../Form/FormStateContext';
import { Styles } from '../shared/TextField/TextField.style';

export function Personal() {
  const { formState, setFormState } = useContext(FormContext);

  return (
    <>
      <Styles.TextField
        required
        id="outlined-required"
        variant="outlined"
        label="Firstname"
        error={
          formState.submittedStep.personal &&
          formState.firstname === DEFAULT_STATE.firstname
        }
        onChange={(e) =>
          setFormState({
            method: 'setFirstname',
            firstname: e.target.value,
          })}
        value={formState.firstname}
      />
      <Styles.TextField
        required
        id="outlined-required"
        defaultValue="Please provide your surname"
        variant="outlined"
        label="Surname"
        error={
          formState.submittedStep.personal &&
          formState.surname === DEFAULT_STATE.surname
        }
        onChange={(e) =>
          setFormState({
            method: 'setSurname',
            surname: e.target.value,
          })}
        value={formState.surname}
      />
      <Styles.TextField
        required
        id="outlined-required"
        defaultValue="Please provide your surname"
        variant="outlined"
        label="Title"
        error={
          formState.submittedStep.personal &&
          formState.title === DEFAULT_STATE.title
        }
        onChange={(e) =>
          setFormState({
            method: 'setTitle',
            title: e.target.value,
          })}
        value={formState.title}
      />
    </>
  );
}
