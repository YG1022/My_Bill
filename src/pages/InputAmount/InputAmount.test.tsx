import { useInputAmount } from './hooks/useInputAmount';
import InputAmount from './InputAmount';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { Form } from 'antd/lib';

jest.mock('./hooks/useInputAmount');
const mockedUseInputAmount = useInputAmount as jest.MockedFunction<typeof useInputAmount>;

describe('InputAmount', () => {
  beforeEach(() => {
    mockedUseInputAmount.mockReturnValue({
      layout: { labelCol: { span: 8 }, wrapperCol: { span: 16 } },
      tailLayout: { wrapperCol: { offset: 8, span: 16 } },
      onFinish: jest.fn(),
    });
  });

  it('should render correct input page', () => {
    // Arrange
    const renderer = new ShallowRenderer();
    renderer.render(<InputAmount />);
    // Act
    const view = renderer.getRenderOutput();
    // Assert
    expect(view.type).toEqual(Form);
    expect(view.props.children.length).toBe(4);
  });
});