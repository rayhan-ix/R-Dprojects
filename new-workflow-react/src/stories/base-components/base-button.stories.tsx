import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SearchOutlined } from '@ant-design/icons';
import Pencil from '@2fd/ant-design-icons/lib/Pencil';

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
  icon: <Pencil />,
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: <SearchOutlined />,
  buttonType: 'button',
};
