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
    currentStep: 2,
    stepName: 'Step One',
    categoryName: 'Sales',
    approver: ['Arno', 'Ezio'],
    comment: 'Comment',
    approvedDate: '2020-2-2',
  },
  {
    key: 2,
    currentStep: 2,
    stepName: 'Step Two',
    categoryName: 'Sales',
    approver: ['Arno'],
    comment: null,
    approvedDate: null,
  },
  {
    key: 3,
    currentStep: 2,
    stepName: 'Step Three',
    categoryName: 'Sales',
    approver: ['Ezio'],
    comment: null,
    approvedDate: null,
  },
];

const Template: Story<ApprovalLevelTableProps> = (args) => <ApprovalLevelTable {...args} />;

export const ApprovalLevel = Template.bind({});
ApprovalLevel.args = {
  data,
};
