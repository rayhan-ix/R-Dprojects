import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TreeDirectory, TreeDirectoryProps } from '../../../base-components/tree/tree-directory-big-icon';

export default {
  title: 'BaseComponents/Tree-Directory',
  component: TreeDirectory,
} as Meta;

const Template: Story<TreeDirectoryProps> = (args) => <TreeDirectory {...args} />;

export const Normal = Template.bind({});
