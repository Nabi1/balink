import React, { useContext } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { DEFAULT_STATE, FormContext } from '../Form/FormStateContext';
import { Styles } from '../shared/TextField/TextField.style';

export function Contactability() {
  const { formState, setFormState } = useContext(FormContext);

  const [state, setState] = React.useState({
    checkedEmail: false,
    checkedPhone: false,
  });

  const handleChangeCheckBox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  /**
   *
   * @param userEmail
   */
  function handleChangeEmail(userEmail) {
    const regex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    setFormState({
      method: 'setEmail',
      email: {
        error: regex.test(userEmail),
        value: userEmail,
      },
    });
  }

  /**
   *
   * @param userPhone
   */
  function handleChangePhone(userPhone) {
    const regex = RegExp(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    );
    setFormState({
      method: 'setPhone',
      phone: {
        error: regex.test(userPhone),
        value: userPhone,
      },
    });
  }
  return (
    <>
      <Styles.TextField
        id="outlined-required"
        variant="outlined"
        label="email"
        error={
          (formState.submittedStep.contactability &&
            formState.email.value === DEFAULT_STATE.email.value) ||
          (!formState.email.error &&
            formState.email.value !== DEFAULT_STATE.email.value)
        }
        onChange={(e) => handleChangeEmail(e.target.value)}
        value={formState.email.value}
      />
      <Styles.TextField
        id="outlined-required"
        defaultValue="Phone number"
        variant="outlined"
        label="Phone"
        error={
          (formState.submittedStep.contactability &&
            formState.phone.value === DEFAULT_STATE.phone.value) ||
          (!formState.phone.error &&
            formState.phone.value !== DEFAULT_STATE.phone.value)
        }
        onChange={(e) => handleChangePhone(e.target.value)}
        value={formState.phone.value}
      />
      <div>
        <FormControlLabel
          control={(
            <Checkbox
              checked={state.checkedEmail}
              onChange={handleChangeCheckBox}
              name="checkedEmail"
            />
          )}
          label="Email"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedPhone}
              onChange={handleChangeCheckBox}
              name="checkedPhone"
              color="primary"
            />
          }
          label="Phone"
        />
      </div>
    </>
  );
}
