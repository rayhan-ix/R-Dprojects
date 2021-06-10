import React from 'react';
import { Col, Row, Table, TableColumnProps } from 'antd';
import '../../../assets/scss/modules/system-admin/components/group-toggle-table.scss';

export interface GroupToggleTableDataTypes {
  key: string;
  GroupId: string;
  Name: string;
  hidden: boolean;
}

export interface GroupToggleTableProps {
  /**
   * Data that needs to be rendered
   */
  data: GroupToggleTableDataTypes[];
}

const columns: TableColumnProps<any>[] = [
  {
    title: 'GroupId',
    dataIndex: 'GroupId',
    width: '40%',
  },
  {
    title: 'Name',
    dataIndex: 'Name',
    width: '40%',
  },
  {
    title: 'Display',
    render: (text, record: GroupToggleTableDataTypes) => (
      <>
        <Row justify='center' align='middle'>
          <Col span={24}>{record.hidden ? 'Hidden' : 'Displayed'}</Col>
          <Col span={24}>
            <div style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}>[toggle]</div>
          </Col>
        </Row>
      </>
    ),
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: GroupToggleTableDataTypes[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

export const GroupToggleTable = (props: GroupToggleTableProps) => {
  const { data } = props;

  return (
    <>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
        className='base-table table-group-toggle'
        rowClassName={(record) => {
          if (record.hidden) {
            return 'hidden';
          }
          return '';
        }}
      />
    </>
  );
};
