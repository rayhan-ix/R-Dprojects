import React from 'react';
import intl from 'react-intl-universal';
import { useHistory } from 'react-router';
import ChangeLang from '../base-components/change-lang';
import { BaseButton } from '../base-components/base-button';

const Layout = () => {
  const history = useHistory();
  function navigate() {
    history.push('/form');
  }

  return (
    <>
      <BaseButton buttonType='button' label='Button' onClick={() => alert('lalala')} />
      <h1>Hello World !@!@@!</h1>
      <h1>{intl.get('Hello')}</h1>
      <ChangeLang />
      <button type='button' onClick={() => navigate()}>
        Go to form
      </button>
    </>
  );
};

export default Layout;
