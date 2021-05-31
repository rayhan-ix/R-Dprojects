/* eslint-disable no-unused-vars */
import React, { ReactNode } from 'react';
import { Button } from 'antd';
import '../assets/scss/base-components/base-button.scss';
import clsx from 'clsx';

export interface BaseButtonProps {
  /**
   * Button Label. example: Save, Cancel, etc
   * Pass label null if it is only an icon button
   * Default Button
   */
  label?: string;

  /**
   * Icon to show at the suffix of the button or to show only icon button provided label is null
   * Default null
   */
  icon?: ReactNode | null;

  /**
   * If the button should be disabled
   * Default false
   */
  disabled?: boolean;

  /**
   * html button type
   *
   */
  buttonType: 'button' | 'reset' | 'submit';

  /**
   * onClick handler for
   * @param args
   */
  onClick: (args?: any) => any;
}

export const BaseButton = (props: BaseButtonProps) => {
  const { label, buttonType, disabled = false, icon = null, onClick } = props;

  return (
    <Button
      type='primary'
      className={clsx([
        { 'base-btn-without-icon': !icon },
        { 'base-btn-with-icon': !!icon && label },
        { 'base-icon-btn': !!icon && !label },
      ])}
      htmlType={buttonType}
      disabled={disabled}
      icon={icon}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
