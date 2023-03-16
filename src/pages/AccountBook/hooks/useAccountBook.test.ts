import { act, renderHook, waitFor } from '@testing-library/react';
import { getBillItems } from '../../../services/getBillItems';
import { useAccountBook } from './useAccountBook';

jest.mock('../../../services/getBillItems');
const mockedGetBillItems = getBillItems as jest.MockedFunction<typeof getBillItems>;

describe('useAccountBook custom hook', () => {
  const mockedFetchedData = {
    count: null,
    data: [
      { id: 1, amount: 100, date: '2021-01-01', category: 'income', tags: ['Food'] },
      { id: 2, amount: 200, date: '2021-01-02', category: 'expenses', tags: ['Shopping'] },
    ],
    error: null,
    status: 200,
    statusText: '',
  };

  beforeEach(() => {
    mockedGetBillItems.mockClear();

    mockedGetBillItems.mockResolvedValue(mockedFetchedData);
  });

  it('should return amountList', async () => {
    // Arrange
    const { result } = renderHook(() => useAccountBook());
    // Act
    await act(() => {
      result.current.fetchData();
    });
    // Assert
    await waitFor(() => {
      expect(result.current.amountList).toEqual([
        { id: 1, amount: 100, date: '2021-01-01', category: 'income', tags: ['Food'] },
        { id: 2, amount: 200, date: '2021-01-02', category: 'expenses', tags: ['Shopping'] },
      ]);
    });
  });

  it('should return fetchData', async () => {
    // Arrange
    const { result } = renderHook(() => useAccountBook());
    // Act

    // Assert
    await waitFor(() => {
      expect(result.current.fetchData).toBeDefined();
    });
  });
});