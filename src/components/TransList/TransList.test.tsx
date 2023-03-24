import React from 'react';
import { screen, render } from '../../utils/custom-testing-library';
import TransList from './TransList';
import { useTransList } from './hooks/useTransList';
import Decimal from 'decimal.js';

jest.mock('./hooks/useTransList');
const mockedUseBillsList = useTransList as jest.MockedFunction<typeof useTransList>;

describe('TransList', () => {
  it('should render correctly', () => {
    // Arrange
    mockedUseBillsList.mockReturnValue({
      transactions: [{ id: 1, amount: '100', date: '2020-01-01', category: '+', tags: ['food'] }],
      totalAmount: new Decimal(100),
      rowSelection: {
        onChange: jest.fn(),
        getCheckboxProps: jest.fn(),
      },
      deleteTrans: jest.fn(),
    });

    render(<TransList amountList={[]} category='+' />);
    // Act

    // Assert
    expect(screen.getByTestId('amount')).toHaveTextContent('100');
  });

  it('should render empty list', () => {
    // Arrange
    mockedUseBillsList.mockReturnValue({
      transactions: [],
      totalAmount: new Decimal(0),
      rowSelection: {
        onChange: jest.fn(),
        getCheckboxProps: jest.fn(),
      },
      deleteTrans: jest.fn(),
    });

    render(<TransList amountList={[]} category='+' />);
    // Act

    // Assert
    expect(screen.getByTestId('amount')).toHaveTextContent('0');
    expect(screen.getByTestId('list-content')).toHaveTextContent('No data');
  });
});
