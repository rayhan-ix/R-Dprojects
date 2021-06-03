import React, { useState } from 'react';
import { Tree } from 'antd';
import '../../assets/scss/base-components/base-tree-view.scss';
// import { FolderFilled, FileFilled, FileAddFilled, FileTextFilled } from '@ant-design/icons';

const { DirectoryTree } = Tree;

export interface TreeDirectoryProps {}

const treeData = [
  {
    title: 'Tokyo Head Office',
    key: 'p1',
    children: [
      {
        title: 'Equipment rental',
        key: '100',
        children: [
          {
            title: 'Overtime application_Sendai Customer Center',
            key: 'file-300',
            children: [
              {
                title: 'Create New',
                key: 'create-300',
                isLeaf: true,
              },
              {
                title: 'Import from Previous',
                key: 'import-300',
                isLeaf: true,
              },
            ],
          },
          {
            title: 'Holiday work application_Tokyo head office',
            key: 'file-301',
            children: [
              {
                title: 'Create New',
                key: 'create-301',
                isLeaf: true,
              },
              {
                title: 'Import from Previous',
                key: 'import-301',
                isLeaf: true,
              },
            ],
          },
          {
            title: 'Company-wide report_web application',
            key: 'file-302',
            children: [
              {
                title: 'Create New',
                key: 'create-302',
                isLeaf: true,
              },
              {
                title: 'Import from Previous',
                key: 'import-302',
                isLeaf: true,
              },
            ],
          },
        ],
      },
    ],
  },
];

const Demo = () => {
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
  const onSelect = (keys: any, info: any) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand = (expandedKeysValue: React.Key[]) => {
    console.log('onExpand', expandedKeysValue);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setAutoExpandParent(false);
  };

  return (
    <DirectoryTree
      className='tree-large-folder-icon'
      showIcon
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
      autoExpandParent={autoExpandParent}
    />
  );
};

export const TreeDirectory = () => <Demo />;
