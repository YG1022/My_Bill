import { waitFor } from '@testing-library/react';
import { supabaseClient } from '../supabaseClient';
import { addTransItem } from './addTransItem';

const mockResultData = [{
  data: [{ id: 1, date: '2023-03-17', amount: 100, category: '+', tags: ['tag 1'] }],
  error: null,
}];

jest.mock('../supabaseClient');
const mockedSupabaseClient = supabaseClient as jest.Mocked<typeof supabaseClient>;

describe('add transaction items', () => {
  const fromMock = mockedSupabaseClient.from as any;

  beforeEach(() => {
    fromMock.mockReturnValue({
      insert: jest.fn().mockReturnValue({
        select: jest.fn().mockReturnValue(mockResultData),
      }),
    });
  });

  it('should add a transaction item to supabase', async () => {
    // Arrange

    // Act

    // Assert
    await waitFor(async () => {
      return expect(await addTransItem({ tags: '' })).toEqual(mockResultData);
    });
  });
});
