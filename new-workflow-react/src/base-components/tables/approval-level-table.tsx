/* eslint-disable no-unused-vars */
import React, { ReactNode } from 'react';
import Table, { ColumnProps } from 'antd/lib/table';
import { CheckCircleOutlined, CloseOutlined, RightCircleFilled, UndoOutlined } from '@ant-design/icons';
import '../../assets/scss/base-components/approval-level-table.scss';
import { Col, Divider, Input, Row } from 'antd';
import { BaseButton } from '../base-button';

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

/*
   TODO: Have to add onClick Handler for Approve, Decline and SendBack
 */
function ApprovalDecisionBlock(props: any) {
  const { TextArea } = Input;

  return (
    <>
      <div style={{ background: '#f0f0f0' }}>
        <div style={{ padding: 10 }}>
          <Row justify='start' gutter={[8, 8]}>
            <Col span={24}>
              <Row justify='start' gutter={[8, 0]}>
                <Col span={7} style={{ paddingRight: 0, flex: '0 0 27%', maxWidth: '27%' }}>
                  <BaseButton
                    buttonType='button'
                    onClick={() => alert('accept')}
                    label='Approve'
                    icon={<CheckCircleOutlined />}
                  />
                </Col>
                <Divider type='vertical' style={{ height: 35, top: 2 }} />
                <Col span={7}>
                  <BaseButton
                    buttonType='button'
                    onClick={() => alert('Decline')}
                    label='Decline'
                    icon={<CloseOutlined />}
                  />
                </Col>
                <Col span={7}>
                  <BaseButton
                    buttonType='button'
                    onClick={() => alert('Sendback')}
                    label='SendBack'
                    icon={<UndoOutlined />}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <TextArea rows={2} />
            </Col>
          </Row>
        </div>
      </div>
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
      return text;
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
      <Table
        className='base-approval-table base-table'
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
      />
    </>
  );
};
