import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  GroupToggleTable,
  GroupToggleTableDataTypes,
  GroupToggleTableProps,
} from '../../../../modules/system-admin/component/group-toggle-table';

export default {
  title: 'Modules/System-Admin/Components/Group-Toggle-Table',
  component: GroupToggleTable,
} as Meta;

const Template: Story<GroupToggleTableProps> = (args) => <GroupToggleTable {...args} />;

const data: GroupToggleTableDataTypes[] = [
  {
    key: '1',
    GroupId: 'a@a.com',
    Name: 'john doe',
    hidden: false,
  },
  {
    key: '2',
    GroupId: 'a@b.com',
    Name: 'jane doe',
    hidden: true,
  },
];

export const Table = Template.bind({});
Table.args = {
  data,
};
