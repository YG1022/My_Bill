import { getBillItems } from './getBillItems';
import { supabaseClient } from '../supabaseClient';
import { act } from 'react-dom/test-utils';

jest.mock('../supabaseClient');
const mockedSupabase = supabaseClient as jest.Mocked<typeof supabaseClient>;

describe('getBillItems from supacase', () => {
  const mockedPostgresQueryBuilder = {
    url: new URL('http://localhost:3000'),
    select: jest.fn().mockResolvedValueOnce({
      data: [{ id: 1, name: 'test', amount: 1, date: '2021-01-01' }],
      error: null,
    }),
    headers: {},
    insert: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    upsert: jest.fn(),
  };

  it('should get bill items', async () => {
    // Arrange
    await act(() => {
      mockedSupabase.from.mockReturnValueOnce(mockedPostgresQueryBuilder);
    });
    // Act

    // Assert
    expect(await getBillItems()).not.toBeNull();
  });
});
