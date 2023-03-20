import React from 'react';
import { screen, render } from '@testing-library/react';
import TransList from './TransList';
import { useTransList } from './hooks/useTransList';

jest.mock('./hooks/useTransList');
const mockedUseBillsList = useTransList as jest.MockedFunction<typeof useTransList>;

describe('TransList', () => {
  it('should render correctly', () => {
    // Arrange
    mockedUseBillsList.mockReturnValue({
      transactions: [{ id: 1, amount: '100', date: '2020-01-01', category: '+', tags: ['food'] }],
      totalAmount: 100,
    });

    render(<TransList amountList={[]} category="+" />);
    // Act

    // Assert
    expect(screen.getByTestId('amount')).toHaveTextContent('100');
  });

  it('should render empty list', () => {
    // Arrange
    mockedUseBillsList.mockReturnValue({
      transactions: [],
      totalAmount: 0,
    });

    render(<TransList amountList={[]} category="+" />);
    // Act

    // Assert
    expect(screen.getByTestId('amount')).toHaveTextContent('0');
    expect(screen.getByTestId('list-content')).toHaveTextContent('No data');
  });
});
