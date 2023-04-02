import { supabaseClient } from "../supabaseClient";
import { fetchUser } from "../constants/types";
import createUser from "./createUser";
import { waitFor } from "@testing-library/react";

jest.mock("../supabaseClient");
const mockedSupabaseClient = supabaseClient as jest.Mocked<typeof supabaseClient>;

const fromMock = mockedSupabaseClient.from as any;
const mockFetchUser: fetchUser[] = [{
  id: 1,
  created_at: "2023-03-17",
  account_name: "testName",
  password: "testPassword",
  uuid: "testUuid",
}];

describe("createUser", () => {
  beforeEach(() => {
    fromMock.mockClear();
  });

  it("should create user", async () => {
    // Arrange
    fromMock.mockReturnValue({
      insert: jest.fn().mockReturnValue({
        select: jest.fn().mockReturnValue({ data: mockFetchUser, error: null }),
      }),
    });
    // Act

    // Assert
    await waitFor(async () => {
      return expect(await createUser({
        accountname: "testName",
        password: "testPassword",
        confirmpassword: "testPassword",
      })).toEqual({ data: mockFetchUser, error: null });
    });
  });
});