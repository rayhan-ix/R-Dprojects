import React from 'react';
import { Tree } from 'antd';
import '../../assets/scss/base-components/base-tree-view.scss';
import { FolderFilled, FileFilled, FileAddFilled, FileTextFilled } from '@ant-design/icons';

const { DirectoryTree } = Tree;

export interface TreeDirectoryProps {}

const treeData = [
  {
    title: 'Tokyo Head Office',
    key: 'p1',
    icon: <FolderFilled className='large-folder' />,
    children: [
      {
        title: 'Equipment rental',
        key: '100',
        icon: <FolderFilled className='large-folder' />,
        children: [
          {
            title: 'Overtime application_Sendai Customer Center',
            key: 'file-300',
            icon: <FileFilled className='large-folder' />,
            children: [
              {
                title: 'Create New',
                key: 'create-300',
                icon: <FileAddFilled className='large-folder' />,
              },
              {
                title: 'Import from Previous',
                key: 'import-300',
                icon: <FileTextFilled className='large-folder' />,
              },
            ],
          },
          {
            title: 'Holiday work application_Tokyo head office',
            key: 'file-301',
            icon: <FileFilled className='large-folder' />,
            children: [
              {
                title: 'Create New',
                key: 'create-301',
                icon: <FileAddFilled className='large-folder' />,
              },
              {
                title: 'Import from Previous',
                key: 'import-301',
                icon: <FileTextFilled className='large-folder' />,
              },
            ],
          },
          {
            title: 'Company-wide report_web application',
            key: 'file-302',
            icon: <FileFilled className='large-folder' />,
            children: [
              {
                title: 'Create New',
                key: 'create-302',
                icon: <FileAddFilled className='large-folder' />,
              },
              {
                title: 'Import from Previous',
                key: 'import-302',
                icon: <FileTextFilled className='large-folder' />,
              },
            ],
          },
        ],
      },
      {
        title: 'Regular application_Tokyo head office',
        key: 'file-100',
        icon: <FileFilled className='large-folder' />,
        children: [
          {
            title: 'Create New',
            key: 'create-100',
            icon: <FileAddFilled className='large-folder' />,
          },
          {
            title: 'Import from Previous',
            key: 'import-100',
            icon: <FileTextFilled className='large-folder' />,
          },
        ],
      },
    ],
  },
  {
    title: 'West Japan Area Osaka Sales Office',
    key: 'p2',
    icon: <FolderFilled className='large-folder' />,
    children: [
      {
        title: 'Settlement',
        key: 'file-200',
        icon: <FileFilled className='large-folder' />,
        children: [
          {
            title: 'Create New',
            key: 'create-200',
            icon: <FileAddFilled className='large-folder' />,
          },
          {
            title: 'Import from Previous',
            key: 'import-200',
            icon: <FileTextFilled className='large-folder' />,
          },
        ],
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

  return <DirectoryTree showIcon onSelect={onSelect} onExpand={onExpand} treeData={treeData} />;
};

export const TreeDirectory = () => <Demo />;
