import { supabaseClient } from "../supabaseClient";
import { fetchUser } from "../constants/types";
import { PostgrestError } from "@supabase/supabase-js";
import { waitFor } from "@testing-library/react";
import matchProfileIdWithUuid from "./matchProfileIdWithUuid";

jest.mock("../supabaseClient");
const mockedSupabaseClient = supabaseClient as jest.Mocked<typeof supabaseClient>;

const mockFetchUser: { data: fetchUser[], error: PostgrestError } = {
  data: [{
    id: 1,
    created_at: "2023-03-17",
    account_name: "testName",
    password: "testPassword",
    uuid: "testUuid",
  }],
  error: null,
};
const fromMock = mockedSupabaseClient.from as any;

describe("matchProfileIdWithUuid", () => {
  beforeEach(() => {
    fromMock.mockClear();
  });

  it("should return matched user data", async () => {
    // Arrange
    fromMock.mockReturnValue({
      select: jest.fn().mockReturnValue({
        eq: jest.fn().mockReturnValue(mockFetchUser),
      }),
    });
    // Act

    // Assert
    await waitFor(async () => {
      return expect(await matchProfileIdWithUuid("testUuid")).toEqual(mockFetchUser);
    });
  });
});