import { waitFor } from "@testing-library/react";
import { supabaseClient } from "../supabaseClient";
import { getTransItems } from "./getTransItems";

const mockResultData = {
  data: [{ id: 1, date: "2023-03-17", amount: "100", category: "+", tags: ["tag 1"] }],
  error: null,
};
jest.mock("../supabaseClient");
const mockedSupabaseClient = supabaseClient as jest.Mocked<typeof supabaseClient>;

describe("getTransItems from supabase", () => {
  const fromMock = mockedSupabaseClient.from as any;

  it("should get all trans items", async () => {
    // Arrange
    fromMock.mockReturnValue({
      select: jest.fn().mockReturnValue({ eq: jest.fn().mockReturnValue(mockResultData) }),
    });
    // Act

    // Assert
    await waitFor(async () => {
      return expect(await getTransItems()).toEqual(mockResultData);
    });
  });
});
