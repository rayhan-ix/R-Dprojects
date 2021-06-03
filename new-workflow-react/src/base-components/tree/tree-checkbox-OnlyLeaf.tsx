import React, { useEffect, useState } from 'react';
import { Tree } from 'antd';
import '../../assets/scss/base-components/base-tree-view.scss';
// import { FolderOpenTwoTone } from '@ant-design/icons';

const { DirectoryTree } = Tree;
export interface CheckedTreeOnlyLeafProps {
  showCheckBox?: Boolean;
}

const treeData = [
  {
    title: 'Tokyo Head Office',
    key: '100',
    disableCheckbox: true,
    children: [
      {
        title: 'Officer',
        key: 'parent-1',
        disableCheckbox: true,
        children: [
          {
            title: '“Executive” All',
            key: 'leaf-node-1',
            parentKey: 'parent-1',
            isLeaf: true,
          },
          {
            title: 'All Within Organization “Executives”',
            key: 'leaf-node-2',
            parentKey: 'parent-1',
            isLeaf: true,
          },
          {
            title: 'Most Direct “Executive”',
            key: 'leaf-node-3',
            parentKey: 'parent-1',
            isLeaf: true,
          },
        ],
      },
    ],
  },
  {
    title: 'Overseas Business Department',
    key: '101',
    disableCheckbox: true,
    children: [
      {
        title: '(Overseas Division) Section 1',
        key: 'parent-2',
        disableCheckbox: true,
        children: [
          {
            title: 'Development Taro',
            key: '601',
            parentKey: 'parent-2',
            isLeaf: true,
          },
          {
            title: 'User PSC',
            key: '602',
            parentKey: 'parent-2',
            isLeaf: true,
          },
          {
            title: 'Development Taro',
            key: '603',
            parentKey: 'parent-2',
            isLeaf: true,
          },
        ],
      },
    ],
  },
];

const Demo = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>();
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>();
  const [selectedCheckedKeyBehind, setSelectedCheckedKeyBehind] = useState<any[]>([]);
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

  const commonForSelectOrChecked = (selectedItem: any) => {
    const currentSelectedCheckBox = {
      key: selectedItem.node.key,
      parentKey: selectedItem.node.parentKey,
    };
    const tempArray = selectedCheckedKeyBehind;
    if (tempArray.length > 0) {
      const newArray: any = tempArray.filter((element: any) => element.parentKey !== selectedItem.node.parentKey);
      newArray.push(currentSelectedCheckBox);
      setSelectedCheckedKeyBehind(newArray);
    } else {
      setSelectedCheckedKeyBehind([...selectedCheckedKeyBehind, currentSelectedCheckBox]);
    }
  };

  const onCheck = (checkedKeysValue: React.Key[], info: any) => {
    commonForSelectOrChecked(info);
  };

  useEffect(() => {
    if (selectedCheckedKeyBehind.length > 0) {
      const checkedArrayKeys: any = [];
      selectedCheckedKeyBehind.forEach((checkedItem) => {
        checkedArrayKeys.push(checkedItem.key);
      });
      setCheckedKeys(checkedArrayKeys);
      setSelectedKeys(checkedArrayKeys);
    }
  }, [selectedCheckedKeyBehind]);

  const onSelect = (selectedKeysValue: React.Key[], info: any) => {
    commonForSelectOrChecked(info);
  };

  return (
    // <Tree
    //   className='tree-only-leaf-note-checkbox'
    //   checkable
    //   onExpand={onExpand}
    //   expandedKeys={expandedKeys}
    //   autoExpandParent={autoExpandParent}
    //   onCheck={onCheck}
    //   checkedKeys={checkedKeys}
    //   onSelect={onSelect}
    //   selectedKeys={selectedKeys}
    //   treeData={treeData}
    //   showIcon={showIcon}
    //   checkStrictly
    //   multiple
    // />

    <DirectoryTree
      className='tree-only-leaf-note-checkbox'
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
      multiple
    />
  );
};

export const CheckedTreeOnlyLeaf = () => <Demo />;
