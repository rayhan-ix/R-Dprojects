import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  RoleHandler,
  RoleHandlerProps,
  RoleHandlerTableDataType,
} from '../../../../modules/operation-manager/pages/role-handlers/role-handler';

export default {
  title: 'Modules/OperationManager/Pages/Role-Handler',
  component: RoleHandler,
} as Meta;

const data: RoleHandlerTableDataType[] = [
  {
    Note: '1st User',
    Name: 'Arno',
    TotalUser: 2,
  },
  {
    Note: '2nd User',
    Name: 'Ezio',
    TotalUser: 4,
  },
];

const Template: Story<RoleHandlerProps> = (args) => <RoleHandler {...args} />;

export const Page = Template.bind({});
Page.args = {
  data,
};
