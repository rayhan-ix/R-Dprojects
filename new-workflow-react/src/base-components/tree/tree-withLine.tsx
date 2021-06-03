import React from 'react';
import { Tree } from 'antd';
import { FolderOpenTwoTone, FileTwoTone } from '@ant-design/icons';

const { DirectoryTree } = Tree;

export interface LinedTreeProps {}

const treeData = [
  {
    title: 'Root',
    key: '0',
    icon: <FolderOpenTwoTone />,
    children: [
      {
        title: 'Equipment rental',
        key: '100',
        icon: <FolderOpenTwoTone />,
        children: [
          {
            title: 'Approval',
            key: '201',
            icon: <FolderOpenTwoTone />,
            children: [
              {
                title: 'Application classification',
                key: '301',
                icon: <FileTwoTone />,
              },
            ],
          },
        ],
      },
      {
        title: 'PSC Co., Ltd.',
        key: '2',
        icon: <FileTwoTone />,
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
