import React from 'react';
import { Tree } from 'antd';
// import { FolderOpenTwoTone, FileTwoTone } from '@ant-design/icons';

const { DirectoryTree } = Tree;

export interface LinedTreeProps {}

const treeData = [
  {
    title: 'Root',
    key: '0',
    children: [
      {
        title: 'Equipment rental',
        key: '100',
        children: [
          {
            title: 'Approval',
            key: '201',
            children: [
              {
                title: 'Application classification',
                key: '301',
                isLeaf: true,
              },
            ],
          },
        ],
      },
      {
        title: 'PSC Co., Ltd.',
        key: '2',
        isLeaf: true,
      },
    ],
  },
];

const Demo = () => {
  const onSelect = (keys: any, info: any) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand = () => {
    console.log('Trigger Expand');
  };

  return (
    <DirectoryTree className='tree-root-line' showIcon onSelect={onSelect} onExpand={onExpand} treeData={treeData} />
  );
};

export const LinedTree = () => <Demo />;
