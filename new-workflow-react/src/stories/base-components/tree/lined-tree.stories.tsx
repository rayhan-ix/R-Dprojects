import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LinedTree, LinedTreeProps } from '../../../base-components/tree/tree-with-line';

export default {
  title: 'BaseComponents/Tree-Line',
  component: LinedTree,
} as Meta;

const Template: Story<LinedTreeProps> = (args) => <LinedTree {...args} />;

export const Normal = Template.bind({});
