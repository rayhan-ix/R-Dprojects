import React, { useState } from 'react';
import { Card, Col, Row, Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { ApprovalLevelTable, ColumnType } from './approval-level-table';
import '../../assets/scss/base-components/approval-main-table.scss';
import { BaseButton } from '../base-button';

export interface ApprovalMainTableProps {
  /**
   * Data need to render in table
   */
  data: any;
}

// TODO: Hardcoded Data. Has to change later
function ExpandedRowComponent(props: any) {
  const { levelsDetail } = props;
  return (
    <>
      <Row justify='start' gutter={[8, 0]}>
        <Col span={24} style={{ paddingBottom: 20 }}>
          <Card title='Request Details' className='approval-row-card'>
            <Row>
              <Col span={6}>Requester</Col>
              <Col span={18}>Altair</Col>
            </Row>
            <Row>
              <Col span={6}>Request Date</Col>
              <Col span={18}>2020/12/2</Col>
            </Row>
            <Row>
              <Col span={6}>Request No</Col>
              <Col span={18}>220120122</Col>
            </Row>
            <Row>
              <Col span={6}>Spreadsheet</Col>
              <Col span={18}>
                <BaseButton
                  buttonType='button'
                  onClick={() => alert('Spreadsheet')}
                  label='Confirm'
                  icon={<EditOutlined />}
                />
              </Col>
            </Row>
            <Row>
              <Col span={6}>Attachment(s)</Col>
              <Col span={18}>
                <BaseButton
                  buttonType='button'
                  onClick={() => alert('Upload')}
                  label='Upload'
                  icon={<EditOutlined />}
                />
              </Col>
            </Row>
            <Row>
              <Col span={6}>Review Organization</Col>
              <Col span={18}>Something</Col>
            </Row>
            <Row>
              <Col span={6}>Reviewer</Col>
              <Col span={18}>Arno</Col>
            </Row>
          </Card>
        </Col>
        <Col span={24} style={{ paddingBottom: 20 }}>
          <ApprovalLevelTable data={levelsDetail} />
        </Col>
      </Row>
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
