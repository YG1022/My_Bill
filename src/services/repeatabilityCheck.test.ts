import { supabaseClient } from "../supabaseClient";
import repeatabilityCheck from "./repeatabilityCheck";

jest.mock("../supabaseClient");
const mockedSupabaseClient = supabaseClient as jest.Mocked<typeof supabaseClient>;

const { nameCheck } = repeatabilityCheck("test 1", "test 1", "test 1");

describe("repeatabilityCheck", () => {
  it("nameCheck", function() {
    // Arrange
    const mockNameCheckData = {
      data: [{ id: 1, account_name: "test 1", password: "test 1", uuid: "test uuid" }],
      error: null,
    };

    const fromMock = mockedSupabaseClient.from as any;
    fromMock.mockReturnValue({
      select: jest.fn().mockReturnValue({
        eq: jest.fn().mockReturnValue(mockNameCheckData),
      }),
    });
    // Act

    // Assert
    expect(nameCheck()).resolves.toEqual(mockNameCheckData);
  });
});