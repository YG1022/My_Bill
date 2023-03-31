import { supabaseClient } from "../supabaseClient";
import repeatabilityCheck from "./repeatabilityCheck";

jest.mock("../supabaseClient");
const mockedSupabaseClient = supabaseClient as jest.Mocked<typeof supabaseClient>;

const { nameCheck, emailCheck } = repeatabilityCheck("test 1", "test 1", "test 1");

describe("repeatabilityCheck", () => {
  const mockProfileCheckData = {
    data: [{
      id: 1,
      created_at: "2000/00/00",
      email: "test 1@111.com",
      phone_number: "111",
      gender: "other",
      prefix: "86",
      real_name: "test 1",
      birthday: "2000/00/00",
    }],
    error: null,
  };

  const fromMock = mockedSupabaseClient.from as any;

  it("nameCheck", function() {
    // Arrange
    const mockNameCheckData = {
      data: [{ id: 1, account_name: "test 1", password: "test 1", uuid: "test uuid" }],
      error: null,
    };

    fromMock.mockReturnValue({
      select: jest.fn().mockReturnValue({
        eq: jest.fn().mockReturnValue(mockNameCheckData),
      }),
    });
    // Act

    // Assert
    expect(nameCheck()).resolves.toEqual(mockNameCheckData);
  });

  it("emailCheck", function() {
    // Arrange
    fromMock.mockReturnValue({
      select: jest.fn().mockReturnValue({
        eq: jest.fn().mockReturnValue(mockProfileCheckData),
      }),
    });
    // Act

    // Assert
    expect(emailCheck()).resolves.toEqual(mockProfileCheckData);
  });
});