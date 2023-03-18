import { waitFor } from '@testing-library/react';
import { supabaseClient } from '../supabaseClient';
import { getBillItems } from './getBillItems';

const mockResultData = [{
  data: [{ id: 1, date: '2023-03-17', amount: 100, category: '+', tags: ['tag 1'] }],
  error: null,
}];

jest.mock('../supabaseClient');
const mockedSupabaseClient = supabaseClient as jest.Mocked<typeof supabaseClient>;

describe('getBillItems from supabase', () => {
  const fromMock = mockedSupabaseClient.from as any;

  beforeEach(() => {
    fromMock.mockReturnValue({
      select: jest.fn().mockReturnValue(mockResultData),
    });
  });

  it('should get bill items', async () => {
    // Arrange

    // Act

    // Assert
    await waitFor(async () => {
      return expect(await getBillItems()).toEqual( mockResultData );
    });
  });
});
