import React from 'react';
// import { withTranslation } from 'react-i18next';

import { Form } from './components/Form/Form';
import { FormProvider } from './components/Form/FormProvider';

const App = () => {
  return (
    <div>
      <FormProvider>
        {/* {t('Welcome to React')} */}
        <Form />
      </FormProvider>
    </div>
  );
};

export default App;
// export default withTranslation()(App);
