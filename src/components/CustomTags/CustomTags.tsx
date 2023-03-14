import React, { useEffect, useRef, useState } from 'react';
import { Input, InputRef, Tag, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './CustomTags.style.scss';

export const CustomTags = event => {
  let { value, onChange } = event;

  const preSetTags = ['Food', 'Transfer', 'Shopping'];
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);

  useEffect(() => {
    setTags(value?.tags || preSetTags);
  }, [value]);

  useEffect(() => {
    value?.tags === undefined
      ? onChange?.({ ...value, tags: preSetTags })
      : onChange?.({ ...value, tags: tags });
  }, []);

  const handleClose = removedTag => {
    const leftTags = tags.filter(tag => tag !== removedTag);
    setTags(leftTags);
    onChange?.({
      ...value,
      tags: leftTags,
    });
  };
  const showInput = () => setInputVisible(true);
  const handleInputChange = e => setInputValue(e.target.value);
  const handleEditInputChange = e => setEditInputValue(e.target.value);
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      const allTags = [...tags, inputValue];
      setTags(allTags);
      onChange?.({
        ...value,
        tags: allTags,
      });
    }
    setInputVisible(false);
    setInputValue('');
  };
  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    const nonDuplicatedTags = newTags.filter((item, index) => newTags.indexOf(item) === index);
    setTags(nonDuplicatedTags);
    onChange?.({
      ...value,
      tags: nonDuplicatedTags,
    });
    setEditInputIndex(-1);
    setInputValue('');
  };

  return (
    <>
      {tags?.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              ref={editInputRef}
              key={tag}
              size="small"
              className="tag-input"
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
              data-testid="tag-input"
            />
          );
        }

        const isLongTag = tag.length > 6;
        const tagElem = (
          <Tag className="edit-tag" key={tag} closable onClose={() => handleClose(tag)}>
            <span
              onDoubleClick={e => {
                setEditInputIndex(index);
                setEditInputValue(tag);
                e.preventDefault();
              }}
            >
              {isLongTag ? `${tag.slice(0, 6)}...` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}

      {inputVisible && (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          className="tag-input"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
          data-testid="tag-input"
        />
      )}
      {!inputVisible && tags?.length < 5 && (
        <Tag className="site-tag-plus" onClick={showInput}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </>
  );
};
