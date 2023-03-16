import React from 'react';
import { screen, render } from '@testing-library/react';
import BillsList from './BillsList';
import { useBillsList } from './hooks/useBillsList';

jest.mock('./hooks/useBillsList');
const mockedUseBillsList = useBillsList as jest.MockedFunction<typeof useBillsList>;

describe('BillsList', () => {
  beforeEach(() => {
    mockedUseBillsList.mockReturnValue({
      transactions: [{ id: 1, amount: '100', date: '2020-01-01', category: '+', tags: ['food'] }],
      totalAmount: 100,
    });
  });

  it('should render correctly', () => {
    // Arrange
    render(<BillsList amountList={[]} category="+" />);
    // Act

    // Assert
    expect(screen.getByTestId('amount')).toHaveTextContent('100');
  });
});
