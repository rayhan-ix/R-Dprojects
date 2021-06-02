import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseInput, BaseInputProps } from '../../../base-components/inputs/base-input';

export default {
  title: 'BaseComponents/Input',
  component: BaseInput,
} as Meta;

const Template: Story<BaseInputProps> = (args) => <BaseInput {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  inputWidth: 'sm',
};

export const Large = Template.bind({});

Large.args = {
  inputWidth: 'md',
};
