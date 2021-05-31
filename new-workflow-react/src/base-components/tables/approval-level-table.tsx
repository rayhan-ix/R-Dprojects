/* eslint-disable no-unused-vars */
import React, { ReactNode } from 'react';
import Table, { ColumnProps } from 'antd/lib/table';
import { RightCircleFilled } from '@ant-design/icons';

export interface ColumnType {
  /**
   * Title of the column
   */
  title: string;

  /**
   * Unique key of the column.
   */
  key: string;

  /**
   * Which data to be showed from data
   */
  dataIndex?: string;

  /**
   * Custom renderer for column
   * @param text
   * @param record
   * @param index
   */
  render?: (text: string, record: any, index: number) => ReactNode | null;
}

export interface ApprovalLevelTableProps {
  /**
   * Data that needs to be shown in the table
   */
  data: Array<any>;
}

function ApprovalDecisionBlock(props: any) {
  console.log(props);

  return (
    <>
      <h1>hello</h1>
    </>
  );
}

const columns: Array<ColumnType> = [
  {
    title: 'Status',
    key: 'status',
    render: (text, record, index) => {
      if (index + 1 === record.currentStep) {
        return <RightCircleFilled />;
      }
      return null;
    },
  },
  {
    title: 'Step Name',
    key: 'stepName',
    dataIndex: 'stepName',
  },
  {
    title: 'Edit Step',
    key: 'editStep',
    render: (text, record, index) => {
      if (index + 1 === record.currentStep + 1) {
        return (
          <>
            <p>Edit</p>
          </>
        );
      }
      return null;
    },
  },
  {
    title: 'Category',
    key: 'category',
    dataIndex: 'categoryName',
  },
  {
    title: 'Approver/Reviewer',
    key: 'approver',
    dataIndex: 'approver',
  },
  {
    title: 'Result/Action',
    key: 'result',
    render: (text, record, index) => {
      const obj = {
        children: {} as any,
        props: {} as ColumnProps<any>,
      };
      if (record.currentStep === index + 1) {
        obj.props.colSpan = 2;
        obj.children = <ApprovalDecisionBlock />;
        return obj;
      }
      return null;
    },
  },
  {
    title: 'Comment',
    key: 'comment',
    dataIndex: 'comment',
    render: (text, record, index) => {
      const obj = {
        props: {} as ColumnProps<any>,
      };
      if (record.currentStep === index + 1) {
        obj.props.colSpan = 0;
        return obj;
      }
      return null;
    },
  },
  {
    title: 'Date and Time',
    key: 'date',
    dataIndex: 'approvedDate',
  },
];

export const ApprovalLevelTable = (props: ApprovalLevelTableProps) => {
  const { data } = props;

  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} bordered />
    </>
  );
};
