// @ts-nocheck
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CheckedTreeOnlyLeaf, CheckedTreeOnlyLeafProps } from '../../../base-components/tree/tree-checkbox-only-leaf';

export default {
  title: 'BaseComponents/Tree-CheckBox-OnlyLeaf-Radio',
  component: CheckedTreeOnlyLeaf,
} as Meta;

const Template: Story<CheckedTreeOnlyLeafProps> = (args) => <CheckedTreeOnlyLeaf {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  showCheckBox: true,
};
