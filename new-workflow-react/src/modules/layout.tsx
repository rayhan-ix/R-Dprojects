import React, { useEffect, useState } from 'react';
import intl from 'react-intl-universal';
import { useHistory } from 'react-router';
import _ from 'lodash';
import dayjs from 'dayjs';
import { BaseButton } from '../base-components/base-button';
import LoaderComponent from '../base-components/loader-component';
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks';
import { setLocale } from '../store/reducers/language-slice';

const Layout = () => {
  const [done, setDone] = useState(false);
  const { languageLoaded } = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();
  const history = useHistory();
  function navigate() {
    history.push('/form');
  }

  useEffect(() => {
    setDone(languageLoaded);
  }, [languageLoaded]);

  useEffect(() => {
    dispatch(setLocale('en'));
  }, []);

  return done ? (
    <>
      <h1>{dayjs().format('YYYY-MM-DD (ddd) hh:mm')}</h1>
      <h2>{dayjs().locale()}</h2>
      <h1 data-testid='change-language'>{intl.get('Hello')}</h1>
      <BaseButton
        buttonType='button'
        label='Change Lang'
        onClick={() => dispatch(setLocale(_.sample(['en', 'ja', 'zh-cn']) || 'ja'))}
      />
      <button type='button' onClick={() => navigate()}>
        Go to form
      </button>
    </>
  ) : (
    <LoaderComponent loading={!done} />
  );
};

export default Layout;
