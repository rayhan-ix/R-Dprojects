import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

import { BaseButtonProps, BaseButton } from '../../base-components/base-button';

export default {
  title: 'BaseComponents/Button',
  component: BaseButton,
} as Meta;

const Template: Story<BaseButtonProps> = (args) => <BaseButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: 'Button',
  buttonType: 'button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Icon Button',
  buttonType: 'button',
  icon: <PlusOutlined />,
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: <SearchOutlined />,
  buttonType: 'button',
};
