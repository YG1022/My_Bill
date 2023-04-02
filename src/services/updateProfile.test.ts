import { fetchProfile, fetchUser, profile } from "../constants/types";
import { supabaseClient } from "../supabaseClient";
import matchProfileIdWithUuid from "./matchProfileIdWithUuid";
import updateProfile from "./updateProfile";
import { waitFor } from "@testing-library/react";
import { PostgrestError } from "@supabase/supabase-js";

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
const mockProfile: profile = {
  email: "11@11.com",
  realname: "testName",
  gender: "male",
  prefix: "testPrefix",
  phonenumber: "123456789",
  birthday: "2023-03-17",
};
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

describe("updateProfile", () => {
  beforeEach(() => {
    mockedMatchProfileIdWithUuid.mockClear();
  });

  it("should update profile", async () => {
    // Arrange
    mockedMatchProfileIdWithUuid.mockResolvedValue({
      data: mockFetchUser,
      error: null,
    });
    fromMock.mockReturnValue({
      update: jest.fn().mockReturnValue({
        eq: jest.fn().mockReturnValue({
          select: jest.fn().mockReturnValue(mockResultData),
        }),
      }),
    });
    // Act

    // Assert
    await waitFor(async () => {
      return expect(await updateProfile("testUuid", mockProfile)).toEqual(mockResultData);
    });
  });
});
