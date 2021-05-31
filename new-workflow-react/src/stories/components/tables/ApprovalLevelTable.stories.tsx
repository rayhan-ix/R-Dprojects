import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ApprovalLevelTable, ApprovalLevelTableProps } from '../../../base-components/tables/approval-level-table';

export default {
  title: 'BaseComponents/Table/ApprovalLevel',
  component: ApprovalLevelTable,
} as Meta;

const data: Array<any> = [
  {
    key: 1,
    currentStep: 1,
    stepName: 'Step One',
    categoryName: 'Sales',
    approver: ['Arno', 'Ezio'],
    comment: null,
    approvedDate: null,
  },
];

const Template: Story<ApprovalLevelTableProps> = (args) => <ApprovalLevelTable {...args} />;

export const ApprovalLevel = Template.bind({});
ApprovalLevel.args = {
  data,
};
