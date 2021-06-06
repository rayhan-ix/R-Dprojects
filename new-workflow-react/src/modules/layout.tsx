import React, { useEffect, useState } from 'react';
import intl from 'react-intl-universal';
import { useHistory } from 'react-router';
import _ from 'lodash';
import ChangeLang from '../base-components/change-lang';
import { BaseButton } from '../base-components/base-button';
import { locales } from '../languages';
import LoaderComponent from '../base-components/loader-component';

const SUPPOER_LOCALES = [
  {
    name: 'English',
    value: 'en-US',
  },
  {
    name: '日本語',
    value: 'ja-JP',
  },
];

const Layout = () => {
  const [done, setDone] = useState(false);
  const history = useHistory();
  function navigate() {
    history.push('/form');
  }
  const loadLocales = () => {
    let currentLocale = intl.determineLocale({
      urlLocaleKey: 'lang',
      localStorageLocaleKey: 'lang',
    });
    if (!_.find(SUPPOER_LOCALES, { value: currentLocale })) {
      currentLocale = 'en-US';
    }
    intl
      .init({
        currentLocale,
        locales,
      })
      .then(() => setDone(true));
  };

  useEffect(() => {
    loadLocales();
  }, []);

  return done ? (
    <>
      <BaseButton buttonType='button' label='Button' onClick={() => alert('lalala')} />
      <h1>Hello World !@!@@!</h1>
      <h1 data-testid='change-language'>{intl.get('Hello')}</h1>
      <ChangeLang />
      <button type='button' onClick={() => navigate()}>
        Go to form
      </button>
    </>
  ) : (
    <LoaderComponent loading={!done} />
  );
};

export default Layout;
