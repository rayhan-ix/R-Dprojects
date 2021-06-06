import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ApprovalMainTable, ApprovalMainTableProps } from '../../../base-components/tables/approval-main-table';

export default {
  title: 'BaseComponents/Table/ApprovalMain',
  component: ApprovalMainTable,
} as Meta;

const data = [
  {
    key: 1,
    Id: 1,
    categoryName: 'Sales',
    requestDetails: 'Request For Sell',
    stepName: 'Step One',
    status: 'Pending',
    requester: 'Connor',
    requestDate: '2020/1/2',
    levelDetails: [
      {
        key: 1,
        currentStep: 1,
        stepName: 'Step One',
        categoryName: 'Sales',
        approver: ['Arno'],
        comment: null,
        approvedDate: null,
      },
    ],
  },
  {
    key: 2,
    Id: 2,
    categoryName: 'Engineering',
    requestDetails: 'Plan to build',
    stepName: 'Step One',
    status: 'Approved',
    requester: 'Bayek',
    requestDate: '2020/4/8',
    levelDetails: [
      {
        key: 1,
        currentStep: 1,
        stepName: 'Step One',
        categoryName: 'Sales',
        approver: ['Arno'],
        comment: null,
        approvedDate: null,
      },
    ],
  },
];

const Template: Story<ApprovalMainTableProps> = (args) => <ApprovalMainTable {...args} />;

export const ApprovalMain = Template.bind({});
ApprovalMain.args = {
  data,
};
