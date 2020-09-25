import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { useContext } from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { FormContext } from '../Form/FormStateContext';

export function Modal() {
  const { formState, setFormState } = useContext(FormContext);

  const handleClose = () => {
    setFormState({
      method: 'setShowModal',
      showModal: false,
    });
  };

  return (
    <div>
      <Dialog
        aria-labelledby="simple-dialog-title"
        open={formState.showModal}
        onClose={handleClose}
      >
        <DialogTitle>
          <h3>Bravo</h3>
          <DialogContent>
            <Typography>You submitted the form successfully</Typography>
          </DialogContent>
        </DialogTitle>
      </Dialog>
    </div>
  );
}
