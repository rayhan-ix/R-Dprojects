import React from 'react';
import { ColumnsType } from 'antd/es/table';
import AccountGroup from '@2fd/ant-design-icons/lib/AccountGroup';
import { Col, Row, Table } from 'antd';

export interface RoleHandlerTableDataType {
  Name: string;
  Note: string;
  TotalUser: number;
}

export interface RoleHandlerProps {
  /**
   * Data that need to be rendered
   */
  data?: RoleHandlerTableDataType[] | [];
}

const columns: ColumnsType<RoleHandlerTableDataType> = [
  {
    key: 'Name',
    title: 'Name',
    dataIndex: 'Name',
    render: (value) => (
      <Row justify='start' align='middle'>
        <Col span={3}>
          <AccountGroup />
        </Col>
        <Col span={21}>
          <div>{value}</div>
        </Col>
      </Row>
    ),
  },
  {
    key: 'Note',
    dataIndex: 'Note',
    title: 'Note',
  },
  {
    key: 'UserCount',
    dataIndex: 'TotalUser',
    title: 'Number of User',
  },
  {
    key: 'Delete',
    render: () => (
      <>
        <div>[Delete]</div>
      </>
    ),
    title: 'Delete',
  },
];

export const RoleHandler = (props: RoleHandlerProps) => {
  const { data } = props;

  return (
    <>
      <Table columns={columns} dataSource={data} bordered pagination={false} className='base-table' />
    </>
  );
};
