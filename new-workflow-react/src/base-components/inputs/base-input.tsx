/* eslint-disable no-unused-vars */
import React, { ReactNode } from 'react';
import { Input } from 'antd';
import '../../assets/scss/base-components/base-input.scss';
import clsx from 'clsx';
import * as _ from 'lodash';

export interface BaseInputProps {
  placeholder?: string;
  inputWidth?: string;
}

export const BaseInput = (props: BaseInputProps) => {
  const { placeholder, inputWidth } = props;
  return (
    <Input
      className={clsx([
        {
          'base-input-50p': _.isEqual(inputWidth, 'sm'),
          'base-input-100p': _.isEqual(inputWidth, 'md'),
        },
      ])}
      placeholder={placeholder}
    />
  );
};
