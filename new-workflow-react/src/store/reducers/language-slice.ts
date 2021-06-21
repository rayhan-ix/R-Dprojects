import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import intl from 'react-intl-universal';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import { locales } from '../../languages';

interface LanguageState {
  lang: string;
  languageLoaded: boolean;
}

const initialState: LanguageState = {
  lang: 'en-US',
  languageLoaded: false,
};

const SUPPORTED_LOCALES = [
  {
    name: 'English',
    value: 'en',
  },
  {
    name: '日本語',
    value: 'ja',
  },
  {
    name: 'Chinese',
    value: 'zh-cn',
  },
];

dayjs.extend(localeData);

export const setLocale = createAsyncThunk('language/set-locale', async (locale: string) => {
  let currentLocale = locale;
  if (!_.find(SUPPORTED_LOCALES, { value: currentLocale })) {
    currentLocale = 'en';
  }
  await intl.init({
    currentLocale,
    locales,
  });
  await import(`dayjs/locale/${currentLocale}`);
  dayjs.locale(currentLocale);

  return locale;
});

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setLocale.fulfilled, (state, { payload }) => {
      state.lang = payload;
      state.languageLoaded = true;
    });
  },
});

export default languageSlice.reducer;
