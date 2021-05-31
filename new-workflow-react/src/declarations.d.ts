/* eslint-disable no-undef,no-unused-vars */
declare module 'redux-batch-middleware';
declare module '*.scss';
declare module '*.css';

interface Window {
  $: JQueryStatic;
  jQuery: JQueryStatic;
}

interface JQuery {
  formBuilder(args: any): any;
  formRender(args: any): any;
}
