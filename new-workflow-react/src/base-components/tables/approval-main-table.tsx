import React, { useState } from 'react';
import { Table } from 'antd';
import { ApprovalLevelTable, ColumnType } from './approval-level-table';

export interface ApprovalMainTableProps {
  /**
   * Data need to render in table
   */
  data: any;
}

function ExpandedRowComponent(props: any) {
  const { levelsDetail } = props;
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
        <ApprovalLevelTable data={levelsDetail} />
      </div>
    </>
  );
}

const columns: Array<ColumnType> = [
  {
    key: 'Id',
    title: 'No.',
    dataIndex: 'Id',
  },
  {
    key: 'categoryName',
    title: 'Request Category',
    dataIndex: 'categoryName',
  },
  {
    key: 'subject',
    title: 'Subject',
    dataIndex: 'requestDetails',
  },
  {
    key: 'stepName',
    title: 'Step Name',
    dataIndex: 'stepName',
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
  },
  {
    key: 'requester',
    title: 'Requester',
    dataIndex: 'requester',
  },
  {
    key: 'requestDate',
    title: 'Request Date',
    dataIndex: 'requestDate',
  },
];

export const ApprovalMainTable = (props: ApprovalMainTableProps) => {
  const { data } = props;
  const [expandedRows, setExpandedRows] = useState([]);

  return (
    <>
      <Table
        className='base-table'
        columns={columns}
        dataSource={data}
        pagination={false}
        expandable={{
          expandIconColumnIndex: -1,
          expandRowByClick: true,
          expandedRowRender: (record) => {
            const { levelDetails } = record;
            return (
              <>
                <ExpandedRowComponent levelsDetail={levelDetails} />
              </>
            );
          },
          onExpand: (expanded, record) => {
            if (expanded) {
              setExpandedRows(() => [].concat(record.key));
            } else {
              setExpandedRows(() => []);
            }
          },
          expandedRowKeys: expandedRows,
        }}
        bordered
      />
    </>
  );
};
