import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, { useContext } from 'react';

import { Address } from './Address';
import { Contactability } from './Contactability';
import { FormContext } from '../Form/FormStateContext';
import { Personal } from './Personal';

export function Menu() {
  const { formState } = useContext(FormContext);
  let currentMenu = null;

  switch (formState.activeStep) {
    case 0:
      currentMenu = <Personal />;
      break;
    case 1:
      currentMenu = <Address />;
      break;
    case 2:
      currentMenu = <Contactability />;
      break;
    default:
      return null;
  }

  return (
    <Card variant="outlined">
      <CardContent>{currentMenu}</CardContent>
    </Card>
  );
}
