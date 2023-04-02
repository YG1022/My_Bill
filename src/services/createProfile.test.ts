import { supabaseClient } from "../supabaseClient";
import { fetchProfile, profile } from "../constants/types";
import { waitFor } from "@testing-library/react";
import createProfile from "./createProfile";

jest.mock("../supabaseClient");
const mockedSupabaseClient = supabaseClient as jest.Mocked<typeof supabaseClient>;

const fromMock = mockedSupabaseClient.from as any;
const mockProfile: profile = {
  email: "11@11.com",
  realname: "testName",
  gender: "male",
  prefix: "testPrefix",
  phonenumber: "123456789",
  birthday: "2023-03-17",
};
const mockFetchProfile: fetchProfile[] = [{
  id: 1,
  created_at: "2023-03-17",
  email: "11@11.com",
  real_name: "testName",
  gender: "male",
  prefix: "testPrefix",
  phone_number: "123456789",
  birthday: "2023-03-17",
}];

describe("createUser", () => {
  beforeEach(() => {
    fromMock.mockClear();
  });

  it("should create profile", async () => {
    // Arrange
    fromMock.mockReturnValue({
      insert: jest.fn().mockReturnValue({
        select: jest.fn().mockReturnValue({ data: mockFetchProfile, error: null }),
      }),
    });
    // Act

    // Assert
    await waitFor(async () => {
      return expect(await createProfile(mockProfile)).toEqual({ data: mockFetchProfile, error: null });
    });
  });
});