import React from 'react';
import { Input } from 'antd';

export interface BaseTextAreaProps {
  placeholder?: string;
  rowSize: number;
}

export const BaseTextArea = (props: BaseTextAreaProps) => {
  const { TextArea } = Input;
  const { rowSize = 5, placeholder } = props;
  return <TextArea autoSize={false} rows={rowSize} placeholder={placeholder} />;
};
