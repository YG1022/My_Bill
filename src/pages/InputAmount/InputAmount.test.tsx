import { useInputAmount } from './hooks/useInputAmount';
import InputAmount from './InputAmount';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { Form } from 'antd/lib';
import { render, screen, waitFor, waitForElementToBeRemoved } from '../../utils/custom-testing-library';
import userEvent from '@testing-library/user-event';

jest.mock('./hooks/useInputAmount');
const mockedUseInputAmount = useInputAmount as jest.MockedFunction<typeof useInputAmount>;

describe('InputAmount', () => {
  beforeEach(() => {
    mockedUseInputAmount.mockReturnValue({
      layout: { labelCol: { span: 8 }, wrapperCol: { span: 16 } },
      tailLayout: { wrapperCol: { offset: 8, span: 16 } },
      autoFillInfo: jest.fn(),
      onFinish: jest.fn(),
      deleteTransOnEditPage: jest.fn(),
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
    expect(view.props.children.length).toBe(5);
  });

  it('should show message when no number input', () => {
    // Arrange
    render(<InputAmount />);
    // Act
    userEvent.type(screen.getByRole('spinbutton', { name: 'Amount' }), 'test 1');
    userEvent.click(screen.getByRole('combobox', { name: 'Category' }));
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    // Assert
    waitFor(async () => {
      expect(screen.getByText('Please input number!')).toBeInTheDocument();
      await waitForElementToBeRemoved(() => screen.getByText('Please input number!'));
      expect(screen.getByText('Please select category!')).toBeInTheDocument();
      await waitForElementToBeRemoved(() => screen.getByText('Please select category!'));
    });
  });
});
