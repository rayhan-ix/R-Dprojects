import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import intl from 'react-intl-universal';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import { locales } from '../../languages';

interface LanguageState {
  lang: string;
  languageLoaded: boolean;
  dateLocale: any;
}

const initialState: LanguageState = {
  lang: 'en',
  languageLoaded: false,
  dateLocale: 'en_US',
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
  let antLocale;
  if (!_.find(SUPPORTED_LOCALES, { value: currentLocale })) {
    currentLocale = 'en';
  }
  await intl.init({
    currentLocale,
    locales,
  });
  await import(`dayjs/locale/${currentLocale}.js`);
  dayjs.locale(currentLocale);

  if (_.isEqual(currentLocale, 'zh-cn')) {
    const tempLocale = 'zh_CN';
    antLocale = await import(`antd/es/date-picker/locale/${tempLocale}.js`);
  } else if (_.isEqual(currentLocale, 'ja')) {
    const tempLocale = 'ja_JP';
    antLocale = await import(`antd/es/date-picker/locale/${tempLocale}.js`);
  } else {
    const tempLocale = 'en_US';
    antLocale = await import(`antd/es/date-picker/locale/${tempLocale}.js`);
  }

  return {
    locale,
    antLocale,
  };
});

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setLocale.fulfilled, (state, { payload }) => {
      state.lang = payload.locale;
      state.languageLoaded = true;
      state.dateLocale = payload.antLocale.default;
    });
  },
});

export default languageSlice.reducer;
