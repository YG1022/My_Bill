import { InputNumber } from 'antd';
import React from 'react';
import { useInputBar } from './hooks/useInputBar';

const InputBar: React.FC = () => {
  const { selectBefore, selectAfter } = useInputBar();

  return (
    <InputNumber
      addonBefore={selectBefore}
      addonAfter={selectAfter}
      className="input-bar"
      placeholder="Please input number"
    />
  );
};

export default InputBar;
