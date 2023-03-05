import { Select } from 'antd';
import React from 'react';

const useInputBar = () => {
  const selectBefore = (
    <Select defaultValue="+">
      <Select.Option value="+">+</Select.Option>
      <Select.Option value="-">-</Select.Option>
    </Select>
  );

  const selectAfter = (
    <Select defaultValue="CNY">
      <Select.Option value="CNY">¥</Select.Option>
      <Select.Option value="HKD">$</Select.Option>
    </Select>
  );

  return { selectBefore, selectAfter };
};

export { useInputBar };
