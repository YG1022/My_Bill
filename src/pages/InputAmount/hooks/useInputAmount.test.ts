import { addBillItem } from '../../../services/addBillItem';
import { useInputAmount } from './useInputAmount';
import { renderHook, act, waitFor } from '@testing-library/react';

jest.mock('../../../services/addBillItem');
const mockedAddBillItem = addBillItem as jest.MockedFunction<typeof addBillItem>;

describe('useInputAmount', () => {
  const mockedResolvedError = {
    count: null,
    data: null,
    error: 'Sync Error is occured!',
    status: 200,
    statusText: '',
  };const mockedResolvedData = {
    count: null,
    data: [{ id: 1, amount: 100, date: '2021-01-01', category: 'income', tags: ['Food'] }],
    error: null,
    status: 200,
    statusText: '',
  };
  const mockedForm = {
    resetFields: jest.fn(),
  };

  beforeEach(() => {
    mockedAddBillItem.mockClear();
  });

  it('should return error correctly', async () => {
    // Arrange
    mockedAddBillItem.mockResolvedValue(mockedResolvedError as any);
    const { result } = renderHook(({ mockedForm }) => useInputAmount(mockedForm), { initialProps: { mockedForm } });
    // Act
    await act(() => {
      result.current.onFinish({ amount: 100, date: '2021-01-01', category: 'income', tags: ['Food'] });
    });
    // Assert
    await waitFor(() => {
      expect(mockedAddBillItem).toHaveBeenCalledTimes(1);
    });
  });

  it('should return data correctly', async () => {
    // Arrange
    mockedAddBillItem.mockResolvedValue(mockedResolvedData as any);
    const { result } = renderHook(({ mockedForm }) => useInputAmount(mockedForm), { initialProps: { mockedForm } });
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