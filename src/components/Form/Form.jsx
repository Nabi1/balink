import React from 'react';

import { HorizontalStepper } from '../subComponents/HorizontalStepper';
import { Menu } from '../subComponents/Menu';
import { Modal } from '../subComponents/Modal';
import { Navigation } from '../subComponents/Navigation/Navigation';
import { Styles } from './Form.style';

export const Form = () => {
  return (
    <>
      <HorizontalStepper />
      <Styles.Form>
        <Menu />
        <Navigation />
      </Styles.Form>
      <Modal />
    </>
  );
};
