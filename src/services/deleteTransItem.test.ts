import { waitFor } from '@testing-library/react';
import { supabaseClient } from '../supabaseClient';
import { deleteTransItem } from './deleteTransItem';

const mockResultData = [{
  data: [{ id: 1, date: '2023-03-17', amount: '100', category: '+', tags: ['tag 1'] }],
  error: null,
}];

jest.mock('../supabaseClient');
const mockedSupabaseClient = supabaseClient as jest.Mocked<typeof supabaseClient>;

describe('delete transaction item', () => {
  const fromMock = mockedSupabaseClient.from as any;

  beforeEach(() => {
    fromMock.mockReturnValue({
      delete: jest.fn().mockReturnValue({
        match: jest.fn().mockReturnValue({
          select: jest.fn().mockReturnValue(mockResultData),
        }),
      }),
    });
  });

  it('should delete selected transaction item from supabase', async () => {
    // Arrange

    // Act

    // Assert
    await waitFor(async () => {
      return expect(await deleteTransItem(1)).toEqual(mockResultData);
    });
  });
});
