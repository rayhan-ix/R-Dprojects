import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseTextArea, BaseTextAreaProps } from '../../../base-components/inputs/text-area';

export default {
  title: 'BaseComponents/TextArea',
  component: BaseTextArea,
} as Meta;

const Template: Story<BaseTextAreaProps> = (args) => <BaseTextArea {...args} />;

export const Normal = Template.bind({});
