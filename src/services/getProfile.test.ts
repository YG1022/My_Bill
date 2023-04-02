import { supabaseClient } from "../supabaseClient";
import matchProfileIdWithUuid from "./matchProfileIdWithUuid";
import { fetchProfile, fetchUser } from "../constants/types";
import { PostgrestError } from "@supabase/supabase-js";
import { waitFor } from "@testing-library/react";
import getProfile from "./getProfile";

jest.mock("../supabaseClient");
const mockedSupabaseClient = supabaseClient as jest.Mocked<typeof supabaseClient>;
jest.mock("./matchProfileIdWithUuid", () => jest.fn(), { virtual: true });
const mockedMatchProfileIdWithUuid = matchProfileIdWithUuid as jest.MockedFunction<typeof matchProfileIdWithUuid>;

const mockFetchUser: fetchUser[] = [{
  id: 1,
  created_at: "2023-03-17",
  account_name: "testName",
  password: "testPassword",
  uuid: "testUuid",
}];
const fromMock = mockedSupabaseClient.from as any;
const mockResultData: { data: fetchProfile[], error: PostgrestError } = {
  data: [{
    id: 1,
    created_at: "2023-03-17",
    email: "11@11.com",
    real_name: "testName",
    gender: "male",
    prefix: "testPrefix",
    phone_number: "123456789",
    birthday: "2023-03-17",
  }],
  error: null,
};

describe("getProfile", () => {
  beforeEach(() => {
    mockedMatchProfileIdWithUuid.mockClear();
  });

  it("should get profile", async () => {
    // Arrange
    mockedMatchProfileIdWithUuid.mockResolvedValue({
      data: mockFetchUser,
      error: null,
    });
    fromMock.mockReturnValue({
      select: jest.fn().mockReturnValue({
        eq: jest.fn().mockReturnValue(mockResultData),
      }),
    });
    // Act

    // Assert
    await waitFor(async () => {
      return expect(await getProfile("testUuid")).toEqual(mockResultData);
    });
  });
});
