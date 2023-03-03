import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

const useInputBar = () => {
  const selectBefore = (
    <Select defaultValue='add' dropdownStyle={{height:100}}>
      <Option value='add'>+</Option>
      <Option value='minus'>-</Option>
    </Select>
  );

  const selectAfter = (
    <Select defaultValue='USD'>
      <Option value='USD'>$</Option>
      <Option value='EUR'>€</Option>
      <Option value='GBP'>£</Option>
      <Option value='CNY'>¥</Option>
    </Select>
  );

  return { selectBefore, selectAfter };
};

export { useInputBar };
