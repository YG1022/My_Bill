import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { Button, Tag, Tooltip } from 'antd';
import { transItem } from '../../../constants/types';
import { NavLink } from 'react-router-dom';
import React from 'react';

export const getColumns = deleteTrans => [
  {
    title: 'Amount',
    dataIndex: 'amount',
    width: 120,
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    ellipsis: true,
    render: (tags: string[]) => (
      <span className="trans-tags">
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </span>
    ),
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (_, record: transItem) => (
      <span className="trans-actions">
        <Tooltip title="Edit">
          <NavLink to={`/transactions/trans-edit/${record.id}`}>
            <EditFilled />
          </NavLink>
        </Tooltip>
        <Tooltip title="Delete">
          <Button type="link" className="item-delete" onClick={deleteTrans(record.id)}>
            <DeleteFilled />
          </Button>
        </Tooltip>
      </span>
    ),
  },
];
