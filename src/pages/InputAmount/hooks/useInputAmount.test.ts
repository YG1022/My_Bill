import { addBillItem } from '../../../services/addBillItem';
import { useInputAmount } from './useInputAmount';
import { renderHook, act, waitFor } from '@testing-library/react';

jest.mock('../../../services/addBillItem');
const mockedAddBillItem = addBillItem as jest.MockedFunction<typeof addBillItem>;

describe('useInputAmount', () => {
  // const mockedResolvedData = {
  //   count: null,
  //   data: [{ id: 1, amount: 100, date: '2021-01-01', category: 'income', tags: ['Food'] }],
  //   error: null,
  //   status: 200,
  //   statusText: '',
  // };
  const mockedResolvedData = {
    count: null,
    data: null,
    error: 'Sync Error',
    status: 200,
    statusText: '',
  };
  const mockedForm = jest.fn().mockReturnValue({ resetFields: jest.fn() });

  beforeEach(() => {
    mockedAddBillItem.mockClear();
    mockedAddBillItem.mockResolvedValue(mockedResolvedData);
  });

  it('should return error correctly', async () => {
    // Arrange
    const { result } = renderHook(() => useInputAmount(mockedForm));
    // Act
    await act(() => {
      result.current.onFinish({ amount: 100, date: '2021-01-01', category: 'income', tags: ['Food'] });
    });
    // Assert
    await waitFor(() => {
      expect(mockedAddBillItem).toHaveBeenCalledTimes(1);
    });
  });
});