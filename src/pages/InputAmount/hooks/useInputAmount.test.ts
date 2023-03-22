import { addTransItem } from '../../../services/addTransItem';
import { useInputAmount } from './useInputAmount';
import { renderHook, act, waitFor } from '@testing-library/react';

jest.mock('../../../services/addTransItem');
const mockedAddTransItem = addTransItem as jest.MockedFunction<typeof addTransItem>;

describe('useInputAmount', () => {
  const mockedResolvedError = {
    count: null,
    data: null,
    error: { message: 'Sync Error is occurred!', details: 'Sync Error', hint: '', code: '400' },
    status: 200,
    statusText: '',
  };
  const mockedResolvedData = {
    count: null,
    data: [{ id: 1, amount: '100', date: '2021-01-01', category: '+', tags: ['Food'] }],
    error: null,
    status: 200,
    statusText: '',
  };
  const mockedForm = {
    resetFields: jest.fn(),
  };

  beforeEach(() => {
    mockedAddTransItem.mockClear();
  });

  it('should return error correctly', async () => {
    // Arrange
    mockedAddTransItem.mockResolvedValue(mockedResolvedError as any);
    const { result } = renderHook(({ mockedForm }) => useInputAmount(mockedForm, null), { initialProps: { mockedForm } });
    // Act
    await act(() => {
      result.current.onFinish({ amount: '100', date: '2021-01-01', tags: ['Food'] });
    });
    // Assert
    await waitFor(() => {
      expect(mockedAddTransItem).toHaveBeenCalledTimes(1);
    });
  });

  it('should return data correctly', async () => {
    // Arrange
    mockedAddTransItem.mockResolvedValue(mockedResolvedData as any);
    const { result } = renderHook(({ mockedForm }) => useInputAmount(mockedForm, null), { initialProps: { mockedForm } });
    // Act
    await act(() => {
      result.current.onFinish({ amount: '100', date: '2021-01-01', tags: ['Food'] });
    });
    // Assert
    await waitFor(() => {
      expect(mockedAddTransItem).toHaveBeenCalledTimes(1);
    });
  });
});