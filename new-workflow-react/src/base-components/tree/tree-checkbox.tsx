import React, { useState } from 'react';
import { Tree } from 'antd';

export interface CheckedTreeProps {
  showCheckBox?: Boolean;
}

const treeData = [
  {
    title: 'Accounting / General Affairs Department',
    key: '100',
    children: [
      {
        title: 'General management',
        key: '201',
        children: [{ title: 'Taro (general affairs)', key: '301' }],
      },
    ],
  },
  {
    title: 'Overseas Business Department',
    key: '101',
    children: [
      {
        title: '(Overseas Division) Section 1',
        key: '202',
        children: [
          { title: 'Development Taro', key: '302' },
          { title: 'User PSC', key: '303' },
          { title: 'Development Taro', key: '304' },
        ],
      },
      {
        title: 'Division 1 General Manager',
        key: '401',
      },
    ],
  },
];

const Demo = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>();
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>();
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
  const [showIcon] = useState<boolean>(true);

  const onExpand = (expandedKeysValue: React.Key[]) => {
    console.log('onExpand', expandedKeysValue);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue: React.Key[], info: any) => {
    console.log(info.node.key);
    console.log('onCheck', checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };

  const onSelect = (selectedKeysValue: React.Key[], info: any) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
      showIcon={showIcon}
      checkStrictly
    />
  );
};

export const CheckedTree = () => <Demo />;
