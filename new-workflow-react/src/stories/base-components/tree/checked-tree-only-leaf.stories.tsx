import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CheckedTreeOnlyLeaf } from '../../../base-components/tree/tree-checkbox-only-leaf';

export default {
  title: 'BaseComponents/Tree-CheckBox-OnlyLeaf-Radio',
  component: CheckedTreeOnlyLeaf,
} as Meta;

const Template: Story = (args) => <CheckedTreeOnlyLeaf {...args} />;

export const Normal = Template.bind({});

Normal.args = {};
