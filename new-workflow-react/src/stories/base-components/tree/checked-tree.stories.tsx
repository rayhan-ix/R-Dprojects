// @ts-nocheck
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CheckedTree, CheckedTreeProps } from '../../../base-components/tree/tree-checkbox';

export default {
  title: 'BaseComponents/Tree (Check Independent)',
  component: CheckedTree,
} as Meta;

const Template: Story<CheckedTreeProps> = (args) => <CheckedTree {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  showCheckBox: true,
};
