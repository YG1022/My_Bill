import { InputNumber } from 'antd';
import React from 'react';
import { useInputBar } from './hooks/useInputBar';

const InputBar: React.FC = () => {
  const { selectBefore, selectAfter } = useInputBar();

  return <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={0} />;
};

export default InputBar;
